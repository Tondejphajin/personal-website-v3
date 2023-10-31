import Project from "@/components/Project";
import project1 from "../../public/project1.png";
import Image from "next/image";

export default function page() {
  return (
    <>
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <header className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800  sm:text-5xl">
                    I like to build things!
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Porro doloribus, neque ullam blanditiis harum aspernatur vel
                    quis! Deleniti impedit aliquam quod animi quidem ex! Vel
                    atque vero maiores quasi quia.
                  </p>
                </header>
                <div className="mt-16 sm:mt-20">
                  <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    <Project />
                    <Project />
                    <Project />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
