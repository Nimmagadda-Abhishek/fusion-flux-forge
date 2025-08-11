import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 rounded-full bg-accent/20 blur-xl float" style={{ animationDelay: '4s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in">
          <Star className="h-4 w-4 text-primary mr-2" />
          <span className="text-sm font-medium">Top-Rated Digital Agency</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">Digital Solutions
          <br />
          <span className="text-foreground">for Modern Businesses</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Full-stack development, mobile-first design, and data-driven marketing strategies 
          that deliver measurable results for your business growth.
        </p>

        {/* Key Points */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {['Mobile-First Development', 'SEO Optimization', 'Performance Marketing'].map((point, index) => (
            <div key={point} className="flex items-center px-4 py-2 rounded-lg bg-card/50 border border-border">
              <div className="w-2 h-2 rounded-full bg-primary mr-3 pulse-glow"></div>
              <span className="text-sm font-medium">{point}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="group">
            <Play className="h-5 w-5 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          {[
            { number: '200+', label: 'Projects Delivered' },
            { number: '150%', label: 'Avg. ROI Increase' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;