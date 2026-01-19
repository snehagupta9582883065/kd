import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import {
  Smartphone,
  Globe,
  ShoppingCart,
  Settings,
  TrendingUp,
  Search,
  Target,
  Share2,
  Mail,
  Palette,
  PenTool,
  Layers,
  Users,
  FileText,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'App Development',
      description: 'Create powerful mobile experiences that engage users and drive business growth.',
      features: [
        'iOS and Android Development',
        'Cross-Platform Solutions (React Native, Flutter)',
        'Progressive Web Apps (PWA)',
        'App Maintenance and Updates',
        'API Integration',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      idealFor: 'Startups, SMEs, and enterprises looking to reach mobile users',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Web Development',
      description: 'Build modern, responsive websites that deliver exceptional user experiences.',
      features: [
        'Custom Website Development',
        'Responsive Design',
        'CMS Integration (WordPress, Contentful)',
        'Progressive Web Applications',
        'Performance Optimization',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      idealFor: 'Businesses needing a strong online presence and scalable web solutions',
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: 'E-commerce & Shopify Development',
      description: 'Launch and scale your online store with powerful e-commerce platforms.',
      features: [
        'Shopify Store Setup and Customization',
        'Custom E-commerce Solutions',
        'Payment Gateway Integration',
        'Inventory Management',
        'Third-Party App Integration',
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Liquid'],
      idealFor: 'Retailers, brands, and entrepreneurs launching online stores',
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: 'Website Maintenance',
      description: 'Keep your website secure, updated, and performing at its best.',
      features: [
        'Regular Updates and Backups',
        'Security Monitoring',
        'Performance Optimization',
        'Bug Fixes and Troubleshooting',
        'Content Updates',
      ],
      technologies: ['Monitoring Tools', 'CDN', 'Security Plugins', 'Analytics'],
      idealFor: 'Any business with an existing website requiring ongoing support',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Digital Marketing',
      description: 'Grow your online presence with data-driven marketing strategies.',
      features: [
        'Marketing Strategy Development',
        'Content Marketing',
        'Conversion Rate Optimization',
        'Analytics and Reporting',
        'Multi-Channel Campaigns',
      ],
      technologies: ['Google Analytics', 'HubSpot', 'Hootsuite', 'SEMrush'],
      idealFor: 'Businesses looking to increase brand awareness and customer acquisition',
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: 'SEO Services',
      description: 'Improve your search rankings and drive organic traffic to your website.',
      features: [
        'Technical SEO Audit',
        'On-Page Optimization',
        'Link Building',
        'Local SEO',
        'Content Strategy',
      ],
      technologies: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Moz'],
      idealFor: 'Businesses wanting to improve organic search visibility',
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'PPC Management',
      description: 'Maximize ROI with targeted paid advertising campaigns.',
      features: [
        'Google Ads Campaign Management',
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'A/B Testing and Optimization',
        'Budget Management',
      ],
      technologies: ['Google Ads', 'Facebook Ads Manager', 'LinkedIn Ads'],
      idealFor: 'Businesses seeking immediate traffic and conversions',
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: 'Social Media Marketing',
      description: 'Build and engage your community across social platforms.',
      features: [
        'Social Media Strategy',
        'Content Creation and Curation',
        'Community Management',
        'Influencer Partnerships',
        'Social Media Advertising',
      ],
      technologies: ['Instagram', 'Facebook', 'LinkedIn', 'Twitter', 'TikTok'],
      idealFor: 'Brands looking to build community and engagement',
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: 'Email Marketing',
      description: 'Nurture leads and drive conversions with strategic email campaigns.',
      features: [
        'Email Campaign Strategy',
        'Newsletter Design and Automation',
        'List Segmentation',
        'A/B Testing',
        'Performance Analytics',
      ],
      technologies: ['Mailchimp', 'SendGrid', 'Klaviyo', 'ConvertKit'],
      idealFor: 'Businesses wanting to nurture customer relationships',
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'Graphic Design',
      description: 'Create stunning visuals that communicate your brand message.',
      features: [
        'Brand Identity Design',
        'Marketing Materials',
        'Social Media Graphics',
        'Print Design',
        'Infographics',
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Canva'],
      idealFor: 'Businesses needing professional visual content',
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: 'Logo Design',
      description: 'Design memorable logos that capture your brand essence.',
      features: [
        'Custom Logo Design',
        'Multiple Concept Iterations',
        'Vector Files Delivery',
        'Brand Guidelines',
        'Favicon and App Icon Design',
      ],
      technologies: ['Adobe Illustrator', 'Figma', 'Sketch'],
      idealFor: 'Startups and businesses establishing their brand identity',
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: 'UI/UX Design',
      description: 'Design intuitive interfaces that users love to interact with.',
      features: [
        'User Research and Analysis',
        'Wireframing and Prototyping',
        'Interface Design',
        'Usability Testing',
        'Design System Creation',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
      idealFor: 'Product teams building user-centered digital experiences',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Brand Identity',
      description: 'Build a cohesive brand that resonates with your target audience.',
      features: [
        'Brand Strategy Development',
        'Visual Identity System',
        'Brand Guidelines',
        'Typography and Color Palette',
        'Brand Collateral Design',
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Management Tools'],
      idealFor: 'New businesses or brands looking to rebrand',
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Brochure Design',
      description: 'Create professional brochures that showcase your products and services.',
      features: [
        'Digital and Print Brochures',
        'Layout and Typography',
        'Content Integration',
        'Print-Ready Files',
        'Multiple Format Options',
      ],
      technologies: ['Adobe InDesign', 'Illustrator', 'Photoshop'],
      idealFor: 'Businesses needing marketing collateral for events and presentations',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive digital solutions to help your business grow and succeed in the modern digital landscape
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
              >
                <Card className="overflow-hidden border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl group">
                  <CardHeader className="bg-gradient-to-br from-secondary/50 to-background border-b border-border/50 p-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{service.title}</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground leading-relaxed">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-foreground mb-6 flex items-center text-lg">
                          <span className="w-3 h-3 bg-primary rounded-full mr-3 shadow-sm shadow-primary/50"></span>
                          Key Features & Deliverables
                        </h3>
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start text-muted-foreground bg-secondary/30 p-3 rounded-xl border border-border/30 hover:bg-secondary/50 transition-colors">
                              <span className="text-primary mr-3 font-bold">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-6 flex items-center text-lg">
                          <span className="w-3 h-3 bg-accent rounded-full mr-3 shadow-sm shadow-accent/50"></span>
                          Tools & Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {service.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="px-4 py-1 rounded-full font-medium bg-primary/10 text-primary border-primary/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="font-bold text-foreground mb-3 flex items-center text-lg">
                          <span className="w-3 h-3 bg-accent/70 rounded-full mr-3 shadow-sm shadow-accent/50"></span>
                          Ideal For
                        </h3>
                        <p className="text-muted-foreground leading-relaxed bg-muted/30 p-4 rounded-xl border border-border/50">{service.idealFor}</p>
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-border/50 flex justify-center sm:justify-start">
                      <Button asChild size="lg" className="rounded-full px-10 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                        <Link to="/contact">
                          Talk to an Expert
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
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
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 text-white/90 font-light">
            Let's discuss how we can help your business achieve its digital goals
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-12 text-lg shadow-2xl shadow-black/20 hover:scale-110 transition-transform">
            <Link to="/contact">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
