import mongoose from "npm:mongoose";
import { Post } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Post>({
  title: {type: String, required:true},
  author: {type: String, required:true},
  content: {type: String, required:true},
});

export default mongoose.model<Post>("Posts", schema);
