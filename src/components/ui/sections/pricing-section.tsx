import Outline from "@/components/buttons/Outline";
import clsx from "clsx";
import { CircleCheck } from "lucide-react";
import React from "react";

const plans = [
  {
    title: "Free",
    price: "$0.00",
    duration: "/month",
    description: "Great for just trying out Finament",
    features: [
      "Up to 50 users",
      "Single project creation",
      "React / Next.js / Vue.js code snippets",
      "Community access",
    ],
    buttonText: "Start for free",
  },
  {
    title: "Pro",
    price: "$5",
    duration: "/month",
    description: "Perfect for small teams",
    features: [
      "Up to 500 users",
      "5 projects creation",
      "React / Next.js / Vue.js code snippets",
      "Basic support",
      "Community access",
      "Get notified on site down (coming soon)",
    ],
    buttonText: "Upgrade to Pro Plan",
  },
  {
    title: "Business",
    price: "$50",
    duration: "pricing",
    description: "For large organizations",
    features: [
      "Up to 10k users",
      "10 project creation",
      "React / Next.js / Vue.js code snippets",
      "Priority support",
      "Community access",
      "Get notified on site down (coming soon)",
    ],
    buttonText: "Upgrade to Business plan",
  },
  {
    title: "Custom",
    price: "Flexible",
    duration: "pricing",
    description: "Tailored for your needs",
    features: [
      "Custom number of users",
      "Unlimited project creation",
      "Custom features",
      "Community access",
      "Priority support",
      "Get notified on site down (coming soon)",
    ],
    buttonText: "Get a Quote",
  },
];

const PricingSection = () => {
  return (
    <div className="h-[50rem] w-full bg-black bg-grid-small-white/[0.2] relative flex items-center justify-center">
      <div className="p-5 md:p-10 ">
        <div className="text-center">
          <p className="font-bold text-2xl md:text-3xl pb-5">
            Simple and Affordable
            <br /> Pricing Plans
          </p>
          <p className="text-sm text-gray-500">
            Start tracking and improving your finance management
          </p>
        </div>

        <div className="duration-800 -rotate-45 z-10 w-[100px] h-[700px] opacity-25 absolute blur-3xl -top-[10rem] border rounded-full bg-[#80EC8A] "></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 h-[500px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={clsx(
                "p-6 border flex flex-col hover:scale-105 duration-300 rounded-xl shadow-lg hover:shadow-xl transition-all",
                plan.title === "Business" &&
                  "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white"
              )}
            >
              <p className="font-bold text-3xl text-start">{plan.title}</p>
              <div className="py-3 text-start">
                <span className="font-bold text-3xl">{plan.price} </span>
                <span className="text-sm">{plan.duration}</span>
              </div>
              <p className="text-sm text-start py-5">{plan.description}</p>
              <div className="py-5">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-2 justify-start text-sm py-1"
                  >
                    <CircleCheck
                      className={clsx(
                        "text-green-500",
                        plan.title === "Business" && "text-white"
                      )}
                      size={20}
                    />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto py-4">
                <Outline classNames="w-full inline-flex animate-shimmer items-center justify-center rounded-md border bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] border-white hover:bg-opacity-10 font-medium text-white transition-colors focus:ring-offset-slate-50">
                  {plan.buttonText}
                </Outline>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
