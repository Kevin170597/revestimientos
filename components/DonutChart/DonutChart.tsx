"use client"
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const data = [
    { value: 3333 },
    { value: 72222 }
];

export const DonutChart = ({ data }: { data: { value: number, color: string }[] }) => {

    const COLORS = ['#faa74e', '#2ed3b5']

    return (
        <ResponsiveContainer width={"100%"} height={220}>
            <PieChart>
                <Pie
                    data={data}
                    cx={"50%"}
                    cy={"50%"}
                    innerRadius={50}
                    outerRadius={80}
                    dataKey={"value"}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}