using Microsoft.EntityFrameworkCore;
using ZTPAI.API.Models;

namespace ZTPAI.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<Hour> Hours { get; set; } = null!;
        public DbSet<TaskToDo> Tasks { get; set; } = null!;
        public DbSet<Worker> Workers { get; set; } = null!;
    }
}
