"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Carrossel from "../components/carrousel";
import { TimeTogether } from "@/components/time-together";
import { Footer } from "@/components/footet";

const MotionImage = motion(Image);

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-pink-100 via-white to-fuchsia-100 min-h-screen">
      <section
        id="hero"
        className="mx-auto p-8 flex flex-col min-h-screen pb-10 max-w-screen-lg gap-5"
      >
        <nav className="w-full flex items-center justify-between">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="h-2 rounded-full shadow-lg items-center flex justify-center"
          >
            <Heart size={45} className="text-fuchsia-400" />
          </motion.div>
        </nav>
        <div className="flex items-center mt-8 justify-between w-full">
          <div>
            <h1 className="text-left text-5xl md:text-6xl font-extrabold text-stone-800 leading-tight">
              Você sabia que <br />
              <span className="text-fuchsia-500">eu te amo?</span>
            </h1>

            <p className="text-lg md:text-xl mt-6 text-stone-600">
              Nátalia você é a pessoa que eu mais amo nesse mundo.
              <br />
              Quero passar minha vida ao seu lado,
              <br />
              te amando e te fazendo feliz.
            </p>
          </div>
          <MotionImage
            src="/assets/image.png"
            alt="Nós dois"
            width={400}
            height={400}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="rounded-2xl shadow-xl"
          />
        </div>
        <Link
          href="#love"
          className="mt-5 w-fit mx-auto bg-fuchsia-500 text-white px-6 py-3 rounded-full font-semibold text-lg transition hover:bg-fuchsia-600"
        >
          Clica aqui se você me ama também ❤️
        </Link>
      </section>
      <section
        id="love"
        className="relative scroll-mt-20 px-8 pt-12 pb-20 flex flex-col gap-16 max-w-screen-lg mx-auto"
      >
        <div className="text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Estamos compartilhando <span className="text-fuchsia-500">momentos</span>{" "}
            há:
          </h2>
          <div className="flex justify-center">
            <TimeTogether />
          </div>
        </div>

        <div className="space-y-4 px-4">
          <h2 className="text-3xl font-bold">
            Momentos <span className="text-fuchsia-500">especiais</span> ao seu
            lado
          </h2>
          <Carrossel />
        </div>
      </section>
      <Footer />
    </main>
  );
}
