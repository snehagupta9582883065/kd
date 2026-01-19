import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Team() {
  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Passionate about building scalable digital solutions with over 8 years of experience in web development and business strategy.',
      skills: ['Strategic Planning', 'Full-Stack Development', 'Business Development'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2OTk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Development',
      bio: 'Expert in modern web technologies and leading development teams to deliver exceptional products.',
      skills: ['React', 'Node.js', 'Team Leadership', 'System Architecture'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2OTk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Marcus Williams',
      role: 'Lead Designer',
      bio: 'Creating beautiful, user-centered designs that combine aesthetics with functionality.',
      skills: ['UI/UX Design', 'Brand Identity', 'Figma', 'Design Systems'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2OTk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Manager',
      bio: 'Data-driven marketer specializing in SEO, content strategy, and conversion optimization.',
      skills: ['SEO', 'Content Marketing', 'Analytics', 'PPC'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2OTk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'David Kim',
      role: 'Senior Full-Stack Developer',
      bio: 'Building robust backend systems and seamless frontend experiences for modern applications.',
      skills: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2OTk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Lisa Chen',
      role: 'Social Media Strategist',
      bio: 'Crafting engaging social media campaigns that build communities and drive engagement.',
      skills: ['Social Strategy', 'Content Creation', 'Community Management'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2OTk2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              A group of passionate professionals dedicated to helping your business thrive in the digital world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group">
                  <CardHeader className="p-0 border-b border-border/30">
                    <div className="relative h-72 bg-gradient-to-br from-secondary to-background overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-6 left-6 right-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-1 shadow-sm leading-tight">{member.name}</h3>
                        <p className="text-base text-primary font-medium tracking-wide shadow-sm">{member.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-8 leading-relaxed italic">"{member.bio}"</p>
                    <div className="mb-8">
                      <h4 className="text-xs font-bold text-foreground mb-4 uppercase tracking-widest flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary border-primary/10 font-medium whitespace-nowrap">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-6 pt-6 border-t border-border/30">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                        <Mail size={20} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 sm:py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-8 tracking-tight">
                Collaboration & Creativity at Our Core
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-light leading-relaxed">
                Our team thrives on collaboration, bringing together diverse skills and perspectives to solve complex challenges.
              </p>
              <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
                We believe in continuous learning, open communication, and creating an environment where everyone can do their best work.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-foreground/80">
                <li className="flex items-start bg-background/50 p-4 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300">
                  <span className="text-primary mr-3 font-bold text-xl">✓</span>
                  <span className="font-medium text-sm">Remote-first culture with flexible hours</span>
                </li>
                <li className="flex items-start bg-background/50 p-4 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300">
                  <span className="text-primary mr-3 font-bold text-xl">✓</span>
                  <span className="font-medium text-sm">Continuous learning and development</span>
                </li>
                <li className="flex items-start bg-background/50 p-4 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300">
                  <span className="text-primary mr-3 font-bold text-xl">✓</span>
                  <span className="font-medium text-sm">Collaborative environment for all</span>
                </li>
                <li className="flex items-start bg-background/50 p-4 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300">
                  <span className="text-primary mr-3 font-bold text-xl">✓</span>
                  <span className="font-medium text-sm">Focus on work-life balance</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-border/50 group"
            >
              <img
                src="https://images.unsplash.com/photo-1669477377105-0736689c9935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY4NzQ3MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left bg-white/10 p-10 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Work With Our Team</h3>
              <p className="text-white/80 mb-8 font-light leading-relaxed">
                Let's discuss how we can help bring your digital vision to life with expert support.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-10 text-lg shadow-xl shadow-black/20 hover:scale-105 transition-all">
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left bg-white/5 p-10 rounded-3xl backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Join Our Team</h3>
              <p className="text-white/80 mb-8 font-light leading-relaxed">
                We're always looking for talented people to join our mission and growing family.
              </p>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 text-lg bg-transparent text-white border-white/30 hover:bg-white/10 transition-all">
                <Link to="/contact">
                  View Openings
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
