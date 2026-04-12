import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const BookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const bookingData = {
      full_name: formData.get("full_name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null,
      service: service || null,
      sport: (formData.get("sport") as string) || null,
      preferred_date: (formData.get("preferred_date") as string) || null,
      details: (formData.get("details") as string) || null,
    };

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("bookings")
        .insert(bookingData);

      if (dbError) throw dbError;

      // Send email notification
      await supabase.functions.invoke("send-booking-notification", {
        body: bookingData,
      });

      toast.success("Booking request sent! I'll get back to you within 24 hours.", {
        duration: 5000,
      });
      form.reset();
      setService("");
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Book Now</span>
            <h2 className="font-display text-5xl md:text-7xl mt-3 text-foreground">
              LET'S <span className="text-gradient-gold">SHOOT</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Ready to capture your next big moment? Fill out the form below and I'll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                <Input name="full_name" required placeholder="Your name" className="bg-card border-border focus:border-primary h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input name="email" required type="email" placeholder="you@email.com" className="bg-card border-border focus:border-primary h-12" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <Input name="phone" placeholder="(555) 123-4567" className="bg-card border-border focus:border-primary h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Service</label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="bg-card border-border h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lifestyle">Lifestyle – $50/hr</SelectItem>
                    <SelectItem value="basketball">Basketball – 10 Photos $25</SelectItem>
                    <SelectItem value="highlight">Highlight Reel (30s) – $20</SelectItem>
                    <SelectItem value="mixtape">Mixtape (30s) – $30</SelectItem>
                    <SelectItem value="team">Team Session – $15/player</SelectItem>
                    <SelectItem value="gameday">Game Day – $35/hr</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Sport</label>
                <Input name="sport" placeholder="e.g. Basketball, Soccer" className="bg-card border-border focus:border-primary h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Preferred Date</label>
                <Input name="preferred_date" type="date" className="bg-card border-border focus:border-primary h-12" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Additional Details</label>
              <Textarea
                name="details"
                placeholder="Tell me about your event, location, any specific shots you need..."
                rows={5}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold glow-gold" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Booking Request
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
