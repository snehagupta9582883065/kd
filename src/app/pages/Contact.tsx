import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    'App Development',
    'Web Development',
    'E-commerce Solutions',
    'Website Maintenance',
    'Digital Marketing',
    'SEO Services',
    'PPC Management',
    'Social Media Marketing',
    'Email Marketing',
    'Graphic Design',
    'Logo Design',
    'UI/UX Design',
    'Brand Identity',
    'Other',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Let's discuss your project and explore how we can help you achieve your digital goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-border/50 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-secondary/30 p-8 border-b border-border/30">
                  <CardTitle className="text-3xl font-bold tracking-tight">Send Us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="rounded-xl border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="rounded-xl border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Service Needed *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange('service', value)}
                        required
                      >
                        <SelectTrigger id="service" className="rounded-xl border-border/50 h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        className="rounded-xl border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-full h-14 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all group">
                      <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tight">Let's Start Your Project</h2>
                <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                  We're excited to hear about your project and discuss how we can help bring your vision to life. Our team is ready to provide expert guidance and support.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border/50 hover:border-primary/50 transition-colors group rounded-2xl">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground text-lg">hello@KalyanDrishti.com</p>
                        <p className="text-sm text-primary font-medium mt-1 uppercase tracking-widest">We reply within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-primary/50 transition-colors group rounded-2xl">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                        <Phone className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground text-lg">+1 (555) 123-4567</p>
                        <p className="text-sm text-primary font-medium mt-1 uppercase tracking-widest">Mon-Fri 9am-6pm PST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:border-primary/50 transition-colors group rounded-2xl">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">Office</h3>
                        <p className="text-muted-foreground text-lg">San Francisco, CA</p>
                        <p className="text-sm text-primary font-medium mt-1 uppercase tracking-widest">Remote-first team</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-secondary/50 to-background border-border/50 rounded-3xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold tracking-tight">Quick Response</CardTitle>
                  <CardDescription className="text-base">
                    We value your time and strive to respond to all inquiries promptly
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start bg-background/50 p-3 rounded-xl border border-border/30">
                      <span className="text-primary mr-3 font-bold">✓</span>
                      <span className="text-sm font-medium">Initial response within 24 hours</span>
                    </li>
                    <li className="flex items-start bg-background/50 p-3 rounded-xl border border-border/30">
                      <span className="text-primary mr-3 font-bold">✓</span>
                      <span className="text-sm font-medium">Free consultation call available</span>
                    </li>
                    <li className="flex items-start bg-background/50 p-3 rounded-xl border border-border/30">
                      <span className="text-primary mr-3 font-bold">✓</span>
                      <span className="text-sm font-medium">Project proposals within 3-5 business days</span>
                    </li>
                    <li className="flex items-start bg-background/50 p-3 rounded-xl border border-border/30">
                      <span className="text-primary mr-3 font-bold">✓</span>
                      <span className="text-sm font-medium">Transparent pricing and timelines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-16 text-center font-light leading-relaxed">
              Get quick answers to common questions and let's get started
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. Most websites take 4-8 weeks, while larger applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
              },
              {
                question: 'Do you work with startups?',
                answer: 'Absolutely! We love working with startups and offer flexible packages designed for growing businesses. We understand budget constraints and can work with you to create a solution that fits your needs.',
              },
              {
                question: 'What is your pricing structure?',
                answer: 'We offer both project-based and retainer pricing depending on your needs. After understanding your requirements, we provide a detailed proposal with transparent pricing and deliverables.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! We offer various maintenance and support packages to ensure your digital products continue to perform optimally. This includes updates, bug fixes, and technical support.',
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 rounded-2xl group overflow-hidden">
                  <CardHeader className="p-6 cursor-pointer group-hover:bg-secondary/20 transition-colors">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors flex items-center justify-between">
                      {faq.question}
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">"{faq.answer}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
