'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Myfetch() {

   const [url, setUrl] = useState('');


   useEffect(() => {
      async function getImage(){
         const data = await fetch('https://api.github.com/users/witzard');
         const results = await data.json();
         setUrl(results.avatar_url);
      }
      getImage()
   })

   if (!url) return <>...Loading</>
   return (<>
      <Image width={200} height={200} src={url} alt="image" />
   </>);
}