// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import StepsClip from "@/components/signup/steps";
import StepsClipPath from "@/components/signup/steps";
import { MoveUpRight } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full flex items-end justify-center text-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          controls
          preload="none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Videos/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-[50%] via-background/50 via-[75%] to-background to-[100%]"></div>
        <div className="relative flex justify-between items-end w-[95%] lg:w-full mb-10 max-w-7xl">
          <div className="w-full lg:w-[50%] justify-start items-start text-left">
            <Button className="Poppins rounded-full text-xl lg:text-xl font-medium p-6 lg:p-6  bg-transparent text-foreground border-2 border-foreground mb-5">
              Are you a retailer?
            </Button>
            <h1 className="Space text-4xl lg:text-5xl uppercase font-semibold mb-5 lg:mb-0">
              Reimagine checkout with <br /> Satocci and bring
              <br /> innovation to retail.
            </h1>
            <p className="block lg:hidden Poppins text-sm font-medium mb-5">
              Satocci makes shopping seamless by letting you scan and pay
              instantly so you skip the line and enjoy faster smarter
              sustainable shopping.
            </p>
          </div>
          <div className="hidden lg:block w-[40%] justify-start items-end text-left">
            <p className="Poppins text-md font-normal">
              Satocci makes shopping seamless by letting you scan and pay
              instantly so you skip the line and enjoy faster smarter
              sustainable shopping.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex gap-5 items-center justify-center w-full  mt-30">
        <div className="relative py-5 flex gap-5 items-center justify-between z-10 max-w-7xl w-full ">
          <div className="relative flex justify-center items-center flex-col w-[400px] h-auto ">
            <Button className="Poppins rounded-full text-xl lg:text-xl font-medium p-6 lg:p-6 px-10 bg-green-400 text-foreground border-2 border-foreground">
              Step 1
            </Button>
          </div>
          <div className="relative flex justify-center items-center flex-col w-[400px] h-auto ">
            <Button className="Poppins rounded-full text-xl lg:text-xl font-medium p-6 lg:p-6 px-10 bg-green-400 text-foreground border-2 border-foreground">
              Step 2
            </Button>
          </div>
          <div className="relative flex justify-center items-center flex-col w-[400px] h-auto ">
            <Button className="Poppins rounded-full text-xl lg:text-xl font-medium p-6 lg:p-6 px-10 bg-green-400 text-foreground border-2 border-foreground">
              Step 3
            </Button>
          </div>
        </div>
        <div className="absolute w-[60%] border border-foreground z-0"></div>
      </section>
      <section className="flex gap-5 items-center justify-center w-full mb-30">
        <div className="py-5 flex gap-5 items-center justify-between max-w-7xl w-full ">
          <div className="relative flex justify-start items-start flex-col border-foreground w-[400px] h-[400px] border-2 rounded-4xl p-7">
            <h1 className="Space text-4xl lg:text-5xl uppercase font-semibold mb-5">
              Contact Us
            </h1>
            <p className="Poppins text-sm font-medium mb-5">
              Fill in the form below to tell us more about your store, your
              customers, and how you operate. This helps our team design a
              tailor‑made solution that best fits your business.
            </p>
            <Button className=" absolute bottom-2 flex justify-center items-center Space rounded-full text-xl lg:text-xl font-medium py-6 px-1.5 pl-5 uppercase bg-background text-foreground border-2 border-foreground mb-5">
              Contact us
              <span className="flex justify-center items-center ml-2 bg-foreground rounded-full w-10 h-10">
                <MoveUpRight className="w-4 h-4 text-background" />
              </span>
            </Button>
          </div>
          <div className="relative flex justify-start items-start flex-col border-foreground w-[400px] h-[400px] border-2 rounded-4xl p-7">
            <h1 className="Space text-4xl lg:text-5xl uppercase font-semibold mb-5">
              Onboarding Process
            </h1>
            <p className="Poppins text-sm font-medium mb-5">
              Team Satocci will ensure that your inventories are in sync and
              that your team is trained to start accepting shoppers using
              Satocci in less than two weeks.
            </p>
          </div>
          <div className="relative flex justify-start items-start flex-col border-foreground w-[400px] h-[400px] border-2 rounded-4xl p-7">
            <h1 className="Space text-4xl lg:text-5xl uppercase font-semibold mb-5">
              Continuous Improvement
            </h1>
            <p className="Poppins text-sm font-medium mb-5">
              We work closely with you even after launch - gathering feedback,
              updating features, and ensuring Satocci keeps making checkout
              smoother for all.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex justify-center items-center w-full h-auto flex-col"
      >
        <div className="relative flex justify-between items-start w-[95%] lg:w-full mb-10 max-w-7xl">
          <div className="w-full lg:w-[50%] justify-start items-start text-left">
            <h1 className="Space text-4xl lg:text-5xl uppercase font-semibold mb-5 lg:mb-0">
              Let’s Get Started
            </h1>
            <p className="block lg:hidden Poppins text-sm font-medium mb-5">
              Fill in the following details, and we will get in touch with you.
            </p>
          </div>
          <div className="hidden lg:block w-[40%] justify-start items-end text-left">
            <p className="Poppins text-md font-normal">
              Satocci makes shopping seamless by letting you scan and pay
              instantly so you skip the line and enjoy faster smarter
              sustainable shopping.
            </p>
          </div>
        </div>
        <div className="relative flex justify-between items-start w-[95%] lg:w-full mb-10 max-w-7xl gap-10">
          <div className="relative flex justify-between items-end w-[95%] lg:w-full mb-10 max-w-7xl">
            <form className="space-y-6 w-full">
              {/* Full Name */}
              <div className="relative flex items-center w-full">
                <Input
                  id="full-name"
                  placeholder=" "
                  className="peer Poppins rounded-full text-xl font-medium p-6 bg-transparent text-foreground border-2 border-foreground"
                />
                <p
                  className="Poppins absolute left-6 text-xl rounded-full font-medium bg-transparent text-foreground/50 transition-all duration-200
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-xl
          peer-focus:-top-4
          peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:bg-background peer-focus:bg-background"
                >
                  Full Name
                </p>
              </div>

              {/* Address */}
              <div className="relative flex items-center w-full">
                <Input
                  id="address"
                  placeholder=" "
                  className="peer Poppins rounded-full text-xl font-medium p-6 bg-transparent text-foreground border-2 border-foreground"
                />
                <p
                  className="Poppins absolute left-6 text-xl rounded-full font-medium bg-transparent text-foreground/50 transition-all duration-200
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-xl
          peer-focus:-top-4
          peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:bg-background peer-focus:bg-background"
                >
                  Address
                </p>
              </div>

              {/* Email */}
              <div className="relative flex items-center w-full">
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  className="peer Poppins rounded-full text-xl font-medium p-6 bg-transparent text-foreground border-2 border-foreground"
                />
                <p
                  className="Poppins absolute left-6 text-xl rounded-full font-medium bg-transparent text-foreground/50 transition-all duration-200
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-xl
          peer-focus:-top-4
          peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:bg-background peer-focus:bg-background"
                >
                  Email
                </p>
              </div>

              {/* Phone */}
              <div className="relative flex items-center w-full">
                <Input
                  id="phone"
                  type="tel"
                  placeholder=" "
                  className="peer Poppins rounded-full text-xl font-medium p-6 bg-transparent text-foreground border-2 border-foreground"
                />
                <p
                  className="Poppins absolute left-6 text-xl rounded-full font-medium bg-transparent text-foreground/50 transition-all duration-200
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-xl
          peer-focus:-top-4
          peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:bg-background peer-focus:bg-background"
                >
                  Phone
                </p>
              </div>

              {/* Company URL */}
              <div className="relative flex items-center w-full">
                <Input
                  id="company-url"
                  placeholder=" "
                  className="peer Poppins rounded-full text-xl font-medium p-6 bg-transparent text-foreground border-2 border-foreground"
                />
                <p
                  className="Poppins absolute left-6 text-xl rounded-full font-medium bg-transparent text-foreground/50 transition-all duration-200
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-xl
          peer-focus:-top-4
          peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:bg-background peer-focus:bg-background"
                >
                  Company URL
                </p>
              </div>

              {/* POS Dropdown */}
              <div className="relative flex items-center w-full">
                <Select>
                  <SelectTrigger className="peer Poppins rounded-full text-xl w-full font-medium p-6 bg-transparent text-foreground border-2 border-foreground">
                    <SelectValue placeholder="Shopify" />
                  </SelectTrigger>
                  <SelectContent className="Poppins rounded-2xl text-xl w-full font-medium bg-background text-foreground border-2 border-foreground">
                    <SelectItem value="square">Square</SelectItem>
                    <SelectItem value="toast">Toast</SelectItem>
                    <SelectItem value="clover">Clover</SelectItem>
                    <SelectItem value="shopify">Shopify POS</SelectItem>
                  </SelectContent>
                </Select>
                <p
                  className="Poppins absolute left-6 text-xl rounded-full font-medium bg-transparent text-foreground/50 transition-all duration-200
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-xl
          peer-focus:-top-4
          peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:bg-background peer-focus:bg-background"
                >
                  What POS Do You Use?
                </p>
              </div>

              {/* Daily Customers Dropdown */}
              <div className="relative flex items-center w-full">
                <Select>
                  <SelectTrigger className="peer Poppins rounded-full text-xl w-full font-medium p-6 bg-transparent text-foreground border-2 border-foreground">
                    <SelectValue placeholder="100-200" />
                  </SelectTrigger>
                  <SelectContent className="Poppins rounded-2xl text-xl w-full font-medium bg-background text-foreground border-2 border-foreground">
                    <SelectItem value="0-50">0 - 50</SelectItem>
                    <SelectItem value="51-200">51 - 200</SelectItem>
                    <SelectItem value="201-500">201 - 500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
                <p
                  className="Poppins absolute left-6 text-xl rounded-full font-medium bg-transparent text-foreground/50 transition-all duration-200
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-xl
          peer-focus:-top-4
          peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:bg-background peer-focus:bg-background"
                >
                  Range of Daily Customers
                </p>
              </div>

              {/* Submit */}
              <Button className="flex justify-center items-center Space rounded-full text-xl lg:text-xl font-medium py-6 px-1.5 pl-5 uppercase bg-green-400 text-foreground border-2 border-foreground mb-5">
                Submit
                <span className="flex justify-center items-center ml-2 bg-foreground rounded-full w-10 h-10">
                  <MoveUpRight className="w-4 h-4 text-background" />
                </span>
              </Button>
            </form>
          </div>
          <div className="relative w-full h-[600px]">
            <Image
              src="/signup.jpg" // replace with actual image in public folder
              alt="Contact"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>




    </main>
  );
}
