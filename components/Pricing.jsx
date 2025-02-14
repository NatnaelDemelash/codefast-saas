import Button from './Buttont';
import PricingListItems from './PricingListItems';

const PricingFeatureList = [
  'Collect Customers Feedback',
  'Unlimted Boards',
  'Admin Dashboard',
  '24/7 Support',
];

export default function Pricing() {
  return (
    <section className="bg-base-200" id="pricing">
      <div className="max-w-3xl mx-auto py-32 px-8">
        <p className="text-sm uppercase text-yellow-400 font-bold text-center mb-4">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl text-center mb-6">
          A Pricing that adapts to your need
        </h2>

        <div className="p-8 bg-base-100 rounded-3xl w-96 mx-auto space-y-6">
          <div className="flex items-baseline gap-2">
            {' '}
            <div className="font-bold text-4xl text-yellow-400">$19</div>
            <div className="uppercase font-medium text-sm">/Month</div>
          </div>

          <ul className="space-y-2 mt-5">
            {PricingFeatureList.map((priceItem) => (
              <PricingListItems key={priceItem} priceItem={priceItem} />
            ))}
          </ul>

          <Button
            title="Subscribe"
            className="btn btn-primary"
            extraStyle="w-full"
          />
        </div>
      </div>
    </section>
  );
}
