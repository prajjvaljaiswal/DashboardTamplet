// import Image from "next/image";
import DashboardCard from "../components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title={"Post"}
          count={100}
          icon={
            <Newspaper
              className="text-slate-500 dark:text-slate-200"
              size={72}
            />
          }
        />
        <DashboardCard
          title={"Users"}
          count={700}
          icon={
            <User
              className="text-slate-500 dark:text-slate-200"
              size={72}
            />
          }
        />
        <DashboardCard
          title={"Categories"}
          count={200}
          icon={
            <Folder
              className="text-slate-500 dark:text-slate-200"
              size={72}
            />
          }
        />
        <DashboardCard
          title={"Comments"}
          count={500}
          icon={
            <MessageCircle
              className="text-slate-500 dark:text-slate-200"
              size={72}
            />
          }
        />
      </div>
    </>
  );
}
