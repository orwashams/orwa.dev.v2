import Image from "next/image";

const Header = () => {
  return (
    <section className="container flex flex-col items-center bg-red-700 p-32 sm:items-end">
      <Image src="/logo/white_svg.svg" alt="Logo" width={500} height={500} />
    </section>
  );
};

export default Header;
