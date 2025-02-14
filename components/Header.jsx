export default function Header() {
  return (
    <section className="bg-base-200 px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-yellow-400">
          CodeFastSaaS.
        </div>
        <div className="max-md:hidden">
          <ul className="flex items-center gap-12">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn hover:text-yellow-400">Login/Sign up</button>
        </div>
      </div>
    </section>
  );
}
