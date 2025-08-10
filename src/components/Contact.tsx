import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  Award,
  Users,
  Zap
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@fluxforge.com",
      description: "Get a response within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Remote team worldwide"
    }
  ];

  const stats = [
    { icon: Award, number: "5.0", label: "Client Rating" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Clock, number: "24/7", label: "Support" },
    { icon: Zap, number: "150%", label: "Avg ROI Boost" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Scale Your Business</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your digital goals.
            Get a free consultation and project estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get Your Free Consultation</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we'll get back to you within 24 hours with a detailed proposal.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" className="bg-card border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" className="bg-card border-border" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-card border-border" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input placeholder="Your Company Name" className="bg-card border-border" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Budget</label>
                <select className="w-full px-3 py-2 bg-card border border-border rounded-md text-foreground">
                  <option>Select Budget Range</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  rows={4}
                  className="bg-card border-border"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                <Send className="h-5 w-5 mr-2" />
                Send Message
                <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </Button>
            </div>
          </div>

          {/* Contact Info & Stats */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-glow-cyan"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-foreground font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Why Choose Us?</h4>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <h4 className="text-lg font-semibold mb-2">Free Strategy Session</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Book a 30-minute call to discuss your project and get expert recommendations.
              </p>
              <Button variant="neon" size="sm" className="w-full">
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;