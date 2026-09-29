import React from 'react';

/* ================= LOGO ================= */
const Logo = () => (
  <img
    src="https://i.ibb.co.com/0yCMpYg8/1.jpg"
    alt="Kings Association"
    className="h-[82px] w-auto object-contain sm:h-[95px]"
  />
);

/* ================= ICONS ================= */

const PinIcon = () => (
  <svg
    className="h-6 w-6 shrink-0 text-[#F6CE0A] sm:h-7 sm:w-7"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const MailIcon = () => (
  <svg
    className="h-6 w-6 shrink-0 text-[#F6CE0A] sm:h-7 sm:w-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinejoin="round"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="h-6 w-6 shrink-0 text-[#F6CE0A] sm:h-7 sm:w-7"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2z" />
  </svg>
);

/* ================= LINKS ================= */

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#our-services' },
  { name: 'Page', href: '#' },
  { name: 'Blog', href: '#blog' },
  { name: 'Employees', href: '#employees' },
  { name: 'Contact Us', href: '#contact' },
  { name: 'System', href: '#' },
];

const Footer = () => {
  const linkCls =
    'text-[14px] sm:text-[15px] text-neutral-600 transition-colors duration-200 hover:text-[#C9A400]';

  const headCls =
    'text-[13px] sm:text-[14px] font-medium uppercase tracking-[0.24em] sm:tracking-[0.28em] text-neutral-900';

  return (
    <footer
      id="contact"
      className="border-t border-neutral-200 bg-white font-['Poppins',sans-serif]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Poppins:wght@400;500;600&display=swap');
      `}</style>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-4">

        {/* ================= TOP AREA ================= */}
        <div className="grid gap-10 py-10 sm:py-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">

          {/* BRAND */}
          <div className="text-center lg:text-left">

            <a
              href="/"
              className="inline-flex items-center justify-center lg:justify-start"
            >
              <Logo />
            </a>

            <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-[1.9] text-neutral-600 sm:text-[15px] lg:mx-0 lg:leading-[2]">
              Kings Association is a growing business ecosystem bringing
              together technology, online business, trading and innovative
              projects under one vision.
            </p>

            <p className="mt-7 text-[13px] font-medium leading-6 text-neutral-700 sm:mt-9 sm:text-[14px]">
              Technology • Business • Trading • Innovation
            </p>

          </div>

          {/* QUICK LINKS */}
          <div className="text-center lg:text-left">

            <h6 className={headCls}>
              Quick Links
            </h6>

            <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 sm:mt-7">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={linkCls}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-neutral-200" />

        {/* ================= GET IN TOUCH ================= */}
        <div className="py-8 sm:py-10">

          <h6 className={`${headCls} text-center lg:text-left`}>
            Get In Touch
          </h6>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

            {/* ADDRESS */}
            <div className="flex items-start gap-3 rounded-[14px] bg-neutral-50 p-4 sm:gap-4 lg:bg-transparent lg:p-0">
              <PinIcon />

              <span className="min-w-0 break-words text-[14px] leading-6 text-neutral-600 sm:text-[15px]">
                Your Office Address
              </span>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3 rounded-[14px] bg-neutral-50 p-4 sm:gap-4 lg:bg-transparent lg:p-0">
              <MailIcon />

              <a
                href="mailto:your@email.com"
                className="min-w-0 break-all text-[14px] leading-6 text-neutral-600 transition hover:text-[#C9A400] sm:text-[15px]"
              >
                your@email.com
              </a>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3 rounded-[14px] bg-neutral-50 p-4 sm:col-span-2 sm:gap-4 lg:col-span-1 lg:bg-transparent lg:p-0">
              <PhoneIcon />

              <a
                href="tel:+8800000000000"
                className="min-w-0 break-words text-[14px] leading-6 text-neutral-600 transition hover:text-[#C9A400] sm:text-[15px]"
              >
                +880 0000-000000
              </a>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-neutral-200" />

        {/* ================= COPYRIGHT ================= */}
        <div className="flex flex-col items-center gap-4 py-6 text-center text-[12px] leading-6 text-neutral-500 sm:text-[13px] lg:flex-row lg:justify-between lg:text-left">

          <p>
            © {new Date().getFullYear()} Kings Association. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-end">

            <a
              href="#"
              className="transition hover:text-[#C9A400]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-[#C9A400]"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;