import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import { ApexOptions } from "apexcharts";
import { Button } from "@/components/ui/button";

interface JobTrend {
  name: number; // Represents the period (e.g., 30 days)
  numJobs: number; // Total jobs in the period
  value: number; // Metric value
}

interface GraphProps {
  jobTrends: JobTrend[];
  isTabletOrMobile: boolean;
}

const JobTrendGraph: React.FC<GraphProps> = ({ jobTrends, isTabletOrMobile }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [selectedDays, setSelectedDays] = useState<number>(30); // Default is 30 days
  const [data, setData] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  // Handle button click to select a different period
  const handleButtonClick = (days: number) => {
    setSelectedDays(days);
  };

  // Process data for the selected range
  useEffect(() => {
    // Find job trends for the selected period
    const trend = jobTrends.find((trend) => trend.name === selectedDays);
    const totalValue = trend?.value || 0; // Use value from backend or fallback to 0
    const days = selectedDays;

    // Distribute data evenly for the given days (mock data for the graph)
    const perDayValue = totalValue / days;
    const newData = Array.from({ length: days }, (_, i) =>
      Math.round(perDayValue * (i + 1))
    );

    // Update the X-axis categories
    const newCategories = Array.from({ length: days }, (_, i) =>
      (i + 1).toString()
    );

    setData(newData);
    setCategories(newCategories);
  }, [jobTrends, selectedDays]);

  // Render the chart
  useEffect(() => {
    const options: ApexOptions = {
      chart: {
        height: 215,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: "Job Posts",
          data: data,
        },
      ],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.2,
          opacityTo: 0.5,
          colorStops: [
            {
              offset: 0,
              color: "#9C27B0",
              opacity: 0.2,
            },
            {
              offset: 100,
              color: "#9C27B0",
              opacity: 0.2,
            },
          ],
        },
      },
      colors: ["#9C27B0"],
      stroke: {
        curve: "smooth",
        colors: ["#9C27B0"],
        width: 2,
      },
      xaxis: {
        categories: categories, // Dynamic X-axis
        title: {
          text: "",
        },
        labels: {
          style: {
            fontSize: isTabletOrMobile ? "8px" : "12px",
            fontWeight: 600,
            color: "#6A666E",
          },
        },
      },
      yaxis: {
        show: true,
        title: {
          text: "",
        },
        labels: {
          style: {
            fontSize: isTabletOrMobile ? "8px" : "12px",
            fontWeight: 600,
            color: "#6A666E",
          },
        },
      },
      grid: {
        yaxis: {
          lines: {
            offsetX: 10,
          },
        },
        padding: {
          left: 2,
          right: 5,
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex }: any) {
          return (
            `<div className="arrow_box" style="box-shadow: 0px 8px 16px 0px #3232470F, 0px 8px 8px 0px #32324714; padding:5px 15px; border-radius:5px;">` +
            `<span style='color:#11263C;font-size:12px;font-weight:500'>Day ${categories[dataPointIndex]} </span>` +
            `<br>` +
            `<span style='color:#11263C;font-size:12px;font-weight:500'>${series[seriesIndex][dataPointIndex]} Job Posts </span>` +
            `</div>`
          );
        },
      },
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [data, categories, isTabletOrMobile]);

  return (
    <div className="w-full">
      <div className="flex mb-4 space-x-2">
        <Button
          variant={"ghost"}
          className={`${
            selectedDays === 7 ? "bg-purple-200 border-purple-300" : ""
          }`}
          onClick={() => handleButtonClick(7)}
        >
          7 Days
        </Button>
        <Button
          className={`${
            selectedDays === 15 ? "bg-purple-200 border-purple-300" : ""
          }`}
          onClick={() => handleButtonClick(15)}
        >
          15 Days
        </Button>
        <Button
          className={`${
            selectedDays === 30 ? "bg-purple-200 border-purple-300" : ""
          }`}
          onClick={() => handleButtonClick(30)}
        >
          30 Days
        </Button>
      </div>
      <div ref={chartRef} className="w-full"></div>
    </div>
  );
};

export default JobTrendGraph;
