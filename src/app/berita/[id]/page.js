import Link from "next/link";
import Image from "next/image";
import berita from "../../../data/berita";

export function generateStaticParams() {
  return berita.map((item) => ({
    id: item.id,
  }));
}

export default async function DetailBeritaPage({ params }) {
  const resolvedParams = await params;
  const item = berita.find((b) => b.id === resolvedParams.id);

  if (!item) {
    return (
      <main className="max-w-4xl mx-auto px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Berita Tidak Ditemukan</h1>
        <p className="text-slate-600 mt-3">Maaf, berita yang Anda cari tidak tersedia.</p>
        <Link
          href="/berita"
          className="inline-block mt-6 bg-[#173B73] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#122e5a] transition"
        >
          ← Kembali ke Daftar Berita
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white text-slate-800 py-12 md:py-16">
      <article className="max-w-3xl mx-auto px-5">
        <div className="mb-6">
          <Link
            href="/berita"
            className="text-[#173B73] font-semibold text-sm hover:underline inline-flex items-center gap-1"
          >
            ← Kembali ke Berita
          </Link>
        </div>

        <p className="text-[#173B73] text-sm font-semibold mb-2">{item.date}</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          {item.title}
        </h1>

        {/* FOTO PERTAMA */}
        {item.image && (
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden my-8 bg-slate-100 shadow-sm border border-slate-200/60">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* PARAGRAF PERTAMA & KEDUA */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
          <p>{item.content}</p>
        </div>

        {/* FOTO KEDUA */}
        {item.secondImage && (
          <div className="w-full my-8 py-6 flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <Image
                src={item.secondImage}
                alt={`${item.title} - Foto 2`}
                width={1400}
                height={900}
                className="w-full h-auto block rounded-xl object-contain shadow-md border border-slate-100" // Opsional: Tambahkan border tipis agar tetap rapi
              />
            </div>
          </div>
        )}
        {/* PARAGRAF KETIGA & KEEMPAT */}
        {item.secondContent && (
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-line text-base md:text-lg mt-4">
            <p>{item.secondContent}</p>
          </div>
        )}
      </article>
    </main>
  );
}