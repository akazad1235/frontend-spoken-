import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import Values from "@/components/about/Values";
import PageTitle from "@/components/shared/PageTitle";

export default function AboutPage() {
  return (
    <main className="px-4">
      <PageTitle
        title="About Us"
        subtitle="We're on a mission to revolutionize language learning by connecting people from around the world through authentic conversations and cultural exchange."
      />
      <Story />
      <Values />
      <Team />
    </main>
  );
}
