import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20">
      <nav className="flex justify-center h-[100px] content-center flex-wrap bg-transparent">
        <ul className="flex space-x-4">
          <li className="flex">
            <a href="/" className="text-white">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
