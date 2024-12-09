import { CardContent, CardTitle } from "@/components/ui/card";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {  Calendar } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Knowlegde_MCQ from "./Knowlegde_MCQ";
import "../App.css"
// import axios from "axios";
// import Knowledge from '../pages/Knowledge';

const response = [
  {
        "_id": "6747f3d4276d0c460c849f1d",
        "course": "B.Com",
        "category": "finance",
        "createdAt": "2024-11-28T04:37:31.917Z",
        "publishedAt": "2024-11-28T04:22:38.000Z",
        "sourceURL": "https://economictimes.indiatimes.com/small-biz/trade/exports/insights/trumps-trade-chief-advocates-strategic-decoupling-from-china/articleshow/115754424.cms",
        "tags": [],
        "title": "Trump's trade chief advocates strategic decoupling from China",
        "knowledge": {
            "summary": "The article discusses the recent comments made by U.S. Trade Representative Katherine Tai, who advocated for a strategic decoupling from China. Tai emphasized the need for the U.S. to reduce its economic reliance on China, citing national security concerns and the need to protect American jobs and industries. She highlighted the Biden administration's focus on building resilient supply chains and diversifying trade relationships to reduce the country's dependence on China. The article also mentions the ongoing trade tensions between the U.S. and China, with the two countries engaging in tariff wars and disputes over issues like intellectual property rights and market access. Tai's remarks reflect the broader shift in U.S. policy towards China, which has become increasingly confrontational under the Biden administration. The article suggests that this strategic decoupling could have significant implications for businesses and consumers, as it may lead to higher prices, supply chain disruptions, and reduced access to Chinese markets. The article is relevant to the B.Com curriculum, as it discusses international trade, economic policies, and the impact of geopolitical tensions on business operations.",
            "skills": [
                "International trade analysis",
                "Policy evaluation",
                "Supply chain management",
                "Geopolitical risk assessment",
                "Macroeconomic analysis"
            ]
        },
        "mcq": [
            {
                "answers": [],
                "_id": "6747f3d4276d0c460c849f1e"
            },
            {
                "question": "What is the main reason cited by U.S. Trade Representative Katherine Tai for advocating a strategic decoupling from China?",
                "answers": [
                    "To reduce the U.S. trade deficit with China",
                    "To protect American jobs and industries",
                    "To promote free trade and open markets",
                    "To increase the U.S. share of global trade"
                ],
                "correct_answer": "To protect American jobs and industries",
                "_id": "6747f3d4276d0c460c849f1f"
            },
            {
                "question": "What is the Biden administration's focus in terms of building resilient supply chains and diversifying trade relationships?",
                "answers": [
                    "Reducing reliance on China",
                    "Increasing exports to Europe",
                    "Promoting free trade agreements",
                    "Strengthening domestic manufacturing"
                ],
                "correct_answer": "Reducing reliance on China",
                "_id": "6747f3d4276d0c460c849f20"
            },
            {
                "question": "What are the potential implications of the strategic decoupling from China for businesses and consumers?",
                "answers": [
                    "Lower prices and increased access to Chinese markets",
                    "Higher prices and supply chain disruptions",
                    "Improved trade balance and economic growth",
                    "Reduced competition and increased innovation"
                ],
                "correct_answer": "Higher prices and supply chain disruptions",
                "_id": "6747f3d4276d0c460c849f21"
            },
            {
                "question": "Which of the following concepts is most relevant to the B.Com curriculum based on the article?",
                "answers": [
                    "International marketing",
                    "Entrepreneurship",
                    "Financial accounting",
                    "International trade"
                ],
                "correct_answer": "International trade",
                "_id": "6747f3d4276d0c460c849f22"
            },
            {
                "question": "What is the broader shift in U.S. policy towards China that the article mentions?",
                "answers": [
                    "Increased cooperation and engagement",
                    "Continued economic interdependence",
                    "Confrontational and decoupling approach",
                    "Pursuit of free trade agreements"
                ],
                "correct_answer": "Confrontational and decoupling approach",
                "_id": "6747f3d4276d0c460c849f23"
            }
        ],
        "__v": 0
    },
  {
        "_id": "6747f3d4276d0c460c849f1d",
        "course": "B.Com",
        "category": "finance",
        "createdAt": "2024-11-28T04:37:31.917Z",
        "publishedAt": "2024-11-28T04:22:38.000Z",
        "sourceURL": "https://economictimes.indiatimes.com/small-biz/trade/exports/insights/trumps-trade-chief-advocates-strategic-decoupling-from-china/articleshow/115754424.cms",
        "tags": [],
        "title": "Trump's trade chief advocates strategic decoupling from China",
        "knowledge": {
            "summary": "The article discusses the recent comments made by U.S. Trade Representative Katherine Tai, who advocated for a strategic decoupling from China. Tai emphasized the need for the U.S. to reduce its economic reliance on China, citing national security concerns and the need to protect American jobs and industries. She highlighted the Biden administration's focus on building resilient supply chains and diversifying trade relationships to reduce the country's dependence on China. The article also mentions the ongoing trade tensions between the U.S. and China, with the two countries engaging in tariff wars and disputes over issues like intellectual property rights and market access. Tai's remarks reflect the broader shift in U.S. policy towards China, which has become increasingly confrontational under the Biden administration. The article suggests that this strategic decoupling could have significant implications for businesses and consumers, as it may lead to higher prices, supply chain disruptions, and reduced access to Chinese markets. The article is relevant to the B.Com curriculum, as it discusses international trade, economic policies, and the impact of geopolitical tensions on business operations.",
            "skills": [
                "International trade analysis",
                "Policy evaluation",
                "Supply chain management",
                "Geopolitical risk assessment",
                "Macroeconomic analysis"
            ]
        },
        "mcq": [
            {
                "answers": [],
                "_id": "6747f3d4276d0c460c849f1e"
            },
            {
                "question": "What is the main reason cited by U.S. Trade Representative Katherine Tai for advocating a strategic decoupling from China?",
                "answers": [
                    "To reduce the U.S. trade deficit with China",
                    "To protect American jobs and industries",
                    "To promote free trade and open markets",
                    "To increase the U.S. share of global trade"
                ],
                "correct_answer": "To protect American jobs and industries",
                "_id": "6747f3d4276d0c460c849f1f"
            },
            {
                "question": "What is the Biden administration's focus in terms of building resilient supply chains and diversifying trade relationships?",
                "answers": [
                    "Reducing reliance on China",
                    "Increasing exports to Europe",
                    "Promoting free trade agreements",
                    "Strengthening domestic manufacturing"
                ],
                "correct_answer": "Reducing reliance on China",
                "_id": "6747f3d4276d0c460c849f20"
            },
            {
                "question": "What are the potential implications of the strategic decoupling from China for businesses and consumers?",
                "answers": [
                    "Lower prices and increased access to Chinese markets",
                    "Higher prices and supply chain disruptions",
                    "Improved trade balance and economic growth",
                    "Reduced competition and increased innovation"
                ],
                "correct_answer": "Higher prices and supply chain disruptions",
                "_id": "6747f3d4276d0c460c849f21"
            },
            {
                "question": "Which of the following concepts is most relevant to the B.Com curriculum based on the article?",
                "answers": [
                    "International marketing",
                    "Entrepreneurship",
                    "Financial accounting",
                    "International trade"
                ],
                "correct_answer": "International trade",
                "_id": "6747f3d4276d0c460c849f22"
            },
            {
                "question": "What is the broader shift in U.S. policy towards China that the article mentions?",
                "answers": [
                    "Increased cooperation and engagement",
                    "Continued economic interdependence",
                    "Confrontational and decoupling approach",
                    "Pursuit of free trade agreements"
                ],
                "correct_answer": "Confrontational and decoupling approach",
                "_id": "6747f3d4276d0c460c849f23"
            }
        ],
        "__v": 0
    },
  {
    _id: "6743f1d1fd303e312fa42ef7",
    course: "B.Com",
    category: "finance",
    createdAt: "2024-11-25T03:39:06.497Z",
    publishedAt: "2024-11-25T03:17:29.000Z",
    sourceURL:
      "https://economictimes.indiatimes.com/markets/bonds/adani-bonds-slide-to-year-low-as-investors-weigh-bribery-allegations/articleshow/115642160.cms",
    tags: [],
    title:
      "Adani bonds slide to year low as investors weigh bribery allegations",
    knowledge: {
      summary:
        "Adani Group's bonds have slumped to a one-year low as investors weigh the impact of bribery allegations against the conglomerate. The allegations, made by a US short-seller, have sparked concerns about the group's governance and financial practices. The slide in Adani bonds comes amid a broader sell-off in the group's securities, which have lost over $100 billion in market value since the allegations surfaced. Analysts say the bribery claims, if proven true, could have significant implications for the group's operations and access to capital markets. The Adani Group has denied the allegations and vowed to take legal action against the short-seller. However, the damage to investor confidence has already been done, with the group's bonds trading at distressed levels. The situation highlights the importance of corporate governance and transparency, particularly for large conglomerates operating in emerging markets. As the investigation into the allegations continues, investors will be closely watching the group's response and any potential impact on its business and financial performance.",
      skills: [
        "Financial analysis",
        "Risk assessment",
        "Corporate governance evaluation",
        "Ethical decision-making",
        "Investment portfolio management",
      ],
    },
  },
];

const News: FC = () => {
  const [data, setData] = useState<[]>([]);
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setData(response);
  }, []);

  
  console.log(data);

  //

  return (
    <div className="relative flex flex-col gap-4 p-4 rounded-md">
      {data.map((item) => (
        <div
          key={item?._id}
          className="flex flex-col gap-6 p-4 border border-gray-300 rounded-lg shadow-s"
        >
          <div className="flex lg:justify-between ">
            <CardTitle className="font-bold">{item?.title} </CardTitle>
            <div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-lg font-bold text-purple-500"
                  >
                    View Summary
                  </Button>
                </SheetTrigger>
                <SheetContent className="lg:min-w-[63%] min-w-[100%] lg:px-10 px-6 py-3 overflow-scroll scrollableContent scroll-smooth ">
                  <SheetHeader className="fixed top-0 z-20 flex justify-between w-full h-20 py-2 bg-white">
                    <SheetTitle className="w-full p-0 mt-4 text-lg lg:text-4xl ">
                      What am I learning?
                    </SheetTitle>
                    <SheetClose></SheetClose>
                  </SheetHeader>
                  <div className="w-full mt-16">
                    <Knowlegde_MCQ news={item} />
                  </div>
                  <SheetFooter></SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <CardContent className="p-0 mt-2 text-gray-600 tracking-wide font-semibold text-justify ">
            {expanded[item._id]
              ? item.knowledge.summary
              : item.knowledge.summary.slice(0, 300) + "..."}
            <button
              className="text-blue-500 hover:underline"
              onClick={() =>
                setExpanded((prevState) => ({
                  ...prevState,
                  [item._id]: !prevState[item._id],
                }))
              }
            >
              {expanded[item._id] ? "Show Less" : "Show More"}
            </button>
          </CardContent>
          <div className="flex justify-between w-full">
            <Link
              to={item.sourceURL}
              className="text-lg font-semibold text-purple-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source link
            </Link>
            <div className="flex justify-end">
              <p className="text-lg text-gray-500 text-end">
                <Calendar className="inline" />
                {new Date(item.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
