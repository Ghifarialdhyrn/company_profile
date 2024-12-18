import Image from "next/image";
import instagram from "../../public/footerIG.png";
import discord from "../../public/footerDiscord.png";
import github from "../../public/footergit.png";
import linkedin from "../../public/footerLinked.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">
            Ghifar's Tech Company
          </h2>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition duration-300"
            >
              <Image src={github} alt="GitHub" width={28} height={28} />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition duration-300"
            >
              <Image src={discord} alt="Discord" width={28} height={28} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition duration-300"
            >
              <Image src={instagram} alt="Instagram" width={28} height={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition duration-300"
            >
              <Image src={linkedin} alt="LinkedIn" width={28} height={28} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Footer Bottom Section */}
        <div className="text-center">
          <p className="text-gray-400 mb-4 text-sm">
            &copy; {new Date().getFullYear()} Ghifar's Tech Company. All rights
            reserved.
          </p>
          <div className="flex justify-center space-x-4 text-gray-400 text-sm">
            <a
              href="/privacy-policy"
              className="hover:text-gray-300 transition duration-300"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/terms-of-service"
              className="hover:text-gray-300 transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
