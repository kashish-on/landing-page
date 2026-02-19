import PhoneIcon from "@/assets/phone-contact.svg";
import MailIcon from "@/assets/mail-contact.svg";
import LocationIcon from "@/assets/location.svg";


const cards = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    subtitle: "Available 24/7",
    detail: "+91 9910476546",
    href: "tel:+919910476546",
  },
  {
    icon: MailIcon,
    title: "Write Us",
    subtitle: "Drop us a line anytime",
    detail: "support@observenow.ai",
    href: "mailto:support@observenow.ai",
  },
  {
    icon: LocationIcon,
    title: "Meet Us",
    subtitle: "Come say hello at our HQ",
    detail: "Noida, India",
    href: "#",
  },
];

const ContactCards = () => {
  return (
    <section className="py-6 md:py-10 bg-background">
      <div className="font-dm max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-card font-dm rounded-2xl border border-border p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4">
              <img
  src={card.icon}
  alt={card.title}
  className="w-14 h-14 object-contain"
/>

            </div>
            <h3 className="text-lg font-dm font-bold text-foreground mb-1">{card.title}</h3>
            <p className="text-sm font-dm text-muted-foreground mb-3">{card.subtitle}</p>
            <a
              href={card.href}
              className="text-sm font-semibold text-[#470277] hover:underline"
            >
              {card.detail}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCards;
