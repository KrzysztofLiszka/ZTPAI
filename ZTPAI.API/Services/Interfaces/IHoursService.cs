using ZTPAI.API.Models;

namespace ZTPAI.API.Services.Interfaces
{
    public interface IHoursService
    {
        Task<IEnumerable<Hour>> GetAllHoursAsync();
        Task<Hour> GetHourByIdAsync(Guid id);
        Task AddHourAsync(Hour hour);
        Task UpdateHourAsync(Hour hour);
        Task DeleteHourAsync(Guid id);
    }
}
