"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pd-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage your money
          <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          SpendSmart is a simple and easy-to-use expense tracker that helps you
          manage your money with ease.
        </p>
        <div>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div>
          <div>
            <Image
              src="/banner.png"
              alt="banner"
              width={1280}
              height={720}
              quality={100}
              priority={true}
              className="rounded-3xl shadow-3xl border mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
