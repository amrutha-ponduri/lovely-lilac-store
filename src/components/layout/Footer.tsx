import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  shop: [
    { name: "Women", href: "/category/women" },
    { name: "Men", href: "/category/men" },
    { name: "Kids", href: "/category/kids" },
    { name: "Accessories", href: "/category/accessories" },
    { name: "Beauty", href: "/category/beauty" },
  ],
  help: [
    { name: "Customer Service", href: "#" },
    { name: "Track Order", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "FAQs", href: "#" },
  ],
  about: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Affiliates", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-purple-dark text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay in the Loop</h3>
              <p className="text-primary-foreground/80">
                Subscribe to get exclusive offers, new arrivals & more!
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-80 bg-card/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 rounded-full"
              />
              <Button className="bg-card text-primary hover:bg-card/90 rounded-full px-8 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold">Bloom</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 text-sm">
              Your one-stop destination for fashion, beauty, and lifestyle. Discover the latest
              trends with us.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>123 Fashion Street, Mumbai, India 400001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-5 h-5 shrink-0" />
                <span>+91 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-5 h-5 shrink-0" />
                <span>hello@bloom.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Bloom. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-primary-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
