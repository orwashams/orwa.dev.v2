import { clsx } from "clsx";
import { getI18n, getCurrentLocale } from "~/locales/server";

import { api } from "~/trpc/server";
import { Divider, Header, Templates } from "../_components";

export default async function Home() {
  const hello = await api.client.hello.query({ text: "from tRPC" });
  const locale = getCurrentLocale();

  return (
    <main className="flex min-h-screen flex-col  items-center bg-gradient-to-b from-[#13172e] to-[#15162c] text-white">
      <div className=" container flex flex-col gap-6 p-32">
        <Header />
        <Divider />
        <Templates />
        <p className="font-hebrew">עיעכיעכ</p>
      </div>
    </main>
  );
}
