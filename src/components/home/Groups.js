import Container from "../shared/Container";
import GroupsContainer from "./Groups/GroupsContainer";

export default function Groups() {
  return (
    <section className="bg-[#0F0F23] px-4 py-10 md:py-20">
      <Container>
        <h2 className="mb-2 text-center text-3xl font-bold text-[#FFFFFF]">
          Join Active Groups
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[#A1A1AA]">
          Jump into ongoing conversations or create your own group
        </p>

        <GroupsContainer />
      </Container>
    </section>
  );
}
