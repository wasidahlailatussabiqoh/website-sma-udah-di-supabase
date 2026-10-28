
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import {
  getBerita,
  tambahBerita,
  ubahBerita,
  hapusBerita,
  importBeritaAwal,
} from "../../../lib/beritaDb";

const formAwal = {
  title: "",
  date: "",
  category: "Kegiatan",
  image: "/beritatka.png",
  content: "",
  image_extra: "",
  content_extra: "",
};

export default function DashboardPage() {
  const router = useRouter();
  const [siap, setSiap] = useState(false);
  const [email, setEmail] = useState("");
  const [berita, setBerita] = useState([]);
  const [form, setForm] = useState(formAwal);
  const [editId, setEditId] = useState(null);
  const [pesan, setPesan] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let aktif = true;

    async function mulai() {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) throw error;
        if (!aktif) return;

        if (!data.session) {
          router.replace("/admin/login");
          return;
        }

        setEmail(data.session.user.email || "");
        setSiap(true);

        const rows = await getBerita();
        if (aktif) setBerita(rows);
      } catch (err) {
        if (aktif) setPesan("Gagal memuat dashboard: " + err.message);
      }
    }

    mulai();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event) => {
        if (event === "SIGNED_OUT") {
          router.replace("/admin/login");
        }
      }
    );

    return () => {
      aktif = false;
      listener.subscription.unsubscribe();
    };
  }, [router]);

  function ubahForm(e) {
    setForm((lama) => ({
      ...lama,
      [e.target.name]: e.target.value,
    }));
  }

  async function muatUlang() {
    const rows = await getBerita();
    setBerita(rows);
  }

  async function simpan(e) {
    e.preventDefault();
    setLoading(true);
    setPesan("");

    const isi = form.content.trim();

    const data = {
      title: form.title.trim(),
      date: form.date.trim(),
      category: form.category,
      image: form.image.trim() || "/beritatka.png",
      excerpt: isi.slice(0, 120),
      content: isi,
      image_extra: form.image_extra.trim() || null,
      content_extra: form.content_extra.trim() || null,
    };

    try {
      if (editId === null) {
        await tambahBerita(data);
      } else {
        await ubahBerita(editId, data);
      }

      await muatUlang();
      setForm(formAwal);
      setEditId(null);
      setPesan("Berita berhasil disimpan ke Supabase.");
    } catch (err) {
      setPesan("Gagal menyimpan berita: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  function edit(item) {
    setEditId(item.id);
    setForm({
      title: item.title || "",
      date: item.date || "",
      category: item.category || "Umum",
      image: item.image || "",
      content: item.content || "",
      image_extra: item.image_extra || "",
      content_extra: item.content_extra || "",
    });
    setPesan("");
  }

  async function hapus(item) {
    if (!window.confirm(`Hapus berita "${item.title}"?`)) return;

    setLoading(true);
    setPesan("");

    try {
      await hapusBerita(item.id);
      await muatUlang();
      if (editId === item.id) {
        setEditId(null);
        setForm(formAwal);
      }
      setPesan("Berita berhasil dihapus.");
    } catch (err) {
      setPesan("Gagal menghapus berita: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  async function impor() {
    setLoading(true);
    setPesan("");

    try {
      const jumlah = await importBeritaAwal();
      await muatUlang();
      setPesan(
        jumlah > 0
          ? `${jumlah} berita awal berhasil diimpor.`
          : "Berita awal sudah tersedia atau tidak ada data baru."
      );
    } catch (err) {
      setPesan("Gagal mengimpor berita: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      setPesan("Gagal logout: " + error.message);
      return;
    }

    router.replace("/admin/login");
  }

  if (!siap) {
    return (
      <main className="p-10 text-center">
        <p>Memuat dashboard...</p>
        {pesan && <p className="mt-3 text-red-600">{pesan}</p>}
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-900">
              Dashboard Admin
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Login sebagai {email} · Total berita: {berita.length}
            </p>
          </div>

          <button
            onClick={logout}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            Logout
          </button>
        </header>

        {pesan && (
          <p className="mb-5 rounded-lg bg-white p-4 text-sm text-gray-800">
            {pesan}
          </p>
        )}

        <section className="mb-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">
            {editId === null ? "Tambah Berita" : "Edit Berita"}
          </h2>

          <form onSubmit={simpan} className="grid gap-4 md:grid-cols-2">
            <input
              name="title"
              placeholder="Judul berita"
              value={form.title}
              onChange={ubahForm}
              required
              className="rounded-lg border p-3"
            />

            <input
              name="date"
              placeholder="Tanggal berita"
              value={form.date}
              onChange={ubahForm}
              required
              className="rounded-lg border p-3"
            />

            <select
              name="category"
              value={form.category}
              onChange={ubahForm}
              className="rounded-lg border bg-white p-3"
            >
              {[
                "Kegiatan",
                "Prestasi",
                "Olahraga",
                "Ekstrakurikuler",
                "Upacara",
                "Hari Nasional",
                "Umum",
              ].map((kategori) => (
                <option key={kategori}>{kategori}</option>
              ))}
            </select>

            <input
              name="image"
              placeholder="Path atau URL gambar"
              value={form.image}
              onChange={ubahForm}
              className="rounded-lg border p-3"
            />

            <textarea
              name="content"
              placeholder="Isi berita"
              value={form.content}
              onChange={ubahForm}
              required
              rows={5}
              className="rounded-lg border p-3 md:col-span-2"
            />

            <input
              name="image_extra"
              placeholder="Gambar tambahan (opsional)"
              value={form.image_extra}
              onChange={ubahForm}
              className="rounded-lg border p-3 md:col-span-2"
            />

            <textarea
              name="content_extra"
              placeholder="Isi tambahan (opsional)"
              value={form.content_extra}
              onChange={ubahForm}
              rows={3}
              className="rounded-lg border p-3 md:col-span-2"
            />

            <div className="flex flex-wrap gap-3 md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white disabled:opacity-50"
              >
                {loading
                  ? "Memproses..."
                  : editId === null
                    ? "Tambah Berita"
                    : "Simpan Perubahan"}
              </button>

              {editId !== null && (
                <button
                  type="button"
                  onClick={() => {
                    setEditId(null);
                    setForm(formAwal);
                  }}
                  className="rounded-lg border px-5 py-3"
                >
                  Batal
                </button>
              )}

              <button
                type="button"
                onClick={impor}
                disabled={loading}
                className="rounded-lg border border-blue-300 px-5 py-3 text-blue-700 disabled:opacity-50"
              >
                Impor Berita Awal
              </button>
            </div>
          </form>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">Daftar Berita</h2>

          {berita.length === 0 ? (
            <p className="text-gray-600">
              Belum ada berita di database. Klik Impor Berita Awal.
            </p>
          ) : (
            <div className="space-y-3">
              {berita.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-wrap items-center justify-between gap-3 border-b pb-3"
                >
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      {item.date} · {item.category}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => edit(item)}
                      disabled={loading}
                      className="text-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => hapus(item)}
                      disabled={loading}
                      className="text-red-600"
                    >
                      Hapus
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
