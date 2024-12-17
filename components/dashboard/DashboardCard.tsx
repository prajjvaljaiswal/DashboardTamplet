import { Card, CardContent } from "../ui/card";
import { icons, LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: String;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent>
        <h3 className="text-3xl text-center text-slate-500 dark:text-slate-200 font-bold mb-4">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center bg-slate-100 dark:bg-slate-500">
          {icon}
          <h3 className="text-5xl font-bold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
