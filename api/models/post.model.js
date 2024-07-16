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
        "https://lh3.googleusercontent.com/p/AF1QipPoFKaiYDAXq99zSd0GkywqS3lDtL67CzkKLmBo=s1360-w1360-h1020",
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
