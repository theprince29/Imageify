import DashboardHeader from "./DashboardHeader";
import ApiKeySection from "./ApiKeySection";
import PlanInfo from "./PlanInfo";
import ApiStats from "./ApiStats";
import ApiUsageGraph from "./ApiUsageGraph";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <DashboardHeader />
      <div className="grid gap-6 mt-6 md:grid-cols-2">
        <ApiKeySection />
        <PlanInfo />
      </div>
      <ApiStats />
      <ApiUsageGraph />
    </div>
  );
}