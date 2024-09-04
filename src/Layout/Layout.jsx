import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <div className="xl:max-w-7xl lg:max-w-7xl md:w-screen sm:w-screen mx-auto p-2">
        <header className="w-full flex mx-auto items-center justify-between top-0 shadow-2xl sticky bg-zinc-700 text-white px-5 py-3 m-4 rounded-t-xl  ">
          <Link to="/products" className="font-bold text-2xl ">
            Shop App
          </Link>
          <div className="flex gap-1 -mr-20">
            <Link to="/checkout">
              <div className="text-2xl w-9 h-9 text-center text-white rounded-lg p-1 relative">
                <PiShoppingCartSimpleBold />
                {!!state.itemsCounter && (
                  <span className="text-sm w-5 h-5 leading-5 bg-white border border-red-600 text-black rounded-full absolute -top-2 -right-2">
                    {state.itemsCounter}
                  </span>
                )}
              </div>
            </Link>
            <div className="text-2xl w-9 h-9 text-center text-white rounded-lg p-1">
              <Link to="/login">
                <MdOutlineLogin />
              </Link>
            </div>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-10 justify-center gap-x-1.5 rounded-md bg-white px-0 py-1  text-xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <IoMdMore />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Account settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    License
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
        </header>
        {children}
        <footer className="w-full flex mt-10 text-zinc-700 px-5 py-3 ">
          <div className="w-full grid items-center mb-6 border-b border-zinc-600">
            <div className="xl:flex lg:flex md:grid sm:grid justify-between items-center pb-9">
              <span className="w-1/2">
                <h1 className="font-bold text-2xl mb-3">Shop App</h1>
                <p className="text-gray-600 text-xl">
                  The store buys various products with free shipping and
                  delivery as soon as possible.
                </p>
              </span>
              <span className="w-1/2">
                <ul className="flex gap-16 text-center items-center justify-end ">
                  <li>
                    <a href="https://github.com/sinaabedii">
                      <FaGithub className="h-7 w-7" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/sina-abedii">
                      <FaLinkedin className="h-7 w-7" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/iamsina1">
                      <FaInstagram className="h-7 w-7" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/iamsina1">
                      <FaTelegram className="h-7 w-7" />
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </footer>
        <p className="justify-center items-center text-center">2023</p>
      </div>
    </>
  );
}

export default Layout;
