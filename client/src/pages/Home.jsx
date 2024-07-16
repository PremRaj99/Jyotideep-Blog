import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import logo from "../assets/NSP LOGO.png";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/post/getposts`
      );
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex items-center flex-col-reverse sm:flex-row py-28 gap-5 max-w-6xl">
        <div className="flex items-center sm:items-start mx-auto flex-col gap-4 sm:gap-6">
          <h1 className="text-4xl text-teal-600 font-bold sm:text-6xl">
            Jyotideep
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold">
            Naya Savera Parivar
          </h2>
          <p className="text-gray-500 w-[50ch] italic text-center sm:text-left text-xs sm:text-sm">
            All Humans in this world are our relatives. It is our differing
            ideologies that divide us into various groups and turn us against
            one another.
          </p>
          <Link
            to="/search"
            className="text-xs sm:text-sm text-teal-600  border p-2 rounded-md border-teal-600 hover:bg-teal-600 hover:text-white font-bold"
          >
            View all posts
          </Link>
        </div>
        <div className="">
          <img src={logo} className="w-40  sm:w-80" alt="" />
        </div>
      </div>
      {/* <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div> */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to="/search"
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
