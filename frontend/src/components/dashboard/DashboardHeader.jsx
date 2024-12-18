import { UserNav } from "@/components/dashboard/UserNav"

export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <UserNav />
    </header>
  )
}