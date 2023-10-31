import Image from "next/image";
import profilePic from "../public/eagle.jpg";
import Link from "next/link";

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
              <h1 className="leading-normal text-[2.60rem] font-extrabold text-zinc-800">
                Aspiring full stack developer,
                <br />
                and fresh graduate engineer.
              </h1>
              <p className="mt-6 text-base text-zinc-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at
                eligendi rem necessitatibus suscipit veritatis, animi ipsam
                aliquid perspiciatis? Quam possimus repellat exercitationem
                repudiandae eligendi alias, ipsa necessitatibus officia
                perferendis?
              </p>
              <div className="mt-6 flex gap-6">
                <Link href="">Line</Link>
                <Link href="">GitHub</Link>
                <Link href="">LinkedIn</Link>
                <Link href="">Youtube</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
