import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Full-Stack Developer",
      image: "/placeholder.svg",
      bio: "Visionary leader with 8+ years in full-stack development. Specializes in React, Node.js, and cloud architecture. Led 50+ successful projects.",
      skills: ["React", "Node.js", "AWS", "TypeScript", "Leadership"],
      achievements: ["AWS Certified", "Google Developer Expert", "Tech Speaker"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Martinez",
      role: "CTO & ML Engineer",
      image: "/placeholder.svg",
      bio: "AI/ML expert with PhD in Computer Science. Transforms complex data into actionable insights. Pioneer in AI-driven business solutions.",
      skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "AI Strategy"],
      achievements: ["PhD Computer Science", "10+ AI Patents", "Forbes 30 Under 30"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Head of Digital Marketing",
      image: "/placeholder.svg",
      bio: "Performance marketing strategist with proven track record of 300%+ ROAS. Expert in SEO, PPC, and conversion optimization.",
      skills: ["Google Ads", "SEO", "Analytics", "Social Media", "Strategy"],
      achievements: ["Google Partner", "Facebook Blueprint", "HubSpot Certified"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Emily Zhang",
      role: "Senior UX/UI Designer",
      image: "/placeholder.svg",
      bio: "Creative design leader who blends aesthetics with functionality. Specialized in user-centered design and design systems.",
      skills: ["Figma", "Adobe Creative", "Design Systems", "User Research", "Prototyping"],
      achievements: ["Design Award Winner", "UX Certification", "Published Designer"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "David Kumar",
      role: "Lead Data Analyst",
      image: "/placeholder.svg",
      bio: "Data storyteller who transforms raw numbers into strategic insights. Expert in business intelligence and predictive analytics.",
      skills: ["Python", "SQL", "Tableau", "Power BI", "Statistics"],
      achievements: ["Google Analytics IQ", "Tableau Certified", "Data Science Masters"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
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
                Meet Our <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A diverse group of passionate professionals dedicated to delivering exceptional results and pushing the boundaries of digital innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={member.name} className="group border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover-glow-cyan overflow-hidden">
                  {/* Profile Image */}
                  <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex justify-center space-x-3">
                        <Button size="sm" variant="secondary" className="rounded-full">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="rounded-full">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="rounded-full">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="font-medium text-secondary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Bio */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                      
                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold mb-2">Core Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-2">Achievements</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {member.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Our Team in Numbers</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience and expertise that drives exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">25+</div>
                <div className="text-muted-foreground">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">200+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">View Open Positions</Button>
              <Button variant="outline" size="lg">Apply for Internship</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;