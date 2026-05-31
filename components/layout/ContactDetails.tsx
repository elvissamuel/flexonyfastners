export default function ContactDetails() {
  const items = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      text: "No 1&2 Olorunsogo Street, Iron Market Orile Iganmu, Badagry Express Way, Lagos",
    },
    {
      icon: "far fa-clock",
      title: "Open Hours",
      text: "Mondays – Saturdays (8am – 6pm)",
    },
    {
      icon: "far fa-envelope",
      title: "Email",
      text: "flexonyfastners@gmail.com",
    },
    {
      icon: "fas fa-phone",
      title: "Call or WhatsApp",
      text: "+234 706 880 0252",
    },
  ];

  return (
    <div className="home-contact-info">
      {items.map((item) => (
        <div key={item.title} className="home-contact-item">
          <div className="home-contact-item-icon">
            <i className={item.icon} />
          </div>
          <div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
