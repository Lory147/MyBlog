import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-full mx-auto flex justify-between px-8">
        <h1 className="text-xl font-bold">My Blog</h1>
        <div className="space-x-4">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md ${
              router.pathname === "/" ? "bg-blue-500" : "hover:bg-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-3 py-2 rounded-md ${
              router.pathname === "/about" ? "bg-blue-500" : "hover:bg-gray-700"
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
