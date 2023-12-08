import { clsx } from "clsx";

import { getCurrentLocale, getI18n } from "~/locales/server";

import {
  Card,
  Button,
  Modal,
  CardSection,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconNote,
  Icon123,
} from "@tabler/icons-react";
import Link from "next/link";
import { DetailsModal } from "../DetailsModal";

type Props = {
  name: string;
  discription: string;
  examples: Array<{
    name: string;
    description: string;
    link: string;
  }>;
};

const TemplateCard = async ({ name, discription, examples }: Props) => {
  const locale = getCurrentLocale();
  const t = await getI18n();

  return (
    <div className=" rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 font-semibold">
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        bg={"#314155"}
        className=" text-white"
      >
        <CardSection dir={locale === "en" ? "ltr" : "rtl"}>
          <div className="flex  justify-center p-3">
            <p className="text-center text-3xl">{name}</p>
          </div>
        </CardSection>

        <CardSection>
          <Tabs defaultValue="description" color="gray">
            <TabsList grow dir={locale === "en" ? "ltr" : "rtl"}>
              <TabsTab value="description" className="text-xl">
                {t("general.description")}
              </TabsTab>
              <TabsTab value="examples" className="text-xl">
                {t("general.examples")}
              </TabsTab>
            </TabsList>

            <TabsPanel
              value="description"
              dir={locale === "en" ? "ltr" : "rtl"}
              className="p-4"
            >
              <div className="text-center text-xl">{discription}</div>
            </TabsPanel>

            <TabsPanel
              value="examples"
              dir={locale === "en" ? "ltr" : "rtl"}
              className="p-4"
            >
              <div className="flex flex-col items-center gap-2  text-xl text-blue-400">
                {examples.map((example) => {
                  return (
                    <Link
                      key={example.name}
                      href={example.link}
                      target="_blank"
                    >
                      {example.name}
                    </Link>
                  );
                })}
              </div>
            </TabsPanel>
          </Tabs>
        </CardSection>

        <DetailsModal name={name} />
      </Card>
    </div>
  );
};

export default TemplateCard;
