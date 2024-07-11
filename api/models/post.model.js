import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://c.pxhere.com/images/9d/8f/37b43370ee49b8ce53523f4eb130-1450421.jpg!d",
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    slug: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
