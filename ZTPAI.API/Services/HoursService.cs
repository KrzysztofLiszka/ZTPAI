using ZTPAI.API.Models;
using ZTPAI.API.Services.Interfaces;
using ZTPAI.API.SqlRepository;

namespace ZTPAI.API.Services
{
    public class HoursService : IHoursService
    {
        private readonly ISqlRepository<Hour> _hourRepository;

        public HoursService(ISqlRepository<Hour> hourRepository)
        {
            _hourRepository = hourRepository;
        }

        public async Task AddHourAsync(Hour hour)
        {
            await _hourRepository.AddAsync(hour);
        }

        public async Task DeleteHourAsync(Guid id)
        {
            await _hourRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<Hour>> GetAllHoursAsync()
        {
            return await _hourRepository.GetAllAsync();
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
