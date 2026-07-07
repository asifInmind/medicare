export const topNavLinks = [
  {
    id: 1,
    navText: "Dashboard",
    navPath: "/dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    navText: "Schedule",
    navPath: "/schedule",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    id: 3,
    navText: "Task",
    navPath: "/task",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
        />
      </svg>
    ),
  },
  {
    id: 4,
    navText: "Patients",
    navPath: "/patients",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    navText: "Messages",
    navPath: "/messages",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    id: 6,
    navText: "Analytics",
    navPath: "#",
    visibilityNone: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
  },
];

export const bottomNavLinks = [
  {
    id: 1,
    navText: "Settings",
    navPath: "/settings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    navText: "Support",
    navPath: "#",
    visibilityNone: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
];

export const DAYS = [
  { id: "mon", label: "Mon(25)" },
  { id: "tue", label: "Tue(26)" },
  { id: "wed", label: "Wed(27)" },
  { id: "thu", label: "Thurs(28)" },
  { id: "fri", label: "Fri(29)" },
  { id: "sat", label: "Sat(30)" },
];

export const TIME_SLOTS = ["9:00", "10:00", "11:00", "12:00", "13:00"];

export const STATUS_STYLES = {
  Pending: {
    bg: "bg-red-100 border-red-200 text-red-700",
    accent: "bg-[#EB5757]",
    pill: "bg-red-200/50 text-red-700",
    icons: "text-red-400",
  },
  Approved: {
    bg: "bg-emerald-50 border-emerald-200 text-emerald-700",
    accent: "bg-emerald-500",
    pill: "bg-emerald-200/50 text-emerald-700",
    icons: "text-emerald-400",
  },
  Ongoing: {
    bg: "bg-blue-50 border-blue-200 text-blue-700",
    accent: "bg-blue-500",
    pill: "bg-blue-200/50 text-blue-700",
    icons: "text-blue-400",
  },
  Tentative: {
    bg: "bg-amber-50 border-amber-200 text-amber-700",
    accent: "bg-amber-500",
    pill: "bg-amber-200/50 text-amber-700",
    icons: "text-amber-400",
  },
};

export const APPOINTMENTS = [
  {
    day: "mon",
    time: "9:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "wed",
    time: "9:00",
    status: "Approved",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "fri",
    time: "9:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "mon",
    time: "10:00",
    status: "Ongoing",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "tue",
    time: "10:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "wed",
    time: "10:00",
    status: "Approved",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "thu",
    time: "10:00",
    status: "Ongoing",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "fri",
    time: "10:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "sat",
    time: "10:00",
    status: "Tentative",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "tue",
    time: "11:00",
    status: "Approved",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "thu",
    time: "11:00",
    status: "Ongoing",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "sat",
    time: "11:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "mon",
    time: "13:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "sat",
    time: "13:00",
    status: "Tentative",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
];
