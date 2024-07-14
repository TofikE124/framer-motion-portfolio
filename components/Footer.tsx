import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 mb-10 relative overflow-hidden"
      id="contact"
    >
      <div className="w-full absolute top-0 left-0 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="size-full opacity-75"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:eleltofik@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow></FaLocationArrow>}
            position="right"
          ></MagicButton>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Tofik Elias
        </p>
        <div className="flex items-center md:gap-3 lg:gap-6 gap-2 mt-4 md:mt-0">
          {socialMedia.map(({ id, img, link }) => (
            <a
              key={id}
              className="size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              href={link}
              target="_blank"
            >
              <img src={img} alt="Profile image" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
