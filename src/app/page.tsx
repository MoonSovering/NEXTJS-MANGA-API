'use client'

import MangaCard from "@/components/card/card";

export default function Home() {


  return (
    <>
      <div className="flex items-center text-white p-4">
        <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
        <h1 className="text-3xl">Ultimos mangas agregados</h1>

      </div>
    <MangaCard />

    </>
  );

}


