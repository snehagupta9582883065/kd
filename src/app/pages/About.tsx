import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Target, Eye, Heart, Lightbulb, Users, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'We love what we do and are dedicated to delivering excellence in every project.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as true partners in their success.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in code quality, design, and user experience.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">KalyanDrishti</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are a modern IT and digital marketing startup founded on the belief that every business deserves access to professional, scalable digital solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our team of passionate developers, designers, and marketers work together to help startups, SMEs, and growing businesses build their digital presence and achieve their goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We focus on transparency, quality, and long-term partnerships rather than quick wins or unrealistic promises.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-border/50"
            >
              <img
                src="https://images.unsplash.com/photo-1669477377105-0736689c9935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY4NzQ3MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses with modern, scalable digital solutions that drive growth and create lasting value. We strive to make professional web development, app creation, and digital marketing accessible to startups and growing companies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl group">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <Eye className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a trusted partner for businesses seeking innovative digital solutions. We envision a future where technology and creativity combine to solve real business problems and create meaningful user experiences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 rounded-2xl border-border/50 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-secondary/50 to-background rounded-3xl p-8 sm:p-12 shadow-inner border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0 shadow-lg shadow-primary/30 flex items-center justify-center text-white text-3xl font-bold">
                DP
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">A Message from Our Founder</h3>
                <p className="text-base text-primary font-medium">Building the future, one project at a time</p>
              </div>
            </div>
            <div className="prose prose-lg relative z-10">
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic font-light">
                "When we started KalyanDrishti, we had a simple goal: to help businesses navigate the digital landscape with honest, transparent, and high-quality solutions."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg italic font-light">
                "We've seen too many agencies make unrealistic promises or deliver subpar work. That's why we focus on building genuine partnerships with our clients, understanding their unique challenges, and creating solutions that truly work for them."
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg italic font-light">
                "Whether you're a startup looking to build your first website or an established business ready to scale, we're here to support your journey with expertise, creativity, and dedication."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
            Want to Work With Us?
          </h2>
          <p className="text-xl mb-12 text-white/90 font-light">
            Let's explore how we can help bring your digital vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-12 text-lg shadow-2xl shadow-black/20 hover:scale-105 transition-all">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-12 text-lg bg-white/10 text-white border-white/30 backdrop-blur-md hover:bg-white/20 transition-all">
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
