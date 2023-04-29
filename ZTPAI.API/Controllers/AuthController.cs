﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
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
            if(user == null) return Unauthorized("Wrong login or password!");
            var jwtToken = _authService.GenerateJtwToken(user);

            return Ok(jwtToken);
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(User user)
        {
            await _authService.RegisterUser(user);
            return Ok("User registered!");
        }

        [Authorize]
        [HttpGet("myid")]
        public IActionResult GetMyId()
        {
            return Ok(_authService.GetCurrentUserId());
        }

    }
}
