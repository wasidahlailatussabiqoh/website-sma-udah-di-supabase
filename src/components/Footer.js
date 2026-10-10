import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#173B73] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-0.5 flex items-center justify-center shrink-0">
                <Image
                  src="/logosmanpa.jpeg"
                  alt="Logo SMAN 4 Muaro Jambi"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-white font-bold text-lg">SMAN 4 Muaro Jambi</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Sekolah menengah atas unggulan yang berfokus pada pembentukan karakter luhur, prestasi akademik, dan kecakapan hidup peserta didik.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-white font-semibold text-base">Menu Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">About</Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-blue-400 transition">Berita</Link>
              </li>
              <li>
                <Link href="/prestasi" className="hover:text-blue-400 transition">Prestasi</Link>
              </li>
              <li>
                <Link href="/ekstrakurikuler" className="hover:text-blue-400 transition">Ekstrakurikuler</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-blue-400 transition">Kontak</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-white font-semibold text-base">Kontak & Informasi</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Alamat: Jl. Bougenvil No. 2, Desa Marga Manunggal, Kec. Sungai Bahar, Kabupaten Muaro Jambi, Provinsi Jambi, 36365<br />
              Email: sman04muarojambi@gmail.com<br />
              Telepon: 0852-6609-1804
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} SMAN 4 Muaro Jambi. Hak Cipta Dilindungi.</p>
          <p>Website Resmi Sekolah Modern</p>
        </div>
      </div>
    </footer>
  );
}