import "./MakeMostOfZ.css";

function MakeMostOfZ() {
  const items = [
    {
      category: "Rewards and promotions",
      title: "Z Rewards",
      description:
        "Save 6c per litre every time you fill up to 100 litres, plus get points on almost everything you buy and use them for treats.",
    },
    {
      category: "For businesses",
      title: "Your business is our business",
      description:
        "With our fuel, size, distribution network and Kiwi can-do attitude, we’ll help get your business to where you want it to be.",
    },
    {
      category: "Z App",
      title: "Z in the palm of your hand",
      description:
        "Z App lets you experience Z your way. Pay for fuel, pre-order drinks and more.",
    },
  ];

  return (
    <section className="make-most-of-z">
      <h2>Make the most of Z</h2>

      <div className="make-most-of-z-list">
        {items.map((item) => (
          <article className="make-most-of-z-card" key={item.title}>
            <p className="make-most-of-z-category">{item.category}</p>

            <h3>{item.title}</h3>

            <p className="make-most-of-z-description">
              {item.description}
            </p>

            <button type="button" aria-label={`Learn more about ${item.title}`}>
              →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MakeMostOfZ;