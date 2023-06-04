using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ZTPAI.API.DTOs;
using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;

namespace ZTPAI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login(LoginDto loginDto)
        {
            var user = await _authService.AuthenticateUser(loginDto);
            if (user == null) return Unauthorized("Wrong login or password!");
            var jwtToken = _authService.GenerateJtwToken(user);

            return Ok(new { token = jwtToken });
        }


        [HttpPost("Register")]
        public async Task<ActionResult> Register(User user)
        {
            await _authService.RegisterUser(user);
            return Ok(new {message = "User registered"});
        }

        [Authorize]
        [HttpGet("myid")]
        public IActionResult GetMyId()
        {
            return Ok(_authService.GetCurrentUserId());
        }

    }
}
