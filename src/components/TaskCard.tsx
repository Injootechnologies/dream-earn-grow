import { LucideIcon } from "lucide-react";

interface TaskCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  earnings: string;
  color: string;
  onClick?: () => void;
}

const TaskCard = ({ icon: Icon, title, description, earnings, color, onClick }: TaskCardProps) => {
  return (
    <button
      onClick={onClick}
      className="card-elevated w-full p-4 text-left flex items-center gap-4 group"
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${color}`}
      >
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-foreground text-base">{title}</h3>
        <p className="text-muted-foreground text-sm mt-0.5">{description}</p>
      </div>
      <div className="text-right shrink-0">
        <span className="text-accent font-bold text-sm">{earnings}</span>
        <p className="text-muted-foreground text-xs">per task</p>
      </div>
    </button>
  );
};

export default TaskCard;
