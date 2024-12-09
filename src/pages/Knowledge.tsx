import { useState } from "react";
import News from "../Knowledge/News";
import Journals from "../Knowledge/Journals";
import Papers from "../Knowledge/Papers";
import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState<"News" | "Journals" | "Papers">(
    "News"
  );

  return (
    <div className="w-[87%] mx-auto min-h-dvh  border border-gray-200  mt-12 rounded-xl shadow-lg  p-4">
      {/* Tab Navigation */}
      <div className="flex flex-col justify-between w-full p-4 items- lg:flex-row ">
        <CardTitle className="text-2xl font-bold">
          {activeTab === "News" ? "News of the Day" : activeTab}
        </CardTitle>
        <div className="flex justify-end space-x-4 border-one font-bold text-lg">
          {["News", "Journals", "Papers"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab as "News" | "Journals" | "Papers")
              }
              className={`lg:px-4 lg:py-2 ${
                activeTab === tab
                  ? "text-gray-800 border-b-2 border-purple-500 text-xl font-bold "
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <Separator className="border-b-2 border-gray-200 px-4 w-[98%] mx-auto " />
      {/* Conditional Rendering of Child Components */}
      <div className="mt-6 border-none  ">
        {activeTab === "News" && <News />}
        {activeTab === "Journals" && <Journals />}
        {activeTab === "Papers" && <Papers />}
      </div>
    </div>
  );
};

export default Knowledge;
