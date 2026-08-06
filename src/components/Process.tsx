export default function Process() {
  const steps = [
    { num: '01', title: 'Discover', desc: 'We source and assess opportunities aligned with your capital objectives.' },
    { num: '02', title: 'Structure', desc: 'We design compliant investment vehicles and transaction frameworks.' },
    { num: '03', title: 'Execute', desc: 'We coordinate execution across stakeholders to close deals efficiently.' },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="avinell-container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-heading)' }}>
            Investment Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A disciplined approach from sourcing to closing, designed for institutional rigor and speed.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="bg-white p-10 rounded-2xl border border-gray-100">
              <div className="text-sm font-semibold tracking-widest text-gray-400 mb-4">{step.num}</div>
              <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-heading)' }}>
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
