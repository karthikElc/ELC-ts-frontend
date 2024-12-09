import React, { FC, useMemo } from "react";
import Chart from "react-apexcharts";

type SemesterType = {
  semester: string;
  coverage: string;
};

interface MissingareaGraphProps {
  selectedSem: string; // The selected semester, e.g., "Semester 2"
}

const semesters: SemesterType[] = [
  { semester: "Semester 1", coverage: "17.11" },
  { semester: "Semester 2", coverage: "19.79" },
  { semester: "Semester 3", coverage: "12.03" },
  { semester: "Semester 4", coverage: "11.23" },
  { semester: "Semester 5", coverage: "19.79" },
  { semester: "Semester 6", coverage: "20.05" },
];

const MissingareaGraph: FC<MissingareaGraphProps> = ({ selectedSem }) => {
  const { series, labels, colors } = useMemo(() => {
    // Define colors for each semester
    const tempColorsArr = [
      "#9D4EDD", // Semester 1
      "#4CAF50", // Semester 2
      "#FF9800", // Semester 3
      "#2196F3", // Semester 4
      "#FF5722", // Semester 5
      "#8BC34A", // Semester 6
    ];

    // Find the index of the selected semester
    const selectedIndex = semesters.findIndex(
      (sem) => sem.semester === selectedSem
    );

    let cumulativeCoverage = 0;
    const seriesArr: number[] = [];
    const labelsArr: string[] = [];
    const colorsArr: string[] = [];

    // Loop through all semesters up to the previous one of the  selected one and add coverage
    for (let i = 0; i < selectedIndex; i++) {
      cumulativeCoverage += parseFloat(semesters[i].coverage);
      seriesArr.push(parseFloat(semesters[i].coverage));
      labelsArr.push(`${semesters[i].semester} (${semesters[i].coverage}%)`);
      colorsArr.push(tempColorsArr[i]); // Assign color for each semester
    }

    // Calculate missing percentage based on total coverage up to the selected semester
    const missingPercentage = 100 - cumulativeCoverage;
    seriesArr.push(missingPercentage);
    labelsArr.push(`Missing (${missingPercentage.toFixed(2)}%)`);
    colorsArr.push("#E5E5E5"); // Missing color (gray)

    return {
      series: seriesArr,
      labels: labelsArr,
      colors: colorsArr,
    };
  }, [selectedSem]);

  // Chart configuration
  const options = {
    chart: {
      type: "donut",
    },
    labels: labels,
    colors: colors,
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    legend: {
      show: false, // Hide legend
      position: "bottom",
      horizontalAlign: "center",
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <div className="w-full h-full">
      
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default MissingareaGraph;
