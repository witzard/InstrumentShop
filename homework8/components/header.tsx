import { Dancing_Script } from 'next/font/google'

const dancing_script = Dancing_Script({
   subsets:['latin'],
   weight:['700'],
   
});

export default function Header() {
   return (
      <header className="bg-white mt-4">
         <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex  h-16 items-center justify-between">
               <div className="flex items-center gap-1">
                  <a className="block text-[#775b45]" href="/">
                     <svg fill="#775b45" height="50" width="50" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" stroke="#775b45"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.064"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M15,8C8.9,8,4,12.9,4,19s4.9,11,11,11s11-4.9,11-11S21.1,8,15,8z M7,19c0-4.4,3.6-8,8-8c1.1,0,2.1,0.2,3,0.6V15h-2 c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v1h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v1h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v3.4c-0.9,0.4-1.9,0.6-3,0.6 C10.6,27,7,23.4,7,19z M20,25.2V12.8c1.8,1.5,3,3.7,3,6.2S21.8,23.8,20,25.2z"></path> <path d="M4.8,27H2.5C1.7,27,1,27.7,1,28.5S1.7,30,2.5,30h5.6C6.8,29.2,5.7,28.2,4.8,27z"></path> <path d="M30,1.7C29.8,1.3,29.5,1,29,1H17c-0.5,0-0.8,0.3-1,0.7c-0.1,0.4,0.1,0.9,0.5,1.1c1.7,0.9,2.7,2.3,3.2,4 c2.6,1,4.8,2.9,6.3,5.2V9c0-2.7,1.2-4.8,3.5-6.1C29.9,2.6,30.1,2.2,30,1.7z"></path> </g> </g></svg>
                  </a>
                  <div className={dancing_script.className}>
                     <a  href="/" className="text-3xl text-[#775b45]">VibeVault</a>
                  </div>
               </div>

               <div className="hidden md:block">
                  <nav aria-label="Global">
                     <ul className="flex items-center gap-6 text-sm">
                        <li>
                           <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
                        </li>

                        <li>
                           <a className="text-gray-500 transition hover:text-gray-500/75" href="/products"> Product </a>
                        </li>

                        <li>
                           <a className="text-gray-500 transition hover:text-gray-500/75" href="/user"> Blog </a>
                        </li>

                        <li>
                           <a className="text-gray-500 transition hover:text-gray-500/75" href="/simple_db"> Database </a>
                        </li>

                       
                     </ul>
                  </nav>
               </div>

               <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                     <a
                        className="rounded-md bg-[#775b45] px-5 py-2.5 text-sm font-medium text-white shadow"
                        href="#"
                     >
                        Login
                     </a>

                     <div className="hidden sm:flex">
                        <a
                           className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#775b45]"
                           href="#"
                        >
                           Register
                        </a>
                     </div>
                  </div>

                  <div className="block md:hidden">
                     <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </header>);
} 