export const metadata = {
  title: "Profil Sekolah - SMAN 4 Muaro Jambi",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-800 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-5">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Tentang SMAN 4 Muaro Jambi
          </h1>
          <p className="text-slate-600 mt-2 text-base md:text-lg">
            Mengenal sejarah singkat, identitas, serta visi dan misi sekolah.
          </p>
        </header>

        <div className="space-y-10">
          {/* Deskripsi */}
          <section className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Profil Sekolah</h2>
            <p className="text-slate-600 leading-relaxed">
            SMA Negeri 4 Muaro Jambi merupakan sekolah menengah negeri yang berlokasi di Desa Marga, Kecamatan Sungai Bahar, Kabupaten Muaro Jambi, Provinsi Jambi. Berdiri sejak 23 Agustus 1993, SMAN 4 Muaro Jambi telah menjadi bagian dari perjalanan pendidikan dan perkembangan masyarakat di wilayah Sungai Bahar.
            Seiring perkembangan zaman, SMAN 4 Muaro Jambi terus berupaya menghadirkan pendidikan yang relevan dengan kebutuhan generasi masa kini. Pembelajaran tidak hanya berorientasi pada pencapaian akademik, tetapi juga memberikan ruang bagi peserta didik untuk mengembangkan karakter, kreativitas, keterampilan, minat, dan bakat.
            Dengan semangat belajar, berkolaborasi, dan berprestasi, seluruh warga sekolah bersama-sama membangun lingkungan pendidikan yang positif, terbuka terhadap perubahan, serta mendorong setiap peserta didik untuk mengenali potensi dan mencapai kemampuan terbaiknya.
            Bagi SMAN 4 Muaro Jambi, sekolah bukan sekadar tempat untuk belajar, tetapi juga ruang untuk tumbuh, menemukan pengalaman, membangun karakter, dan mempersiapkan diri menghadapi masa depan.  
            </p>
          </section>

          {/* Visi dan Misi */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-3 text-blue-700">Visi</h2>
              <p className="text-slate-600 leading-relaxed italic">
                &ldquo;Terwujudnya peserta didik yang unggul dalam prestasi, berkarakter, kreatif, dan berwawasan lingkungan, berlandaskan iman dan taqwa.&rdquo;
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-3 text-blue-700">Misi</h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm leading-relaxed">
                <li>Menyelenggarakan pmbelajaran yang aktif, inovatif, kreaktif, efektif, dan menyenangkan.</li>
                <li>Membina dan mengembangkan potensi akademik maupun non-akademik peserta didik secara optimal.</li>
                <li>Menanamkan nilai-nilai keimanan, ketaqwaan, dan budi pekerti luhur dalam kehidupan sehari-hari.</li>
                <li>Membentuk karakter disiplin, jujur, dan bertanggung jawab pada seluruh warga sekolah.</li>
                <li>Meningkatkan kompetensi pendidik dan tenaga kependidikan secara berkelanjutan</li>
                <li>Mewujudkan lingkungan sekolah yang bersih, sehat, aman, dan nyaman untuk belajar</li>
              </ul>
            </div>
          </section>

        {/* Struktur Organisasi */}
        <section className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Struktur Organisasi</h2>
          
          <p className="text-slate-600 leading-relaxed mb-4">
            Struktur organisasi SMA Negeri 4 Muaro Jambi tahun pelajaran 2026/2027:
          </p>

          <ul className="list-disc list-inside text-slate-600 space-y-2.5 text-base leading-relaxed">
            <li><strong>Kepala Sekolah:</strong> Bambang Sugiharto, S.Pd.</li>
            <li><strong>Komite Sekolah:</strong> Bangun Paranginangin</li>
            <li><strong>Wakil Kepala Sekolah Bidang Kurikulum:</strong> Sumadi, S.Pt, M.Pd</li>
            <li><strong>Wakil Kepala Sekolah Bidang Kesiswaan:</strong> Bambang Sugiharto, S.Pd</li>
            <li><strong>Wakil Kepala Sekolah Bidang Sarana & Prasarana:</strong> Taufik, S.Pd</li>
            <li><strong>Wakil Kepala Sekolah Bidang Hubungan Masyarakat:</strong> Subaryanto, S.Pd</li>
            <li><strong>Kepala Tata Usaha:</strong> Siti Rohanah, S.Pd</li>
            <li><strong>Koordinator BK (Bimbingan Konseling):</strong> Pandu Cahyo Buwono, S.Pd</li>
            <li><strong>Wali Kelas:</strong> Kelas X, XI, XII</li>
            <li><strong>Dewan Guru & Tenaga Kependidikan</strong></li>
          </ul> 
        </section>
 
        </div>
      </div>
    </main>
  );
}