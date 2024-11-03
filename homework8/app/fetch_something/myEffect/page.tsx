'use client'

import { useEffect, useState } from "react";

export default function MyEffect() {
   const [a, setA] = useState("a");
   const [b, setB] = useState("b");


   useEffect( ()=> {
      console.log("inside useEffect")
      return ()=> console.log("Clean up...")
   } , [] )
   
   return (<>
      UseEffect: {a} | {b}
      <br/>
      <button className="px-3 p-1 m-2 border-2" onClick={() => setA("A")}>A</button>
      <button className="px-3 p-1 m-2 border-2" onClick={() => setB("B")}>B</button>
      <button className="px-3 p-1 m-2 border-2" onClick={() => setA("a")}>a</button>
      <button className="px-3 p-1 m-2 border-2" onClick={() => setB("b")}>b</button>
      
   </>);
}