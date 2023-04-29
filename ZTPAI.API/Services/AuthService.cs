using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using ZTPAI.API.DTOs;
using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;
using ZTPAI.API.SqlRepository;

namespace ZTPAI.API.Services
{
    public class AuthService : IAuthService
    {
        private readonly ISqlRepository<User> _authRepository;
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AuthService(ISqlRepository<User> authRepository, IConfiguration configuration, 
            IHttpContextAccessor httpContextAccessor)
        {
            _authRepository = authRepository;
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<User?> AuthenticateUser(LoginDto loginDto)
        {
            var allUsers = await _authRepository.GetAllAsync();
            var authorizedUser = allUsers.FirstOrDefault
                (x => x.Login == loginDto.Login && x.Password == HashPassword(loginDto.Password));

            return authorizedUser;
        }

        public async Task<User?> RegisterUser(User user)
        {
            var allUsers = await _authRepository.GetAllAsync();
            var foundUser = allUsers.FirstOrDefault(x => x.Login == user.Login);
            if (foundUser != null) return null;
            user.Password = HashPassword(user.Password);
            await _authRepository.AddAsync(user);

            return user;
        }

        public string GenerateJtwToken(User user)
        {
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var userIdClaim = new Claim("userId", user.Id.ToString());

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"],
                Expires = DateTime.UtcNow.AddDays(Convert.ToInt32(_configuration["Jwt:TokenExpirationDays"])),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Subject = new ClaimsIdentity(new[] { userIdClaim })
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);  
        }

        public string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));

            return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
        }

        public Guid? GetCurrentUserId()
        {
            var authHeader = _httpContextAccessor.HttpContext.Request.Headers["Authorization"];
            var tokenString = authHeader.FirstOrDefault()?.Split(' ').Last();

            if (tokenString != null)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.ReadJwtToken(tokenString);

                var userIdClaim = token.Claims.FirstOrDefault(c => c.Type == "userId");
                if (userIdClaim != null && Guid.TryParse(userIdClaim.Value, out Guid userId))
                {
                    return userId;
                }
            }

            return null;
        }

    }
}
