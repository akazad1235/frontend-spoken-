import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import GroupsContainer from "./Groups/GroupsContainer";

export default function Groups() {
  return (
    <section className="px-4 py-10 md:py-16">
      <Container>
        <SectionTitle
          title="Join Active Groups"
          subtitle="Jump into ongoing conversations or create your own group"
        />
        <GroupsContainer />
      </Container>
    </section>
  );
}
