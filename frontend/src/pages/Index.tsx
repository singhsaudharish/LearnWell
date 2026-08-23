import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, TrendingUp, Star, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const stats = [
  { icon: Users, value: "50K+", label: "Students" },
  { icon: BookOpen, value: "200+", label: "Courses" },
  { icon: Award, value: "95%", label: "Satisfaction" },
  { icon: TrendingUp, value: "85%", label: "Career Growth" },
];

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience.",
    icon: Award,
  },
  {
    title: "Self-Paced Learning",
    description: "Study at your own pace with lifetime access to all course materials.",
    icon: BookOpen,
  },
  {
    title: "Community Support",
    description: "Join a vibrant community of learners and get help when you need it.",
    icon: Users,
  },
  {
    title: "Career-Focused",
    description: "Build practical skills that employers are actively looking for.",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    text: "LearnWell transformed my career. The courses are practical and the community is incredibly supportive.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Data Analyst",
    text: "The data science track was exactly what I needed. I landed my dream job within 3 months!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "UX Designer",
    text: "The design courses are top-notch. I loved the project-based approach to learning.",
    rating: 5,
  },
];

const categories = [
  { name: "Web Development", count: 45, color: "bg-primary/10 text-primary" },
  { name: "Data Science", count: 32, color: "bg-accent/10 text-accent" },
  { name: "UI/UX Design", count: 28, color: "bg-warm-rose/10 text-warm-rose" },
  { name: "Business", count: 24, color: "bg-warm-gold/10 text-warm-brown" },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-10 md:grid-cols-2">
          <div className="animate-fade-in">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              🎓 Start Learning Today
            </span>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Unlock Your <span className="text-primary">Potential</span> With Expert-Led Courses
            </h1>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Join thousands of learners building real-world skills through interactive,
              hands-on courses designed by industry experts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/courses">
                <Button size="lg">
                  Explore Courses <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg">
                  Get Started Free
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Free courses available</span>
            </div>
          </div>
          <div className="animate-scale-in">
            <img
              src={heroImage}
              alt="Students learning together"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
              width={1024}
              height={768}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-3 font-heading text-3xl font-bold text-foreground">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Why Choose <span className="text-primary">LearnWell</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              We provide everything you need to succeed in your learning journey.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <f.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Browse by Category
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Find the perfect course in your area of interest.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.name}
                to="/courses"
                className="group flex items-center justify-between rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <h3 className="font-heading font-bold text-foreground">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.count} courses</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              What Our Students Say
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Real stories from real learners who transformed their careers.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border bg-card p-6">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warm-gold text-warm-gold" />
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">"{t.text}"</p>
                <div className="mt-4 border-t pt-4">
                  <p className="font-heading font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Start Learning?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Join 50,000+ students already learning on LearnWell. Start your journey today — it's free!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
