import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { MdOutlineLogin } from "react-icons/md";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <div className="xl:max-w-7xl lg:max-w-7xl md:w-screen sm:w-screen mx-auto p-2">
        <header className="w-full flex mx-auto items-center justify-between top-0 shadow-2xl sticky bg-zinc-700 text-white px-5 py-3 m-4 rounded-t-xl  ">
          <Link to="/products" className="font-bold text-2xl ">
            Shop App
          </Link>
          <div className="flex gap-2">
            <Link to="/checkout">
              <div className="text-2xl  w-9 h-9 text-center text-white rounded-lg p-1 relative">
                <PiShoppingCartSimpleBold />
                {!!state.itemsCounter && (
                  <span className="text-sm w-5 h-5 leading-5 bg-white border border-red-600 text-black rounded-full absolute -top-2 -right-2">
                    {state.itemsCounter}
                  </span>
                )}
              </div>
            </Link>
            <div className="text-2xl w-9 h-9 text-center text-white rounded-lg p-1 ">
              <Link to="/login">
              <MdOutlineLogin />
              </Link>
            </div>
          </div>
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
