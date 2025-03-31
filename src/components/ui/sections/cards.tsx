import React from "react";
import { MagicCard } from "../magic-card";
const cardData = [
  {
    heading: "Real-Time Updates",
    content:
      "Get accurate and instant visibility into the number of active users on your website. Our platform ensures you’re always up to date with no delays",
  },
  {
    heading: "Multi-website support",
    content:
      "Manage and monitor live users across multiple websites from a single dashboard. Perfect for businesses or agencies handling multiple web properties.",
  },
  {
    heading: "Secure and Reliable",
    content:
      "Your data’s security is our top priority. Built with industry-standard encryption and secure WebSocket protocols, our platform ensures reliable and safe tracking.",
  },
  {
    heading: "Easy Integration",
    content:
      "Integrating our tool is as simple as copying and pasting a snippet of code into your site. No complex setups or lengthy configurations required.",
  },
  {
    heading: "Affordable Plans",
    content:
      " Our affordable pricing ensures you get premium features and real-time insights at a fraction of the cost. Perfect for businesses of all sizes, from startups to enterprises.",
  },
];
const Cards = () => {
  return (
    <div>
      <div className="pt-20">
        <div className="h-[80px] duration-500 w-[80px] blur-3xl opacity-90 relative top-32 rounded-full bg-[#80EC8A] "></div>
        <div className="h-[80px] duration-500 w-[80px] opacity-90 relative blur-3xl top-[10rem] border rounded-full bg-[#80EC8A] "></div>

        <p className="text-center font-bold text-3xl pb-5">Features</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          {cardData.map((card, index) => (
            <MagicCard
              key={index}
              gradientFrom="#80EC8A"
              gradientTo="#02B64E"
              className="flex flex-col border border-green-500 items-center w-full text-center gap-5 rounded-xl p-8"
            >
              <p className="text-xl font-bold py-4">{card.heading}</p>
              <p className="text-[#a0a0a0] opacity-70">{card.content}</p>
            </MagicCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
