export default function PageTitle({ title, subtitle }) {
  return (
    <header className="py-10 md:pt-32 md:pb-16">
      <h1 className="mb-5 text-center text-3xl font-bold text-white">
        {title}
      </h1>
      <p className="text-silver mx-auto w-full max-w-3xl text-center text-sm leading-6">
        {subtitle}
      </p>
    </header>
  );
}
