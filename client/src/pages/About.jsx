import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            Welcome to Jyotideep's Blog!
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              This blog is dedicated to sharing thoughts and ideas on a wide
              range of topics, with the aim of addressing the challenges of our
              times.
            </p>

            <p>
              In this space, you'll find weekly articles that delve into various
              social issues, offering insights and solutions that we can embrace
              collectively. Our mission is to foster a sense of unity and
              brotherhood in our country, creating an environment where everyone
              can live in harmony and happiness.
            </p>

            <p>
              Your comments and feedback are crucial in helping me improve and
              refine my efforts. I am grateful for your support and look forward
              to engaging with you on this journey.
            </p>
            <p>Thank you for being a part of this community.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
