using Microsoft.EntityFrameworkCore;
using ZTPAI.API.Data;
using ZTPAI.API.Models;
using ZTPAI.API.Services;
using ZTPAI.API.Services.Interfaces;
using ZTPAI.API.SqlRepository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddScoped(typeof(ISqlRepository<>), typeof(SqlRepository<>));
builder.Services.AddTransient<IWorkersService, WorkersService>();
builder.Services.AddTransient<IHoursService, HoursService>();
builder.Services.AddTransient<ITaskToDoService, TaskToDoService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
