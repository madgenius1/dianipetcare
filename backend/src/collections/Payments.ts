import { CollectionConfig } from 'payload';

const Payments: CollectionConfig = {
  slug: 'payments',
  admin: { useAsTitle: 'transactionId' },
  fields: [
    { name: 'transactionId', type: 'text' },
    { name: 'booking', type: 'relationship', relationTo: 'bookings' },
    { name: 'method', type: 'select', options: ['mpesa', 'card'] },
    { name: 'amount', type: 'number' },
    { name: 'status', type: 'select', options: ['pending', 'success', 'failed'], defaultValue: 'pending' },
  ],
};

export default Payments;
