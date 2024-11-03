'use client'
import Breadcrumb from "@/components/breadcrumb";

export default function Product(
   { searchParams, }:
      {
         searchParams: {
            name: string;
            price: number;
            is_new: boolean;
            image_url: string;
         };
      }) {

   return (<>
      <Breadcrumb/>
       
      <div className="mx-auto max-w-5xl px-4 py-5 sm:px-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
         <div className=" rounded-lg">
            <a href="#" className="group relative block overflow-hidden rounded-lg">
               <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
               </button>

               <img
                  src={searchParams.image_url}
                  alt="product"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
               />
            </a>
         </div>

         <div className="rounded-lg">
            <div className="h-full flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
               <dl className="-my-3 divide-y divide-gray-100 text-sm">

                  <div className=" relative border border-gray-100 bg-white py-3 px-6">
                     <p className="text-gray-700 text-2xl"> ฿ {searchParams.price}</p>
                     <h3 className="mt-1 text-lg font-medium text-gray-900">{searchParams.name}</h3>
                  </div>


                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                     <dt className="font-medium text-gray-900">Bio</dt>
                     <dd className="text-gray-700 sm:col-span-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                        doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                        aspernatur neque molestiae labore aliquam soluta architecto?
                     </dd>
                  </div>

                  <form className="relative  mx-3 p-3 flex gap-4">
                     <button
                        className="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                     >
                        Add to Cart
                     </button>

                     <button
                        type="button"
                        className="block w-full rounded bg-[#775b45] px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                     >
                        Buy Now
                     </button>
                  </form>

               </dl>
            </div>
         </div>
      </div>
      </>);
}

export function Breadcrumb_product(){
   return (<>
   <div className="rtl:rotate-180">
      <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
   </div >
   <div className="mt-0.5">
      <a href="#" className="block transition hover:text-gray-700"> Product </a>
   </div >
   </>);
}