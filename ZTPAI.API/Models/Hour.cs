using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZTPAI.API.Models
{
    public class Hour
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public Guid IdTask { get; set; }
        public Guid IdWorker { get; set; }
        public double MinutesTaken { get; set; }
        public DateTime? DateAdded { get; set; }
        public int Priority { get; set; }
    }
}
