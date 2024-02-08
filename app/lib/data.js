
import { unstable_noStore as noStore } from 'next/cache';
import { useQuery } from 'react-query';

export async function fetchNews(){
  const {data} = useQuery('news',() => fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=`).then((res)=>res.json()))
    

  console.log(data)
}
