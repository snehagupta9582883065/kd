import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-foreground/80 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              KalyanDrishti
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Modern IT and digital marketing solutions for growing businesses and startups.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                <Twitter size={22} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1">
                <Facebook size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-base">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-base">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">App Development</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-5 text-base">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>hello@KalyanDrishti.com</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KalyanDrishti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
