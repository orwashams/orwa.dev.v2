import Image from "next/image";
import Link from "next/link";

import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <section className="flex w-full items-stretch gap-6">
      <div className="flex ">
        <Image
          src="/logo/white_svg.svg"
          alt="Logo"
          width={900}
          height={900}
          unoptimized
        />
      </div>

      <div className="font-encode flex  flex-col justify-between gap-9 text-3xl">
        <p>Orwa Shams</p>
        <div>
          <p className="flex text-4xl">
            I&apos;ll develop your digital product.
          </p>
          <p>
            Websites, mobile applications, or custom software tailored to meet
            your specific needs.
          </p>
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
