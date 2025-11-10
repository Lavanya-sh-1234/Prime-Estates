import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold">Profile Page</h1>
        <Link href="/" replace>
          <button className="px-4 py-2 bg-red-500 rounded">Back to Home</button>
        </Link>
      </div>
    </main>
  );
}
