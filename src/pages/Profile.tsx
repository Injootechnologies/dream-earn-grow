import { User, Mail, Wallet, ChevronRight, LogOut, Settings, HelpCircle, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const menuItems = [
    { icon: Settings, label: "Account Settings", action: "settings" },
    { icon: Shield, label: "Security", action: "security" },
    { icon: HelpCircle, label: "Help & Support", action: "help" },
  ];

  const handleMenuClick = (action: string) => {
    toast({
      title: "Coming Soon",
      description: `${action.charAt(0).toUpperCase() + action.slice(1)} page is under development.`,
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "See you next time!",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header with gradient */}
      <div className="gradient-primary px-6 pt-6 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <h1 className="text-2xl font-bold text-primary-foreground relative z-10">Profile</h1>
      </div>

      {/* Profile Card */}
      <section className="px-6 -mt-10 relative z-10 mb-6">
        <div className="card-elevated p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Dreamer</h2>
              <p className="text-muted-foreground text-sm">dreamer@example.com</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center p-3 bg-secondary rounded-xl">
              <p className="text-xl font-bold text-foreground">12</p>
              <p className="text-xs text-muted-foreground">Tasks Done</p>
            </div>
            <div className="text-center p-3 bg-secondary rounded-xl">
              <p className="text-xl font-bold text-foreground">₦48</p>
              <p className="text-xs text-muted-foreground">Earned</p>
            </div>
            <div className="text-center p-3 bg-secondary rounded-xl">
              <p className="text-xl font-bold text-foreground">3</p>
              <p className="text-xs text-muted-foreground">Days Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Info */}
      <section className="px-6 mb-6">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          Account Info
        </h3>
        <div className="card-elevated divide-y divide-border">
          <div className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Full Name</p>
              <p className="font-medium text-foreground">Dreamer</p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">dreamer@example.com</p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-success" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Total Earnings</p>
              <p className="font-medium text-foreground">₦48.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="px-6 mb-6">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          Settings
        </h3>
        <div className="card-elevated divide-y divide-border">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.action)}
              className="w-full p-4 flex items-center gap-4 hover:bg-secondary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <item.icon className="w-5 h-5 text-foreground" />
              </div>
              <span className="flex-1 text-left font-medium text-foreground">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>
      </section>

      {/* Logout */}
      <section className="px-6">
        <Button
          variant="outline"
          size="lg"
          className="w-full text-destructive border-destructive/30 hover:bg-destructive/10 hover:border-destructive"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </Button>
      </section>

      <BottomNav />
    </div>
  );
};

export default Profile;
