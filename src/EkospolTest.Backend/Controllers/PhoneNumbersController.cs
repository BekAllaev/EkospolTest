using EkospolTest.Backend.Data;
using EkospolTest.Backend.Dtos;
using EkospolTest.Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EkospolTest.Backend.Controllers
{
    [ApiController]
    [Route("api/phone-numbers")]
    public class PhoneNumbersController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public PhoneNumbersController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhoneNumberResponse>>> GetAll(CancellationToken cancellationToken)
        {
            var phoneNumbers = await _dbContext.PhoneNumbers
                .AsNoTracking()
                .OrderBy(p => p.Id)
                .Select(p => PhoneNumberResponse.FromEntity(p))
                .ToListAsync(cancellationToken);

            return Ok(phoneNumbers);
        }

        [HttpPost]
        public async Task<ActionResult<PhoneNumberResponse>> Create(
            CreatePhoneNumberRequest request,
            CancellationToken cancellationToken)
        {
            var phoneNumber = new PhoneNumber
            {
                Number = request.Number.Trim(),
                IsPublic = request.IsPublic,
                OwnerId = request.OwnerId
            };

            _dbContext.PhoneNumbers.Add(phoneNumber);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return StatusCode(StatusCodes.Status201Created, PhoneNumberResponse.FromEntity(phoneNumber));
        }
    }
}
