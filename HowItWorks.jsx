function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Browse',
      text: 'Explore donated furniture and appliances by category or see the newest items.'
    },
    {
      number: '2',
      title: 'Request',
      text: 'Select an item you need and send a simple request to the donor or organisation.'
    },
    {
      number: '3',
      title: 'Collect',
      text: 'Arrange a convenient collection time and start settling into your new home.'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-heading">
      <div className="section-header">
        <h2 id="how-heading">How it works</h2>
        <p className="section-subtitle">Three simple steps to furnish your home</p>
      </div>
      <ol className="steps">
        {steps.map((step) => (
          <li key={step.number} className="step">
            <span className="step__number" aria-hidden="true">
              {step.number}
            </span>
            <h3 className="step__title">{step.title}</h3>
            <p className="step__text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default HowItWorks;
