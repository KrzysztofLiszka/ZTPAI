using System.IdentityModel.Tokens.Jwt;
using ZTPAI.API.DTOs;
using ZTPAI.API.Models;

namespace ZTPAI.API.Services.Interfaces
{
    public interface IAuthService
    {
        string GenerateJtwToken(User user);
        Task<User?> AuthenticateUser(LoginDto loginDto);
        string HashPassword(string password);
        Task<User?> RegisterUser(User user);
        Guid? GetCurrentUserId();
    }
}
