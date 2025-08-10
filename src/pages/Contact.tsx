import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  Award,
  Users,
  Zap,
  MessageSquare,
  Calendar,
  Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "asiandigitalworld@gmail.com",
      description: "Get a response within 24 hours",
      action: "mailto:asiandigitalworld@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 8464960327",
      description: "Mon-Fri 9AM-6PM IST",
      action: "tel:+918464960327"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kukatpally, Hyderabad, Telangana 500085",
      description: "Remote team worldwide",
      action: "https://maps.google.com/?q=Kukatpally,Hyderabad,Telangana"
    }
  ];

  const stats = [
    { icon: Award, number: "5.0", label: "Client Rating" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Clock, number: "24/7", label: "Support" },
    { icon: Zap, number: "150%", label: "Avg ROI Boost" }
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications"
    },
    {
      icon: MessageSquare,
      title: "Digital Marketing",
      description: "SEO, PPC, and social media marketing"
    },
    {
      icon: Calendar,
      title: "Consulting",
      description: "Strategic planning and technical guidance"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your digital presence? Let's discuss your project and explore how we can help you achieve your goals. Get a free consultation and project estimate.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Get Your Free Consultation</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form and we'll get back to you within 24 hours with a detailed proposal tailored to your needs.
                  </p>
                </div>

                <Card className="border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>Tell us about your project requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input placeholder="John" className="bg-card border-border" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input placeholder="Doe" className="bg-card border-border" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="john@company.com" className="bg-card border-border" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-card border-border" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input placeholder="Your Company Name" className="bg-card border-border" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Service Needed</label>
                      <select className="w-full px-3 py-2 bg-card border border-border rounded-md text-foreground">
                        <option>Select Service</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>Digital Marketing</option>
                        <option>AI/ML Solutions</option>
                        <option>Data Analytics</option>
                        <option>Consulting</option>
                        <option>Other</option>
                      </select>
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
                      <label className="block text-sm font-medium mb-2">Project Timeline</label>
                      <select className="w-full px-3 py-2 bg-card border border-border rounded-md text-foreground">
                        <option>Select Timeline</option>
                        <option>ASAP (Rush Job)</option>
                        <option>1-3 months</option>
                        <option>3-6 months</option>
                        <option>6+ months</option>
                        <option>Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <Textarea 
                        placeholder="Tell us about your project goals, specific requirements, target audience, and any technical specifications..."
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
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & Stats */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <Card 
                        key={info.title}
                        className="group border border-border/50 hover:border-primary/50 transition-all duration-300 hover-glow-cyan cursor-pointer"
                        onClick={() => window.open(info.action, '_blank')}
                      >
                        <CardContent className="flex items-start space-x-4 p-6">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{info.title}</h4>
                            <p className="text-foreground font-medium">{info.details}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <Card key={service.title} className="border border-border/50">
                        <CardContent className="flex items-center space-x-4 p-4">
                          <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                            <service.icon className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h5 className="font-medium">{service.title}</h5>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Why Choose Us?</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <Card 
                        key={stat.label}
                        className="text-center border border-border/50"
                      >
                        <CardContent className="p-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-3">
                            <stat.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Free Strategy Session</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Book a 30-minute call to discuss your project and get expert recommendations tailored to your business needs.
                    </p>
                    <Button variant="neon" size="sm" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Quick answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our consultation."
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer: "Yes! We offer various support packages including maintenance, updates, hosting, and technical support to ensure your project continues to perform optimally."
                },
                {
                  question: "What's included in your free consultation?",
                  answer: "Our free consultation includes project assessment, technology recommendations, timeline estimation, budget discussion, and a detailed proposal outlining our approach."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! We work with clients worldwide and have experience managing projects across different time zones and cultural contexts."
                }
              ].map((faq, index) => (
                <Card key={index} className="border border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;