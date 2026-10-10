export const metadata = {
  title: "Prestasi Siswa & Sekolah - SMAN 4 Muaro Jambi",
};

export default function PrestasiPage() {
  // OSN 2026
  const osn2026 = [
    { nama: "L. R Valentina Panjaitan", bidang: "OSN Bidang Matematika" },
    { nama: "Rehan Yosafat Assa", bidang: "OSN Bidang Fisika" },
    { nama: "Faris Alfareza Sembi", bidang: "OSN Bidang Kimia" },
    { nama: "Aini Nur Syifa", bidang: "OSN Bidang Astronomi" },
    { nama: "Juliana Rizki Prameswari", bidang: "OSN Bidang Astronomi" },
    { nama: "Meilinda Lidya Kartika Listi", bidang: "OSN Bidang Astronomi" },
    { nama: "Nita Mutyara Ramadhani", bidang: "OSN Bidang Ekonomi" },
  ];

  // KSN-K 2023
  const ksn2023 = [
    { bidang: "Fisika", pemenang: "Lucyana Amelia M. & Farhan Alya" },
    { bidang: "Geografi", pemenang: "Kurniati & Hesti Pawesri" },
    { bidang: "Informatika", pemenang: "Sherlyna Sari Gulo & Indira Syahla Azzahra" },
    { bidang: "Kebumian", pemenang: "Wasidah Lailatus Sabiqoh & Charita Multiari" },
    { bidang: "Kimia", pemenang: "Fajra Dibianza S." },
  ];

  // FLS2N & O2SN 2023
  const fls2nO2sn2023 = [
    { juara: "Juara 1", lomba: "Renang 3 Gaya (Putra)", nama: "Muhammad Ramadhan" },
    { juara: "Juara 1", lomba: "Badminton (Putri)", nama: "Dila" },
    { juara: "Juara 1", lomba: "Cipta Lagu", nama: "Ines Natasya" },
    { juara: "Juara 2", lomba: "Atletik (Putri)", nama: "Wasidah Lailatus Sabiqoh" },
    { juara: "Juara 2", lomba: "Vokal Solo", nama: "Jonathan" },
    { juara: "Juara 2", lomba: "Cipta Puisi", nama: "Sukma Ayu" },
    { juara: "Juara 3", lomba: "Renang 3 Gaya (Putri)", nama: "Nabila Sera" },
    { juara: "Juara 3", lomba: "Pencak Silat", nama: "Rafif" },
    { juara: "Juara 3", lomba: "Gitar Solo", nama: "Satria Wibawa" },
  ];

  // Prestasi Lainnya
  const prestasiLainnya = [
    {
      judul: "Juara 1 LCC 4 Pilar MPR RI",
      tingkat: "Tingkat Kabupaten",
      tahun: "2026",
      keterangan: "Tim Lomba Cerdas Cermat 4 Pilar MPR RI SMAN 4 Muaro Jambi.",
    },
    {
      judul: "Juara 2 Turnamen Voli Putri Antar SMA/SMK",
      tingkat: "Tingkat Provinsi",
      tahun: "2022",
      keterangan: "Tim Bola Voli Putri SMAN 4 Muaro Jambi.",
    },
    {
      judul: "Juara 4 BNNK Jambi Futsal Competition",
      tingkat: "Tingkat Provinsi",
      tahun: "2022",
      keterangan: "Tim Futsal SMAN 4 Muaro Jambi.",
    },
  ];

  return (
    <main className="bg-white text-slate-800 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5">
        <header className="mb-12">
          <span className="text-[#173B73] text-xs md:text-sm font-semibold uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-md">
            Pencapaian Siswa
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Prestasi SMAN 4 Muaro Jambi
          </h1>
          <p className="text-slate-600 mt-2 text-base md:text-lg">
            Daftar kebanggaan dan pencapaian siswa-siswi SMAN 4 Muaro Jambi di bidang akademik maupun non-akademik.
          </p>
        </header>

        <div className="space-y-12">
          
          {/* OSN 2026 & LCC 2026 */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Olimpiade Sains Nasional (OSN) & Lomba Akademik 2026
                </h2>
                <p className="text-slate-500 text-sm">Tingkat Kabupaten</p>
              </div>
              <span className="bg-[#173B73] text-white text-xs font-bold px-3 py-1.5 rounded-lg self-start md:self-auto">
                Tahun 2026
              </span>
            </div>

            {/* List Pemenang OSN 2026 */}
            <h3 className="font-bold text-slate-800 text-base mb-3">Pemenang OSN Tingkat Kabupaten 2026:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {osn2026.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm">
                  <p className="text-xs font-bold text-[#173B73] uppercase tracking-wider">{item.bidang}</p>
                  <p className="font-semibold text-slate-800 text-sm mt-1">{item.nama}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FLS2N & O2SN 2023 */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  FLS2N & O2SN Tingkat Kabupaten 2023
                </h2>
                <p className="text-slate-500 text-sm">Festival Literasi, Seni, & Olimpiade Olahraga Siswa</p>
              </div>
              <span className="bg-[#173B73] text-white text-xs font-bold px-3 py-1.5 rounded-lg self-start md:self-auto">
                Tahun 2023
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fls2nO2sn2023.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-blue-50 text-[#173B73] text-xs font-bold px-2.5 py-1 rounded-md mb-2">
                      {item.juara}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm">{item.lomba}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mt-2 pt-2 border-t border-slate-100 font-medium">
                    {item.nama}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* KSN-K 2023 */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Kompetisi Sains Nasional Kabupaten (KSN-K) 2023
                </h2>
                <p className="text-slate-500 text-sm">Pemenang Perwakilan SMAN 4 Muaro Jambi</p>
              </div>
              <span className="bg-[#173B73] text-white text-xs font-bold px-3 py-1.5 rounded-lg self-start md:self-auto">
                Tahun 2023
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ksn2023.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm">
                  <p className="text-xs font-bold text-[#173B73] uppercase tracking-wider">Bidang {item.bidang}</p>
                  <p className="font-semibold text-slate-800 text-sm mt-1">{item.pemenang}</p>
                </div>
              ))}
            </div>
          </section>

          {/* KEJUARAAN OLAHRAGA & LOMBA LAINNYA */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8">
            <div className="mb-6 border-b border-slate-200 pb-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Kejuaraan Olahraga & Kompetisi Regional
              </h2>
              <p className="text-slate-500 text-sm">Pencapaian Tim dan Kontingen Sekolah</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {prestasiLainnya.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
                      <span className="bg-slate-100 px-2.5 py-1 rounded-md text-[#173B73] font-bold">{item.tingkat}</span>
                      <span>{item.tahun}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{item.judul}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">{item.keterangan}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}