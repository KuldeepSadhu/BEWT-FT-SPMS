# Student Project Management System (SPMS)

A professional, role-based college project management system built with **React**, **React Router v6**, and **Tailwind CSS**. This system is designed to streamline the coordination between students, faculty mentors, and administrators.

---

## 🚀 Key Features

### 🔐 Multi-Role Access Control
*   **Admin**: System configuration, global project oversight, and user management.
*   **Faculty**: Mentorship tools, group tracking, and evaluation management.
*   **Student**: Project progress tracking, submission portals, and team collaboration.

### 🏗️ Advanced Architecture
*   **Layout System**: Uses nested routing with specific layouts (`AdminLayout`, `FacultyLayout`, `StudentLayout`) to maintain a clean and consistent UI.
*   **Protected Routes**: A centralized authentication guard checks user roles before permitting access to sensitive areas.
*   **Simulated Auth**: A local-storage based authentication simulation—perfect for rapid development and testing without a backend.
*   **Responsive UI**: Built with a "mobile-first" approach using Tailwind CSS.

---

## 🛠️ Tech Stack
*   **Frontend**: React 19
*   **Routing**: React Router 7 (v6 API)
*   **Styling**: Tailwind CSS 4
*   **Icons**: React Icons (Hi symbols)
*   **Bundler**: Vite

---

## 📂 Project Structure

```text
src/
├── auth/           # Login and Auth simulation
├── components/     # Shared UI (Navbar, Footer, ProtectedRoute)
├── layouts/        # Role-specific UI wrappers
├── pages/          # Feature pages grouped by role
│   ├── Admin/      # Analytics and Project Lists
│   ├── Faculty/    # Group records and Mentorship tools
│   └── Student/    # Project workspace and Submissions
├── App.jsx         # Centralized Routing Logic
└── main.jsx        # App Entry & Global Styling
```

---

## 🏁 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Usage (Dev Mode)
*   Navigate to the homepage.
*   Select a role (Admin, Faculty, or Student) to simulate a login.
*   The system will automatically redirect you to the correct dashboard and assign the appropriate permissions.

---

## 📝 Roadmap & Expansion
This project is currently a **Frontend-First** architecture. Future steps include:
- [ ] Integrating a Real Backend (Node.js/Express or Python).
- [ ] Database setup (PostgreSQL/MongoDB).
- [ ] JWT-based Authentication.
- [ ] Real-time notifications for meeting schedules.
- [ ] Automated grading and report generation.

---

Built with ❤️ for better project management.
