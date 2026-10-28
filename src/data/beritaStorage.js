import defaultBerita from "./berita";

const KEY_BERITA = "beritaSekolah";
const KEY_LOGIN = "adminLogin";

export function getBerita() {
  if (typeof window === "undefined") return defaultBerita;

  try {
    const saved = localStorage.getItem(KEY_BERITA);
    if (saved === null) return defaultBerita;

    const data = JSON.parse(saved);
    return Array.isArray(data) ? data : defaultBerita;
  } catch (error) {
    console.error("Gagal membaca berita:", error);
    return defaultBerita;
  }
}

export function saveBerita(list) {
  if (typeof window === "undefined") return false;

  try {
    localStorage.setItem(KEY_BERITA, JSON.stringify(list));
    return true;
  } catch (error) {
    console.error("Gagal menyimpan berita:", error);
    return false;
  }
}

export function isLoggedIn() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(KEY_LOGIN) === "true";
}

export function loginAdmin() {
  localStorage.setItem(KEY_LOGIN, "true");
}

export function logoutAdmin() {
  localStorage.removeItem(KEY_LOGIN);
}
