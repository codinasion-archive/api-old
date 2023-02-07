import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Codinasion API 🤗</h1>
      <h3>
        Explore all api routes at <Link href="/api">/api</Link>
      </h3>
    </>
  );
}
