using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;

namespace ZTPAI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class WorkersController : ControllerBase
    {
        private readonly IWorkersService _workersService;
        private readonly IAuthService _authService;

        public WorkersController(IWorkersService workersService, IAuthService authService)
        {
            _workersService = workersService;
            _authService = authService;
        }

        [HttpGet("GetAllWorkers")]
        public async Task<IEnumerable<Worker>> GetAllWorkers()
        {
            var userId = _authService.GetCurrentUserId();
            var workers = await _workersService.GetAllWorkersAsync();

            var filteredWorkers = workers.Where(w => w.UserId == userId);
            return filteredWorkers;
        }

        [HttpGet("GetWorker/{id}")]
        public async Task<ActionResult<Worker>> GetWorker(Guid id)
        {
            var worker = await _workersService.GetWorkerByIdAsync(id);

            if (worker == null)
            {
                return NotFound();
            }

            return worker;
        }

        [HttpPost("PostWorker")]
        public async Task<ActionResult<Worker>> PostWorker(Worker worker)
        {
            var userId = _authService.GetCurrentUserId();
            worker.UserId = userId;
            await _workersService.AddWorkerAsync(worker);

            return Ok();
        }

        [HttpPut("PutWorker")]
        public async Task<IActionResult> PutWorker(Worker worker)
        {
            var userId = _authService.GetCurrentUserId();
            worker.UserId = userId;
            await _workersService.UpdateWorkerAsync(worker);

            return Ok();
        }

        [HttpDelete("DeleteWorker/{id}")]
        public async Task<IActionResult> DeleteWorker(Guid id)
        {
            await _workersService.DeleteWorkerAsync(id);

            return Ok();
        }
    }
}
