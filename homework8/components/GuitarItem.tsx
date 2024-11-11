'use client'

import Link from "next/link"


type GuitarModel = {
   index: number
   id: string //id must be string
   brand: string
   name: string
   price: number
   deleteModel: (id: string) => void
//    updateModel: (id: string) => void
}


export default function GuitarItem({ index,id, brand, name, price, deleteModel}: GuitarModel) {
    return (
        <div key={id} className="inline-flex align-middle">
            <div className="my-auto">
                {index + 1} : {brand} : {name} : {price}
            </div>
            
            <button
               className=" m-1 pl-4"
               onClick={()=> deleteModel(id)}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#775b45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 12V17" stroke="#775b45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" stroke="#775b45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#775b45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#775b45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </button> 
               
            <Link
               className="m-1"
               href={{
                pathname: '/simple_db/edit',
                query: {id, brand, name, price},             
                }}>

                <svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#775b45" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.8 12.963L2 18l4.8-.63L18.11 6.58a2.612 2.612 0 00-3.601-3.785L3.8 12.963z"></path> </g></svg>
            </Link> 

        </div>
    )
 }
 

