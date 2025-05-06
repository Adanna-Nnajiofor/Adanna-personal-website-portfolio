"use client";
import Link from "next/link";
import { icons } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1 - Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-white">
              Adanna Portfolio
            </h2>
            <p className="mt-2 text-sm">
              Showcasing my work in architecture and frontend development.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/tech" className="hover:text-blue-500">
                  Frontend Projects
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="hover:text-blue-500">
                  Architectural Designs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Follow Me
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://github.com/Adanna-Nnajiofor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <icons.Github className="w-6 h-6 hover:text-blue-500" />
              </Link>
              <Link
                href="https://twitter.com/AdannaNnajiofor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <icons.Twitter className="w-6 h-6 hover:text-blue-500" />
              </Link>
              <Link
                href="https://linkedin.com/in/AdannaNnajiofor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <icons.Linkedin className="w-6 h-6 hover:text-blue-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 text-center text-sm border-t border-gray-300 dark:border-gray-700 pt-4">
          <p>
            © {new Date().getFullYear()} Adanna Nnajiofor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
