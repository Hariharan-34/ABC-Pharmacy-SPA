import { Component, OnInit } from '@angular/core';
import { Medicine } from '../../models/medicine.model';
import { MedicineService } from '../../services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  medicines: Medicine[] = [];
  newMedicine: Medicine = {
    fullName: '',
    notes: '',
    expiryDate: '',
    quantity: 0,
    price: 0,
    brand: ''
  };
  search = '';

  constructor(private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.loadMedicines();
  }

  loadMedicines() {
    this.medicineService.getMedicines(this.search).subscribe(data => {
      this.medicines = data;
    });
  }

  // Filter medicines by name if search is provided
  searchMedicines() {
    if (this.search.trim()) {
      this.medicineService.getMedicines().subscribe(data => {
        this.medicines = data.filter(medicine => 
          medicine.fullName.toLowerCase().includes(this.search.toLowerCase().trim())
        );
      });
    } else {
      this.loadMedicines();
    }
  }

  addMedicine() {
    this.medicineService.addMedicine(this.newMedicine).subscribe(() => {
      this.newMedicine = { fullName: '', notes: '', expiryDate: '', quantity: 0, price: 0, brand: '' };
      this.loadMedicines();
    });
  }

  getRowClass(med: Medicine): string {
    const currentDate = new Date();
    const expiryDate = new Date(med.expiryDate);
    const timeDiff = expiryDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    // Priority: expired takes precedence over low-stock
    if (daysLeft < 30 && daysLeft >= 0) {
      return 'expired';
    }
    if (daysLeft < 0) {
      return 'expired'; // Already expired
    }
    if (med.quantity < 10) {
      return 'low-stock';
    }
    return '';
  }

  // Helper method to check if medicine is expired
  isExpired(med: Medicine): boolean {
    const currentDate = new Date();
    const expiryDate = new Date(med.expiryDate);
    const timeDiff = expiryDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft < 30;
  }

  // Helper method to check if medicine is low stock
  isLowStock(med: Medicine): boolean {
    return med.quantity < 10;
  }
}
