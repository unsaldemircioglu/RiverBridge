"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "December 22", desktop: 1 },
  { month: "December 23", desktop: 9 },
  { month: "December 24", desktop: 10 },
  { month: "December 25", desktop: 17 },
  { month: "December 26", desktop: 24 },
  { month: "December 27", desktop: 29 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <>
    <div className="flex justify-center mt-5">
    <div className="w-2/3">
       <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Online User in this period</CardTitle>
        <CardDescription>
          Total User
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid className="fill-[--color-desktop] opacity-20" />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          User up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
        December 22 - December 27 2024
        </div>
      </CardFooter>
    </Card>
    </div>
    </div>
    </>
  )
}
