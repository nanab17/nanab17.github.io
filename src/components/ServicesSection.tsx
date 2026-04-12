import { Camera, Video, Users, Trophy, Heart, Film } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "LIFESTYLE",
    description: "Lifestyle photography sessions — portraits, candid moments, and personal branding content.",
    price: "$50/hr",
  },
  {
    icon: Camera,
    title: "BASKETBALL",
    description: "10 professionally edited action photos from your game or session.",
    price: "$25 (10 photos)",
  },
  {
    icon: Video,
    title: "HIGHLIGHT REEL",
    description: "A 30-second highlight reel capturing your best plays and moments.",
    price: "$20",
  },
  {
    icon: Film,
    title: "MIXTAPE",
    description: "A 30-second mixtape edit with music, transitions, and your top plays.",
    price: "$30",
  },
  {
    icon: Users,
    title: "TEAM SESSIONS",
    description: "Team photos, roster shots, and group action photography for your entire roster.",
    price: "$15/player",
  },
  {
    icon: Trophy,
    title: "GAME DAY",
    description: "Full game coverage with action shots, key moments, and celebration captures.",
    price: "$35/hr",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Services</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 text-foreground">
            WHAT I <span className="text-gradient-gold">OFFER</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">Photography & Videography</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-xl p-8 card-glow transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
              <span className="text-primary font-semibold text-lg">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
