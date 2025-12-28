

import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 cursor-pointer">
              <span className="text-blue-500 text-2xl font-bold">~</span>
              <h2 className="text-white text-xl font-semibold hover:text-blue-400 transition">
                Your Company
              </h2>
            </div>

            <p className="text-sm max-w-sm leading-relaxed">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-lg">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube].map(
                (Icon, index) => (
                  <Icon
                    key={index}
                    className="cursor-pointer hover:text-white hover:scale-110 transition-transform"
                  />
                )
              )}
            </div>
          </div>

          {/* Footer Links */}
          {[
            {
              title: "Solutions",
              links: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"],
            },
            {
              title: "Support",
              links: ["Submit ticket", "Documentation", "Guides"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Jobs", "Press"],
            },
            {
              title: "Legal",
              links: ["Terms of service", "Privacy policy", "License"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white hover:translate-x-1 transition-all"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-center text-gray-500">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;