function Navigation() {
  return (
    <nav className="bg-[#004D40] px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="text-2xl font-bold text-white">MarketingPro</div>
        <div className="hidden space-x-6 md:flex">
          <a
            className="text-white hover:text-[#4CAF50] hover:underline hover:decoration-4 hover:underline-offset-8"
            href="#"
          >
            Home
          </a>
          <a
            className="text-white hover:text-[#4CAF50] hover:underline hover:decoration-4 hover:underline-offset-8"
            href="#about"
          >
            About
          </a>
          <a
            className="text-white hover:text-[#4CAF50] hover:underline hover:decoration-4 hover:underline-offset-8"
            href="#testimonials"
          >
            Testimonials
          </a>
          {/* <a
            className="text-white hover:text-[#4CAF50] hover:underline hover:decoration-4 hover:underline-offset-8"
            href="#"
          >
            Contact
          </a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
