import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import TeamSection from "@/components/TeamSection";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platforms",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory management and advanced analytics.",
      image: "https://www.imaginetventures.com/wp-content/uploads/2024/01/5467393_1687-scaled.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      category: "Web Development",
      metrics: { traffic: "+250%", conversion: "+45%", performance: "98/100" },
      
    },
    {
      title: "Mobile Apps",
      description: "We develop cross-platform mobile apps for clients, integrating AI-powered features and social functionality tailored to their needs.",
      image: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
      tags: ["React Native", "Python", "TensorFlow", "Firebase"],
      category: "App Development",
      metrics: { downloads: "50K+", rating: "4.8/5", retention: "85%" },
      
    },
    {
      title: "Digital Marketing Campaign",
      description: "Multi-channel digital marketing strategy that increased client's online presence and lead generation.",
      image: "https://digitalmarketingskill.com/wp-content/uploads/elementor/thumbs/Digital-marketing-campaign-ql28k81grfhlf9qokomd3dkhdbchul8zipyr83tcp4.webp",
      tags: ["Google Ads", "Facebook Ads", "SEO", "Content Marketing"],
      category: "Digital Marketing",
      metrics: { leads: "+300%", ctr: "+125%", roas: "450%" },
      
    },
  ];

  const categories = ["All", "Web Development", "App Development", "Digital Marketing"];

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
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Image+Not+Found';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm border-none">
                        {project.category}
                      </Badge>
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
                      
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}


        {/* CTA Section */}
        <section className="py-20 bg-card/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
              <Button size="lg">Get Free Consultation</Button>
              <Button variant="outline" size="lg">View Case Studies</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
