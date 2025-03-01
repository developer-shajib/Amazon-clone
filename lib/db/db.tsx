import mongoose from 'mongoose';

// create connection
const mongoDBConnect = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URI;
    if (!mongoUrl) {
      throw new Error('MONGODB_URI is not defined');
    }
    mongoose.connect(mongoUrl);
    console.log('MongoDb Connected Successful');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(String(error));
    }
  }
};

// Export mongodb Connection
export default mongoDBConnect;
