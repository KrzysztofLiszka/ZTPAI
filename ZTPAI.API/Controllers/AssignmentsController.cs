using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;

namespace ZTPAI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AssignmentsController : ControllerBase
    {
        private readonly IAssignmentsService _assignmentsService;

        public AssignmentsController(IAssignmentsService assignmentsService)
        {
            _assignmentsService = assignmentsService;
        }

        [HttpGet("GetAllAssignments")]
        public async Task<IEnumerable<Assignment>> GetAllTasksToDo()
        {
            return await _assignmentsService.GetAllTasksToDoAsync();
        }

        [HttpGet("GetAssignment/{id}")]
        public async Task<ActionResult<Assignment>> GetTaskToDo(Guid id)
        {
            var taskToDo = await _assignmentsService.GetTaskToDoByIdAsync(id);

            if (taskToDo == null)
            {
                return NotFound();
            }

            return taskToDo;
        }

        [HttpPost("PostAssignment")]
        public async Task<ActionResult<Assignment>> PostTaskToDo(Assignment taskToDo)
        {
            await _assignmentsService.AddTaskToDoAsync(taskToDo);

            return Ok();
        }

        [HttpPut("PutAssignment")]
        public async Task<IActionResult> PutTaskToDo(Assignment taskToDo)
        {
            await _assignmentsService.UpdateTaskToDoAsync(taskToDo);

            return Ok();
        }

        [HttpDelete("DeleteAssignment/{id}")]
        public async Task<IActionResult> DeleteTaskToDo(Guid id)
        {
            await _assignmentsService.DeleteTaskToDoAsync(id);

            return Ok();
        }
    }
}
