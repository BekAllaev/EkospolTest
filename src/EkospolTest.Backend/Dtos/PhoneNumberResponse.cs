using EkospolTest.Backend.Models;

namespace EkospolTest.Backend.Dtos
{
    public class PhoneNumberResponse
    {
        public int Id { get; set; }

        public string Number { get; set; } = string.Empty;

        public bool IsPublic { get; set; }

        public int OwnerId { get; set; }

        public static PhoneNumberResponse FromEntity(PhoneNumber phoneNumber) => new()
        {
            Id = phoneNumber.Id,
            Number = phoneNumber.Number,
            IsPublic = phoneNumber.IsPublic,
            OwnerId = phoneNumber.OwnerId
        };
    }
}
