import api from './axios';

export async function fetchGames(page = 1, limit = 50) {
  const { data } = await api.get(`/games?page=${page}&limit=${limit}`);
  return data;
}

export async function fetchGameBySlug(slug: string) {
  const { data } = await api.get(`/games/${slug}`);
  return data;
}

export async function searchGames(query: string) {
  if (!query) return { success: true, data: [] };
  const { data } = await api.get(`/games/search?q=${encodeURIComponent(query)}`);
  return data;
}

export async function submitContact(contactData: any) {
  const { data } = await api.post('/contact', contactData);
  return data;
}
