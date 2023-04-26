using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;
using ZTPAI.API.SqlRepository;

namespace ZTPAI.API.Services
{
    public class TaskToDoService : ITaskToDoService
    {
        private readonly ISqlRepository<TaskToDo> _taskToDoRepository;

        public TaskToDoService(ISqlRepository<TaskToDo> taskToDoRepository)
        {
            _taskToDoRepository = taskToDoRepository;
        }

        public async Task AddTaskToDoAsync(TaskToDo taskToDo)
        {
            await _taskToDoRepository.AddAsync(taskToDo);
        }

        public async Task DeleteTaskToDoAsync(Guid id)
        {
            await _taskToDoRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<TaskToDo>> GetAllTasksToDoAsync()
        {
            return await _taskToDoRepository.GetAllAsync();
        }

        public async Task<TaskToDo> GetTaskToDoByIdAsync(Guid id)
        {
            return await _taskToDoRepository.GetByIdAsync(id);
        }

        public async Task UpdateTaskToDoAsync(TaskToDo hour)
        {
            await _taskToDoRepository.UpdateAsync(hour);
        }
    }
}
