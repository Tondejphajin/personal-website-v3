import Link from "next/link";
import Image from "next/image";
import project6 from "./../public/project6.png";
import LinkIcon from "./icons/LinkIcon";

type ProjectProps = {
  //   picture: any;
  //   title: string;
  //   description: string;
  //   link: string;
};

export default function Project({}: //   picture,
//   title,
//   description,
//   link,
ProjectProps) {
  return (
    <>
      <div className="flex flex-col justify-center hover:shadow-lg">
        <div className="group bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 flex flex-col items-center justify-center rounded-xl p-5">
          <Link href="www.google.com">
            <div className="bg-zinc-800 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 p-2 rounded-full">
              <Image
                src={project6}
                alt="proj"
                className="rounded-full w-full aspect-square h-44"
              ></Image>
            </div>
          </Link>
          <h2 className="mt-6 text-base font-semibold text-zinc-800 ">
            Project title
          </h2>
          <p className="z-10 mt-2 text-sm text-zinc-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            mollitia exercitationem optio similique corrupti doloremque
            reiciendis maiores commodi, veritatis expedita vitae rem eligendi
            facilis delectus beatae ex in laudantium! Accusantium!
          </p>
          <Link href="www.dee.com">
            <div className="z-10 mt-6 flex w-full justify-center text-zinc-400">
              <LinkIcon />
              <p className="text-sm font-medium transition group-hover:text-teal-500 ml-2">
                github.com
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
