import dotenv from 'dotenv';
import path from 'path';

// face a issue with 'process' un-def eslint error.
// *solved with eslint.config.mjs {env:{node: true, es2020:true}}
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_uri: process.env.DATABASE_URI,
};
