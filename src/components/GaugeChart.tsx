import { FC } from "react";
import GaugeComponent from "react-gauge-component";

const GaugeChart: FC = () => {
  return (
    <div className="relative w-full h-full ">
      <GaugeComponent
        type="semicircle"
        value={40}
        minValue={0}
        maxValue={100}
        arc={{
          width: 0.2,
          // nbSubArcs: 0,
          gradient: true,
          subArcs: [
            { limit: 0, color: "#E54545", showTick: false },
            { limit: 20, color: "#E54545", showTick: false },
            { limit: 40, color: "#FF9000", showTick: false },
            { limit: 60, color: "#F1DA02", showTick: false },
            { limit: 80, color: "#F1DA02", showTick: false },
            { limit: 90, color: "#9FE400", showTick: false },
            { limit: 100, color: "#22D700", showTick: false },
          ],
        }}
        pointer={{
          color: "#E54545",
          length: 0.85,
          width: 35,
          elastic: true,
        }}
        labels={{
          valueLabel: { hide: true },
          tickLabels: {
            type: "outer",
          },
        }}
      />
      <span className="absolute w-8 h-8 p-2 px-1 text-sm font-normal transform -translate-x-1/2 bg-gray-100 border border-gray-700 rounded-full sm:font-semibold sm:py-3 sm:h-10 sm:w-10 top-2/3 left-1/2 sm:translate-y-2/4 sm:text-base">{`${40}%`}</span>
    </div>
  );
};

export default GaugeChart;
