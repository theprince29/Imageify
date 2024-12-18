import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { date: "2023-01-01", calls: 200000 },
  { date: "2023-01-02", calls: 300000 },
  { date: "2023-01-03", calls: 400000 },
  { date: "2023-01-04", calls: 200000 },
  { date: "2023-01-05", calls: 500000 },
  { date: "2023-01-06", calls: 600000 },
  { date: "2023-01-08", calls: 700000 },
  { date: "2023-01-09", calls: 700000 },
  { date: "2023-01-10", calls: 700000 },
  { date: "2023-01-11", calls: 700000 },
  { date: "2023-01-12", calls: 700000 },
  { date: "2023-01-13", calls: 700000 },
  { date: "2023-01-14", calls: 700000 },
];

export default function ApiUsageGraph() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>API Usage</CardTitle>
        <CardDescription>Your API usage over the last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            calls: {
              label: "API Calls",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[500px]"
        >
          <ResponsiveContainer width="250px" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="calls" stroke="var(--color-calls)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
