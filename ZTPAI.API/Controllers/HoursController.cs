using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ZTPAI.API.DTOs;
using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;

namespace ZTPAI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class HoursController : ControllerBase
    {
        private readonly IHoursService _hoursService;
        private readonly IAuthService _authService;

        public HoursController(IHoursService hoursService, IAuthService authService)
        {
            _hoursService = hoursService;
            _authService = authService;
        }

        [HttpGet("GetAllHours")]
        public async Task<IEnumerable<GetAllHoursDto>> GetAllHours()
        {
            var userId = _authService.GetCurrentUserId();
            var hours = await _hoursService.GetAllHoursAsync();

            var filteredHours = hours.Where(h => h.UserId == userId);
            return filteredHours;
        }

        [HttpGet("GetHour/{id}")]
        public async Task<ActionResult<Hour>> GetHour(Guid id)
        {
            var hour = await _hoursService.GetHourByIdAsync(id);

            if (hour == null)
            {
                return NotFound();
            }

            return hour;
        }

        [HttpPost("PostHour")]
        public async Task<IActionResult> PostHour(Hour hour)
        {
            var userId = _authService.GetCurrentUserId();
            hour.UserId = userId;
            await _hoursService.AddHourAsync(hour);

            return Ok();
        }

        [HttpPut("PutHour")]
        public async Task<IActionResult> PutHour(Hour hour)
        {
            var userId = _authService.GetCurrentUserId();
            hour.UserId = userId;
            await _hoursService.UpdateHourAsync(hour);

            return Ok();
        }

        [HttpDelete("DeleteHour/{id}")]
        public async Task<IActionResult> DeleteHour(Guid id)
        {
            await _hoursService.DeleteHourAsync(id);

            return Ok();
        }
    }
}
