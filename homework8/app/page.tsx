import Link from "next/link";
export default function Page() {
   return (
      <section
         className="relative bg-[url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
         <div
            className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 sm:bg-gradient-to-r"
         ></div>

         <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
         >
            <div className="max-w-xl text-center sm:text-left">
               <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                  Let us find your

                  <strong className="block font-extrabold text-[#bca890]"> Instrument Buddy </strong>
               </h1>

               <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                  numquam ea!
               </p>

               <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Link
                     href="/products"
                     className="block w-full rounded bg-[#775b45] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#bca890] focus:outline-none focus:ring active:bg-[#bca890] sm:w-auto"
                  >
                     Get Started
                  </Link>

                  <Link
                     href="#"
                     className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#775b45] shadow hover:text-[#bca890]] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                  >
                     Learn More
                  </Link>
               </div>
            </div>
         </div>
      </section>);
}