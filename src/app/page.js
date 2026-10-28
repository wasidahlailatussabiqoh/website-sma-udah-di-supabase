import Image from "next/image";
import Link from "next/link";
import BeritaList from "../components/BeritaList";

export default function HomePage() {

  return (
    <main className="bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 md:py-24 text-white">
        {/* Foto Background Angkatan */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bgfotoangkatan.jpeg"
            alt="Foto Angkatan SMAN 4 Muaro Jambi"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay Biru */}
          <div className="absolute inset-0 bg-[#173B73]/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-5 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Teks Kiri */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Membangun Generasi{" "}
                <br />
                  Unggul, Berkarakter, & Berprestasi
              </h1>

              <p className="text-blue-100/90 text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
                Selamat datang di portal informasi resmi SMAN 4 Muaro Jambi. Kami berkomitmen menyelenggarakan pendidikan berkualitas tinggi yang mengedepankan akhlak mulia dan daya saing global.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/about"
                  className="bg-[#E9BD58] hover:bg-[#d8ab47] text-[#173B73] px-7 py-3.5 rounded-xl font-bold transition shadow-lg shadow-[#173B73]/30"
                >
                  Profil Sekolah
                </Link>

                <Link
                  href="/berita"
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold transition backdrop-blur-sm"
                >
                  Lihat Berita Terbaru
                </Link>
              </div>
            </div>

            {/* KOTAK LOGO */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-[#8ACFF8]/28 border border-white/20 rounded-3xl p-6 shadow-2xl flex items-center justify-center backdrop-blur-md">
                <Image
                  src="/logodiberanda.png"
                  alt="Logo SMAN 4 Muaro Jambi"
                  width={240}
                  height={240}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHT CARDS */}
      <section className="max-w-6xl mx-auto px-5 -mt-10 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-7 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="font-bold text-xl text-slate-900">Akademik Berkualitas</h3>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              Kurikulum merdeka yang dirancang untuk mengasah potensi kognitif, kritis, dan kreativitas peserta didik.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="font-bold text-xl text-slate-900">Ekstrakurikuler Aktif</h3>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              Wadah pengembangan minat dan bakat siswa melalui berbagai kegiatan olahraga, seni, dan organisasi.
            </p>
            <Link
              href="/ekstrakurikuler"
              className="text-[#173B73] text-sm font-semibold inline-block mt-4 hover:underline"
            >
              Lihat kegiatan 
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="font-bold text-xl text-slate-900">Prestasi Teruji</h3>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              Berbagai pencapaian membanggakan tingkat kabupaten, provinsi, hingga nasional oleh siswa-siswi kami.
            </p>
            <Link
              href="/prestasi"
              className="text-[#173B73] text-sm font-semibold inline-block mt-4 hover:underline"
            >
              Lihat prestasi 
            </Link>
          </div>
        </div>
      </section>

      {/* PROFIL SINGKAT */}
      <section className="max-w-6xl mx-auto px-5 py-12">
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl">

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
              Mengenal SMAN 4 Muaro Jambi Lebih Dekat
            </h2>

            <p className="text-slate-600 leading-relaxed mt-4 text-base md:text-lg">
              SMAN 4 Muaro Jambi merupakan institusi pendidikan menengah atas unggulan yang berdedikasi melahirkan lulusan berintegritas tinggi, cerdas, terampil, serta adaptif terhadap perkembangan zaman.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 text-slate-700 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#173B73] font-bold">Alamat:</span>
                <span>Jl. Bougenvil No. 2, Desa Marga Manunggal, Kec. Sungai Bahar, Kabupaten Muaro Jambi, Provinsi Jambi, 36365</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#173B73] hover:bg-[#122e5a] text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Selengkapnya Tentang Sekolah 
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section className="bg-slate-50/70 border-t border-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                Berita & Kegiatan Terbaru
              </h2>
              <p className="text-slate-600 mt-2">
                Ikuti perkembangan, pengumuman, dan agenda kegiatan terbaru dari lingkungan sekolah.
              </p>
            </div>

            <Link
              href="/berita"
              className="text-[#173B73] font-bold hover:text-blue-900 transition inline-flex items-center gap-1 self-start md:self-auto"
            >
              Semua Berita 
            </Link>
          </div>

          <BeritaList limit={3} />
        </div>
      </section>
    </main>
  );
}