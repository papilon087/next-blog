import Image from "next/image";

export function Header() {
  return (
    <header className="w-full h-28 flex items-center">
      <Image src="/logo.svg" alt="Logo Blog-Tech" width={229} height={50} />
    </header>
  );
}
