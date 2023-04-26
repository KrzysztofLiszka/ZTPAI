using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;

namespace ZTPAI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoursController : ControllerBase
    {
        private readonly IHoursService _hoursService;

        public HoursController(IHoursService hoursService)
        {
            _hoursService = hoursService;
        }

        [HttpGet("GetAllHours")]
        public async Task<IEnumerable<Hour>> GetAllHours()
        {
            return await _hoursService.GetAllHoursAsync();
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
        public async Task<ActionResult<Worker>> PostHour(Hour hour)
        {
            await _hoursService.AddHourAsync(hour);

            return Ok("Added new hour");
        }

        [HttpPut("PutHour")]
        public async Task<IActionResult> PutHour(Hour hour)
        {
            await _hoursService.UpdateHourAsync(hour);

            return Ok("Updated hour");
        }

        [HttpDelete("DeleteHour/{id}")]
        public async Task<IActionResult> DeleteHour(Guid id)
        {
            await _hoursService.DeleteHourAsync(id);

            return Ok("Deleted hour");
        }
    }
}
