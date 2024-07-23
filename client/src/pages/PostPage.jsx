import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";
import { htmlToText } from "html-to-text";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/post/getposts?slug=${postSlug}`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
          return;
        }
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPost = async () => {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/post/getposts?limit=3`
        );
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPost();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleWhatsappShare = () => {
    const postLink =
      "https://nayasaveraparivar.life/post/%E0%A4%A8%E0%A4%AF%E0%A4%BE-%E0%A4%B8%E0%A4%B5%E0%A5%87%E0%A4%B0%E0%A4%BE-%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0-%E0%A4%95%E0%A5%80-%E0%A4%A6%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8%E0%A4%BF%E0%A4%95-%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%AF%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%81";
    const plainTextContent = htmlToText(post.content, {
      wordwrap: 130,
      limits: {
        maxInputLength: 10000,
      },
    }).slice(0, 300);
    const text = "```" + plainTextContent + "```";
    const message = `*${post.title}*\n\n${text}...\n\nSee more: ${postLink}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleFacebookShare = () => {
    const postLink =
      "https://nayasaveraparivar.life/post/%E0%A4%A8%E0%A4%AF%E0%A4%BE-%E0%A4%B8%E0%A4%B5%E0%A5%87%E0%A4%B0%E0%A4%BE-%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0-%E0%A4%95%E0%A5%80-%E0%A4%A6%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8%E0%A4%BF%E0%A4%95-%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%AF%E0%A4%A4%E0%A4%BE%E0%A4%8F%E0%A4%81";

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      postLink
    )}`;
    window.open(facebookUrl, "_blank");
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" pill size="xs">
          {post && post.category}
        </Button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-10 p-3 max-h-[600px] w-full object-cover"
      />
      <div className="flex justify-between p-3 border-b border-slate-300 dark:border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      <div className="max-w-4xl mx-auto w-full">
        <CallToAction />
      </div>
      <CommentSection
        postId={post._id}
        handleWhatsappShare={handleWhatsappShare}
        handleFacebookShare={handleFacebookShare}
      />
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
