import React from 'react';

const ROBOT_BIG =
  'https://i.ibb.co.com/ZRwjJq6n/envato-labs-ai-991a74ea-1ece-465b-838a-9771835c236e.png';

const ROBOT_SMALL =
  'https://i.ibb.co.com/N6ZJ8dfR/envato-labs-ai-4addf6fc-32bf-43cb-b851-156361a22a83-compressed.jpg';

const Home = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white font-['Poppins',sans-serif]">
        <style>{`
          @keyframes robotSlideUp {
            from { transform: translateY(140px); opacity: 0; }
            to   { transform: translateY(0);     opacity: 1; }
          }

          .robot-slide {
            animation: robotSlideUp 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
            -webkit-mask-image: linear-gradient(to bottom, #000 78%, transparent 100%);
            mask-image: linear-gradient(to bottom, #000 78%, transparent 100%);
          }

          @media (prefers-reduced-motion: reduce) {
            .robot-slide { animation: none; }
          }
        `}</style>

        <div className="relative mx-auto min-h-[520px] max-w-[1200px] px-4 lg:h-[720px] lg:min-h-0">

          {/* Giant Headline */}
          <h1 className="relative z-10 select-none pt-6 text-center font-['Orbitron'] text-[11vw] font-black leading-none text-black sm:text-[9vw] lg:absolute lg:left-0 lg:top-[58px] lg:pt-0 lg:text-left lg:text-[103px]">
            KINGS ASSOCIATION
          </h1>

          {/* Robot */}
          <img
            src={ROBOT_BIG}
            alt=""
            aria-hidden="true"
            className="robot-slide pointer-events-none relative z-20 mx-auto mt-[-40px] block w-[78%] max-w-[460px] lg:absolute lg:bottom-0 lg:left-[52px] lg:mx-0 lg:mt-0 lg:w-[540px] lg:max-w-none"
          />

          {/* Left Labels */}
          <ul className="relative z-30 mt-6 space-y-2 text-center text-[13px] font-medium tracking-[0.28em] text-neutral-900 lg:absolute lg:left-[10px] lg:top-[275px] lg:mt-0 lg:text-left">
            <li>TECHNOLOGY</li>
            <li>BUSINESS</li>
            <li>TRADING</li>
          </ul>

          {/* Tagline + Connector Line */}
          <div className="relative z-30 mt-6 text-center lg:absolute lg:left-[605px] lg:top-[262px] lg:mt-0 lg:text-left">
            <p className="text-[13px] font-medium leading-[29px] tracking-[0.28em] text-neutral-900">
              BUILDING DIGITAL
              <br />
              BUSINESS ECOSYSTEM
            </p>

            <svg
              className="absolute left-[-115px] top-[58px] hidden lg:block"
              width="240"
              height="40"
              viewBox="0 0 240 40"
              fill="none"
              aria-hidden="true"
            >
              <path d="M0 2 H82 L105 34 H235" stroke="#C9CDD2" strokeWidth="1" />
            </svg>
          </div>

          {/* Description + CTA */}
          <div className="relative z-30 mt-6 text-center lg:absolute lg:left-[800px] lg:top-[335px] lg:mt-0 lg:w-[400px] lg:text-left">
            <p className="text-[14.5px] leading-[29px] text-neutral-600">
              Kings Association brings together technology, online business,
              trading, and innovative projects under one growing ecosystem.
            </p>

            {/* ✅ CTA — #F6CE0A */}
            <a
              href="#projects"
              className="mt-7 inline-flex items-center gap-3 rounded-[4px] bg-gradient-to-b from-[#FBD94A] to-[#F6CE0A] px-6 py-[14px] text-[15px] font-medium text-black shadow-sm transition hover:brightness-105"
            >
              Explore Projects

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
            </a>
          </div>

          {/* Stats Card */}
          <div className="relative z-30 mx-auto mt-10 flex w-full max-w-[490px] overflow-hidden rounded-lg border border-neutral-200 bg-white lg:absolute lg:bottom-[52px] lg:left-[706px] lg:mx-0 lg:mt-0 lg:h-[138px] lg:w-[490px] lg:max-w-none">

            <div className="flex flex-1 items-center gap-10 px-[42px] py-5">

              <div>
                <p className="text-[14px] text-neutral-600">Active Projects</p>
                {/* ✅ 10+ — #F6CE0A */}
                <p className="mt-2 font-['Orbitron'] text-[40px] font-bold leading-none text-[#F6CE0A]">
                  10+
                </p>
              </div>

              <div>
                <p className="text-[14px] text-neutral-600">Team Members</p>
                {/* ✅ 25+ — #F6CE0A */}
                <p className="mt-2 font-['Orbitron'] text-[40px] font-bold leading-none text-[#F6CE0A]">
                  25+
                </p>
              </div>

            </div>

            <img
              src={ROBOT_SMALL}
              alt=""
              aria-hidden="true"
              className="hidden h-full w-[170px] rounded-r-lg object-cover sm:block"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section
        id="about"
        className="bg-white px-4 py-20 font-['Poppins',sans-serif] lg:py-28"
      >
        <div className="mx-auto max-w-[1200px]">

          {/* Top heading area */}
          <div className="grid gap-10 lg:grid-cols-[140px_1fr_380px] lg:items-start">
            <div>
              <p className="text-[14px] font-medium tracking-[0.30em] text-black">
                ABOUT US
              </p>
            </div>

            <div>
              <h2 className="font-['Orbitron'] text-[38px] font-bold leading-[1.28] text-black sm:text-[48px] lg:text-[58px]">
                Your Trusted Partner
                <br />
                in Digital Business
              </h2>
            </div>

            <div className="lg:pt-4">
              <p className="text-[15px] leading-[2] text-neutral-600">
                Kings Association connects technology, online business, trading,
                and innovative projects under one growing business ecosystem.
              </p>
            </div>
          </div>

          {/* Bottom area */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.55fr_1fr] lg:items-end">

            {/* Left column */}
            <div>
              <div className="flex gap-6">
                <span className="text-[15px] text-neutral-500">02</span>

                <p className="max-w-[540px] text-[15px] leading-[2.3] text-neutral-600">
                  We focus on building practical digital solutions, online ventures,
                  trading platforms, and business projects that create long-term
                  opportunities and sustainable growth.
                </p>
              </div>

              {/* Statistics card */}
              <div className="mt-14 rounded-[22px] border border-neutral-200 p-8 lg:p-10">
                <h3 className="text-[15px] font-semibold tracking-wide text-black">
                  OUR FOCUS
                </h3>

                <div className="mt-8 space-y-8">

                  {/* Technology */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[13px] text-neutral-500">
                        Technology &amp; IT
                      </span>
                      <span className="text-[13px] font-medium text-black">90%</span>
                    </div>

                    {/* ✅ Progress bar — #F6CE0A */}
                    <div
                      className="h-[10px] w-full rounded-full bg-neutral-100"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="Technology and IT focus"
                    >
                      <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-[#FBD94A] to-[#F6CE0A]" />
                    </div>
                  </div>

                  {/* Online Business */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[13px] text-neutral-500">
                        Online Business
                      </span>
                      <span className="text-[13px] font-medium text-black">75%</span>
                    </div>

                    {/* ✅ Progress bar — #F6CE0A */}
                    <div
                      className="h-[10px] w-full rounded-full bg-neutral-100"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="Online business focus"
                    >
                      <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-[#FBD94A] to-[#F6CE0A]" />
                    </div>
                  </div>

                  {/* Trading */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[13px] text-neutral-500">
                        Trading &amp; Projects
                      </span>
                      <span className="text-[13px] font-medium text-black">82%</span>
                    </div>

                    {/* ✅ Progress bar — #F6CE0A */}
                    <div
                      className="h-[10px] w-full rounded-full bg-neutral-100"
                      role="progressbar"
                      aria-valuenow={82}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="Trading and projects focus"
                    >
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#FBD94A] to-[#F6CE0A]" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Middle stats */}
            <div className="flex flex-col gap-14 lg:pb-5">

              <div>
                <p className="text-[13px] font-medium leading-8 tracking-[0.28em] text-black">
                  DIGITAL
                  <br />
                  ECOSYSTEM
                </p>

                <div className="mt-12">
                  <p className="text-[14px] text-neutral-600">Active Projects</p>

                  {/* ✅ 10+ — #F6CE0A */}
                  <p className="mt-3 font-['Orbitron'] text-[54px] font-bold leading-none text-[#F6CE0A]">
                    10+
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[14px] text-neutral-600">Business Areas</p>

                {/* ✅ 4+ — #F6CE0A */}
                <p className="mt-3 font-['Orbitron'] text-[54px] font-bold leading-none text-[#F6CE0A]">
                  4+
                </p>
              </div>

            </div>

            {/* Right image */}
            <div className="overflow-hidden rounded-[24px] bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
                alt="Kings Association team and digital business"
                className="h-[430px] w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

{/* ================= HOW WE WORK ================= */}
<section
  id="services"
  className="bg-[#FCFAF7] px-4 pt-10 pb-20 font-['Poppins',sans-serif] lg:pt-12 lg:pb-24"
>
  <div className="mx-auto max-w-[1200px]">

    {/* Small Label */}
    <p className="text-[13px] font-medium tracking-[0.30em] text-black">
      HOW WE WORK
    </p>

    {/* Top Heading */}
    <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.7fr] lg:items-start">

      <h2 className="font-['Orbitron'] text-[38px] font-bold leading-[1.35] text-black sm:text-[48px] lg:text-[54px]">
        Turning Ideas Into
        <br />
        Digital Opportunities
      </h2>

      <p className="max-w-[420px] text-[14px] leading-[1.9] text-neutral-600 lg:pt-8">
        We combine technology, business strategy, online ventures and trading
        solutions to build practical projects designed for sustainable growth.
      </p>

    </div>

    {/* Main Grid */}
    <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.65fr]">

      {/* LEFT SIDE */}
      <div>

        {/* Large Image */}
        <div className="overflow-hidden rounded-[18px] bg-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85"
            alt="Kings Association digital business team"
            className="h-[250px] w-full object-cover sm:h-[300px]"
          />
        </div>

        {/* Bottom left area */}
        <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_1fr]">

          {/* Services */}
          <div className="space-y-10">

            {/* Technology */}
            <div className="flex gap-4">

              <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[10px] bg-[#F6CE0A]">
                <svg
                  className="h-7 w-7 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="5" y="5" width="14" height="14" rx="2" />
                  <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
                  <rect x="9" y="9" width="6" height="6" rx="1" />
                </svg>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-black">
                  TECHNOLOGY
                </h3>

                <p className="mt-3 text-[13px] leading-[1.9] text-neutral-600">
                  Building practical digital solutions and modern platforms
                  for businesses and growing ventures.
                </p>
              </div>
            </div>

            {/* Online Business */}
            <div className="flex gap-4">

              <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[10px] bg-[#F6CE0A]">
                <svg
                  className="h-7 w-7 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9M12 3c-3 3-4 6-4 9s1 6 4 9" />
                </svg>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-black">
                  ONLINE BUSINESS
                </h3>

                <p className="mt-3 text-[13px] leading-[1.9] text-neutral-600">
                  Developing online business models and digital opportunities
                  that connect ideas with real markets.
                </p>
              </div>
            </div>

          </div>

          {/* Process Card */}
          <div className="rounded-[18px] border border-neutral-200 bg-white p-8">

            <div className="flex items-center justify-between">
              <span className="font-['Orbitron'] text-[38px] font-bold text-[#F6CE0A]">
                01
              </span>

              <span className="font-['Orbitron'] text-[38px] font-bold text-[#F6CE0A]">
                02
              </span>
            </div>

            <h3 className="mt-8 text-[15px] font-semibold text-black">
              FROM IDEA TO EXECUTION
            </h3>

            <p className="mt-4 text-[13px] leading-[1.9] text-neutral-600">
              We identify opportunities, plan the right strategy and transform
              ideas into practical digital and business projects.
            </p>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-3 rounded-[5px] bg-[#F6CE0A] px-5 py-3 text-[13px] font-medium text-black transition hover:brightness-95"
            >
              Explore Projects

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
            </a>

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>

        {/* Business & Trading */}
        <div className="lg:pt-6">

          <h3 className="text-[16px] font-semibold text-black">
            BUSINESS & TRADING
          </h3>

          <p className="mt-5 text-[13px] leading-[2] text-neutral-600">
            We develop and manage business and trading projects by combining
            market opportunities, digital systems and structured operations.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-3 rounded-[5px] bg-[#F6CE0A] px-5 py-3 text-[13px] font-medium text-black transition hover:brightness-95"
          >
            Learn More

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
          </a>

        </div>

        {/* Right Image */}
        <div className="mt-14 overflow-hidden rounded-[18px] bg-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
            alt="Kings Association business project"
            className="h-[290px] w-full object-cover"
          />
        </div>

      </div>

    </div>
  </div>
</section>
{/* ================= OUR SERVICES ================= */}
<section
  id="our-services"
  className="bg-white px-4 pt-6 pb-20 font-['Poppins',sans-serif] lg:pt-8 lg:pb-24"
>
  <div className="mx-auto max-w-[1200px]">

    {/* Small Label */}
    <p className="text-center text-[13px] font-medium tracking-[0.30em] text-black">
      OUR SERVICES
    </p>

    {/* Main Heading */}
    <h2 className="mx-auto mt-8 max-w-[850px] text-center font-['Orbitron'] text-[38px] font-bold leading-[1.35] text-black sm:text-[48px] lg:text-[54px]">
      Smart Digital Solutions for
      <br />
      Modern Business Growth
    </h2>

    {/* Service Grid */}
    <div className="mt-14 grid gap-8 lg:grid-cols-3">

      {/* Image Card 1 */}
      <div className="overflow-hidden rounded-[18px] bg-neutral-100">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=85"
          alt="Kings Association technology solutions"
          className="h-[310px] w-full object-cover"
        />
      </div>

      {/* IT Solutions */}
      <div className="flex min-h-[310px] flex-col items-center justify-center rounded-[18px] border border-neutral-200 bg-white px-8 py-10 text-center">

        <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[10px] bg-[#F6CE0A]">
          <svg
            className="h-7 w-7 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12h8M12 8v8" />
          </svg>
        </div>

        <h3 className="mt-7 text-[16px] font-semibold text-black">
          IT SOLUTIONS
        </h3>

        <p className="mt-5 max-w-[280px] text-[13px] leading-[2] text-neutral-600">
          We provide practical technology solutions designed to improve
          business operations, digital presence and overall efficiency.
        </p>

        <a
          href="#contact"
          className="mt-8 text-[13px] font-medium text-[#E9B900] transition hover:text-black"
        >
          LEARN MORE
        </a>
      </div>

      {/* Online Business */}
      <div className="flex min-h-[310px] flex-col items-center justify-center rounded-[18px] border border-neutral-200 bg-white px-8 py-10 text-center">

        <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[10px] bg-[#F6CE0A]">
          <svg
            className="h-7 w-7 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9M12 3c-3 3-4 6-4 9s1 6 4 9" />
          </svg>
        </div>

        <h3 className="mt-7 text-[16px] font-semibold text-black">
          ONLINE BUSINESS
        </h3>

        <p className="mt-5 max-w-[280px] text-[13px] leading-[2] text-neutral-600">
          We develop online business models and digital platforms that connect
          products, services and opportunities with wider markets.
        </p>

        <a
          href="#contact"
          className="mt-8 text-[13px] font-medium text-[#E9B900] transition hover:text-black"
        >
          LEARN MORE
        </a>
      </div>

      {/* Trading Solutions */}
      <div className="flex min-h-[310px] flex-col items-center justify-center rounded-[18px] border border-neutral-200 bg-white px-8 py-10 text-center">

        <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[10px] bg-[#F6CE0A]">
          <svg
            className="h-7 w-7 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M4 17l5-5 4 4 7-8" />
            <path d="M14 8h6v6" />
          </svg>
        </div>

        <h3 className="mt-7 text-[16px] font-semibold text-black">
          TRADING SOLUTIONS
        </h3>

        <p className="mt-5 max-w-[280px] text-[13px] leading-[2] text-neutral-600">
          We support structured trading projects with digital systems,
          operational planning and market-focused business strategies.
        </p>

        <a
          href="#contact"
          className="mt-8 text-[13px] font-medium text-[#E9B900] transition hover:text-black"
        >
          LEARN MORE
        </a>
      </div>

      {/* Business Development */}
      <div className="flex min-h-[310px] flex-col items-center justify-center rounded-[18px] border border-neutral-200 bg-white px-8 py-10 text-center">

        <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[10px] bg-[#F6CE0A]">
          <svg
            className="h-7 w-7 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="14" y="4" width="6" height="6" rx="1" />
            <rect x="4" y="14" width="6" height="6" rx="1" />
            <rect x="14" y="14" width="6" height="6" rx="1" />
          </svg>
        </div>

        <h3 className="mt-7 text-[16px] font-semibold text-black">
          BUSINESS DEVELOPMENT
        </h3>

        <p className="mt-5 max-w-[280px] text-[13px] leading-[2] text-neutral-600">
          We turn business ideas into structured projects through planning,
          digital execution and long-term growth strategies.
        </p>

        <a
          href="#contact"
          className="mt-8 text-[13px] font-medium text-[#E9B900] transition hover:text-black"
        >
          LEARN MORE
        </a>
      </div>

      {/* Image Card 2 */}
      <div className="overflow-hidden rounded-[18px] bg-neutral-100">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
          alt="Kings Association business team"
          className="h-[310px] w-full object-cover"
        />
      </div>

    </div>
  </div>
</section>
{/* ================= OUR PROJECTS ================= */}
<section
  id="projects"
  className="overflow-hidden bg-[#FCFAF7] px-4 py-16 font-['Poppins',sans-serif] lg:py-20"
>
  <style>{`
    @keyframes projectMarquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    .projects-track {
      display: flex;
      width: max-content;
      animation: projectMarquee 28s linear infinite;
    }

    .projects-slider:hover .projects-track {
      animation-play-state: paused;
    }

    @media (prefers-reduced-motion: reduce) {
      .projects-track {
        animation: none;
      }
    }
  `}</style>

  <div className="mx-auto max-w-[1200px]">

    {/* Small Label */}
    <p className="text-center text-[13px] font-medium tracking-[0.30em] text-black">
      OUR PROJECTS
    </p>

    {/* Main Heading */}
    <h2 className="mx-auto mt-6 max-w-[850px] text-center font-['Orbitron'] text-[38px] font-bold leading-[1.35] text-black sm:text-[48px] lg:text-[54px]">
      Explore Our Growing
      <br />
      Business Ecosystem
    </h2>

    {/* Description */}
    <p className="mx-auto mt-5 max-w-[650px] text-center text-[14px] leading-[2] text-neutral-600">
      Discover the brands, platforms and businesses operating under
      Kings Association.
    </p>

    {/* Auto Slider */}
    <div className="projects-slider relative mt-14 overflow-hidden">

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[70px] bg-gradient-to-r from-[#FCFAF7] to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[70px] bg-gradient-to-l from-[#FCFAF7] to-transparent" />

      <div className="projects-track gap-6">

        {/* ================= FIRST SET ================= */}

        {/* MGT Gaming */}
        <div className="w-[260px] shrink-0 rounded-[20px] border border-neutral-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <a
            href="https://www.facebook.com/mgtesports"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-[14px] bg-neutral-50 p-5">
              <img
                src="https://i.ibb.co.com/JRKGWwGL/MGT-Gaming.jpg"
                alt="MGT Gaming"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </a>

          <h3 className="mt-5 text-[16px] font-semibold text-black">
            MGT Gaming
          </h3>

          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/mgtesports"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              FACEBOOK
            </a>
          </div>
        </div>

        {/* Joghonno Brand */}
        <div className="w-[260px] shrink-0 rounded-[20px] border border-neutral-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <a
            href="https://business.joghonnobrand.com/"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-[14px] bg-neutral-50 p-5">
              <img
                src="https://i.ibb.co.com/k2G9SGp9/Joghonno-Brand.jpg"
                alt="Joghonno Brand"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </a>

          <h3 className="mt-5 text-[16px] font-semibold text-black">
            Joghonno Brand
          </h3>

          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="https://business.joghonnobrand.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              WEBSITE
            </a>

            <a
              href="https://www.facebook.com/joghonnobrand"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              FACEBOOK
            </a>
          </div>
        </div>

        {/* Jobers BD */}
        <div className="w-[260px] shrink-0 rounded-[20px] border border-neutral-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <a
            href="https://jobersbd.com/"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-[14px] bg-neutral-50 p-5">
              <img
                src="https://i.ibb.co.com/j9DcC1QN/Jober-s-BD.png"
                alt="Jobers BD"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </a>

          <h3 className="mt-5 text-[16px] font-semibold text-black">
            Jobers BD
          </h3>

          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="https://jobersbd.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              WEBSITE
            </a>

            <a
              href="https://www.facebook.com/jobersbd.official"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              FACEBOOK
            </a>
          </div>
        </div>

        {/* Fruits Zone */}
        <div className="w-[260px] shrink-0 rounded-[20px] border border-neutral-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <a
            href="https://fruitszone.com/"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-[14px] bg-neutral-50 p-5">
              <img
                src="https://i.ibb.co.com/HDzDQdF1/Fruits-Zone.png"
                alt="Fruits Zone"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </a>

          <h3 className="mt-5 text-[16px] font-semibold text-black">
            Fruits Zone
          </h3>

          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="https://fruitszone.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              WEBSITE
            </a>

            <a
              href="https://www.facebook.com/FruitsZone1"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              FACEBOOK
            </a>
          </div>
        </div>

        {/* Bengol Bay */}
        <div className="w-[260px] shrink-0 rounded-[20px] border border-neutral-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <a
            href="https://bengolbay.com/"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-[14px] bg-neutral-50 p-5">
              <img
                src="https://i.ibb.co.com/3YzMYv6L/Bengolbay.png"
                alt="Bengol Bay"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </a>

          <h3 className="mt-5 text-[16px] font-semibold text-black">
            Bengol Bay
          </h3>

          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="https://bengolbay.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              WEBSITE
            </a>

            <a
              href="https://www.facebook.com/bengolbay.0"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              FACEBOOK
            </a>
          </div>
        </div>

        {/* Agro Hill Resort */}
        <div className="w-[260px] shrink-0 rounded-[20px] border border-neutral-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <a
            href="https://agrohillresort.com/"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-[14px] bg-neutral-50 p-5">
              <img
                src="https://i.ibb.co.com/3mZjdRyt/Agro.png"
                alt="Agro Hill Resort"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </a>

          <h3 className="mt-5 text-[16px] font-semibold text-black">
            Agro Hill Resort
          </h3>

          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="https://agrohillresort.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              WEBSITE
            </a>

            <a
              href="https://www.facebook.com/agrohillresort"
              target="_blank"
              rel="noreferrer"
              className="text-[12px] font-medium text-[#C9A400] hover:text-black"
            >
              FACEBOOK
            </a>
          </div>
        </div>

        {/* ================= DUPLICATE SET ================= */}
        {/* Duplicate করা হয়েছে seamless infinite slider-এর জন্য */}

        {[
          {
            name: 'MGT Gaming',
            logo: 'https://i.ibb.co.com/JRKGWwGL/MGT-Gaming.jpg',
            main: 'https://www.facebook.com/mgtesports',
          },
          {
            name: 'Joghonno Brand',
            logo: 'https://i.ibb.co.com/k2G9SGp9/Joghonno-Brand.jpg',
            main: 'https://business.joghonnobrand.com/',
          },
          {
            name: 'Jobers BD',
            logo: 'https://i.ibb.co.com/j9DcC1QN/Jober-s-BD.png',
            main: 'https://jobersbd.com/',
          },
          {
            name: 'Fruits Zone',
            logo: 'https://i.ibb.co.com/HDzDQdF1/Fruits-Zone.png',
            main: 'https://fruitszone.com/',
          },
          {
            name: 'Bengol Bay',
            logo: 'https://i.ibb.co.com/3YzMYv6L/Bengolbay.png',
            main: 'https://bengolbay.com/',
          },
          {
            name: 'Agro Hill Resort',
            logo: 'https://i.ibb.co.com/3mZjdRyt/Agro.png',
            main: 'https://agrohillresort.com/',
          },
        ].map((project, index) => (
          <div
            key={`duplicate-${index}`}
            className="w-[260px] shrink-0 rounded-[20px] border border-neutral-200 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <a
              href={project.main}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-[14px] bg-neutral-50 p-5">
                <img
                  src={project.logo}
                  alt={project.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </a>

            <h3 className="mt-5 text-[16px] font-semibold text-black">
              {project.name}
            </h3>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>
{/* ================= OUR EMPLOYEES ================= */}
<section
  id="employees"
  className="bg-[#FCFAF7] px-4 py-20 font-['Poppins',sans-serif] lg:py-24"
>
  <div className="mx-auto max-w-[1200px]">

    <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

      {/* ================= LEFT TOP ================= */}
      <div className="lg:pr-10">
        <p className="text-[13px] font-medium tracking-[0.30em] text-black">
          OUR EMPLOYEES
        </p>

        <h2 className="mt-7 font-['Orbitron'] text-[38px] font-bold leading-[1.35] text-black sm:text-[48px] lg:text-[54px]">
          Meet the People
          <br />
          Behind Our Growth
        </h2>

        <p className="mt-6 max-w-[520px] text-[14px] leading-[2] text-neutral-600">
          Meet the talented people behind Kings Association who work across
          technology, business, trading and digital projects to turn ideas into
          real opportunities.
        </p>

        <a
          href="#employees"
          className="mt-8 inline-flex items-center gap-3 rounded-[5px] bg-[#F6CE0A] px-5 py-3 text-[13px] font-medium text-black transition hover:brightness-95"
        >
          Meet Our Team

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
        </a>
      </div>

      {/* ================= EMPLOYEE 1 ================= */}
      <div className="rounded-[18px] border border-neutral-200 bg-white px-8 py-7">

        <div className="flex items-start justify-between gap-6">

          <div className="flex-1">
            <p className="text-[12px] font-medium tracking-[0.18em] text-[#C9A400]">
              MANAGEMENT
            </p>

            <h3 className="mt-4 text-[18px] font-semibold text-black">
              Employee Name
            </h3>

            <p className="mt-1 text-[13px] font-medium text-neutral-500">
              Chief Executive Officer
            </p>

            <p className="mt-4 max-w-[390px] text-[13px] leading-[1.9] text-neutral-600">
              Short employee bio will be shown here. Add a brief description
              about experience, responsibilities and contribution to
              Kings Association.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex flex-wrap items-center gap-5">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                LINKEDIN
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                FACEBOOK
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                GITHUB
              </a>

            </div>
          </div>

          {/* Employee Image */}
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=85"
            alt="Employee Name"
            className="h-[76px] w-[76px] shrink-0 rounded-full object-cover"
          />

        </div>
      </div>

      {/* ================= EMPLOYEE 2 ================= */}
      <div className="rounded-[18px] border border-neutral-200 bg-white px-8 py-7">

        <div className="flex items-start justify-between gap-6">

          <div className="flex-1">
            <p className="text-[12px] font-medium tracking-[0.18em] text-[#C9A400]">
              TECHNOLOGY
            </p>

            <h3 className="mt-4 text-[18px] font-semibold text-black">
              Employee Name
            </h3>

            <p className="mt-1 text-[13px] font-medium text-neutral-500">
              Head of Technology
            </p>

            <p className="mt-4 max-w-[390px] text-[13px] leading-[1.9] text-neutral-600">
              Add a short professional bio describing the employee's technical
              experience, responsibilities and role in company projects.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                LINKEDIN
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                FACEBOOK
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                GITHUB
              </a>

            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85"
            alt="Employee Name"
            className="h-[76px] w-[76px] shrink-0 rounded-full object-cover"
          />

        </div>
      </div>

      {/* ================= EMPLOYEE 3 ================= */}
      <div className="rounded-[18px] border border-neutral-200 bg-white px-8 py-7">

        <div className="flex items-start justify-between gap-6">

          <div className="flex-1">
            <p className="text-[12px] font-medium tracking-[0.18em] text-[#C9A400]">
              BUSINESS
            </p>

            <h3 className="mt-4 text-[18px] font-semibold text-black">
              Employee Name
            </h3>

            <p className="mt-1 text-[13px] font-medium text-neutral-500">
              Business Development Manager
            </p>

            <p className="mt-4 max-w-[390px] text-[13px] leading-[1.9] text-neutral-600">
              Add a short professional introduction about business development,
              strategic planning and responsibilities within Kings Association.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                LINKEDIN
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                FACEBOOK
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                GITHUB
              </a>

            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85"
            alt="Employee Name"
            className="h-[76px] w-[76px] shrink-0 rounded-full object-cover"
          />

        </div>
      </div>

      {/* ================= EMPLOYEE 4 ================= */}
      <div className="rounded-[18px] border border-neutral-200 bg-white px-8 py-7">

        <div className="flex items-start justify-between gap-6">

          <div className="flex-1">
            <p className="text-[12px] font-medium tracking-[0.18em] text-[#C9A400]">
              FINANCE & OPERATIONS
            </p>

            <h3 className="mt-4 text-[18px] font-semibold text-black">
              Employee Name
            </h3>

            <p className="mt-1 text-[13px] font-medium text-neutral-500">
              Head of Finance & Accounts
            </p>

            <p className="mt-4 max-w-[390px] text-[13px] leading-[1.9] text-neutral-600">
              Add a short bio describing experience in finance, accounts,
              operations and contribution to the company's growth.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                LINKEDIN
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                FACEBOOK
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-neutral-500 transition hover:text-[#C9A400]"
              >
                GITHUB
              </a>

            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85"
            alt="Employee Name"
            className="h-[76px] w-[76px] shrink-0 rounded-full object-cover"
          />

        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= FAQ SECTION ================= */}
<section
  id="faq"
  className="bg-white px-4 py-16 font-['Poppins',sans-serif] lg:py-20"
>
  <div className="mx-auto max-w-[1200px]">

    {/* Small Label */}
    <p className="text-center text-[13px] font-medium tracking-[0.30em] text-black">
      FAQS
    </p>

    {/* Main Heading */}
    <h2 className="mx-auto mt-7 max-w-[720px] text-center font-['Orbitron'] text-[38px] font-bold leading-[1.35] text-black sm:text-[48px] lg:text-[54px]">
      Clear Answers to
      <br />
      Your Questions
    </h2>

    {/* Main Content */}
    <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_1fr]">

      {/* ================= LEFT: FAQ ACCORDION ================= */}
      <div className="space-y-5">

        {/* FAQ 1 */}
        <details
          open
          className="group rounded-[18px] border border-neutral-200 bg-white px-6 py-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-black">
            What is Kings Association?

            <span className="transition-transform duration-300 group-open:rotate-180">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-6 max-w-[520px] text-[14px] leading-[2] text-neutral-600">
            Kings Association is a growing business ecosystem focused on
            technology, online business, trading and innovative digital projects.
          </p>
        </details>

        {/* FAQ 2 */}
        <details className="group rounded-[18px] border border-neutral-200 bg-white px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-black">
            What kind of projects does Kings Association manage?

            <span className="transition-transform duration-300 group-open:rotate-180">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-6 text-[14px] leading-[2] text-neutral-600">
            Our projects include technology platforms, online businesses,
            trading-based ventures, recruitment platforms, e-commerce brands,
            hospitality and other business initiatives.
          </p>
        </details>

        {/* FAQ 3 */}
        <details className="group rounded-[18px] border border-neutral-200 bg-white px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-black">
            Can I explore all Kings Association projects from this website?

            <span className="transition-transform duration-300 group-open:rotate-180">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-6 text-[14px] leading-[2] text-neutral-600">
            Yes. You can browse our project section and directly visit each
            project's official website or social media page.
          </p>
        </details>

        {/* FAQ 4 */}
        <details className="group rounded-[18px] border border-neutral-200 bg-white px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-black">
            Does Kings Association provide IT and digital services?

            <span className="transition-transform duration-300 group-open:rotate-180">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-6 text-[14px] leading-[2] text-neutral-600">
            Yes. We work with technology, digital platforms and online business
            solutions as part of our broader business ecosystem.
          </p>
        </details>

        {/* FAQ 5 */}
        <details className="group rounded-[18px] border border-neutral-200 bg-white px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-black">
            How can I contact Kings Association?

            <span className="transition-transform duration-300 group-open:rotate-180">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-6 text-[14px] leading-[2] text-neutral-600">
            You can contact us through the Contact Us section of the website
            for business inquiries, project information and partnership
            discussions.
          </p>
        </details>

      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div>

        {/* Main Image */}
        <div className="overflow-hidden rounded-[20px] bg-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
            alt="Kings Association business and technology"
            className="h-[360px] w-full object-cover"
          />
        </div>

        {/* Bottom Cards */}
        <div className="mt-7 grid gap-6 sm:grid-cols-2">

          {/* Card 1 */}
          <div className="rounded-[18px] border border-neutral-200 bg-white p-7">
            <div className="flex items-center gap-5">

              <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-[10px] bg-[#F6CE0A]">
                <svg
                  className="h-7 w-7 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
              </div>

              <h3 className="text-[17px] font-semibold text-black">
                SUPPORT
              </h3>
            </div>

            <p className="mt-6 text-[13px] leading-[2] text-neutral-600">
              Get information about our projects, services and business
              activities from our support team.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[18px] border border-neutral-200 bg-white p-7">
            <div className="flex items-center gap-5">

              <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-[10px] bg-[#F6CE0A]">
                <svg
                  className="h-7 w-7 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 17l5-5 4 4 7-8" />
                  <path d="M14 8h6v6" />
                </svg>
              </div>

              <h3 className="text-[17px] font-semibold text-black">
                GROWTH
              </h3>
            </div>

            <p className="mt-6 text-[13px] leading-[2] text-neutral-600">
              Our focus is on building and expanding practical business
              opportunities through technology and structured execution.
            </p>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Home;