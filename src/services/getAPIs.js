const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getPatients() {
  const response = await fetch(`${NEXT_PUBLIC_API_BASE_URL}/patients`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

export async function getFilteredPatients(filters = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      params.append(key, value);
    }
  });
  const url = `${NEXT_PUBLIC_API_BASE_URL}/patients?${params.toString()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch filtered data");

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
