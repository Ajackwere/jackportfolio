import "./contact.css";
import contacts from "./data";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Details</h2>
      <p>Reach out to me through any of the links below</p>
      <div className="container contact__container" data-aos="fade-in">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
