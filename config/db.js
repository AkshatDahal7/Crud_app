import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.DB_URL) {
      throw new Error('DB_URL environment variable is not set!');
    }

    const connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const con = await mongoose.connect(process.env.DB_URL, connectionOptions);
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with an error code
  }
};

export default connectDB;
