'use client'


type GuitarType = {
   index: number
   id: string
   brand: string
   name: string
   price: number
}


export default function GuitarItem({ index, brand, name, price}: GuitarType) {
    return (
        <div>
            {index + 1} : {brand} : {name} : {price}
        </div>
    )
 }
 

