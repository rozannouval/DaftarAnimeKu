export default function Loading() {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 min-h-screen mx-auto">
      <div className="preload c1" style={{ "--i": 1 }}></div>
      <div className="preload c2" style={{ "--i": -1 }}></div>
    </div>
  );
}
