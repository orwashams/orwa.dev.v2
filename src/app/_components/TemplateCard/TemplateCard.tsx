import { clsx } from "clsx";

import { getCurrentLocale } from "~/locales/server";

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  CardSection,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconNote,
} from "@tabler/icons-react";

type Props = {
  name: string;
  discription: string;
  examples: Array<{
    name: string;
    description: string;
    link: string;
  }>;
};

const TemplateCard = ({ name, discription, examples }: Props) => {
  const locale = getCurrentLocale();

  return (
    // <div
    //   className={clsx(
    //     "flex w-full flex-col gap-2 rounded-xl border-2 bg-red-400 p-4 md:w-1/4",
    //     {
    //       "font-encode": locale === "en",
    //       "text-right font-hebrew ": locale === "he",
    //       "text-right font-arabic ": locale === "ar",
    //     },
    //   )}
    // >
    //   <p className=" text-3xl font-bold">{name}</p>
    //   <p className="text-2xl">{discription}</p>
    //   <div className="flex flex-col gap-2">
    //     {examples.map((example) => {
    //       return (
    //         <div key={example.name} className="flex flex-col gap-1">
    //           <p>{example.name}</p>
    //           <p>{example.description}</p>
    //           <p>{example.link}</p>
    //         </div>
    //       );
    //     })}
    //   </div>{" "}
    <div className=" rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 font-semibold">
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        className="flex w-full bg-gray-900  text-white"
      >
        <Tabs defaultValue="gallery">
          <TabsList>
            <TabsTab value="gallery" leftSection={<IconNote />}>
              Description
            </TabsTab>
            <TabsTab value="messages" leftSection={<IconMessageCircle />}>
              Examples
            </TabsTab>
          </TabsList>

          <TabsPanel value="gallery">Description tab content</TabsPanel>

          <TabsPanel value="messages">Examples tab content</TabsPanel>
        </Tabs>
      </Card>
    </div>
    // </div>
  );
};

export default TemplateCard;
