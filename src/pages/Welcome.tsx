import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, ChevronRight } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero flex flex-col relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <div className="w-20 h-20 gradient-accent rounded-3xl flex items-center justify-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500">
            <Sparkles className="w-10 h-10 text-accent-foreground" />
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-5xl font-extrabold text-primary-foreground mb-3 tracking-tight animate-slide-up">
          Dream$
        </h1>
        
        <p className="text-xl font-medium text-primary-foreground/80 mb-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Earn. Create. Grow.
        </p>

        <p className="text-center text-primary-foreground/60 max-w-xs mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Complete simple tasks and turn your time into real earnings
        </p>

        {/* Features */}
        <div className="flex gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {["Watch", "Create", "Listen", "Play"].map((item, index) => (
            <div
              key={item}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-primary-foreground/90 text-sm font-medium"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 pb-12 space-y-3 relative z-10 animate-slide-up" style={{ animationDelay: "0.6s" }}>
        <Button
          variant="accent"
          size="xl"
          className="w-full"
          onClick={() => navigate("/signup")}
        >
          Get Started
          <ChevronRight className="w-5 h-5" />
        </Button>
        
        <Button
          variant="hero-outline"
          size="lg"
          className="w-full"
          onClick={() => navigate("/login")}
        >
          Already have an account? Log in
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
