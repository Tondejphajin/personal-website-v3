import Image from "next/image";
import profilePic from "../public/profile-me.png";
import Link from "next/link";
import Line from "./icons/Line";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import CV from "./icons/CV";

export default function Mome() {
  return (
    <>
      <main className="mx-24">
        <div>
          <Image
            src={profilePic}
            width="128"
            height="128"
            alt="me"
            className="h-16 w-16 rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="mt-9">
          <div className="mx-auto">
            <div className="max-w-2xl">
              <h1 className="leading-normal text-5xl font-extrabold text-zinc-800">
                Full-Stack Developer
              </h1>
              <p className="mt-6 text-base text-zinc-600">
                I&apos;m Tin Dejphachon. With an expertist in full-stack web
                development, I dedicate myself to crafting functional and
                user-friendly web applications. My focus lies in continually
                learning and applying current technologies to develop reliable
                solutions.
              </p>
              <div className="mt-6 flex gap-6">
                <Link href="" className="group">
                  <Line />
                </Link>
                <Link href="" className="group">
                  <Github />
                </Link>
                <Link href="" className="group">
                  <LinkedIn />
                </Link>
                <Link href="" className="group">
                  <CV />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
