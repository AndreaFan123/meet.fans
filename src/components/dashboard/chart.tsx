"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";
import { format } from "date-fns";

// Generate sample data for the chart - in a real app, this would come from your API
const generateData = () => {
  const today = new Date();
  const data = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i * 30);
    
    data.push({
      date: date.toISOString(),
      events: Math.floor(Math.random() * 5) + 1,
    });
  }

  return data;
};

const data = generateData();

const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <Card>
        <CardContent className="p-2 text-xs">
          <p className="font-medium">{format(new Date(label), "MMMM yyyy")}</p>
          <p className="text-chart-1">Events: {payload[0].value}</p>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export function ChartComponent() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => format(new Date(date), "MMM")}
            className="text-xs text-muted-foreground"
          />
          <YAxis className="text-xs text-muted-foreground" />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="events" 
            stroke="hsl(var(--chart-1))" 
            fill="hsl(var(--chart-1) / 0.2)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}