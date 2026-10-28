"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBeritaById } from "../lib/beritaDb";

export default function BeritaDetail({ id }) {
  const [item, setItem] = useState(null);
  const [selesai, setSelesai] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let batal = false;

    async function muatBerita() {
      try {
        const data = await getBeritaById(id);
        if (!batal) setItem(data);
      } catch (err) {
        if (!batal) setError(err.message);
      } finally {
        if (!batal) setSelesai(true);
      }
    }

    muatBerita();

    return () => {
      batal = true;
    };
  }, [id]);

  if (!selesai) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-500">Memuat berita...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <p className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-red-700">
          Gagal memuat berita: {error}
        </p>
        <Link href="/berita" className="text-blue-700 hover:underline">
          Kembali ke Berita
        </Link>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="mb-4 text-2xl font-bold text-blue-800">
          Berita tidak ditemukan
        </h1>
        <Link href="/berita" className="text-blue-700 hover:underline">
          Kembali ke Berita
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/berita" className="text-blue-700 hover:underline text-sm">
        ← Kembali ke Berita
      </Link>

      <h1 className="mt-5 mb-3 text-3xl font-bold text-blue-800">
        {item.title}
      </h1>

      <p className="mb-6 text-sm text-gray-500">
        {item.date}
        {item.category ? ` • ${item.category}` : ""}
      </p>

      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          width={1000}
          height={600}
          unoptimized
          className="mb-6 h-auto max-h-[500px] w-full rounded-xl object-cover"
        />
      )}

      {item.excerpt && (
        <p className="mb-6 text-lg font-medium text-gray-700">
          {item.excerpt}
        </p>
      )}

      <div className="whitespace-pre-line text-gray-700 leading-8">
        {item.content}
      </div>

      {item.image_extra && (
        <Image
          src={item.image_extra}
          alt={`Gambar tambahan: ${item.title}`}
          width={1000}
          height={600}
          unoptimized
          className="my-6 h-auto w-full rounded-xl"
        />
      )}

      {item.content_extra && (
        <div className="mt-4 whitespace-pre-line text-gray-700 leading-8">
          {item.content_extra}
        </div>
      )}
    </main>
  );
}
