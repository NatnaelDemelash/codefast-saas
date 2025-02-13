export default function Pricing() {
  return (
    <section className="bg-base-200">
      <div className="max-w-3xl mx-auto py-32 px-8">
        <p className="text-sm uppercase text-yellow-400 text-center mb-4">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl text-center mb-6">
          A Pricing that adapts to your need
        </h2>

        <div className="p-8 bg-base-100 rounded-3xl w-96 mx-auto">
          <div className="flex items-baseline gap-2">
            {' '}
            <div className="font-bold text-4xl text-yellow-400">$19</div>
            <div className="uppercase font-medium text-sm">/Month</div>
          </div>

          <ul className="space-y-2 mt-5">
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              Collect Customers Feedback
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              Unlimted Boards
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              Admin Dashboard
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
              24/7 Support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
