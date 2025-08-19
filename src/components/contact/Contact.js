import ContactInfo from "./ContactInfo";
import Container from "../shared/Container";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="px-4 pb-16">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
