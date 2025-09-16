const API_URL = process.env.REACT_APP_API_URL;

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
}
