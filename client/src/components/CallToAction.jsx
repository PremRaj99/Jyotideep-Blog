import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 flex justify-center flex-col">
        <h2 className="text-2xl font-semibold">
          Want to learn more about React?
        </h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with 5 React Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
          onClick={() => {
            window.open("https://github.com/PremRaj99");
          }}
        >
        Git Hub
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg" />
      </div>
    </div>
  );
}
