export default function Label({
  children,
  value,
  className = "bg-black",
  type = "text",
  ...props
}) {
  return (
    <label {...props} className={"text-slate-600 mb-1 block"}>
      {value || children}
    </label>
  );
}
