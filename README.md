# MediCare Dashboard

A modern, responsive healthcare/clinic management dashboard built with **Next.js**. MediCare Dashboard helps clinics manage patients, appointments, and daily schedules from a single, clean interface.

## ✨ Features

- **Patient Management**
  - Searchable, sortable patients table
  - Smart status dropdown (opens up or down depending on available space) with outside-click-to-close behavior
  - Add Patient form with validation
- **Appointments**
  - Appointment modal for creating and viewing appointment details
  - Schedule timeline view for daily/weekly planning
- **Responsive Design**
  - Fully responsive layout across mobile, tablet, and desktop breakpoints
  - Sticky sidebar navigation
  - Collapsible hamburger menu on smaller screens
- **Modern UI/UX**
  - Clean, accessible component design
  - Smooth interactions and polished visual details

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** JavaScript / TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Animations:** Framer Motion
- **Deployment:** Vercel

## 📁 Project Structure

```
medicare-dashboard/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── patients/
│   │   ├── page.js
│   │   └── components/
│   │       ├── PatientsTable.jsx
│   │       ├── StatusDropdown.jsx
│   │       └── AddPatientForm.jsx
│   ├── appointments/
│   │   ├── page.js
│   │   └── components/
│   │       ├── AppointmentModal.jsx
│   │       └── ScheduleTimeline.jsx
│   └── components/
│       ├── Sidebar.jsx
│       ├── Header.jsx
│       └── Hamburger.jsx
├── public/
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

> Adjust the structure above to match your actual folder layout.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/asifinmind/medicare.git
cd medicare

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your_database_connection_string
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm run start
```

## 📱 Responsive Design

The dashboard is built mobile-first with careful attention to breakpoints:

| Breakpoint  | Behavior                                                                        |
| ----------- | ------------------------------------------------------------------------------- |
| `sm` / `md` | Sidebar collapses into a hamburger menu, patient table adapts to smaller widths |
| `lg` and up | Full sidebar visible, patients table shows all columns                          |

## 🧩 Key Components

### Patients Table

Displays patient records with a status dropdown for each row. The dropdown intelligently opens upward or downward based on its position in the viewport, and closes automatically when clicking outside of it.

### Appointment Modal

A reusable modal for scheduling and viewing appointment details, triggered from the schedule timeline or patients table.

### Schedule Timeline

A visual timeline component for viewing appointments across a day or week.

## 🧪 Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run linter               |

## 📬 Contact

For questions or support, please open an issue in the repository.
