import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Twitter, Mail, Award, Briefcase } from "lucide-react";
import { teamMembers, TeamMember } from "@/data/teamMembers";

interface TeamSectionProps {
  title?: string;
  description?: string;
  showAll?: boolean;
  maxMembers?: number;
  className?: string;
}

const TeamSection = ({ 
  title = "Meet Our Team", 
  description = "A diverse group of passionate professionals dedicated to delivering exceptional results.",
  showAll = true,
  maxMembers = 6,
  className = ""
}: TeamSectionProps) => {
  const displayMembers = showAll ? teamMembers : teamMembers.slice(0, maxMembers);

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title.includes("Team") ? (
              <>
                {title.split("Team")[0]}<span className="gradient-text">Team</span>{title.split("Team")[1]}
              </>
            ) : (
              <span className="gradient-text">{title}</span>
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayMembers.map((member, index) => (
            <Card key={member.name} className="group border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover-glow-cyan overflow-hidden bg-card/50 backdrop-blur-sm">
              {/* Profile Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links - Appear on Hover */}
                

                {/* Experience Badge */}
                
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="group-hover:text-primary transition-colors duration-300 text-lg">
                  {member.name}
                </CardTitle>
                <CardDescription className="font-medium text-secondary text-sm">
                  {member.role}
                </CardDescription>
                {member.specialization && (
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Briefcase className="h-3 w-3 mr-1" />
                    {member.specialization}
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                  
                  {/* Skills */}
                  {member.skills && member.skills.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center">
                        <Award className="h-3 w-3 mr-1" />
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs px-2 py-0.5">
                            {skill}
                          </Badge>
                        ))}
                        {member.skills.length > 4 && (
                          <Badge variant="outline" className="text-xs px-2 py-0.5">
                            +{member.skills.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Achievements */}
                  {member.achievements && member.achievements.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-foreground mb-2">Achievements</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {member.achievements.slice(0, 2).map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button for limited view */}
        {!showAll && teamMembers.length > maxMembers && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Team Members
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;