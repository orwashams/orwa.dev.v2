import { clsx } from "clsx";
import { getI18n, getCurrentLocale } from "~/locales/server";

import { api } from "~/trpc/server";
import { Divider, Header, Templates } from "../_components";

export default function Home() {
  // const hello = await api.client.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center  text-white md:container">
      <div className=" flex flex-col gap-6 p-6">
        <Header />
        <Divider />
        <Templates />
      </div>
    </main>
  );
}
