
import { unstable_noStore as noStore } from 'next/cache';
import { useQuery } from 'react-query';

export async function fetchNews(){
  const {data} = useQuery('news',() => fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=076789e4a20b445a8ea74bb75685dc33`).then((res)=>res.json()))
    

  console.log(data)
}
