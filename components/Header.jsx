export default function Header() {
  return (
    <section className="bg-base-200 px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">CodeFastSaaS</div>
        <div>
          <ul className="flex items-center gap-12">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </section>
  );
}
