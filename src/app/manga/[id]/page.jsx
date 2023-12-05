'use client'

import MangaDetails from "@/components/manga-details/mangaDetails"

export default function Manga({ params }) {


  return <div>
    <MangaDetails id={params.id} />
  </div>
}
