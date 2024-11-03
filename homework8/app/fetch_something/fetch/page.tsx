import Image from "next/image";
export default async function Myfetch() {

   const data = await fetch('https://api.github.com/users/witzard');
   const results = await data.json();

   if(!results) return <>...Loading</>

   return (<>
   
   <Image width={200} height={200} src={results.avatar_url} alt="image"/>
         
   </>);
}