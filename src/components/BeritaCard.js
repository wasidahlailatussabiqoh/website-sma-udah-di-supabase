import Link from "next/link";
import Image from "next/image";

export default function BeritaCard({ id, title, date, image, excerpt }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col group">
      {image && (
        <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs text-blue-700 font-semibold mb-2">{date}</p>
        <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-700 transition line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mt-2 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        <div className="mt-6 pt-4 border-t border-slate-100">
          <Link
            href={`/berita/${id}`}
            className="text-blue-700 text-sm font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition"
          >
            Baca Selengkapnya →
          </Link>
        </div>
      </div>
    </div>
  );
}