const FLIGHTS = [
  { day: "MONDAY", route: "KWPB → MYAM", status: "On schedule", ok: true },
  { day: "THURSDAY", route: "KWPB → MYAM", status: "On schedule", ok: true },
  { day: "FRIDAY", route: "KWPB → MYAT", status: "On schedule", ok: true },
  { day: "SATURDAY", route: "KWPB → MYAM", status: "By request", ok: false },
];

export function FlightBoard() {
  return (
    <section id="schedule" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-head flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="section-eyebrow">Flight board — this week</span>
            <h2 className="section-title">NEXT FLIGHTS OUT</h2>
          </div>
          <span className="tag">Confirm by WhatsApp · [placeholder schedule]</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FLIGHTS.map((f) => (
            <div key={f.day} className="card p-5">
              <p className="font-bebas text-xl tracking-[0.06em] text-ink">{f.day}</p>
              <p className="mono text-[13px] mt-1 mb-4">
                {f.route.split("→")[0]}
                <span className="text-teal"> → </span>
                {f.route.split("→")[1]}
              </p>
              <span
                className={
                  f.ok
                    ? "inline-block mono text-[10px] tracking-[0.16em] uppercase px-2 py-1 rounded bg-aqua/15 text-teal"
                    : "inline-block mono text-[10px] tracking-[0.16em] uppercase px-2 py-1 rounded bg-amber/15 text-ink"
                }
              >
                {f.status}
              </span>
            </div>
          ))}
        </div>
        <p className="micro mt-4">
          *Sample board — replace with dispatch-confirmed days, destinations and cut-off times.
          Urgent loads: WhatsApp us, we&apos;ll find the next seat.
        </p>
      </div>
    </section>
  );
}
