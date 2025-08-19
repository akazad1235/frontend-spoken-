export default function InputField({
  label,
  name,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
}) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <label htmlFor={id} className="text-xs font-medium">
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-navy focus:border-lavender focus:ring-lavender/20 border-border text-muted rounded-md border p-3 transition-colors outline-none focus:ring-2"
      />
    </div>
  );
}
