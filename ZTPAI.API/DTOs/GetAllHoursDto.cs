namespace ZTPAI.API.DTOs
{
    public class GetAllHoursDto
    {
        public Guid Id { get; set; }
        public Guid IdTask { get; set; }
        public Guid IdWorker { get; set; }
        public double MinutesTaken { get; set; }
        public DateTime? DateAdded { get; set; }
        public int Priority { get; set; }
        public string? TaskName { get; set; }
        public string? WorkerName { get; set; }
    }
}
