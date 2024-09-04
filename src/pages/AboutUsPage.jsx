import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function AboutUsPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-xl font-bold leading-9 mb-3 text-gray-900">
          Welcome to the About Us page
        </h2>
      </div>
      <div>
        <p className="text-center">
          <strong>Hello guys</strong>, my name is Sina Abedi and I have nearly
          two years of experience in front-end programming
        </p>
        <p className="text-center">
          You can contact me through the following ways
        </p>
        <ul className="flex mt-5 border-b-2 pb-2 gap-6 text-center justify-center items-center  ">
          <li>
            <a href="https://github.com/sinaabedii">
              <FaGithub className="h-7 w-7 text-zinc-700 hover:text-black" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/sina-abedii">
              <FaLinkedin className="h-7 w-7 text-zinc-700 hover:text-blue-600" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/iamsina1">
              <AiFillInstagram className="h-8 w-8 text-zinc-700 hover:text-rose-600" />
            </a>
          </li>
          <li>
            <a href="https://t.me/iamsina1">
              <FaTelegram className="h-7 w-7 text-zinc-700 hover:text-blue-800" />
            </a>
          </li>
          <li>
            <a href="mailto:sinaabediofficial@gmail.com">
              <MdEmail className="h-9 w-9 text-zinc-700 hover:text-zinc-400" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUsPage;
