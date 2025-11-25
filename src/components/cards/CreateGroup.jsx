import { Clock, Plus, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CreateGroup() {
  return (
    <div className="bg-midnight/50 flex w-full flex-col overflow-hidden rounded-xl border border-dashed border-[#1F2937] px-6 py-8 text-white">
      <div className="flex-1">
        <div className="mx-auto w-fit rounded-full bg-[#312E81]/30 p-4">
          <Users className="size-7 text-indigo-400" />
        </div>

        <h3 className="mt-4.5 text-center font-semibold">Create New Group</h3>

        <p className="text-charcoal mt-2 text-center text-xs">
          Start your own language learning community and connect with learners
          worldwide
        </p>
      </div>

      <button className="bg-purple mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md py-3 text-sm text-white transition-all duration-200 ease-linear hover:bg-[#433BE3] active:scale-[0.98]">
        <Plus className="size-5" /> Create Group
      </button>
    </div>
  );
}
