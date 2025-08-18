import { Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JoinGroupCard({ group }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-[#1F2937] bg-[#1A1C33] p-5 px-6 py-8 text-white">
      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <div className="w-fit rounded-full bg-[#581C87]/50 px-2.5 py-0.5 text-xs font-medium text-[#D8B4FE]">
            {group.language}
          </div>

          <div className="w-fit rounded-full bg-[#065F46]/50 px-2.5 py-0.5 text-xs font-medium text-[#6EE7B7]">
            Intermediate
          </div>
        </div>

        <h3 className="mt-4.5 font-semibold">{group.title}</h3>

        <p className="mt-2 w-full max-w-56 text-xs text-[#9CA3AF]">
          {group.description}
        </p>
      </div>

      <div className="mt-4 flex items-center">
        {group.participants.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="profile picture"
            width={32}
            height={32}
            className={`shrink-0 rounded-full object-cover ${i > 0 && "-ml-4"}`}
          />
        ))}

        <div className="-ml-4 flex size-8 items-center justify-center rounded-full bg-[#4F46E5] text-xs font-medium text-white">
          {group.additionalParticipants}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1 text-xs text-[#9CA3AF]">
        <Clock className="mb-0.5 size-3.5" />
        {group.duration}
      </div>

      <Link
        href="/"
        className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#4F46E5] py-3 text-sm transition-all duration-200 ease-linear hover:bg-[#433BE3] active:scale-95"
      >
        <Users className="size-5" /> Join Group
      </Link>
    </div>
  );
}
