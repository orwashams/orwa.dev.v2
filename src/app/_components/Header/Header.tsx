import Image from "next/image";
import Link from "next/link";
import { getI18n, getCurrentLocale } from "~/locales/server";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";

const Header = async () => {
  const t = await getI18n();
  const locale = getCurrentLocale();

  return (
    <section className=" flex w-full flex-col items-stretch gap-6 md:flex-row">
      <div className="h-fill relative flex w-full ">
        <Image
          src="/logo/white_svg.svg"
          alt="Logo"
          fill
          objectFit="contain"
          unoptimized
          priority
        />
      </div>

      <div
        className={clsx("flex flex-col  justify-between gap-9  text-3xl", {
          "font-encode": locale === "en",
          "text-right font-hebrew text-4xl ": locale === "he",
          "font-arabic text-right text-4xl": locale === "ar",
        })}
      >
        <p className="text-5xl">{t("owner.name")}</p>
        <div className="flex flex-col gap-4 tracking-wider">
          <p className="flex text-6xl">{t("owner.description")}</p>
          <p>{t("owner.developer")}</p>
        </div>
        <span className="flex h-9 gap-6">
          <Link
            href="https://www.facebook.com/profile.php?id=100094054136377"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookSquare} className="h-full" />
          </Link>
          <Link href="https://www.instagram.com/orwa.s.shams/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="h-full" />
          </Link>
          <Link href="https://twitter.com/orwa_dev" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="h-full" />
          </Link>
          <Link href="https://www.linkedin.com/in/orwa-sh/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="h-full" />
          </Link>
          <Link href="https://github.com/OrwaShams" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="h-full" />
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Header;
