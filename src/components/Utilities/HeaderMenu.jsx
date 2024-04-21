export default function HeaderMenu({ title, count }) {
  return (
    <div className="py-8 px-5 text-center">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="font-normal text-sm italic">{count}</p>
    </div>
  );
}
