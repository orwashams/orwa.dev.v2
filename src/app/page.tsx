import Link from "next/link";

import { api } from "~/trpc/server";
import { Divider, Header, Socials, Templates } from "./_components";

export default async function Home() {
  const hello = await api.client.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#13172e] to-[#15162c] text-white">
      <div className="container flex flex-col p-32">
        <Header />
        <Socials />
        <Divider />
        <Templates />
        <p className="font-encode">Edefds</p>
      </div>
    </main>
  );
}
