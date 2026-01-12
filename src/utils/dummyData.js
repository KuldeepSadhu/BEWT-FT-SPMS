export const dummyStudents = [
  { id: 1, name: "Kuldeep Sadhu", rollNo: "CS2021001", email: "kuldeep@example.com", department: "Computer Science", year: "Final Year", status: "Active" },
  { id: 2, name: "Sarah Smith", rollNo: "IT2021005", email: "sarah@example.com", department: "Information Technology", year: "Final Year", status: "Active" },
  { id: 3, name: "Mike Ross", rollNo: "CS2021012", email: "mike@example.com", department: "Computer Science", year: "Third Year", status: "Active" },
  { id: 4, name: "Rachel Zane", rollNo: "IT2021018", email: "rachel@example.com", department: "Information Technology", year: "Final Year", status: "Active" },
  { id: 5, name: "Harvey Specter", rollNo: "CS2021025", email: "harvey@example.com", department: "Computer Science", year: "Final Year", status: "Inactive" },
];

export const dummyFaculty = [
  { id: 1, name: "Prof. Rajesh Sharma", designation: "HOD", department: "Computer Science", email: "rajesh@college.edu", expertise: "AI/ML" },
  { id: 2, name: "Dr. Anjali Verma", designation: "Professor", department: "Information Technology", email: "anjali@college.edu", expertise: "Cloud Computing" },
  { id: 3, name: "Prof. Amit Kumar", designation: "Assistant Professor", department: "Computer Science", email: "amit@college.edu", expertise: "Blockchain" },
];

export const dummyGroups = [
  { id: "G-2024-001", project: "Smart Attendance System", students: ["Kuldeep Sadhu", "Harvey Specter"], guide: "Prof. Rajesh Sharma", status: "Approved", progress: 75 },
  { id: "G-2024-002", project: "AI Resume Parser", students: ["Sarah Smith", "Rachel Zane"], guide: "Dr. Anjali Verma", status: "Approved", progress: 40 },
  { id: "G-2024-003", project: "Blockchain Voting", students: ["Mike Ross"], guide: "Prof. Amit Kumar", status: "Pending", progress: 0 },
];

export const dummyProjectTypes = [
  { id: 1, type: "Minor Project", semester: "6th Sem", credits: 2, description: "Small scale project for third year students." },
  { id: 2, type: "Major Project", semester: "8th Sem", credits: 8, description: "Final year capstone project." },
  { id: 3, type: "Internship Project", semester: "8th Sem", credits: 6, description: "Industrial training project." },
];

export const dummyAcademicYears = [
  { id: 1, year: "2025-2026", startDate: "2025-07-01", endDate: "2026-06-30", isCurrent: true, status: "Active" },
  { id: 2, year: "2024-2025", startDate: "2024-07-01", endDate: "2025-06-30", isCurrent: false, status: "Closed" },
];

export const dummyStaff = [
  { id: 1, name: "Admin User", role: "Super Admin", email: "admin@college.edu", lastLogin: "2025-10-12 10:30 AM" },
  { id: 2, name: "Coordinator", role: "Project Coordinator", email: "coord@college.edu", lastLogin: "2025-10-11 02:15 PM" },
];

export const dummyMeetings = [
    { id: 1, date: "2025-10-25", time: "10:00 AM", title: "Project Inception", type: "Review", status: "Completed"},
    { id: 2, date: "2025-11-15", time: "02:00 PM", title: "Phase 1 Update", type: "Progress Check", status: "Scheduled"},
    { id: 3, date: "2025-12-05", time: "11:30 AM", title: "Design Review", type: "Review", status: "Upcoming"},
];

export const dummySubmissions = [
    { id: 1, title: "Project Proposal", date: "2025-08-15", student: "Kuldeep Sadhu", status: "Approved", remarks: "Good scope." },
    { id: 2, title: "SRS Document", date: "2025-09-10", student: "Sarah Smith", status: "Pending Review", remarks: "-" },
    { id: 3, title: "Design Document", date: "2025-10-01", student: "Kuldeep Sadhu", status: "Rejected", remarks: "Needs more diagrams." },
];
