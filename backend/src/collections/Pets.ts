import { CollectionConfig } from 'payload';

const Pets: CollectionConfig = {
  slug: 'pets',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'type', type: 'select', options: ['dog', 'cat', 'bird', 'other'] },
    { name: 'age', type: 'number' },
    { name: 'owner', type: 'relationship', relationTo: 'users' },
  ],
};

export default Pets;
