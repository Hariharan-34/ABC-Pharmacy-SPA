using System.Text.Json;
using ABCPharmacyAPI.Models;

namespace ABCPharmacyAPI.Data
{
    public class MedicineRepository
    {
        private readonly string _filePath = "Data/medicines.json";

        public List<Medicine> GetAll()
        {
            if (!File.Exists(_filePath))
                return new List<Medicine>();
            var json = File.ReadAllText(_filePath);
            return JsonSerializer.Deserialize<List<Medicine>>(json) ?? new List<Medicine>();
        }

        public void SaveAll(List<Medicine> medicines)
        {
            var json = JsonSerializer.Serialize(medicines, new JsonSerializerOptions { WriteIndented = true });
            File.WriteAllText(_filePath, json);
        }

        public void Add(Medicine medicine)
        {
            var medicines = GetAll();
            medicine.Id = medicines.Count > 0 ? medicines.Max(m => m.Id) + 1 : 1;
            medicines.Add(medicine);
            SaveAll(medicines);
        }
    }
}
