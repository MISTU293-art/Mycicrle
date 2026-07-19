import mongoose from "mongoose";
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "0.0.0.0"]);
async function connectionDB() {
  try {
    if(!process.env.MONGO_URI){
        throw new Error("MongoDb Coonection is missing in env")
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected");
  } catch (error) {
    console.log("MongoDb Connection Error:", error);
    process.exit(1);
  }
}

export default connectionDB;
