import React, { useEffect, useState } from 'react'
import { PlusIcon, SunIcon, MoonIcon } from "lucide-react"
import { Link } from "react-router"

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const theme = isDark ? "coffee" : "garden";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-primary font-serif tracking-tighter'>
            ThinkBoa<span className="breathing-r"> r </span>d
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="btn btn-ghost btn-circle"
            >
              {isDark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
            </button>
            <Link to="/create" className="btn btn-primary">
              <PlusIcon className="size-5"/>
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar