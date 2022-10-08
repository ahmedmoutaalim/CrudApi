using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DCandidatsController : ControllerBase
    {
        private readonly DonationDbContext _context;

        public DCandidatsController(DonationDbContext context)
        {
            _context = context;
        }

        // GET: api/DCandidats
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DCandidat>>> GetDCandidats()
        {
            return await _context.DCandidats.ToListAsync();
            
        }

        // GET: api/DCandidats/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DCandidat>> GetDCandidat(int id)
        {
            var dCandidat = await _context.DCandidats.FindAsync(id);

            if (dCandidat == null)
            {
                return NotFound();
            }

            return dCandidat;
        }

        // PUT: api/DCandidats/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDCandidat(int id, DCandidat dCandidat)
        {
            dCandidat.id = id;

            _context.Entry(dCandidat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DCandidatExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DCandidats
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<DCandidat>> PostDCandidat(DCandidat dCandidat)
        {
            _context.DCandidats.Add(dCandidat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDCandidat", new { id = dCandidat.id }, dCandidat);
        }

        // DELETE: api/DCandidats/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DCandidat>> DeleteDCandidat(int id)
        {
            var dCandidat = await _context.DCandidats.FindAsync(id);
            if (dCandidat == null)
            {
                return NotFound();
            }

            _context.DCandidats.Remove(dCandidat);
            await _context.SaveChangesAsync();

            return dCandidat;
        }

        private bool DCandidatExists(int id)
        {
            return _context.DCandidats.Any(e => e.id == id);
        }
    }
}
