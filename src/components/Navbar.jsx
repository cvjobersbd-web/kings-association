import React, { useEffect, useState } from 'react';

const Logo = () => (
  <img
    src="https://i.ibb.co.com/0yCMpYg8/1.jpg"
    alt="Kings Association"
    className="h-[68px] w-auto object-contain sm:h-[78px] lg:h-20"
  />
);

const MenuIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6l12 12M18 6L6 18"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="h-3 w-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
);

/* ================= NAV LINKS ================= */

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '#about',
  },
  {
    name: 'Services',
    href: '#our-services',
  },
  {
    name: 'Page',
    href: '#',
  },
  {
    name: 'Blog',
    href: '#blog',
  },
  {
    name: 'Employees',
    href: '#employees',
  },
  {
    name: 'Contact Us',
    href: '#contact',
  },
  {
    name: 'System',
    href: '#',
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkCls =
    'text-[15px] text-neutral-500 transition-colors duration-200 hover:text-neutral-900';

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="relative z-50 bg-white font-['Poppins',sans-serif]">
        <div className="mx-auto flex h-[90px] max-w-[1200px] items-center justify-between px-4 sm:h-[100px] sm:px-6 lg:h-[110px] lg:px-4">

          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center">
            <Logo />
          </a>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-7">

            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={
                  index === 0
                    ? 'text-[15px] font-medium text-neutral-900'
                    : linkCls
                }
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* ================= DESKTOP CTA ================= */}
          <a
            href="#start"
            className="hidden items-center gap-2 rounded-[5px] bg-gradient-to-b from-[#FBD94A] to-[#F6CE0A] px-5 py-3 text-[14px] font-medium text-black shadow-sm transition hover:brightness-95 lg:inline-flex"
          >
            Get Started
            <ArrowIcon />
          </a>

          {/* ================= MOBILE HAMBURGER ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-[8px] text-neutral-900 transition hover:bg-neutral-100 lg:hidden"
          >
            <MenuIcon />
          </button>

        </div>
      </header>

      {/* ================= MOBILE BACKDROP ================= */}
      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 z-[80]
          bg-black/30
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          lg:hidden
          ${
            menuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      />

      {/* ================= MOBILE SIDE MENU ================= */}
      <aside
        className={`
          fixed right-0 top-0 z-[90]
          h-[100dvh]
          w-1/2
          bg-white
          shadow-[-15px_0_40px_rgba(0,0,0,0.12)]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          lg:hidden
          ${
            menuOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }
        `}
      >
        <div className="flex h-full flex-col">

          {/* Mobile Header */}
          <div className="flex h-[90px] items-center justify-between border-b border-neutral-100 px-4 sm:h-[100px] sm:px-6">

            <span className="text-[12px] font-medium tracking-[0.22em] text-neutral-500">
              MENU
            </span>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 transition hover:bg-[#F6CE0A]"
            >
              <CloseIcon />
            </button>

          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">

            <ul>
              {navLinks.map((link, index) => (
                <li
                  key={link.name}
                  className="border-b border-neutral-100"
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`
                      flex items-center justify-between
                      py-[17px]
                      text-[14px]
                      font-medium
                      transition-all
                      duration-200
                      hover:pl-2
                      hover:text-[#C9A400]
                      sm:text-[15px]
                      ${
                        index === 0
                          ? 'text-black'
                          : 'text-neutral-600'
                      }
                    `}
                  >
                    {link.name}
                    <ArrowIcon />
                  </a>
                </li>
              ))}
            </ul>

            {/* ================= MOBILE CTA ================= */}
            <a
              href="#start"
              onClick={closeMenu}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-[6px] bg-gradient-to-b from-[#FBD94A] to-[#F6CE0A] px-3 py-3.5 text-[13px] font-semibold text-black shadow-sm transition hover:brightness-95 sm:text-[14px]"
            >
              Get Started
              <ArrowIcon />
            </a>

          </nav>

          {/* Bottom Text */}
          <div className="border-t border-neutral-100 px-4 py-5 sm:px-6">
            <p className="text-[10px] leading-5 text-neutral-400 sm:text-[11px]">
              Kings Association
              <br />
              Technology • Business • Trading
            </p>
          </div>

        </div>
      </aside>
    </>
  );
};

export default Navbar;