using ZTPAI.API.DTOs;
using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;
using ZTPAI.API.SqlRepository;

namespace ZTPAI.API.Services
{
    public class HoursService : IHoursService
    {
        private readonly ISqlRepository<Hour> _hourRepository;
        private readonly ISqlRepository<Worker> _workerRepository;
        private readonly ISqlRepository<Assignment> _assignmentRepository;

        public HoursService(ISqlRepository<Hour> hourRepository, ISqlRepository<Worker> workerRepository, 
            ISqlRepository<Assignment> assignmentRepository)
        {
            _hourRepository = hourRepository;
            _workerRepository = workerRepository;
            _assignmentRepository = assignmentRepository;
        }

        public async Task AddHourAsync(Hour hour)
        {
            hour.DateAdded = DateTime.Now;
            await _hourRepository.AddAsync(hour);
        }

        public async Task DeleteHourAsync(Guid id)
        {
            await _hourRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<GetAllHoursDto>> GetAllHoursAsync()
        {
            var hours = await _hourRepository.GetAllAsync();
            var returnHours = new List<GetAllHoursDto>();

            foreach(var item in hours)
            {
                var worker = await _workerRepository.GetByIdAsync(item.IdWorker);
                var assignment = await _assignmentRepository.GetByIdAsync(item.IdTask);
                var itemToAdd = new GetAllHoursDto
                {
                    Id = item.Id,
                    IdTask = item.IdTask,
                    IdWorker = item.IdWorker,
                    MinutesTaken = item.MinutesTaken,
                    DateAdded = item.DateAdded,
                    Priority = item.Priority,
                    WorkerName = worker.Name + " " + worker.Surname,
                    TaskName = assignment.Name,
                    UserId = item.UserId,
                };
                returnHours.Add(itemToAdd);
            }

            return returnHours;
        }

        public async Task<Hour> GetHourByIdAsync(Guid id)
        {
            return await _hourRepository.GetByIdAsync(id);
        }

        public async Task UpdateHourAsync(Hour hour)
        {
            await _hourRepository.UpdateAsync(hour);
        }
    }
}
