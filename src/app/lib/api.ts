const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function getTopServices() {
  const res = await fetch(`${API_URL}/services/top`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch top services');
  return res.json();
}

export async function getAllServices() {
  const res = await fetch(`${API_URL}/services`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch services');
  return res.json();
}

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function createAppointment(data: {
  clientId: number;
  serviceId: number;
  appointmentAt: string;
  note?: string;
  token: string;
}) {
  const res = await fetch(`${API_URL}/appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
    body: JSON.stringify({
      clientId: data.clientId,
      serviceId: data.serviceId,
      appointmentAt: data.appointmentAt,
      note: data.note,
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to create appointment');
  }

  return res.json();
}