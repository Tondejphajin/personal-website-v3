export default function Header() {
  return (
    <header className="flex justify-center">
      <nav
        className="flex rounded-full bg-white/90 px-3 
      font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 
      ring-1 ring-zinc-900/5 backdrop-blur my-8 w-96 h-9"
      >
        <li>About</li>
        <li>Projects</li>
        <li>About</li>
      </nav>
    </header>
  );
}
