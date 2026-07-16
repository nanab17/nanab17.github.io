import { Camera, Video, Users, Trophy, Heart, Film } from "lucide-react";

const services = [
  {
    icon: Trophy,
    title: "GAME DAY COVERAGE",
    description:
      "Single-game coverage focused on action shots, key plays, celebrations, and standout moments.",
    price: "$45/game",
  },
  {
    icon: Users,
    title: "TEAM SESSION",
    description:
      "Ten professionally edited photos per player. A six-player minimum is required.",
    price: "$20/player",
  },
  {
    icon: Video,
    title: "HIGHLIGHT REEL",
    description:
      "An individual highlight edit featuring your best plays and most memorable moments.",
    price: "$30",
  },
  {
    icon: Film,
    title: "MIXTAPE EDIT",
    description:
      "An edited highlight mix with music, transitions, and your top plays.",
    price: "$45",
  },
  {
    icon: Heart,
    title: "LIFESTYLE MINI",
    description:
      "A 30-minute lifestyle session at one location with 10 professionally edited photos.",
    price: "$50",
  },
  {
    icon: Camera,
    title: "LIFESTYLE STANDARD",
    description:
      "A 60-minute session at up to two locations with 20 to 25 professionally edited photos.",
    price: "$85",
  },
  {
    icon: Camera,
    title: "LIFESTYLE PREMIUM",
    description:
      "A 90-minute multi-location session with 35 or more edited photos and social-ready crops.",
    price: "$150",
  },
];

const travelFees = [
  {
    driveTime: "0–30 minutes",
    price: "Free",
  },
  {
    driveTime: "30–45 minutes",
    price: "+$15",
  },
  {
    driveTime: "45–60 minutes",
    price: "+$25",
  },
  {
    driveTime: "60+ minutes",
    price: "+$40",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Services
          </span>

          <h2 className="font-display text-5xl md:text-7xl mt-3 text-foreground">
            WHAT I <span className="text-gradient-gold">OFFER</span>
          </h2>

          <p className="text-muted-foreground mt-4 text-lg">
            Sports photography, videography, and lifestyle sessions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-8 card-glow transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-2xl text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <span className="text-primary font-semibold text-lg">
                {service.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl text-foreground">
              LIFESTYLE TRAVEL FEES
            </h3>

            <p className="text-muted-foreground mt-3">
              Travel fees are based on estimated drive time.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            {travelFees.map((fee, index) => (
              <div
                key={fee.driveTime}
                className={`flex items-center justify-between px-6 py-4 ${
                  index !== travelFees.length - 1
                    ? "border-b border-border"
                    : ""
                }`}
              >
                <span className="text-foreground">{fee.driveTime}</span>
                <span className="text-primary font-semibold">{fee.price}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mt-5 text-center">
            Routes may avoid toll roads where possible. If avoiding tolls adds
            meaningful drive time, I&apos;ll confirm the route before booking.
            Additional edited photos are available and priced based on the
            client&apos;s needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
