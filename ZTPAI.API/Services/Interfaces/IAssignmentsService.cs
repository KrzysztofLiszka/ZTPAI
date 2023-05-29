using ZTPAI.API.Models;

namespace ZTPAI.API.Services.Interfaces
{
    public interface IAssignmentsService
    {
        Task<IEnumerable<Assignment>> GetAllTasksToDoAsync();
        Task<Assignment> GetTaskToDoByIdAsync(Guid id);
        Task AddTaskToDoAsync(Assignment taskToDo);
        Task UpdateTaskToDoAsync(Assignment taskToDo);
        Task DeleteTaskToDoAsync(Guid id);
    }
}
