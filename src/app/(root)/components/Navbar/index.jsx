import Image from "next/image";
import React from "react";
import UniButton from "../Buttons/UniButton";
import Link from "next/link";

const index = () => {
  return (
    <nav className="shadow-lg shadow-gray-100 md:shadow-gray-200">
      <div className="container flex justify-between items-center">
        <div className="left">
          <Link href="/">
            <Image
              src={"/assets/images/PWIP.png"}
              alt="Logo"
              width={100}
              height={100}
              className="size-18 lg:size-24"
            />
          </Link>
        </div>
        <div className="right">
          <UniButton>Register For The Live Webinar</UniButton>
        </div>
      </div>
    </nav>
  );
};

export default index;
