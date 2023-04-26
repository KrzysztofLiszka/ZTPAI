using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;

namespace ZTPAI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkersController : ControllerBase
    {
        private readonly IWorkersService _workersService;

        public WorkersController(IWorkersService workersService)
        {
            _workersService = workersService;
        }

        [HttpGet("GetAllWorkers")]
        public async Task<IEnumerable<Worker>> GetAllWorkers()
        {
            return await _workersService.GetAllWorkersAsync();
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
            await _workersService.AddWorkerAsync(worker);

            return Ok("Added new worker");
        }

        [HttpPut("PutWorker")]
        public async Task<IActionResult> PutWorker(Worker worker)
        {
            await _workersService.UpdateWorkerAsync(worker);

            return Ok("Updated worker");
        }

        [HttpDelete("DeleteWorker/{id}")]
        public async Task<IActionResult> DeleteWorker(Guid id)
        {
            await _workersService.DeleteWorkerAsync(id);

            return Ok("Deleted worker");
        }
    }
}
