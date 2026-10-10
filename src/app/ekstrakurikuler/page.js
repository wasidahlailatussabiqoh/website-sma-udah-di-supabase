export const metadata = {
  title: "Ekstrakurikuler - SMAN 4 Muaro Jambi",
};

export default function EkstrakurikulerPage() {
  const listEkskul = [
    {
      name: "Pramuka",
      desc: "Membentuk karakter disiplin, kepemimpinan, dan kecintaan terhadap alam serta tanah air.",
      jadwal: "Jumat, 15.30 WIB"
    },
    {
      name: "Paskibra",
      desc: "Melatih kedisiplinan baris-berbaris, ketegasan, dan jiwa nasionalisme yang tinggi.",
      jadwal: "Kamis, 16.00 WIB"
    },
    {
      name: "Palang Merah Remaja (PMR)",
      desc: "Membekali siswa keterampilan pertolongan pertama dan kepedulian sosial kemanusiaan.",
      jadwal: "Rabu, 15.30 WIB"
    },
    {
      name: "Olahraga (Futsal, Basket, Bulu Tangkis, Voli, Pencak Silat, Karate)",
      desc: "Menyalurkan bakat olahraga fisik, menjaga kebugaran, serta membangun kerja sama tim.",
      jadwal: "Fleksibel"
    },
    {
      name: "Seni Tari",
      desc: "Melestarikan seni budaya tradisional nusantara serta pengembangan kreativitas seni modern.",
      jadwal: "Sabtu, 14.00 WIB"
    },
    {
      name: "Rohis & Rohkris",
      desc: "Meningkatkan pembinaan iman, takwa, dan akhlak mulia sesuai ajaran agama masing-masing.",
      jadwal: "Jumat (Bergantian)"
    }
  ];

  return (
    <main className="bg-white text-slate-800 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-5">
        <header className="mb-10">
          <span className="text-blue-700 text-sm font-semibold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md">
            Pengembangan Bakat
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Kegiatan Ekstrakurikuler
          </h1>
          <p className="text-slate-600 mt-2 text-base md:text-lg">
            Berbagai wadah kegiatan positif untuk mengembangkan minat, bakat, dan keterampilan non-akademik peserta didik.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listEkskul.map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-xl text-slate-900 mb-2">{item.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="pt-3 border-t border-slate-100 text-xs text-blue-700 font-semibold">
                Jadwal: {item.jadwal}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}