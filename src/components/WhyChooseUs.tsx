export default function WhyChooseUs() {
  const reasons = [
    'Institutional Expertise',
    'Global Investor Network',
    'Strategic Market Access',
    'Africa-focused Opportunities',
    'Transparent Advisory',
    'Long-term Partnerships',
  ];

  return (
    <section className="section bg-white">
      <div className="avinell-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/images/downloaded-boardroom.jpg"
              alt="Why Avinell"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-heading)' }}>
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We combine deep local market knowledge with global best practice to deliver advisory services that meet the expectations of international capital.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#B58A55]" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
