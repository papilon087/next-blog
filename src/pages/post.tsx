import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/Header";

export default function Post() {
  return (
    <>
      <Head>
        <title>Blog Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="w-full max-w-[1120px] flex flex-col mx-auto pb-12">
        <Header />

        <Link
          href="/"
          className="flex w-full max-w-fit px-4 font-bold text-zinc-900 hover:text-zinc-600"
        >
          Voltar
        </Link>

        <div className="w-full h-full flex flex-col mt-8">
          <div className="flex w-full h-[392px] relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex w-full flex-col mt-8">
            <h1 className="font-bold text-[40px] text-blue-600">
              Como desenvolver um Blog com Next.js
            </h1>
            <div>
              <p className="font-bold text-zinc-900">Ademir Gustavo</p>
              <p className="text-zinc-600 text-sm">31 de Janeiro de 2023</p>
            </div>
            <p className="text-zinc-600 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              velit sit amet tortor vulputate ultricies id nec arcu. Maecenas ut
              consequat justo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
