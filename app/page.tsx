"use client"
import { fetchNews } from "./lib/data";
import { useQuery } from 'react-query';

export default function Home() {
  let { data } = useQuery("news", fetchNews)
  data = data && data.articles
  return (
    <>
      <h1>jell</h1>
      {data &&
        data.map((news: any) => {
          return <h1>{news.title}</h1>
        }
        )
      }
    </>
  )
}
