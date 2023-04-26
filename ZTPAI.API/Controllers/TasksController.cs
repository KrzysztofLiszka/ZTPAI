using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;

namespace ZTPAI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly ITaskToDoService _tasksToDoService;

        public TasksController(ITaskToDoService tasksToDoService)
        {
            _tasksToDoService = tasksToDoService;
        }

        [HttpGet("GetAllTasksToDo")]
        public async Task<IEnumerable<TaskToDo>> GetAllTasksToDo()
        {
            return await _tasksToDoService.GetAllTasksToDoAsync();
        }

        [HttpGet("GetTaskToDo/{id}")]
        public async Task<ActionResult<TaskToDo>> GetTaskToDo(Guid id)
        {
            var taskToDo = await _tasksToDoService.GetTaskToDoByIdAsync(id);

            if (taskToDo == null)
            {
                return NotFound();
            }

            return taskToDo;
        }

        [HttpPost("PostTaskToDo")]
        public async Task<ActionResult<Worker>> PostTaskToDo(TaskToDo taskToDo)
        {
            await _tasksToDoService.AddTaskToDoAsync(taskToDo);

            return Ok("Added new task");
        }

        [HttpPut("PutTaskToDo")]
        public async Task<IActionResult> PutTaskToDo(TaskToDo taskToDo)
        {
            await _tasksToDoService.UpdateTaskToDoAsync(taskToDo);

            return Ok("Updated task");
        }

        [HttpDelete("DeleteTaskToDo/{id}")]
        public async Task<IActionResult> DeleteTaskToDo(Guid id)
        {
            await _tasksToDoService.DeleteTaskToDoAsync(id);

            return Ok("Deleted task");
        }
    }
}
