import Image from "next/image";
import Link from "next/link";
import { getI18n, getCurrentLocale } from "~/locales/server";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { clsx } from "clsx";

const Header = async () => {
  const t = await getI18n();
  const locale = getCurrentLocale();
  const iconSize = 35;

  return (
    <section className="container flex w-full max-w-full flex-col items-stretch justify-center gap-6 md:flex-row">
      <div className="flex h-auto w-full ">
        <Image
          src="/logo/white_svg.svg"
          alt="Logo"
          width={700}
          height={700}
          unoptimized
          priority
        />
      </div>

      <div
        className={clsx("flex  flex-col justify-between  text-3xl", {
          "font-encode": locale === "en",
          "text-right font-hebrew text-4xl ": locale === "he",
          "text-right font-arabic text-4xl": locale === "ar",
        })}
      >
        <p className="text-5xl">{t("owner.name")}</p>
        <div className="flex flex-col gap-8 tracking-wider ">
          <p className="text-6xl">{t("owner.description")}</p>
          <p className="text-3xl">{t("owner.developer")}</p>
        </div>
        <span
          className={clsx("flex h-9 gap-6", {
            "justify-start": locale === "en",
            "justify-end": locale === "he" || locale === "ar",
          })}
        >
          <Link
            href="https://www.facebook.com/profile.php?id=100094054136377"
            target="_blank"
          >
            <IconBrandFacebook size={iconSize} />
          </Link>
          <Link href="https://www.instagram.com/orwa.s.shams/" target="_blank">
            <IconBrandInstagram size={iconSize} />
          </Link>
          <Link href="https://twitter.com/orwa_dev" target="_blank">
            <IconBrandTwitter size={iconSize} />
          </Link>
          <Link href="https://www.linkedin.com/in/orwa-sh/" target="_blank">
            <IconBrandLinkedin size={iconSize} />
          </Link>
          <Link href="https://github.com/OrwaShams" target="_blank">
            <IconBrandGithub size={iconSize} />
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Header;
