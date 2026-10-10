export const metadata = {
  title: "Kontak Sekolah - SMAN 4 Muaro Jambi",
};

export default function KontakPage() {
  return (
    <main className="bg-white text-slate-800 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-5">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Kontak & Informasi SMAN 4 Muaro Jambi
          </h1>
          <p className="text-slate-600 mt-2 text-base md:text-lg">
            Silakan hubungi kami melalui informasi resmi di bawah ini untuk keperluan administrasi atau informasi sekolah.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Informasi Alamat</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>Alamat Sekolah:</strong><br />
              Jl. Bougenvil No. 2, Desa Marga Manunggal, Kec. Sungai Bahar, 36365<br />
              
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>Jam Operasional:</strong><br />
              Senin - Jumat: 07.00 - 15.00 WIB<br />
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Saluran Komunikasi</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>Email Resmi:</strong><br />
              sman04muarojambi@gmail.com
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>Telepon / Kontak:</strong><br />
              0852-6609-1804
            </p>        
          </div>
        </div>
      </div>
    </main>
  );
}