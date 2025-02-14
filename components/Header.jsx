export default function Header() {
  return (
    <section className="bg-[#F0F2F7] shadow-xl px-6 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-900">CodeFastSaaS.</div>

        {/* Navigation Links */}
        <div className="max-md:hidden">
          <ul className="flex items-center gap-8 lg:gap-12">
            <li>
              <a
                href="#pricing"
                className="text-gray-800 hover:text-blue-400 transition-colors duration-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-gray-800 hover:text-blue-400  transition-colors duration-200"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Login/Sign Up Button */}
        <div>
          <button className="btn btn-primary text-white transition-colors duration-200">
            Login/Sign up
          </button>
        </div>
      </div>
    </section>
  );
}
