import { useEffect } from "react";

const tiktokVideos = [
  "7626229936944188685",
  "7626226651025640718",
];

const VideosSection = () => {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="videos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Videos</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 text-foreground">
            THE <span className="text-gradient-gold">REELS</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {tiktokVideos.map((videoId) => (
            <div key={videoId} className="w-full max-w-[325px]">
              <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@bo3tt__/video/${videoId}`}
                data-video-id={videoId}
                style={{ maxWidth: 605, minWidth: 325 }}
              >
                <section></section>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
