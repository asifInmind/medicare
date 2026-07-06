const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// patients related apis collections
// =========================================================================starts here
export async function getPatients() {
  const response = await fetch(`${NEXT_PUBLIC_API_BASE_URL}/patients`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

export async function fetchWithFilters(endpoint, filters = {}) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, value);
    }
  });
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch data from ${endpoint}`);

  return response.json();
}

export async function getPatientsBySearch(query) {
  if (!query) return [];

  const url = `${NEXT_PUBLIC_API_BASE_URL}/patients?search=${encodeURIComponent(query)}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Search failed");

  return response.json();
}

export async function deletePatientById(id) {
  const url = `${NEXT_PUBLIC_API_BASE_URL}/patients/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to delete the record");

  return response.json();
}

// =========================================================================ends here

// apis for get task
export async function getTask() {
  const response = await fetch(`${NEXT_PUBLIC_API_BASE_URL}/task`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

// api for get schedule
export async function getAllSchedule() {
  const response = await fetch(`${NEXT_PUBLIC_API_BASE_URL}/schedule`);
  if (!response.ok) throw new Error("Network response was not good");
  return response.json();
}
