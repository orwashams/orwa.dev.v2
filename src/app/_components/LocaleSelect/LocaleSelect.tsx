import Link from "next/link";
import React from "react";
import { getCurrentLocale } from "~/locales/server";

const LocaleSelect = () => {
  const locale = getCurrentLocale();

  return (
    <div className="flex justify-center gap-4 md:justify-start ">
      <div className="bg-[#0d1124] p-5">
        <Link href={"/he"}>🇮🇱 עברית</Link>
      </div>
      <div className="bg-[#0d1124] p-5 font-encode font-bold">
        <Link href={"/en"}>English 🇺🇸</Link>
      </div>
      <div className="bg-[#0d1124] p-5 font-arabic">
        <Link href={"/ar"}>🇸🇦 عربي</Link>
      </div>
    </div>
  );
};

export default LocaleSelect;
