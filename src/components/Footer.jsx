import GitHubIcon from "./icons/GitHub";
import Linkedin from "./icons/Linkedin";

function Footer() {
  return (
    <footer style={{backgroundColor: '#15202E'}} className="mt-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col gap-5 justify-center items-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="https://www.linkedin.com/in/antonioestrada02/" className="hover:underline">Roberto Antonio Navarro Estrada</a>
        </span>
        
        <div className="flex flex-row gap-5">
          <a href="https://github.com/Antxnszn" target="_blank" rel="noopener noreferrer">
            <GitHubIcon/>
          </a>
          <a href="https://www.linkedin.com/in/antonioestrada02/" target="_blank" rel="noopener noreferrer">
            <Linkedin/>
          </a>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
