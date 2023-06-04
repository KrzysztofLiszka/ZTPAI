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
        private readonly IAuthService _authService;

        public AssignmentsController(IAssignmentsService assignmentsService, IAuthService authService)
        {
            _assignmentsService = assignmentsService;
            _authService = authService;
        }

        [HttpGet("GetAllAssignments")]
        public async Task<IEnumerable<Assignment>> GetAllTasksToDo()
        {
            var userId = _authService.GetCurrentUserId();
            var assignments = await _assignmentsService.GetAllTasksToDoAsync();

            var filteredAssignments = assignments.Where(a => a.UserId == userId);
            return filteredAssignments;
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
            var userId = _authService.GetCurrentUserId();
            taskToDo.UserId = userId;
            await _assignmentsService.AddTaskToDoAsync(taskToDo);

            return Ok();
        }

        [HttpPut("PutAssignment")]
        public async Task<IActionResult> PutTaskToDo(Assignment taskToDo)
        {
            var userId = _authService.GetCurrentUserId();
            taskToDo.UserId = userId;
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
