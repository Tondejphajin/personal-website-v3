import Image from "next/image";
import gallery1 from "../public/gallery1.png";
import gallery2 from "../public/gallery2.png";
import gallery3 from "../public/gallery3.png";
import gallery4 from "../public/gallery4.png";
import gallery5 from "../public/gallery5.png";

export default function Gallery() {
  return (
    <>
      <div className="mt-6 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5  py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              src={gallery1}
              alt="gallery1"
              className="absolute inset-0 h-full w-full object-cover"
            ></Image>
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              src={gallery2}
              alt="gallery2"
              className="absolute inset-0 h-full w-full object-cover"
            ></Image>
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              src={gallery3}
              alt="gallery3"
              className="absolute inset-0 h-full w-full object-cover"
            ></Image>
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              src={gallery4}
              alt="gallery4"
              className="absolute inset-0 h-full w-full object-cover"
            ></Image>
          </div>
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
            <Image
              src={gallery5}
              alt="gallery5"
              className="absolute inset-0 h-full w-full object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
