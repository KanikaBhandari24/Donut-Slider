"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";

const DonutSection = () => {
  const [step, setstep] = useState<number>(1);
  const berrytextRef = useRef(null);
  const berryRef = useRef(null);

  const appleRef = useRef(null);
  const appleContRef = useRef(null);
  const appletextRef = useRef(null);

  const caramelRef = useRef(null);
  const caramelContRef=useRef(null);
  const carameltextRef=useRef(null);

  const strawberryRef = useRef(null);

  const timeline = useRef(gsap.timeline({ paused: true }));

  const handleNext = () => {
    if (step === 1) {
      timeline.current = gsap
        .timeline()
        .to(
          berrytextRef.current,
          {
            y: 300,
          },
          "a"
        )
        .to(
          berryRef.current,
          {
            y: -450,
            rotate: 180,
            scale: 0.8,
          },
          "a"
        )
        .to(
          appleRef.current,
          {
            scale: 1,
            top: "50%",
            rotate: 0,
          },
          "a"
        )
        .to(
          appleContRef.current,
          {
            scale: 30,
            duration: 1,
          },
          "a"
        )
        .to(
          appletextRef.current,
          {
            scale: 1,
            top: "30%",
            rotate: 0,
          },
          "a"
        )
        .to(
          ".leaf1",
          {
            rotate: 180,
          },
          "a"
        )
        .to(
          caramelRef.current,
          {
            top: "102%",
          },
          "a"
        )
        
        
    }
    else{
      timeline.current=gsap.timeline()
      .to(appleRef.current,{
        y: -520,
        rotate: 180,
        scale: 0.4,
      },'b')
      .to(caramelRef.current,{
        top: "50%",
        rotate: 0,
        scale: 1,
      },'b')
      .to(appletextRef.current,{
        y: 700,
      },'b')
      .to(
          caramelContRef.current,{
            scale: 30,
            duration: 1,
          },'b')
      .to(
          carameltextRef.current,
          {
            scale: 1,
            top: "30%",
            rotate: 0,
          },
          "b"
        )
      .to(
          ".leaf1",
          {
            rotate: 360,
          },
          "b"
        )
        .to(
          strawberryRef.current,
          {
            top: "102%",
          },
          "b"
        )

    }
  };

  const handlePrev = () => {
    timeline.current.reverse();

  };

  return (
    <div className="h-screen w-full bg-radial from-[#E0B8FF] to-[#744EB2] flex justify-center items-center overflow-hidden">
      <div className="h-full w-full relative">
        {/* GREEN CIRCLE CONTAINER */}
        <div
          ref={appleContRef}
          className="scale-0  absolute top-0 size-20 rounded-full bg-radial from-[#E0FFB8] to-[#7AB24E] left-1/2 -translate-x-1/2"
        />
        {/* CARAMEL CIRCLE CONTAINER */}
        <div
          ref={caramelContRef}
          className="scale-0  absolute top-0 size-20 rounded-full bg-radial from-[#FFE3B8] to-[#D68042] left-1/2 -translate-x-1/2"
        />

        {/* BLUE BERRY TEXT
         */}
        <h1
          ref={berrytextRef}
          className="uppercase text-center text-[14vw] tracking-wide text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          blueberry
        </h1>

        {/* GREEN APPLE TEXT */}
        <h2
          ref={appletextRef}
          className="uppercase text-[14vw] w-full tracking-wide text-white left-1/2 -translate-x-1/2 scale-0  absolute -top-38 size-20 text-center"
        >
          green apple
        </h2>
        {/* CARAMEL TEXT */}
        <h3
          ref={carameltextRef}
          className="uppercase text-[14vw] w-full tracking-wide text-white left-1/2 -translate-x-1/2 scale-0  absolute -top-38 size-20 text-center"
        >
          caramel
        </h3>

        {/* Blue Berry */}
        <Image
          ref={berryRef}
          src={"/blue.png"}
          alt="blueberry"
          width={500}
          height={500}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />

        {/* Green Apple */}
        <Image
          ref={appleRef}
          src={"/apple.png"}
          alt="blueberry"
          width={500}
          height={500}
          className="absolute top-[102%] -translate-y-1/2 left-1/2 -translate-x-1/2 size-[35vw] scale-[0.4]"
        />

        {/* CARAMEL */}
        <Image
          ref={caramelRef}
          src={"/caramel.png"}
          className="absolute top-[120%] -translate-y-1/2 left-1/2 -translate-x-1/2 size-[35vw] scale-[0.4] "
          width={500}
          height={500}
          alt="caramel"
        />

        <Image
          ref={strawberryRef}
          src={"/strawberry.png"}
          className="absolute top-[120%] -translate-y-1/2 left-1/2 -translate-x-1/2 size-[35vw] scale-[0.4] "
          width={500}
          height={500}
          alt="strawberry"
        />

        {/* LEAF IMAGES */}
        <Image
          src={"/leaf1.png"}
          alt="leaf "
          width={224}
          height={224}
          className="absolute top-[4%] left-[15%] leaf1"
        />
        <Image
          src={"/leaf2.png"}
          alt="blueberry"
          width={170}
          height={170}
          className="absolute top-[5%] left-[67%] leaf1"
        />
        <Image
          src={"/leaf3.png"}
          alt="blueberry"
          width={174}
          height={174}
          className="absolute top-[67%] left-[17%] leaf1"
        />
        <Image
          src={"/leaf4.png"}
          alt="blueberry"
          width={220}
          height={220}
          className="absolute top-[67%] left-[67%] leaf1"
        />

        {/* SWIPE ANIMATION */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full flex justify-between px-10">
          <ChevronLeft
            className="size-12 cursor-pointer"
            color="white"
            onClick={handlePrev}
          />
          <ChevronRight
            className="size-12 cursor-pointer"
            color="white"
            onClick={()=>{
              handleNext();
              setstep((prev)=>prev+1)
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DonutSection;
