import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and seamless checkout experience.',
      challenge: 'Client needed a scalable online store with advanced filtering and personalized recommendations.',
      solution: 'Built a headless commerce solution with microservices architecture for flexibility and performance.',
      outcome: 'Achieved 40% increase in conversion rate and handled 10x traffic during peak sales.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njg3MzY2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Mobile Fitness App',
      category: 'App Development',
      description: 'Cross-platform fitness tracking application with social features, workout plans, and progress analytics.',
      challenge: 'Creating an engaging fitness experience that keeps users motivated and tracking their progress.',
      solution: 'Developed a React Native app with gamification elements, social sharing, and personalized workout recommendations.',
      outcome: 'Launched successfully with 5,000+ downloads in first month and 4.7-star rating.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4NzczMzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'SaaS Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategy for a B2B SaaS startup, including SEO, content marketing, and PPC.',
      challenge: 'New SaaS product with zero brand awareness needed to acquire first 100 customers.',
      solution: 'Implemented multi-channel strategy with targeted content, LinkedIn ads, and SEO optimization.',
      outcome: 'Achieved 150 qualified leads and 80 paying customers within 6 months.',
      technologies: ['Google Ads', 'HubSpot', 'SEMrush', 'LinkedIn Ads'],
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY4NzQzODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Restaurant Brand Identity',
      category: 'Design',
      description: 'Complete brand identity and UI/UX design for a modern restaurant chain, including logo, menu design, and digital presence.',
      challenge: 'Established restaurant wanted to refresh their brand to appeal to younger demographics.',
      solution: 'Created a vibrant, modern brand identity with cohesive visual system across all touchpoints.',
      outcome: 'Successfully rebranded across 5 locations with positive customer feedback and increased social media engagement.',
      technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
      image: 'https://images.unsplash.com/photo-1669477377105-0736689c9935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY4NzQ3MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'Elegant portfolio website for a creative agency, featuring smooth animations and interactive project showcases.',
      challenge: 'Agency needed a website that reflected their creative expertise and showcased their work beautifully.',
      solution: 'Built a performant, animated portfolio site with modern design and seamless user experience.',
      outcome: 'Achieved perfect Lighthouse scores and increased client inquiries by 60%.',
      technologies: ['Next.js', 'Motion', 'Tailwind CSS', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njg3MzY2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Internal Dashboard',
      category: 'Web Development',
      description: 'Analytics dashboard for tracking business metrics and KPIs with real-time data visualization.',
      challenge: 'Company needed centralized dashboard to monitor multiple data sources and make informed decisions.',
      solution: 'Developed a custom dashboard with interactive charts, real-time updates, and role-based access.',
      outcome: 'Improved decision-making speed by 50% and reduced reporting time by 70%.',
      technologies: ['React', 'D3.js', 'PostgreSQL', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY4NzQzODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const categories = ['All', 'Web Development', 'App Development', 'Digital Marketing', 'Design'];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Explore our recent projects and see how we've helped businesses achieve their digital goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-10 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="lg"
                className={`rounded-full px-8 transition-all duration-300 ${category === 'All' ? 'shadow-lg shadow-primary/20' : 'hover:bg-muted'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl group">
                  <div className="relative h-72 bg-gradient-to-br from-secondary to-background overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-primary font-bold backdrop-blur-md px-4 py-1.5 rounded-full border border-primary/10">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors tracking-tight">{project.title}</CardTitle>
                      <div className="p-2 rounded-full bg-secondary/80 hover:bg-primary/20 transition-colors group/link cursor-pointer">
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover/link:text-primary" />
                      </div>
                    </div>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-0">
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/30">
                        <div>
                          <h4 className="font-bold text-foreground mb-2 flex items-center text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            Challenge
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed italic">"{project.challenge}"</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2 flex items-center text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                            Solution
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed italic">{project.solution}</p>
                        </div>
                      </div>
                      <div className="bg-muted/30 p-4 rounded-xl border border-border/30">
                        <h4 className="font-bold text-foreground mb-2 text-sm uppercase tracking-wider">Outcome</h4>
                        <p className="text-sm text-primary font-medium leading-relaxed">{project.outcome}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs px-3 py-0.5 rounded-full font-medium bg-primary/5 text-primary border-primary/10">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-12 text-white/90 font-light leading-relaxed">
            Let's create something amazing together. Our team is ready to help you thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-12 text-lg shadow-2xl shadow-black/20 hover:scale-105 transition-all">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-12 text-lg bg-white/10 text-white border-white/30 backdrop-blur-md hover:bg-white/20 transition-all">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
