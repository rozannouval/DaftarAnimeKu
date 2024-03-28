export default function HeaderMenu({ title, count }) {
  return (
    <div className="py-2 px-5">
      <h1 className="text-2xl font-bold font-sans">{title}</h1>
      <p className="font-normal text-sm">{count}</p>
    </div>
  );
}
