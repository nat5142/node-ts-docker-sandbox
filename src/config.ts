
// Read .env
require('dotenv').config();

// Mapper for environment variables
export const port = process.env.PORT;
export const environment = process.env.NODE_ENV;
