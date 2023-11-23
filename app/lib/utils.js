import mongoose from "mongoose";

const connection = {};

export const connectionDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.HOST);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
