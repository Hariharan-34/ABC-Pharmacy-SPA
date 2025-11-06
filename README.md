# 💊 ABC Pharmacy SPA

**ABC Pharmacy Single Page Application** built with **Angular** and **ASP.NET Core Web API** to manage medicines and sales records.

---

## 🚀 Features
- View, add, and search medicines.
- JSON file–based backend storage.
- Color-coded alerts:
  - 🔴 Red: Expiry in less than 30 days
  - 🟡 Yellow: Quantity less than 10
- Angular + .NET Core integrated via REST API.
- CORS configured for local development.

---

## 🧩 Tech Stack
- **Frontend:** Angular 17+
- **Backend:** ASP.NET Core 6+ Web API
- **Storage:** JSON file on server
- **Language:** TypeScript, C#

---

## ⚙️ How to Run

### 🖥 Backend (API)
```bash
cd ABCPharmacyAPI
dotnet run
```

### 🌐 Frontend (Angular Client)

This Angular client was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## 📁 Project Structure
- **ABCPharmacyAPI/** - ASP.NET Core Web API backend
- **src/** - Angular frontend application
  - **app/components/medicine/** - Medicine management components
  - **app/services/** - Angular services for API communication
  - **app/models/** - TypeScript models and interfaces
