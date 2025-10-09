import { buildConfig } from 'payload';
import path from 'path';
import { mongooseAdapter } from '@payloadcms/db-mongodb';

import Users from './collections/Users';
import Pets from './collections/Pets';
import Services from './collections/Services';
import PricingTiers from './collections/PricingTiers';
import Bookings from './collections/Bookings';
import Payments from './collections/Payments';

export default buildConfig({
  serverURL: process.env.FRONTEND_URL,
  admin: { user: Users.slug },
  collections: [
    Users,
    Pets,
    Services,
    PricingTiers,
    Bookings,
    Payments,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGO_URI as string,
  }),
  secret: process.env.PAYLOAD_SECRET as string, // 👈 moved here
});
