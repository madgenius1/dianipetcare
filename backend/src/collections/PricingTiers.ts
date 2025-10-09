import { CollectionConfig } from 'payload';

const PricingTiers: CollectionConfig = {
  slug: 'pricing-tiers',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'price', type: 'number', required: true },
    { name: 'maxPets', type: 'number', required: true },
    { name: 'walksPerWeek', type: 'number' },
    { name: 'washesPerWeek', type: 'number' },
    { name: 'groomingSessionsPerMonth', type: 'number' },
    {
      name: 'extras',
      type: 'array',
      fields: [{ name: 'item', type: 'text' }],
    },
  ],
};

export default PricingTiers;
