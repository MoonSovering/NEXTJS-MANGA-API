
import useFetchManga from '@/hooks/fetchManga';
import {Card, Image, CardHeader, CardBody, Divider} from "@nextui-org/react";
import Link from 'next/link';
import React from 'react'

export default function MangaCard() {
    const data = useFetchManga();

  return (
    <>
        <div className="contianer mx-auto">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {data.map((manga) => (
                        <div
                            key={manga.id}
                            className='shadow rounded-lg p-4'
                        >
                            <Link href={`/manga/${manga.id}`}>
                                <img
                                src={manga.cover_image}
                                alt=''
                                className='w-full h-32 object-fill rounded'
                                />
                                <h3 className='text-sm break-words'>{manga.manga_name}</h3>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    </>
  )
}
