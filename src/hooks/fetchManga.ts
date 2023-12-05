'use client'

import { Manga } from '@/interfaces';
import {useState, useEffect} from 'react'

export default function useFetchManga() {

    const [data, setData] = useState<Manga[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('http://localhost:3000/api/manga');
      const {data}: {data: Manga[]} = await resp.json();
      setData(data);
    };

    fetchData();
  }, []);

  return data;

}