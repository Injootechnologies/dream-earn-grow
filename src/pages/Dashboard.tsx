import { Play, Video, Headphones, Gamepad2, Bell } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import BalanceCard from "@/components/BalanceCard";
import TaskCard from "@/components/TaskCard";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();

  const tasks = [
    {
      icon: Video,
      title: "Watch & Earn",
      description: "Watch short videos",
      earnings: "₦5-20",
      color: "bg-gradient-to-br from-rose-500 to-pink-600",
    },
    {
      icon: Play,
      title: "Create & Earn",
      description: "Create simple content",
      earnings: "₦50-200",
      color: "bg-gradient-to-br from-violet-500 to-purple-600",
    },
    {
      icon: Headphones,
      title: "Listen & Earn",
      description: "Listen to music & podcasts",
      earnings: "₦3-10",
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
    {
      icon: Gamepad2,
      title: "Play & Earn",
      description: "Play fun mini games",
      earnings: "₦10-50",
      color: "bg-gradient-to-br from-emerald-500 to-green-600",
    },
  ];

  const handleTaskClick = (taskTitle: string) => {
    toast({
      title: "Coming Soon!",
      description: `${taskTitle} tasks will be available soon.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="px-6 pt-6 pb-4 flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm">Welcome back,</p>
          <h1 className="text-xl font-bold text-foreground">Dreamer 👋</h1>
        </div>
        <button className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center relative hover:shadow-card-hover transition-shadow">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute -top-1 -right-1 w-4 h-4 gradient-accent rounded-full flex items-center justify-center text-[10px] font-bold text-accent-foreground">
            3
          </span>
        </button>
      </header>

      {/* Balance Card */}
      <section className="px-6 mb-8">
        <BalanceCard balance={0} />
      </section>

      {/* Tasks Section */}
      <section className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Available Tasks</h2>
          <span className="text-sm text-muted-foreground">4 categories</span>
        </div>

        <div className="space-y-3">
          {tasks.map((task, index) => (
            <div
              key={task.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TaskCard
                {...task}
                onClick={() => handleTaskClick(task.title)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Daily Tips */}
      <section className="px-6 mt-8">
        <div className="card-elevated p-4 border-l-4 border-accent">
          <h3 className="font-bold text-foreground text-sm mb-1">💡 Daily Tip</h3>
          <p className="text-muted-foreground text-sm">
            Complete at least 5 tasks daily to earn bonus rewards and level up faster!
          </p>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
