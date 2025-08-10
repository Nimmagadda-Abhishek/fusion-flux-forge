import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Shield, Rocket, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to deliver solutions that set new industry standards."
    },
    {
      icon: Lightbulb,
      title: "Client Success",
      description: "Your growth is our mission. We focus on measurable results that drive real business impact."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing and optimization to ensure flawless performance."
    },
    {
      icon: Rocket,
      title: "Rapid Delivery",
      description: "Fast-track development without compromising quality through our agile methodologies."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work as an extension of your team, ensuring seamless communication and transparency."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We stay ahead of trends and continuously evolve our skills to serve you better."
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Delivered" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
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
                About <span className="gradient-text">Asian Digital World</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We are a forward-thinking digital agency specializing in full-stack development, 
                SEO optimization, and digital marketing. Our mission is to transform businesses 
                through innovative technology solutions.
              </p>
              <Button size="lg" className="mr-4">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These principles guide every decision we make and every solution we deliver.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} className="border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover-glow-cyan">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Founded in 2019, FluxForge emerged from a vision to bridge the gap between 
                    cutting-edge technology and practical business solutions. Our team of passionate 
                    developers and digital marketers came together with one goal: to help businesses 
                    thrive in the digital landscape.
                  </p>
                  <p>
                    What started as a small development studio has grown into a comprehensive digital 
                    agency. We've expanded our services to include SEO optimization, paid advertising, 
                    and most recently, our internship program to nurture the next generation of tech talent.
                  </p>
                  <p>
                    Today, we're proud to have delivered over 200 successful projects and maintained 
                    long-term partnerships with clients ranging from startups to enterprise companies.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text mb-4">5+</div>
                    <div className="text-xl font-semibold mb-2">Years of Excellence</div>
                    <div className="text-muted-foreground">Building the future, one project at a time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;