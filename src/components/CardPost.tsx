import Image from "next/image";
import Link from "next/link";

export function CardPost() {
  return (
    <Link
      href={"/post"}
      className="w-full sm:max-w-[352px] h-full flex flex-col items-center justify-between gap-2 sm:gap-4 hover:brightness-75 transition-all"
    >
      <div className="flex w-full h-[200px] sm:h-[234px] relative rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex w-full flex-1 flex-col justify-between gap-1 sm:gap-2">
        <h1 className="font-bold text-lg sm:text-xl text-blue-600">
          Como desenvolver um Blog com Next.js
        </h1>
        <p className="text-zinc-600 hidden md:flex flex-1 text-justify lg:text-left text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div>
          <p className="font-bold text-zinc-900 text-sm md:text-base">
            Ademir Gustavo
          </p>
          <p className="text-zinc-600 text-xs md:text-sm">
            31 de Janeiro de 2023
          </p>
        </div>
      </div>
    </Link>
  );
}
