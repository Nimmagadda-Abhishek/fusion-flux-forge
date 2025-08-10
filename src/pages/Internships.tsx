import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Brain, 
  TrendingUp, 
  Database, 
  BarChart,
  Clock,
  MapPin,
  Users,
  Award,
  CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Internships = () => {
  const programs = [
    {
      icon: Code,
      title: "Web Development Internship",
      duration: "3-6 months",
      type: "Remote/Hybrid",
      description: "Master modern web technologies including React, Node.js, and cloud deployment. Build real-world applications used by actual clients.",
      skills: ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Git"],
      requirements: ["Basic HTML/CSS/JS knowledge", "Familiarity with any programming language", "Strong problem-solving skills"],
      benefits: ["Mentorship from senior developers", "Real project experience", "Potential full-time offer"],
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "App Development Internship",
      duration: "3-6 months",
      type: "Remote/Hybrid",
      description: "Create mobile applications for iOS and Android using React Native and Flutter. Learn app store deployment and mobile-first design principles.",
      skills: ["React Native", "Flutter", "Firebase", "Mobile UI/UX", "App Store Optimization"],
      requirements: ["Basic programming knowledge", "Understanding of mobile platforms", "Creative mindset"],
      benefits: ["Published apps portfolio", "Mobile development expertise", "Industry connections"],
      color: "secondary"
    },
    {
      icon: Brain,
      title: "Machine Learning Internship",
      duration: "4-6 months",
      type: "Remote/Hybrid",
      description: "Dive into AI and machine learning projects. Work with real datasets to build predictive models and intelligent systems.",
      skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "Statistical Analysis", "MLOps"],
      requirements: ["Python programming", "Mathematics/Statistics background", "Curiosity about AI"],
      benefits: ["AI project portfolio", "Research opportunities", "Industry certifications"],
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Internship",
      duration: "3-4 months",
      type: "Remote/Hybrid",
      description: "Learn performance marketing, SEO, content strategy, and paid advertising. Manage real client campaigns and budgets.",
      skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Content Marketing", "Social Media"],
      requirements: ["Strong communication skills", "Analytical mindset", "Interest in digital trends"],
      benefits: ["Google/Facebook certifications", "Campaign management experience", "Marketing portfolio"],
      color: "primary"
    },
    {
      icon: Database,
      title: "Python Development Internship",
      duration: "3-6 months",
      type: "Remote/Hybrid",
      description: "Build backend systems, APIs, and automation tools using Python. Learn Django, Flask, and cloud technologies.",
      skills: ["Python", "Django", "Flask", "PostgreSQL", "REST APIs", "Docker", "Cloud Services"],
      requirements: ["Python basics", "Database concepts", "Logic and problem-solving"],
      benefits: ["Backend development skills", "API design experience", "Cloud deployment knowledge"],
      color: "secondary"
    },
    {
      icon: BarChart,
      title: "Data Analytics Internship",
      duration: "3-5 months",
      type: "Remote/Hybrid",
      description: "Transform raw data into actionable insights. Learn data visualization, statistical analysis, and business intelligence.",
      skills: ["Python", "SQL", "Tableau", "Power BI", "Excel", "Statistical Analysis"],
      requirements: ["Mathematical aptitude", "Attention to detail", "Business curiosity"],
      benefits: ["Data visualization portfolio", "Business intelligence skills", "Industry insights"],
      color: "accent"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Hands-on Experience",
      description: "Work on real client projects and see your code in production"
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Get paired with experienced professionals for guidance"
    },
    {
      icon: CheckCircle,
      title: "Skill Certification",
      description: "Earn industry-recognized certifications and credentials"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Potential for full-time offers based on performance"
    }
  ];

  const process = [
    { step: "1", title: "Apply Online", description: "Submit your application with resume and portfolio" },
    { step: "2", title: "Technical Assessment", description: "Complete a skills-based assessment in your field" },
    { step: "3", title: "Interview Round", description: "Virtual interview with our team leads" },
    { step: "4", title: "Onboarding", description: "Begin your internship journey with orientation" }
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
                Launch Your <span className="gradient-text">Tech Career</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Join our comprehensive internship programs and gain real-world experience in cutting-edge technologies. Build your portfolio while working on actual client projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Apply Now</Button>
                <Button variant="outline" size="lg">Download Brochure</Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                <div className="text-muted-foreground">Job Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-muted-foreground">Alumni Network</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">6</div>
                <div className="text-muted-foreground">Specialization Tracks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                <div className="text-muted-foreground">Partner Companies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Internship Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our specialized tracks designed to fast-track your career in technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={program.title} className={`border border-border/50 hover:border-${program.color}/50 transition-all duration-300 hover:scale-105 hover-glow-${program.color} h-full`}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-${program.color}/20 flex items-center justify-center mb-4`}>
                      <program.icon className={`h-6 w-6 text-${program.color}`} />
                    </div>
                    <CardTitle className="mb-2">{program.title}</CardTitle>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {program.duration}
                      </Badge>
                      <Badge variant="outline">
                        <MapPin className="h-3 w-3 mr-1" />
                        {program.type}
                      </Badge>
                    </div>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies You'll Learn</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Requirements */}
                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {program.requirements.map((req, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-3 w-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold mb-2">What You'll Gain</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {program.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <Award className="h-3 w-3 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full mt-4">Apply for This Program</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Internships?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide more than just learning - we offer a complete career development experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="text-center p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Application Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Simple and straightforward steps to begin your internship journey.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Applications are open year-round. Take the first step towards your dream tech career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Apply Now</Button>
              <Button variant="outline" size="lg">Schedule a Call</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Internships;