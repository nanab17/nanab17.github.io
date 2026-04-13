import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

const BookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState("");

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase text-sm">Book Now</span>
            <h2 className="text-4xl mt-3">
              LET'S <span className="text-yellow-500">SHOOT</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Fill this out and I’ll get back to you.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xgorwddl"
            method="POST"
            onSubmit={() => setIsSubmitting(true)}
            className="space-y-5"
          >

            <Input name="full_name" required placeholder="Full Name" />
            <Input name="email" required type="email" placeholder="Email" />
            <Input name="phone" placeholder="Phone" />

            <Select onValueChange={setService}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lifestyle">Lifestyle – $50/hr</SelectItem>
                <SelectItem value="basketball">Basketball – 10 Photos $25</SelectItem>
                <SelectItem value="highlight">Highlight Reel – $20</SelectItem>
                <SelectItem value="mixtape">Mixtape – $30</SelectItem>
                <SelectItem value="team">Team Session</SelectItem>
              </SelectContent>
            </Select>

            {/* Hidden field to send selected service */}
            <input type="hidden" name="service" value={service} />

            <Input name="sport" placeholder="Sport" />
            <Input name="preferred_date" type="date" />

            <Textarea name="details" placeholder="Tell me about your shoot..." rows={5} />

            <Button type="submit" className="w-full">
              {isSubmitting ? "Sending..." : (
                <>
                  <Send className="w-4 h-4 mr-2" />
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
