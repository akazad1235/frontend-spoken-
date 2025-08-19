import { teamMembers } from "@/data/team";
import Container from "../shared/Container";
import Image from "next/image";

export default function Team() {
  return (
    <section className="py-10 md:py-16">
      <h2 className="text-center text-2xl font-bold text-white">Our Team</h2>

      {/* team container */}
      <Container>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-midnight overflow-hidden rounded-lg">
              <div className="relative h-[192px] w-auto">
                <Image
                  src={member.image}
                  alt="team member"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-white">{member.name}</h3>
                <p className="text-lavender mt-0.5 text-sm">{member.role}</p>
                <p className="text-charcoal mt-4 w-full max-w-48 text-sm leading-5">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
