import BeritaDetail from "../../../components/BeritaDetail";

export default async function DetailBeritaPage({ params }) {
  const resolvedParams = await params;

  return <BeritaDetail id={resolvedParams.id} />;
}