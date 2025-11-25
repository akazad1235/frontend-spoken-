export default function AuthFormTitle({ title, subtitle }) {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-white">{title}</h1>
      <p className="text-charcoal mx-auto mt-2 w-full max-w-3xl text-center text-sm leading-6">
        {subtitle}
      </p>
    </div>
  );
}
