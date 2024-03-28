export default function Loading() {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 min-h-screen mx-auto flex flex-col justify-center items-center">
      <div className="relative bg-white h-56">
        <div className="preload c1" style={{ "--i": 1 }}></div>
        <div className="preload c2" style={{ "--i": -1 }}></div>
      </div>
      <h1 className="font-bold text-2xl">Mohon Tunggu...</h1>
    </div>
  );
}
