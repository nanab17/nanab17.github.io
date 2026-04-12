import basketballTeam from "@/assets/basketball-team.jpg";
import soccerField from "@/assets/soccer-field.jpg";
import basketballDunk from "@/assets/basketball-dunk.jpg";
import basketballHuddle from "@/assets/basketball-huddle.jpg";
import basketballAustin22 from "@/assets/basketball-austin22.jpg";
import basketballLayup from "@/assets/basketball-layup.jpg";

const portfolioPhotos = [
  { src: basketballHuddle, alt: "Basketball huddle - Austin #22", category: "Basketball" },
  { src: soccerField, alt: "Soccer players on the field", category: "Outdoors" },
  { src: basketballDunk, alt: "Basketball warmup dunk", category: "Basketball" },
  { src: basketballTeam, alt: "Basketball team pregame", category: "Basketball" },
  { src: basketballAustin22, alt: "Austin #22 pregame focus", category: "Basketball" },
  { src: basketballLayup, alt: "Basketball layup in game", category: "Basketball" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Portfolio</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 text-foreground">
            THE <span className="text-gradient-gold">WORK</span>
          </h2>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolioPhotos.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl cursor-pointer card-glow transition-all duration-500 aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary-foreground text-sm font-medium tracking-wider uppercase">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
