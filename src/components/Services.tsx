import { Button } from "@/components/ui/button";
import { 
  Code, 
  Search, 
  TrendingUp, 
  Smartphone, 
  Globe, 
  BarChart,
  ArrowRight,
  Zap,
  Target
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Custom web applications built with modern technologies. From React frontends to scalable backend solutions.",
      features: ["React & Next.js", "Node.js & Python", "Cloud Deployment", "API Integration"],
      color: "primary",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Data-driven SEO strategies that improve your search rankings and drive organic traffic growth.",
      features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics Setup"],
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Paid Advertising",
      description: "ROI-focused ad campaigns across Google, Facebook, and other platforms to maximize your marketing budget.",
      features: ["Google Ads", "Social Media Ads", "Conversion Tracking", "A/B Testing"],
      color: "accent",
    },
  ];

  const capabilities = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly on all devices",
    },
    {
      icon: Globe,
      title: "Global Scalability", 
      description: "Solutions built to scale with your growing business",
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Detailed reporting and insights for data-driven decisions",
    },
    {
      icon: Target,
      title: "Conversion Focused",
      description: "Every element optimized for maximum conversion rates",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and Core Web Vitals",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth 
            and establish your dominant online presence.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`service-card p-8 rounded-2xl h-full hover-glow-${service.color} transition-all duration-500 group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl bg-${service.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 text-${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-${service.color} mr-3`}></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full group">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Why Choose <span className="gradient-text">FluxForge</span>?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with proven strategies to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={capability.title}
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover-glow-cyan"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <capability.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{capability.title}</h4>
              <p className="text-sm text-muted-foreground">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;