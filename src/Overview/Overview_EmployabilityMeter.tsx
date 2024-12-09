import { FC } from "react"
import GaugeComponent from "react-gauge-component";

const Overview_EmployabilityMeter:FC = () => {
  return (
    <>
      <div className="relative h-full min-w-full py-6 mt-3 ">
        <div className=" sm:ps-12 top-8">
          <GaugeComponent
            type="semicircle"
            arc={{
              width: 0.2,
              padding: 0.005,
              gradient: true,
              subArcs: [
                { limit: 0, color: "#E54545", showTick: false },
                { limit: 10, color: "#E54545", showTick: false },
                { limit: 30, color: "#FF9000", showTick: false },
                { limit: 45, color: "#F1DA02", showTick: false },
                { limit: 65, color: "#F1DA02", showTick: false },
                { limit: 75, color: "#9FE400", showTick: false },
                { limit: 100, color: "#22D700", showTick: false },
              ],
            }}
            pointer={{
              color: "#E54545",
              length: 0.85,
              width: 20,
              elastic: true,
            }}
            labels={{
              valueLabel: { formatTextValue: (value) => {} },
              tickLabels: {
                type: "outer",
                valueConfig: { fontSize: 18 },
              },
            }}
            value={40}
            minValue={0}
            maxValue={100}
          />
        </div>
        <span className="absolute w-11 h-10 py-1 px-1 text-base font-medium transform -translate-x-5 -translate-y-8 sm:-translate-x-[15%]  bg-gray-100 border-4 border-gray-400 rounded-full sm:font-semibold sm:px-2 sm:py-2 sm:h-16 sm:min-w-[10%] top-2/3 left-1/2 sm:translate-y-[50%] sm:text-2xl">{`${40}%`}</span>
        <div>
          <div className="block md:hidden ">
            <div className="flex flex-wrap items-start gap-4">
              {/* Dot 1 */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#E54545] rounded-full"></span>
                <span className="text-sm font-semibold">Need Improvement</span>
              </div>

              {/* Dot 2 */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#FF9000] rounded-full"></span>
                <span className="text-sm font-semibold">Developing</span>
              </div>

              {/* Dot 3 */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#F1DA02] rounded-full"></span>
                <span className="text-sm font-semibold">Sharpening</span>
              </div>

              {/* Dot 4 */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#9FE400] rounded-full"></span>
                <span className="text-sm font-semibold">Good Progress</span>
              </div>

              {/* Dot 5 */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#22D700] rounded-full"></span>
                <span className="text-sm font-semibold">Employable</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 hidden h-full min-w-full md:block">
          {[
            { percent: -8, text: "Need Improvement", color: "#E54545" },
            { percent: 18, text: "Developing", color: "#FF9000" },
            { percent: 53, text: "Sharpening", color: "#F1DA02" },
            { percent: 85, text: "Good Progress", color: "#9FE400" },
            { percent: 110, text: "Employable", color: "#22D700" },
          ].map(({ percent, text, color }, index) => {
            const angle = (percent / 100) * Math.PI;
            const radius = 1.2;

            const x = 50 + radius * 50 * Math.cos(Math.PI - angle);
            const y = 50 - radius * 50 * Math.sin(Math.PI - angle);

            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-500%, -200%)",
                  backgroundColor: color,
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                }}
              >
                <span
                  style={{
                    // display: "inline-flex",
                    //   position: "absolute",
                    transform: "translate(17%, -20%)",
                    fontSize: "20px",
                    whiteSpace: "nowrap",
                    position: "absolute",
                  }}
                >
                  {text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <h1 className="text-4xl font-semibold text-center ">Employability Index</h1>
    </>
  );
}

export default Overview_EmployabilityMeter