import Image from "next/image";
import profile from "../public/profile-about.jpg";

export default function About() {
  return (
    <>
      <div className="mt-16">
        <div className="mx-auto px-24 grid grid-cols-2 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="tracking-wider">
            <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl">
              Engineering the Digital Dream
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600">
              <p>
                My journey into software development began with a coding boot
                camp just before I started university. Although I initially
                studied engineering, I always kept my focus on coding, learning
                more about it alongside my degree. To deepen my skills in web
                development, I later joined another boot camp and completed two
                internships as a software developer. I&apos;m now continually
                working to improve my skills and looking for new opportunities
                to grow in this field.
              </p>
            </div>
          </div>
          <div className="pl-20">
            <Image
              src={profile}
              alt="me"
              className="w-[432px] h-[412px] aspect-square rounded-2xl object-cover bg-zinc-100 rotate-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
