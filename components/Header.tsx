import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center">
      <nav
        className="flex justify-evenly rounded-full bg-white/90 px-3 
      font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 
      ring-1 ring-zinc-900/5 backdrop-blur my-8 w-96 h-9
      pointer-events-auto"
      >
        <li className="hover:text-green-500 list-none my-1">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-green-500 list-none my-1">
          <Link href="projects">Projects</Link>
        </li>
        <li className="hover:text-green-500 list-none my-1">
          <Link href="/about">About</Link>
        </li>
      </nav>
    </header>
  );
}
