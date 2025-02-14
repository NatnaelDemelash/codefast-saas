import Button from '@/components/Button';
import FAQ from '@/components/FAQ';
import Header from '@/components/Header';
import Pricing from '@/components/Pricing';

import productDemo from '../public/productDemo.jpeg';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Section */}
      <section className="px-6 py-16 md:px-8 md:py-24 lg:py-32 bg-gray-50">
        <main className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={productDemo}
              alt="Product Demo"
              className="rounded-xl shadow-2xl w-full max-w-[28rem] lg:max-w-none"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Turn User Feedback into Your Competitive Edge
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Effortlessly collect, prioritize, and act on customer insights to
              build products your users truly love. Launch your feedback board
              in minutes and start making smarter decisions today.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button title="Go to Dashboard" variant="secondary" />
            </div>
          </div>
        </main>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />
    </>
  );
}
