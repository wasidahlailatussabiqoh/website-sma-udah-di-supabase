"use client";

import { useEffect, useState } from "react";
import BeritaCard from "./BeritaCard";
import { getBerita } from "../lib/beritaDb";

export default function BeritaList({ limit }) {
  const [berita, setBerita] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let batal = false;

    async function muatBerita() {
      try {
        const data = await getBerita();
        if (!batal) setBerita(data);
      } catch (err) {
        if (!batal) setError(err.message);
      }
    }

    muatBerita();

    return () => {
      batal = true;
    };
  }, []);

  if (error) {
    return (
      <p className="rounded border border-red-200 bg-red-50 p-3 text-red-700">
        Gagal memuat berita: {error}
      </p>
    );
  }

  if (berita === null) {
    return <p className="text-gray-500">Memuat berita...</p>;
  }

  if (berita.length === 0) {
    return <p className="text-gray-700">Belum ada berita.</p>;
  }

  const tampil = limit ? berita.slice(0, limit) : berita;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tampil.map((item) => (
        <BeritaCard
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          image={item.image}
          excerpt={item.excerpt}
        />
      ))}
    </div>
  );
}
