import WelcomeCard from "@/components/dashboard/WelcomeCard";
import DashboardStats from "@/components/dashboard/DashboardStats";
import QuickActions from "@/components/dashboard/QuickActions";
import ProgressChart from "@/components/dashboard/ProgressChart";
import MonthlySummary from "@/components/dashboard/MonthlySummary";

import InterviewSessions from "@/components/dashboard/InterviewSessions";
import AIRecommendations from "@/components/dashboard/AIRecommendations";
import DailyGoal from "@/components/dashboard/DailyGoal";
import UpcomingFeatures from "@/components/dashboard/UpcomingFeatures";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">

      <WelcomeCard />

      <DashboardStats />

      <QuickActions />

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <ProgressChart />
        </div>

        <MonthlySummary />

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <InterviewSessions />
        </div>

        <AIRecommendations />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <DailyGoal />

        <UpcomingFeatures />

      </div>

    </div>
  );
}