import { TrendingUp, ArrowUpRight } from "lucide-react";

interface BalanceCardProps {
  balance: number;
  currency?: string;
}

const BalanceCard = ({ balance, currency = "₦" }: BalanceCardProps) => {
  return (
    <div className="gradient-primary rounded-3xl p-6 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 opacity-80" />
          <span className="text-sm font-medium opacity-80">Task Earnings</span>
        </div>
        
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl font-bold">{currency}</span>
          <span className="text-4xl font-extrabold tracking-tight">
            {balance.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 bg-primary-foreground/20 rounded-full px-3 py-1">
            <ArrowUpRight className="w-3 h-3" />
            <span className="font-medium">+0.00 today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
