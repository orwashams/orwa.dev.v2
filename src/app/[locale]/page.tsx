import { api } from "~/trpc/server";
import { Divider, Header, Templates } from "../_components";
import { LocaleSelect } from "../_components/LocaleSelect";

export default function Home() {
  // const hello = await api.client.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center   md:container">
      <div className=" flex flex-col gap-6 p-6">
        <LocaleSelect />

        <Header />
        <Divider />
        <Templates />
      </div>
    </main>
  );
}
