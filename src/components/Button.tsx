export default function Button({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="px-4 py-2 bg-emerald-500 text-white border rounded-lg cursor-pointer"
      {...props}
    >
      {props.children}
    </button>
  );
}