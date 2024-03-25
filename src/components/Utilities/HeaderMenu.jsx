export default function HeaderMenu({ title, count}) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="">{count}</p>
    </div>
  );
}
