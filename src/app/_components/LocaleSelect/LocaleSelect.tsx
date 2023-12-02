import Link from "next/link";
import React from "react";

const LocaleSelect = () => {
  return (
    <div className="flex justify-center gap-4 md:justify-start ">
      <div className="flex">
        <Link href={"/he"} className="bg-[#0d1124] p-5">
          🇮🇱 עברית
        </Link>
      </div>
      <div className="flex">
        <Link href={"/en"} className="bg-[#0d1124] p-5 font-encode font-bold">
          English 🇺🇸
        </Link>
      </div>
      <div className="flex">
        <Link href={"/ar"} className="bg-[#0d1124] p-5 font-arabic">
          🇸🇦 عربي
        </Link>
      </div>
    </div>
  );
};

export default LocaleSelect;
