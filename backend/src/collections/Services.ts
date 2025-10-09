import { CollectionConfig } from 'payload';

const Services: CollectionConfig = {
  slug: 'services',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'basePrice', type: 'number' },
  ],
};

export default Services;
