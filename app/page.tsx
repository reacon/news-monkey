"use client"
import { fetchNews } from "./lib/data";
import { useQuery } from 'react-query';

export default function Home() {
  const { data } = useQuery("news", fetchNews)
  console.log(data)
}
