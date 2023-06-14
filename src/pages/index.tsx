import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { CardPost } from "@/components/CardPost";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="w-full max-w-[1120px] flex flex-col mx-auto pb-12 px-4">
        <Header />

        <Link
          href={"/post"}
          className="w-full h-full flex gap-4 lg:gap-8 flex-col sm:flex-row items-center justify-center mt-12 hover:brightness-75 transition-all"
        >
          <div className="flex flex-1 w-full h-full min-h-[240px] md:min-h-[334px] relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-1 h-full flex-col gap-3 lg:gap-6">
            <h1 className="font-bold text-3xl md:text-[40px] text-blue-600">
              Como desenvolver um Blog com Next.js
            </h1>
            <p className="text-zinc-600 text-sm md:text-base text-justify lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              velit sit amet tortor vulputate ultricies id nec arcu. Maecenas ut
              consequat justo. Sed consequat eleifend tortor, ac pharetra ex
              placerat non. Duis rhoncus eu lacus vel bibendum. Nunc euismod
              odio id elementum scelerisque.
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

        <div className="flex flex-col items-center sm:grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-12">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
    </>
  );
}
