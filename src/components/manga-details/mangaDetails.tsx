import { Manga } from '@/interfaces';
import { useEffect, useState } from 'react';

type mangaId = {
  id: string;
}

function MangaDetails({ id }: mangaId) {
  const [data, setManga] = useState<Manga>();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(`http://localhost:3000/api/manga/${id}`);
      const {data}: {data: Manga} = await resp.json();
      setManga(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{data?.manga_name}</h1>
      <img src={data?.cover_image} alt={data?.manga_name} />
      {/* Agrega más detalles del manga aquí */}
    </div>
  );
}

export default MangaDetails;
