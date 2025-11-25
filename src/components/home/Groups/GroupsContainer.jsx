import CreateGroup from "@/components/cards/CreateGroup";
import JoinGroupCard from "@/components/cards/JoinGroupCard";
import { dummyGroups } from "@/data/dummyGroups";

export default function GroupsContainer() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* create group card */}
      <CreateGroup />

      {/* join in group card */}
      {dummyGroups.map((group, i) => (
        <JoinGroupCard key={i} group={group} />
      ))}
    </div>
  );
}
