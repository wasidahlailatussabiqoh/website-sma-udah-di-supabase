import { supabase, supabaseSiap } from "./supabase";
import defaultBerita from "../data/berita";

function cekSupabase() {
  if (!supabaseSiap) {
    throw new Error(
      "Supabase belum dikonfigurasi. Periksa file .env.local lalu restart npm run dev."
    );
  }
}

export async function getBerita() {
  cekSupabase();

  const { data, error } = await supabase
    .from("berita")
    .select("*")
    .order("created_at", { ascending: false })
    .order("id", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

export async function getBeritaById(id) {
  cekSupabase();

  const angka = Number(id);
  if (!Number.isInteger(angka)) return null;

  const { data, error } = await supabase
    .from("berita")
    .select("*")
    .eq("id", angka)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
}

export async function tambahBerita(item) {
  cekSupabase();

  const { error } = await supabase
    .from("berita")
    .insert(item);

  if (error) throw new Error(error.message);
}

export async function ubahBerita(id, item) {
  cekSupabase();

  const { data, error } = await supabase
    .from("berita")
    .update(item)
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  if (!data || data.length === 0) {
    throw new Error(
      "Berita tidak berubah. Periksa akun admin dan aturan keamanan RLS."
    );
  }
}

export async function hapusBerita(id) {
  cekSupabase();

  const { data, error } = await supabase
    .from("berita")
    .delete()
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  if (!data || data.length === 0) {
    throw new Error(
      "Berita tidak terhapus. Periksa akun admin dan aturan keamanan RLS."
    );
  }
}

export async function importBeritaAwal() {
  cekSupabase();

  const kategoriAwal = {
    "1": "Prestasi",
    "2": "Kegiatan",
    "3": "Hari Nasional",
    "4": "Hari Nasional",
    "5": "Upacara",
    "6": "Prestasi",
  };

  const rows = defaultBerita.map((item) => ({
    id: Number(item.id),
    title: item.title,
    date: item.date,
    category: item.category || kategoriAwal[String(item.id)] || "Umum",
    image: item.image || "/beritatka.png",
    excerpt: item.excerpt || "",
    content: item.content || "",
    image_extra: item.secondImage || item.image_extra || null,
    content_extra: item.secondContent || item.content_extra || null,
  }));

  const { data, error } = await supabase
    .from("berita")
    .upsert(rows, {
      onConflict: "id",
      ignoreDuplicates: true,
    })
    .select();

  if (error) throw new Error(error.message);
  return data ? data.length : 0;
}
