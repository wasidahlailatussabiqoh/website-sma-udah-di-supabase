import BeritaList from "../../components/BeritaList";

export const metadata = {
  title: "Berita & Kegiatan - SMAN 4 Muaro Jambi",
};

export default function BeritaPage() {
  return (
    <main className="bg-white text-slate-800 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5">
        <header className="mb-10">
          <span className="text-blue-700 text-sm font-semibold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
            Informasi Terkini
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Berita Sekolah
          </h1>
          <p className="text-slate-600 mt-2 text-base md:text-lg">
            Kumpulan berita, pengumuman, dan laporan kegiatan resmi SMAN 4 Muaro Jambi.
          </p>
        </header>

        <BeritaList />
      </div>
    </main>
  );
}
