import { values } from "@/data/values";
import Container from "../shared/Container";

export default function Values() {
  return (
    <section className="py-10 md:py-20">
      <h2 className="text-center text-2xl font-bold text-white">Our Values</h2>

      <Container>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div key={i} className="bg-midnight rounded-lg p-6 text-lg">
              <div className="mx-auto w-fit rounded-full bg-[#312E814D] p-4">
                <value.icon className="text-lavender size-7" />
              </div>
              <h3 className="mt-4 text-center text-lg font-medium text-white">
                {value.title}
              </h3>
              <p className="text-charcoal mt-2.5 text-center text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
