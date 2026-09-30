import { Link } from "react-router-dom";
import { BookOpen, Facebook, FacebookIcon, InstagramIcon, Linkedin, Mail, MapPin, Phone, YoutubeIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">LearnWell</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Empowering learners worldwide with quality education and expert-led courses.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/courses" className="hover:text-primary">Courses</Link></li>
              <li><Link to="/topics/codingqa" className="hover:text-primary">Coding Q&A</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground">Categories</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Design</li>
              <li>Business</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> learnwell67@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91773 8105048</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai, India</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground">Follow us on </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> <a href="https://www.linkedin.com/company/learnwell" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li className="flex items-center gap-2"><FacebookIcon className="h-4 w-4" /> <a href="https://www.facebook.com/profile.php?id=61574343124270" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li className="flex items-center gap-2"><InstagramIcon className="h-4 w-4" /> <a href="https://www.instagram.com/learn_well12" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li className="flex items-center gap-2"><YoutubeIcon className="h-4 w-4" /> <a href="https://www.youtube.com/@learn_well-x3z" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © 2026 LearnWell. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
