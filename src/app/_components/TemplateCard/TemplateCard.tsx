import { clsx } from "clsx";

import { getCurrentLocale } from "~/locales/server";

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
    <span
      className={clsx("flex w-full flex-col  gap-2 border-2 p-4 md:w-1/4", {
        "font-encode": locale === "en",
        "text-right font-hebrew ": locale === "he",
        "text-right font-arabic ": locale === "ar",
      })}
    >
      <p className="text-3xl font-bold">{name}</p>
      <p className="text-2xl">{discription}</p>
      <div className="flex flex-col gap-2">
        {examples.map((example) => {
          return (
            <div key={example.name} className="flex flex-col gap-1">
              <p>{example.name}</p>
              <p>{example.description}</p>
              <p>{example.link}</p>
            </div>
          );
        })}
      </div>
    </span>
  );
};

export default TemplateCard;
