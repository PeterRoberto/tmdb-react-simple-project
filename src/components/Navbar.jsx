import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// icons
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/20/solid'
import { BsCameraReels } from 'react-icons/bs';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  

    const handleSearch = (e) => {
      e.preventDefault();

      if(!query) return;

      navigate(`/search?q=${query}`);
      setQuery('');
    };

  return (
    <header className={`bg-white header-area border-b border-gray-200`}>
      <div className={`md:w-3xl mx-auto pt-5 px-3 lg:w-3xl lg:px-0`}>
        <nav aria-label="Global" className={`mx-auto flex max-w-7xl items-center justify-between pb-6`}>
          <div className="flex">
            <NavLink to="/" className="p-1.5 flex items-center">
              <span className="ml-2 flex items-center lg:ml-2 font-bold text-[20px]">
                <BsCameraReels className="mr-2" />  
                TMDB
              </span>
            </NavLink>
          </div>
          
          <div className="lg:flex lg:gap-x-12 hidden md:flex">
            <form id="search-form" onSubmit={handleSearch}>
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Pesquisar"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query || ''}
                />
              </div>
            </form>
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="cursor-pointer -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>

        <Dialog open={open} onClose={setOpen} className="relative z-9999">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-200/85 transition-opacity duration-500 ease-in-out data-closed:opacity-0 blur-[45px]"
          />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <DialogPanel
                  transition
                  className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                >
                  <TransitionChild>
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <span className="absolute -inset-2.5 cursor-pointer" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6 cursor-pointer text-black" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="relative flex h-full flex-col overflow-y-auto bg-[#141414] py-4 shadow-xl">
                    <div className="">
                      <NavLink to="/" className="p-1.5 flex items-center">
                        <span className="flex items-center lg:ml-2 font-bold text-[20px] text-white">
                          <BsCameraReels className="mr-2" />  
                          TMDB
                        </span>
                      </NavLink>

                      <ul className="box-menu flex flex-col my-[40px]">
                        <NavLink to="/" className= {`text-white block py-1 px-4  border-b-1 border-gray-200 w-full block text-[18px] cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}>
                          Home
                        </NavLink>
                        <NavLink to="/about" className= {`text-white block py-1 px-4  border-b-1 border-gray-200 w-full block text-[18px] cursor-pointer font-bold hover:text-blue-500 transition-colors duration-300 ease-in-out`}>
                          About
                        </NavLink>
                      </ul>                
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </header>
  )
}

export default Navbar