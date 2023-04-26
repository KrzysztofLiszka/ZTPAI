using ZTPAI.API.Models;

namespace ZTPAI.API.Services.Interfaces
{
    public interface ITaskToDoService
    {
        Task<IEnumerable<TaskToDo>> GetAllTasksToDoAsync();
        Task<TaskToDo> GetTaskToDoByIdAsync(Guid id);
        Task AddTaskToDoAsync(TaskToDo taskToDo);
        Task UpdateTaskToDoAsync(TaskToDo taskToDo);
        Task DeleteTaskToDoAsync(Guid id);
    }
}
