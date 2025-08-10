import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";

const Team = () => {
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

        {/* Team Section */}
        <TeamSection 
          title="Meet Our Team"
          description="A diverse group of passionate professionals dedicated to delivering exceptional results and pushing the boundaries of digital innovation."
          showAll={true}
        />

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
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;