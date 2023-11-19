import Link from "next/link";

import { api } from "~/trpc/server";
import { Header, Socials, Templates } from "./_components";

export default async function Home() {
  const hello = await api.client.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#13172e] to-[#15162c] text-white">
      <Header />
      <Socials />
      <Templates />
    </main>
  );
}
