using ZTPAI.API.Models;

namespace ZTPAI.API.Services.Interfaces
{
    public interface IWorkersService
    {
        Task<IEnumerable<Worker>> GetAllWorkersAsync();
        Task<Worker> GetWorkerByIdAsync(Guid id);
        Task AddWorkerAsync(Worker worker);
        Task UpdateWorkerAsync(Worker worker);
        Task DeleteWorkerAsync(Guid id);
    }
}
