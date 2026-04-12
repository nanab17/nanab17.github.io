import heroImage from "@/assets/basketball-huddle.jpg";
import { Button } from "@/components/ui/button";
import { Camera, Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <img
        src={heroImage}
        alt="Basketball player in huddle - sports photography"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Camera className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-medium tracking-widest uppercase text-sm">Photography & Videography</span>
          </div>
          
          <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tight mb-6 opacity-0 animate-fade-in-up text-white" style={{ animationDelay: "0.4s" }}>
            CAPTURING
            <br />
            <span className="text-gradient-gold">THE MOMENT</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl max-w-lg mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Professional sports photography & videography that freezes the intensity, emotion, and raw power of athletic excellence.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button size="lg" className="text-lg px-8 py-6 font-semibold" onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}>
              Book a Session
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30" asChild>
              <a href="https://www.instagram.com/bo3tt__/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                @bo3tt__
              </a>
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30" asChild>
              <a href="https://www.tiktok.com/@bo3tt__" target="_blank" rel="noopener noreferrer">
                <TikTokIcon />
                TikTok
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
