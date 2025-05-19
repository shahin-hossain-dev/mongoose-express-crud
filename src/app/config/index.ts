import dotenv from 'dotenv';
import path from 'path';

// face a issue with 'process' un-def eslint error.
// *solved with just "pluginJs.configs.recommended" top on "tseslint.configs.recommended" in eslint.config

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_uri: process.env.DATABASE_URI,
};
