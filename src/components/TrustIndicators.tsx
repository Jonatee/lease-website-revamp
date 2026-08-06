export default function TrustIndicators() {
  const stats = [
    { value: '$500M+', label: 'Capital Facilitated' },
    { value: '40+', label: 'Investment Partners' },
    { value: '15+', label: 'Markets' },
    { value: '100%', label: 'Strategic Advisory' },
  ];

  return (
    <section className="trust-section">
      <div className="trust-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="trust-item">
            <div className="trust-value">{stat.value}</div>
            <div className="trust-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
