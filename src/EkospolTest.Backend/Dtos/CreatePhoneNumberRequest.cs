using System.ComponentModel.DataAnnotations;

namespace EkospolTest.Backend.Dtos
{
    public class CreatePhoneNumberRequest
    {
        [Required]
        [MaxLength(32)]
        [RegularExpression(@"^\+?[0-9 ()-]{3,31}$", ErrorMessage = "Invalid phone number format.")]
        public string Number { get; set; } = string.Empty;

        public bool IsPublic { get; set; }

        public int OwnerId { get; set; }
    }
}
