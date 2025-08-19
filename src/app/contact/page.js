import Contact from "@/components/contact/Contact";
import PageTitle from "@/components/shared/PageTitle";

export default function ContactPage() {
  return (
    <main>
      <PageTitle
        title="Contact Us"
        subtitle="Have questions or feedback? We'd love to hear from you!"
      />

      <Contact />
    </main>
  );
}
