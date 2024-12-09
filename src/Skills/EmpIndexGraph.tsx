import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

interface ChartData {
  categories: string[];
  series: number[];
}

const EmpIndexGraph: React.FC = () => {
  // State to hold the chart data
  const [chartData, setChartData] = useState<ChartData>({
    categories: [],
    series: [],
  });

  // Data for the Employee Index (empIndexGraph)
  const empIndexGraph = {
    currentSemester: 6,
    semWiseEmpIndex: [
      {
        semester: "Semester 1",
        empIndex: 40,
      },
      {
        semester: "Semester 2",
        empIndex: 40,
      },
      {
        semester: "Semester 3",
        empIndex: 40,
      },
      {
        semester: "Semester 4",
        empIndex: 40,
      },
      {
        semester: "Semester 5",
        empIndex: 40,
      },
      {
        semester: "Semester 6",
        empIndex: 0,
      },
    ],
  };

 

  // Fetch data or set default chart data
  useEffect(() => {
    // Extract categories and series from the empIndexGraph data
    const categories = empIndexGraph.semWiseEmpIndex.map((data) => data.semester);
    const series = empIndexGraph.semWiseEmpIndex.map((data) => data.empIndex); // Scale empIndex by 10 for y-axis

    setChartData({
      categories,
      series,
    });
  }, []);

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: chartData.categories,
      labels: {
        style: {
          fontSize: "10px",
          fontWeight: 600,
          color: "#a242e3",
        },
      },
    },
    yaxis: {
      min: 0, // Start from 0
      max: 100, // Maximum value of y-axis (adjust according to your data scale)
      tickAmount: 5, // Number of ticks on y-axis (adjust for your scale)
      labels: {
        style: {
          fontSize: "12px",
          fontWeight: 600,
          color: "#a242e3",
        },
      },
    },
    fill: {
      opacity: 1,
      colors: ["#a242e3"],
    },
    colors: ["#000"],
  };

  return (
    <>
      <div className="px-4">
        <p className="text-xl font-normal">Current Semester</p>
        <h1 className="text-2xl font-bold font-">Semester 6</h1>
      </div>
      <div
        className="w-full max-w-4xl px-4 mx-auto bar-chart-container sm:px-6 lg:px-8"
        style={{ marginTop: "40px" }}
      >
        <ApexCharts
          options={options}
          series={[{ data: chartData.series }]}
          type="bar"
          height={350}
        />
      </div>
    </>
  );
};

export default EmpIndexGraph;
