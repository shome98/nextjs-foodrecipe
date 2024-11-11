import Link from "next/link";

export default function Home() {
  setTimeout(() => {}, 3000);
  return (
    <><h1 className="text-6xl">This is recipe list</h1>
      <Link href={"/recipe-list"}> recipe list page</Link>
    </>
  );
}
