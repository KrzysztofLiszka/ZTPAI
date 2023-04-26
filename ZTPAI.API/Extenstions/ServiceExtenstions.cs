using Microsoft.EntityFrameworkCore;
using ZTPAI.API.Data;
using ZTPAI.API.Services;
using ZTPAI.API.Services.Interfaces;
using ZTPAI.API.SqlRepository;

namespace ZTPAI.API.Extenstions
{
    public static class ServiceExtenstions
    {
        public static void AddCustomServices(this IServiceCollection services, string connectionString)
        {
            services.AddScoped(typeof(ISqlRepository<>), typeof(SqlRepository<>));
            services.AddTransient<IWorkersService, WorkersService>();
            services.AddTransient<IHoursService, HoursService>();
            services.AddTransient<ITaskToDoService, TaskToDoService>();

            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlServer(connectionString);
            });
        }
    }
}
