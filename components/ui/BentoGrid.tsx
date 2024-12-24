"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundAnimationGradient";
import { Globe } from "./Globe";
import Lottie from "react-lottie-player"
import { GlobeDemo } from './GridGlobe'
import React from "react";
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-6 lg:grid-rows-4  gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;

  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;


}) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("ar0466467@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  }
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none    justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(13,9,25)",
        backgroundColor: "linear-gradient(94deg, rgba(13,9,25,0.9100432409291842) 0%, rgba(11,12,14,1) 100%)"
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full' `}>
        <div className="w-full h-full absolute">
          {img && <img src={img} alt={img}
            className={cn(imgClassName, 'object-cover object-center')} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {
            spareImg && (

              img && <img src={spareImg} alt={spareImg}
                className={'object-cover object-center w-full h-full'} />


            )
          }
        </div>
        {
          id === 6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
            </BackgroundGradientAnimation>
          )
        }
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 px-5 lg:p-10')}>
          <div className=" font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="
           font-bold text-lg  lg:text-2xl max-w-96 z-10 ">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit  absolute right-1 lg:-right-3">
              <div className="flex flex-col gap-3  lg:gap-8">
                {
                  ['React js', 'Next js', , 'Framer motion'].map((item, index) => (<span key={index} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">{item}</span>))
                }
                <span className="py-4 px-3  rounded-lg text-center bg-[#10132e]" />

              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />

                {
                  ['fullstack dev', 'express js', ' Database'].map((item, index) => (<span key={index} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">{item}</span>))
                }

              </div>

            </div>
          )}
          {
            id === 6 && (
              <div className="mt-5 relative ">
                <div className={`absolute -bottom-5 right-0 `}>
                  <Lottie
                    loop={copied}
                    play={copied}
                    animationData={animationData}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <MagicButton title={copied ? 'Email copied' : 'Copy my email'} icon={<FaCopy />} position="left" otherClasses={`bg-[#161a31] `} handleClick={handleCopy} />
              </div>
            )
          }

        </div>


      </div>
    </div>
  );
};
