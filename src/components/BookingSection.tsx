import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

const BookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState("");

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium uppercase text-sm">
              Book Now
            </span>

            <h2 className="text-4xl mt-3">
              LET&apos;S <span className="text-yellow-500">SHOOT</span>
            </h2>

            <p className="text-muted-foreground mt-4">
              Fill out the form below and I&apos;ll get back to you about
              availability and next steps.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xgorwddl"
            method="POST"
            onSubmit={() => setIsSubmitting(true)}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Input
                name="full_name"
                required
                placeholder="Full Name"
              />

              <Input
                name="email"
                required
                type="email"
                placeholder="Email"
              />
            </div>

            <Input
              name="phone"
              type="tel"
              placeholder="Phone"
            />

            <Select
              value={service}
              onValueChange={setService}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="game-day-coverage">
                  Game Day Coverage — $45
                </SelectItem>

                <SelectItem value="team-session">
                  Team Session — $20/player, 6-player minimum
                </SelectItem>

                <SelectItem value="highlight-reel">
                  Highlight Reel — $30
                </SelectItem>

                <SelectItem value="mixtape-edit">
                  Mixtape Edit — $45
                </SelectItem>

                <SelectItem value="lifestyle-mini">
                  Lifestyle Mini — $50
                </SelectItem>

                <SelectItem value="lifestyle-standard">
                  Lifestyle Standard — $85
                </SelectItem>

                <SelectItem value="lifestyle-premium">
                  Lifestyle Premium — $150
                </SelectItem>
              </SelectContent>
            </Select>

            <input
              type="hidden"
              name="service"
              value={service}
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Input
                name="sport"
                placeholder="Sport, if applicable"
              />

              <Input
                name="preferred_date"
                type="date"
              />
            </div>

            <Input
              name="location"
              placeholder="Preferred location or city"
            />

            <Textarea
              name="details"
              placeholder="Tell me about your shoot, event, preferred time, location, and any specific shots you want..."
              rows={5}
            />

            <input
              type="hidden"
              name="_subject"
              value="New NB Photography Booking Request"
            />

            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || !service}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
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

