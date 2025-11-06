using Microsoft.AspNetCore.Mvc;
using ABCPharmacyAPI.Data;
using ABCPharmacyAPI.Models;

namespace ABCPharmacyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicinesController : ControllerBase
    {
        private readonly MedicineRepository _repo = new();

        [HttpGet]
        public IActionResult GetAll(string? search = null)
        {
            var medicines = _repo.GetAll();

            if (!string.IsNullOrEmpty(search))
                medicines = medicines.Where(m =>
                    m.FullName.Contains(search, StringComparison.OrdinalIgnoreCase)
                ).ToList();

            return Ok(medicines);
        }

        [HttpPost]
        public IActionResult AddMedicine([FromBody] Medicine medicine)
        {
            if (medicine == null) return BadRequest();
            _repo.Add(medicine);
            return Ok(medicine);
        }
    }
}
