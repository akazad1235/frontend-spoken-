import Image from "next/image";
import { ArrowRight, Calendar, LucideTag, User } from "lucide-react";
import Link from "next/link";

export default function BlogCard({ blog }) {
  const { category, title, description, date, author, image, link } = blog;

  return (
    <div className="bg-midnight overflow-hidden rounded-lg">
      <div className="relative h-48 w-full">
        <Image src={image} alt="language" fill className="object-cover" />
      </div>

      <div className="p-6">
        <div className="text-lavender flex items-center gap-1 text-[10.5px]">
          <LucideTag size={14} /> {category}
        </div>

        <h2 className="mt-3 line-clamp-2 text-lg font-medium text-white">
          {title}
        </h2>

        <p className="text-charcoal mt-3 line-clamp-3 w-full max-w-80 text-sm">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="text-slate flex items-center gap-1 text-sm">
            <Calendar size={16} /> <p>{date}</p>
          </div>
          <div className="text-slate flex items-center gap-1 text-xs">
            <User size={16} /> <p>{author}</p>
          </div>
        </div>

        <Link
          href="/"
          className="text-lavender mt-5 flex items-center gap-1 text-xs font-medium"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
