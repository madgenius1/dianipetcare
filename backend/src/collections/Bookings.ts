import { CollectionConfig } from 'payload';

const Bookings: CollectionConfig = {
  slug: 'bookings',
  admin: { useAsTitle: 'ownerName' },
  fields: [
    { name: 'ownerName', type: 'text', required: true },
    { name: 'ownerPhone', type: 'text', required: true },
    { name: 'ownerEmail', type: 'email' },
    {
      name: 'pets',
      type: 'array',
      fields: [
        { name: 'petName', type: 'text' },
        { name: 'petType', type: 'text' },
      ],
    },
    { name: 'service', type: 'relationship', relationTo: 'services' },
    { name: 'pricingTier', type: 'relationship', relationTo: 'pricing-tiers' },
    { name: 'date', type: 'date', required: true },
    { name: 'time', type: 'text', required: true },
    { name: 'status', type: 'select', options: ['pending', 'paid', 'completed'], defaultValue: 'pending' },
  ],
};

export default Bookings;
