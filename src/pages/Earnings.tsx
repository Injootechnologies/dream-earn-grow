import { Wallet, Clock, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";
import { useToast } from "@/hooks/use-toast";

const Earnings = () => {
  const { toast } = useToast();
  const balance = 0;
  const minimumWithdrawal = 1000;

  const handleWithdraw = () => {
    if (balance < minimumWithdrawal) {
      toast({
        title: "Insufficient Balance",
        description: `You need at least ₦${minimumWithdrawal.toLocaleString()} to withdraw.`,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Withdrawal Initiated",
        description: "Your withdrawal is being processed.",
      });
    }
  };

  const transactions = [
    {
      id: 1,
      type: "earning",
      title: "Watch & Earn",
      amount: 15,
      status: "completed",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "earning",
      title: "Listen & Earn",
      amount: 8,
      status: "completed",
      time: "5 hours ago",
    },
    {
      id: 3,
      type: "earning",
      title: "Play & Earn",
      amount: 25,
      status: "pending",
      time: "Yesterday",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="px-6 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-foreground">Earnings</h1>
        <p className="text-muted-foreground text-sm">Track and withdraw your earnings</p>
      </header>

      {/* Balance Overview */}
      <section className="px-6 mb-6">
        <div className="card-elevated p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center">
              <Wallet className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Available Balance</p>
              <p className="text-3xl font-bold text-foreground">
                ₦{balance.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Minimum Withdrawal</p>
                <p className="text-sm text-muted-foreground">
                  You need ₦{minimumWithdrawal.toLocaleString()} to withdraw
                </p>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full"
            onClick={handleWithdraw}
            disabled={balance < minimumWithdrawal}
          >
            Withdraw Earnings
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="card-elevated p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-xs">Pending</span>
            </div>
            <p className="text-xl font-bold text-foreground">₦25.00</p>
          </div>
          <div className="card-elevated p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs">Total Earned</span>
            </div>
            <p className="text-xl font-bold text-foreground">₦48.00</p>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="px-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {transactions.map((tx, index) => (
            <div
              key={tx.id}
              className="card-elevated p-4 flex items-center justify-between animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    tx.status === "completed"
                      ? "bg-success/10 text-success"
                      : "bg-warning/10 text-warning"
                  }`}
                >
                  {tx.status === "completed" ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <Clock className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{tx.title}</p>
                  <p className="text-xs text-muted-foreground">{tx.time}</p>
                </div>
              </div>
              <span className="font-bold text-success">+₦{tx.amount}</span>
            </div>
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Earnings;
