import 'dotenv/config';  // This will load environment variables from your .env file

export const PORT = process.env.PORT || 4000;
export const mongoDBURL = process.env.MONGODB_URL;
