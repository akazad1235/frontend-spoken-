import JoinGroupCard from "@/components/cards/JoinGroupCard";
import { dummyGroups } from "@/data/dummyGroups";
import { Clock, Plus, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GroupsContainer() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* create group card */}
      <div className="flex w-full flex-col overflow-hidden rounded-xl border border-dashed border-[#1F2937] bg-[#1A1C33]/50 px-6 py-8 text-white">
        <div className="flex-1">
          <div className="mx-auto w-fit rounded-full bg-[#312E81]/30 p-4">
            <Users className="size-7 text-indigo-400" />
          </div>

          <h3 className="mt-4.5 text-center font-semibold">Create New Group</h3>

          <p className="mt-2 text-center text-xs text-[#9CA3AF]">
            Start your own language learning community and connect with learners
            worldwide
          </p>
        </div>

        <button className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#4F46E5] py-3 text-sm text-white transition-all duration-200 ease-linear hover:bg-[#433BE3] active:scale-95">
          <Plus className="size-5" /> Create Group
        </button>
      </div>

      {/* join in group card */}
      {dummyGroups.map((group, i) => (
        <JoinGroupCard key={i} group={group} />
      ))}
    </div>
  );
}
