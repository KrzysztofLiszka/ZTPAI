using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;
using ZTPAI.API.SqlRepository;

namespace ZTPAI.API.Services
{
    public class WorkersService : IWorkersService
    {
        private readonly ISqlRepository<Worker> _workerRepository;
        private readonly ISqlRepository<Hour> _hourRepository;

        public WorkersService(ISqlRepository<Worker> workerRepository, ISqlRepository<Hour> hourRepository)
        {
            _workerRepository = workerRepository;
            _hourRepository = hourRepository;
        }

        public async Task<IEnumerable<Worker>> GetAllWorkersAsync()
        {
            return await _workerRepository.GetAllAsync();
        }

        public async Task<Worker> GetWorkerByIdAsync(Guid id)
        {
            return await _workerRepository.GetByIdAsync(id);
        }

        public async Task AddWorkerAsync(Worker worker)
        {
            await _workerRepository.AddAsync(worker);
        }

        public async Task UpdateWorkerAsync(Worker worker)
        {
            await _workerRepository.UpdateAsync(worker);
        }

        public async Task DeleteWorkerAsync(Guid id)
        {
            var hours = await _hourRepository.GetAllAsync();
            var filteredHours = hours.Where(h => h.IdWorker == id);
            foreach (var hour in filteredHours)
            {
                await _hourRepository.DeleteAsync(hour.Id);
            }
            await _workerRepository.DeleteAsync(id);
        }
    }
}
