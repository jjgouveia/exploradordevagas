import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-2 border-b-2 pb-2 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/manda_jobs_logo.svg"
          className="sm:w-12 sm:h-12 w-8 h-8 ml-0"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-semibold ml-2 tracking-tight">
          Manda Jobs <span className="text-sm text-slate-400">beta</span>
        </h1>
      </Link>
      <DarkModeToggle />
    </header>
  );
}
