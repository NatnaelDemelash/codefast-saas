import Button from './Button';
import PricingListItems from './PricingListItems';

const PricingFeatureList = [
  'Collect Customer Feedback',
  'Unlimited Boards',
  'Admin Dashboard',
  '24/7 Support',
];

export default function Pricing() {
  return (
    <section className="bg-gray-100 py-16 md:py-24 lg:py-32" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Pricing Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-primary font-bold mb-4">
            Pricing
          </p>
          <h2 className="text-3xl text-gray-700 md:text-4xl font-bold mb-6">
            A Pricing Plan That Adapts to Your Needs
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="p-8 bg-base-600 rounded-3xl shadow-lg max-w-md mx-auto space-y-6">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <div className="font-bold text-4xl text-primary">$19</div>
            <div className="uppercase font-medium text-sm text-base-content/70">
              /Month
            </div>
          </div>

          {/* Feature List */}
          <ul className="space-y-3">
            {PricingFeatureList.map((priceItem) => (
              <PricingListItems key={priceItem} priceItem={priceItem} />
            ))}
          </ul>

          {/* Subscribe Button */}
          <Button title="Subscribe" className="btn btn-primary w-full" />
        </div>
      </div>
    </section>
  );
}
