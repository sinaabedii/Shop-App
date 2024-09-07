import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MdOutlineLogin, MdSupportAgent } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoMdMore } from "react-icons/io";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <div className="xl:max-w-7xl lg:max-w-7xl md:w-screen sm:w-screen mx-auto ">
        <header className="w-full z-10 border-inherit flex backdrop-blur-xl sticky mx-auto items-center justify-between top-0 shadow-2xl  text-zinc-800 px-5 py-3   ">
          <Link to="/products" className="font-bold text-2xl ">
            Shop App
          </Link>
          <div className="flex gap-1 -mr-36">
            <Link to="/checkout">
              <div className="text-2xl w-9 h-9 text-center text-zinc-800 rounded-lg p-1 relative">
                <PiShoppingCartSimpleBold />
                {!!state.itemsCounter && (
                  <span className="text-sm w-5 h-5 bg-white border font-bold text-black rounded-full absolute -top-2 -right-1">
                    {state.itemsCounter}
                  </span>
                )}
              </div>
            </Link>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-8 justify-center rounded-md bg-zinc-100 py-1 text-xl font-semibold text-gray-900 hover:bg-zinc-200">
                <IoMdMore />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div>
                <MenuItem>
                  <Link
                    to="/login"
                    className="flex items-center gap-2 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-md text-gray-700  rounded-b-md">
                      <MdOutlineLogin className="w-5 h-5" />
                      Login
                    </button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/about-us"
                    className="flex items-center gap-2 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    <button className="flex items-center gap-2 w-full px-4 py-2 text-left text-md text-gray-700 rounded-b-xs">
                      <MdSupportAgent className="w-5 h-5" />
                      Contact Us
                    </button>
                  </Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </header>
        {children}
        <footer className="w-full mt-10 text-zinc-700 px-5 py-3 ">
          <p className="justify-center items-center text-center">2023</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
