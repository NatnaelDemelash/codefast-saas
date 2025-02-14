import Button from "@/components/Buttont";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Section */}
      <section className="px-8 py-24 text-center">
        <main className="max-w-3xl mx-auto flex flex-col items-center gap-4 py-24">
          <h1 className="text-4xl md:text-5xl mb-5 font-bold">
            Collect customer feedback to build better product
          </h1>
          <p className="mb-6 max-w-2xl">
            Create a feedback board in a minute, prioritize features, and build
            products your customer will love
          </p>

          <Button title="Go to Dashboard" variant="secondary" />
        </main>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />
    </>
  );
}
