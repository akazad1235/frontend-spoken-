export default function SectionTitle({ title, subtitle }) {
  return (
    <>
      <h2 className="mb-2 text-center text-3xl font-bold text-[#FFFFFF]">
        {title}
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-[#A1A1AA]">
        {subtitle}
      </p>
    </>
  );
}
