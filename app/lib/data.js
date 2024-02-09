import { unstable_noStore as noStore } from 'next/cache';
import { useQuery } from 'react-query';

export async function fetchNews() {
  const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=`)
  return res.json()
}
