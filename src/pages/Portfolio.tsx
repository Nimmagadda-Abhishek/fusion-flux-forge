import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory management and advanced analytics.",
      image: "https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      category: "Web Development",
      metrics: { traffic: "+250%", conversion: "+45%", performance: "98/100" },
      client: "RetailMax Inc."
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for fitness tracking with AI-powered workout recommendations and social features.",
      image: "/placeholder.svg",
      tags: ["React Native", "Python", "TensorFlow", "Firebase"],
      category: "App Development",
      metrics: { downloads: "50K+", rating: "4.8/5", retention: "85%" },
      client: "FitLife Solutions"
    },
    {
      title: "Digital Marketing Campaign",
      description: "Multi-channel digital marketing strategy that increased client's online presence and lead generation.",
      image: "/placeholder.svg",
      tags: ["Google Ads", "Facebook Ads", "SEO", "Content Marketing"],
      category: "Digital Marketing",
      metrics: { leads: "+300%", ctr: "+125%", roas: "450%" },
      client: "GrowthTech Ltd."
    },
  ];

  const categories = ["All", "Web Development", "App Development", "Digital Marketing", "Machine Learning", "Data Analytics"];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped businesses transform their digital presence and achieve remarkable results through our innovative solutions.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="group border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover-glow-cyan overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-xs">
                            <div className="font-semibold text-primary">{value}</div>
                            <div className="text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Client */}
                      <div className="text-sm text-muted-foreground">
                        Client: <span className="font-medium">{project.client}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection 
          title="Meet the Team Behind These Projects"
          description="Get to know the talented professionals who bring these innovative solutions to life."
          showAll={false}
          maxMembers={3}
          className="bg-background/50"
        />

        {/* CTA Section */}
        <section className="py-20 bg-card/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Get Free Consultation</Button>
              <Button variant="outline" size="lg">View Case Studies</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;