import Link from "next/link";
import React from "react";
import Avatar from "../common/Avatar";
import { useRouter } from "next/router";

const Header = () => {
  const activeClasses = "bg-white font-bold rounded text-black";
  const { route } = useRouter();
  const pages = [
    { name: "projects" },
    { name: "about" },
    { name: "blog" },
    { name: "contact" },
  ];
  return (
    <header className="flex px-4 py-4 bg-blue-900 justify-between items-center text-white">
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Avatar />
          <h1 className="text-xl">Kafil</h1>
        </div>
      </Link>
      <nav className="flex space-x-4">
        <ul className="flex flex-row space-x-4 cursor-pointer">
          {pages.map((page) => {
            return (
              <li
                key={page.name}
                className={`p-2 capitalize ${
                  page.name === route.slice(1) ? activeClasses : ""
                }`}
              >
                <Link href={`/${page.name}`}>
                  <a>{page.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <svg
          className="w-8 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Header;
