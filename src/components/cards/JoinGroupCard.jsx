import { Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JoinGroupCard({ group }) {
  return (
    <div className="bg-midnight flex flex-col overflow-hidden rounded-xl border border-[#1F2937] p-5 px-6 py-8 text-white">
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

        <p className="text-charcoal mt-2 w-full max-w-56 text-xs">
          {group.description}
        </p>
      </div>

      <div className="mt-4 flex items-center">
        {group.participants.map((img, i) => (
          <div
            key={i}
            className={`relative h-8 w-8 shrink-0 ${i > 0 && "-ml-4"}`}
          >
            <Image
              src={img}
              alt="profile picture"
              fill
              className="rounded-full object-cover"
            />
          </div>
        ))}

        <div className="bg-purple -ml-4 flex size-8 items-center justify-center rounded-full text-xs font-medium text-white">
          {group.additionalParticipants}
        </div>
      </div>

      <div className="text-charcoal mt-4 flex items-center gap-1 text-xs">
        <Clock className="mb-0.5 size-3.5" />
        {group.duration}
      </div>

      <Link
        href="/"
        className="bg-purple mt-4 flex items-center justify-center gap-2 rounded-md py-3 text-sm transition-all duration-200 ease-linear hover:bg-[#433BE3] active:scale-[0.98]"
      >
        <Users className="size-5" /> Join Group
      </Link>
    </div>
  );
}
