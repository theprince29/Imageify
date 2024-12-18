import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PlanInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Plan</CardTitle>
        <CardDescription>Your current subscription plan</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-2xl font-bold">Pro Plan</h3>
        <p className="text-muted-foreground">1,000,000 API calls per month</p>
      </CardContent>
    </Card>
  )
}