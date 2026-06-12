export default function Section({ title, children }) {
  return (
    <section className="mb-14">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xxs font-mono font-semibold tracking-widest uppercase text-slate-400 whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-slate-200" />
      </div>
      {children}
    </section>
  );
}
