using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;
using ZTPAI.API.SqlRepository;

namespace ZTPAI.API.Services
{
    public class AssignmentsService : IAssignmentsService
    {
        private readonly ISqlRepository<Assignment> _taskToDoRepository;
        private readonly ISqlRepository<Hour> _hourRepository;

        public AssignmentsService(ISqlRepository<Assignment> taskToDoRepository, ISqlRepository<Hour> hourRepository)
        {
            _taskToDoRepository = taskToDoRepository;
            _hourRepository = hourRepository;
        }

        public async Task AddTaskToDoAsync(Assignment taskToDo)
        {
            await _taskToDoRepository.AddAsync(taskToDo);
        }

        public async Task DeleteTaskToDoAsync(Guid id)
        {
            var hours = await _hourRepository.GetAllAsync();
            var filteredHours = hours.Where(h => h.IdTask == id);
            foreach (var hour in filteredHours)
            {
                await _hourRepository.DeleteAsync(hour.Id);
            }
            await _taskToDoRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<Assignment>> GetAllTasksToDoAsync()
        {
            return await _taskToDoRepository.GetAllAsync();
        }

        public async Task<Assignment> GetTaskToDoByIdAsync(Guid id)
        {
            return await _taskToDoRepository.GetByIdAsync(id);
        }

        public async Task UpdateTaskToDoAsync(Assignment hour)
        {
            await _taskToDoRepository.UpdateAsync(hour);
        }
    }
}
