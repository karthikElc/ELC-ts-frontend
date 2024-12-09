import { Col, Row, Card, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState, useRef } from "react";
import { useAppCacheContext } from "../../../Services/AppCache";
import { DecryptElcarreira } from "../../../Services/EncryptAndDecrypt";
import { Http } from "../../../Services/CommonHttpServices";
import { useNavigate } from "react-router-dom";
import ApexCharts from "apexcharts";
import "../../home/skill.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiOpenArmLine, RiFootballLine, RiUserSmileLine } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import _ from "lodash";
import { color } from "d3";
import { RiArrowRightSLine } from "react-icons/ri";

const Market = () => {
  const navigate = useNavigate();
  const appCacheContext = useAppCacheContext();
  const studentId = appCacheContext?.AppCachesObj?.userInfo?.studentGuid;
  const userInfo = appCacheContext?.getAppCacheObj("userInfo");
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 760px)" });
  const chartRef = useRef(null);
  const [marketDetails, setMarketDetails] = useState(null);
  const getDaysArr = (days) => {
    let daysArr = [];
    daysArr.push(0);
    for (var i = 1; i < days + 1; i++) {
      daysArr.push(i);
    }
    return daysArr;
  };
  const generateZeroArr = (arrLen) => {
    let zeroarr = [];
    for (var i = 0; i < arrLen + 1; i++) {
      zeroarr.push(0);
    }
    return zeroarr;
  };
  const [jobsInTrend, setJobsInTrend] = useState({
    days: getDaysArr(30),
    data: generateZeroArr(30),
    numJobs: generateZeroArr(30),
  });
  const [selectedDays, setSelectedDays] = useState({
    days: 30,
    vacancies: 0,
    jobs: 0,
  });
  const [tempJobsInTrend, setTempJobsInTrend] = useState({
    days: getDaysArr(30),
    data: generateZeroArr(30),
    numJobs: generateZeroArr(30),
  });
  const [tempSelectedDays, setTempSelectedDays] = useState({
    days: 30,
    vacancies: 0,
    jobs: 0,
  });
  const [trendDaysButtonVariant, setTrendDaysButtonVariant] = useState({
    days7: false,
    days15: false,
    days30: true,
  });
  const onDaysClick = (event, days) => {
    const test = document.getElementsByClassName("job_trend_btn");
    test[0]?.classList.remove("job_trend_btn");
    event.currentTarget?.classList.add("job_trend_btn");
    setJobsInTrend({ ...jobsInTrend, ...{ days: getDaysArr(days) } });
    getJobsInTrendData(days);
  };
  const getJobsInTrendData = (days) => {
    var arrVacancies = [];
    (tempJobsInTrend?.data || []).forEach((item) => {
      arrVacancies[item.name] = item.value;
    });
    for (let i = 0; i < tempJobsInTrend?.data.length; i++) {
      if (!arrVacancies[i]) arrVacancies[i] = 0;
    }
    if (tempJobsInTrend?.data.length < days + 1) {
      arrVacancies = arrVacancies.concat(
        generateZeroArr(days - arrVacancies.length)
      );
    }
    arrVacancies = tempJobsInTrend?.data.slice(0, days + 1);
    var arrJobs = [];
    (tempJobsInTrend?.data || []).forEach((item) => {
      arrJobs[item.name] = item.numJobs;
    });
    for (let i = 0; i < tempJobsInTrend?.numJobs.length; i++) {
      if (!arrJobs[i]) arrJobs[i] = 0;
    }
    if (arrJobs.length < days + 1) {
      arrJobs = arrJobs.concat(generateZeroArr(days - arrJobs.length));
    }
    arrJobs = tempJobsInTrend?.numJobs.slice(0, days + 1);
    setSelectedDays({
      jobs: _.sum(arrJobs),
      vacancies: _.sum(arrVacancies),
      days: days,
    });
    setJobsInTrend({
      ...jobsInTrend,
      ...{ data: arrVacancies },
      ...{ numJobs: arrJobs },
      ...{ days: getDaysArr(days) },
    });
  };
  /* const [skillType, setSkillTpe] = useState("List"); */
  const [SkillTypeUI, setSkillTypeUI] = useState(null);

  useEffect(() => {
    Http.company(`overview/getMarketDetails?studentId=${studentId}`)
      .then((response) => {
        if (response?.data?.data) {
          setMarketDetails(response?.data?.data);
          FormJobsTrend(response?.data?.data?.jobTrends);
          FormSkillTypeUI(response?.data?.data, "List");
        }
      })
      .catch(() => {
        Http.LogFailedApiCalls(
          `overview/getMarketDetails?studentId=${studentId}`
        );
      });
  }, [studentId]);

  const FormJobsTrend = (jobTrends) => {
    let numDays = selectedDays?.days;
    var arrVacancies = [];
    (jobTrends || []).forEach((item) => {
      arrVacancies[item.name] = item.value;
    });
    for (let i = 0; i < arrVacancies.length; i++) {
      if (!arrVacancies[i]) arrVacancies[i] = 0;
    }
    if (arrVacancies.length < numDays + 1) {
      arrVacancies = arrVacancies.concat(
        generateZeroArr(numDays - arrVacancies.length)
      );
    }
    arrVacancies = arrVacancies.slice(0, numDays + 1);
    var arrJobs = [];
    (jobTrends || []).forEach((item) => {
      arrJobs[item.name] = item.numJobs;
    });
    for (let i = 0; i < arrJobs.length; i++) {
      if (!arrJobs[i]) arrJobs[i] = 0;
    }
    if (arrJobs.length < numDays + 1) {
      arrJobs = arrJobs.concat(generateZeroArr(numDays - arrJobs.length));
    }
    arrJobs = arrJobs.slice(0, numDays + 1);
    setSelectedDays({
      jobs: _.sum(arrJobs),
      vacancies: _.sum(arrVacancies),
      days: numDays,
    });
    setJobsInTrend({
      ...jobsInTrend,
      ...{ data: arrVacancies },
      ...{ numJobs: arrJobs },
    });
    setTempSelectedDays({
      jobs: _.sum(arrJobs),
      vacancies: _.sum(arrVacancies),
      days: numDays,
    });
    setTempJobsInTrend({
      ...jobsInTrend,
      ...{ data: arrVacancies },
      ...{ numJobs: arrJobs },
    });
  };

  /* useEffect(() => {
    let numDays = selectedDays?.days;
    Http.company(`dashboard/getJobTrends?course=${userInfo?.course}&numDays=${numDays}&apikey="abcd1234"`)
      .then((response) => {
        if (response?.data) {
          //response.data = JSON.parse(response.data);
          var arrVacancies = [];
          (response?.data?.data || []).forEach((item) => {
            arrVacancies[item.name] = item.value;
          });
          for (let i = 0; i < arrVacancies.length; i++) {
            if (!arrVacancies[i]) arrVacancies[i] = 0;
          }
          if (arrVacancies.length < numDays + 1) {
            arrVacancies = arrVacancies.concat(generateZeroArr(numDays - arrVacancies.length));
          }
          arrVacancies = arrVacancies.slice(0, numDays + 1);
          var arrJobs = [];
          (response?.data?.data || []).forEach((item) => {
            arrJobs[item.name] = item.numJobs;
          });
          for (let i = 0; i < arrJobs.length; i++) {
            if (!arrJobs[i]) arrJobs[i] = 0;
          }
          if (arrJobs.length < numDays + 1) {
            arrJobs = arrJobs.concat(generateZeroArr(numDays - arrJobs.length));
          }
          arrJobs = arrJobs.slice(0, numDays + 1);
          setSelectedDays({ jobs: _.sum(arrJobs), vacancies: _.sum(arrVacancies), days: numDays });
          setJobsInTrend({ ...jobsInTrend, ...{ data: arrVacancies }, ...{ numJobs: arrJobs } });
          setTempSelectedDays({ jobs: _.sum(arrJobs), vacancies: _.sum(arrVacancies), days: numDays });
          setTempJobsInTrend({ ...jobsInTrend, ...{ data: arrVacancies }, ...{ numJobs: arrJobs } });
        }
      })
      .catch((ex) => {
        setJobsInTrend({
          days: getDaysArr(30),
          data: generateZeroArr(30),
          numJobs: generateZeroArr(30),
        });
        Http.LogFailedApiCalls(`dashboard/getJobTrends?course=${userInfo?.course}&numDays=${numDays}&apikey="abcd1234"`);
      });
  }, []); */

  useEffect(() => {
    const options = {
      chart: {
        height: 215,
        type: "area",
        toolbar: {
          show: false, // Hides the toolbar
        },
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: "",
          data: jobsInTrend.data,
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
        curve: "straight",
        colors: ["#9C27B0"],
        width: 2,
      },
      info: {
        numJobs: jobsInTrend.numJobs,
      },
      xaxis: {
        categories: jobsInTrend.days,
        title: {
          text: "",
        },
        labels: {
          style: {
            fontSize: isTabletOrMobile ? "8px" : "12px", // Reduce the font size here
            fontWeight: 600,
            color: "#6A666E",
          },
        },
      },
      yaxis: {
        show: true, // Hides the y-axis
        title: {
          text: "",
        },
        labels: {
          style: {
            fontSize: isTabletOrMobile ? "8px" : "12px", // Reduce the font size here
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
        custom: function ({
          series,
          seriesIndex,
          dataPointIndex,
          jobPointIndex,
        }) {
          return (
            '<div className="arrow_box" style="box-shadow: 0px 8px 16px 0px #3232470F, 0px 8px 8px 0px #32324714; padding:5px 15px; border-radius:5px"; >' +
            "<span style='color:#11263C;font-size:12px;font-weight:500'>Last " +
            options.xaxis.categories[dataPointIndex] +
            " Days </span>" +
            "<br>" +
            "<span style='color:#11263C;font-size:12px;font-weight:500'>" +
            series[seriesIndex][dataPointIndex] +
            " Job Posts </span>" +
            /* "<br>" +
            "<span style='color:#11263C;font-size:12px;font-weight:500'>" +
            options.info.numJobs[dataPointIndex] + 
            " Jobs </span>" + */
            "</div>"
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
  }, [jobsInTrend, isTabletOrMobile]);

  const trendButtons = () => {
    return (
      <Col>
        <p className="fs_12 fw_600 color_000A25 mb-0 text-end">
          <button
            className={`${isMobile} ? "mx-0" : "mx-1" fs_10`}
            size="small"
            onClick={(event) => {
              setTrendDaysButtonVariant({
                days7: true,
                days15: false,
                days30: false,
              });
              onDaysClick(event, 7);
            }}
          >
            7 {isMobile ? "D" : "Days"}
          </button>
          <button
            className={`${isMobile} ? "mx-0" : "mx-1" fs_10 ${trendDaysButtonVariant}.days30?"outline-primary":"text"`}
            size="small"
            onClick={(event) => {
              setTrendDaysButtonVariant({
                days7: false,
                days15: true,
                days30: false,
              });
              onDaysClick(event, 15);
            }}
          >
            15 {isMobile ? "D" : "Days"}
          </button>
          <button
            className={`${isMobile} ? "mx-0" : "mx-1" fs_10 job_trend_btn`}
            size="small"
            onClick={(event) => {
              setTrendDaysButtonVariant({
                days7: false,
                days15: false,
                days30: true,
              });
              onDaysClick(event, 30);
            }}
          >
            30 {isMobile ? "D" : "Days"}
          </button>
        </p>
      </Col>
    );
  };

  const FormSkillTypeUI = (marketData, skillType) => {
    let ui = [];

    if (skillType === "List") {
      ui.push(
        <>
          <Row className="mt-4">
            <Col className="market_card me-3">
              <div /* style={{ height: '50%' }} */>
                <span
                  className="market-icon-area hw_18"
                  style={{ color: "#F2F5F8" }}
                >
                  <RiOpenArmLine
                    className="fs_20"
                    style={{ color: "#26282A" }}
                  />
                </span>
                <span className="fs_12 fw_600 color_000A25">
                  Skill in Demand
                </span>
              </div>
              <div>
                <hr className="skill_horizontal_bar my-2 mx-0" />
                {marketData?.skillInDemand && (
                  <h6 className="fs_14 fw_700 color_2D3037">
                    {marketData?.skillInDemand?.join(", ")}
                  </h6>
                )}
              </div>
            </Col>
            <Col className="market_card">
              <div /* style={{ height: '50%' }} */>
                <span
                  className="market-icon-area hw_18"
                  style={{ color: "#F6F4FF" }}
                >
                  <GiProgression
                    className="fs_20"
                    style={{ color: "#504675" }}
                  />
                </span>
                <span className="fs_12 fw_600 color_000A25">
                  Existing Career Opportunities
                </span>
              </div>
              <div /* style={{ height: '50%' }} */>
                <hr className="skill_horizontal_bar my-2 mx-0" />
                <h6 className="fs_14 fw_700 color_2D3037">
                  {marketData?.exitingCareerOpportunity}
                </h6>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="market_card me-3">
              <div /* style={{ height: '50%' }} */>
                <span
                  className="market-icon-area hw_18"
                  style={{ color: "#F8F2F7" }}
                >
                  <RiFootballLine
                    className="fs_20"
                    style={{ color: "#C660B6" }}
                  />
                </span>
                <span className="fs_12 fw_600 color_000A25">
                  Leading Employers Spotlight
                </span>
              </div>
              <div /* style={{ height: '50%' }} */>
                <hr className="skill_horizontal_bar my-2 mx-0" />
                <h6 className="fs_14 fw_700 color_2D3037">
                  {marketData?.leadingEmployer}
                </h6>
              </div>
            </Col>
            <Col className="market_card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    className="market-icon-area hw_18"
                    style={{ color: "#F2F8F4" }}
                  >
                    <RiUserSmileLine
                      className="fs_20"
                      style={{ color: "#366E14" }}
                    />
                  </span>
                  <span className="fs_12 fw_600 color_000A25">
                    Jobs of the Week
                  </span>
                </div>
                <span className="fs_12">
                  <a
                    href={marketData?.jobURL || ""}
                    target="_blank"
                    className="text-decoration-underline"
                  >
                    Apply Link
                  </a>
                </span>
              </div>
              <div /* style={{ height: '50%' }} */>
                <hr className="skill_horizontal_bar my-2 mx-0" />
                <h6 className="fs_14 fw_700 color_2D3037">
                  {marketData?.jobOfTheWeek}
                </h6>
              </div>
            </Col>
          </Row>
        </>
      );
    }
    if (skillType === "Graph") {
      ui.push(
        <>
          <Row className="mt-3">
            <Col>
              <h6 className="fs_14 fw_500 color_2D3037">Job Trend</h6>
            </Col>
            {trendButtons()}
          </Row>
          <div id="chart" ref={chartRef}></div>
        </>
      );
    }
    setSkillTypeUI(ui);
  };

  const handleSkillType = (event, item) => {
    const test = document.getElementsByClassName("skill_type_btn");
    test[0]?.classList.remove("skill_type_btn");
    event.currentTarget?.classList.add("skill_type_btn");
    setJobsInTrend({ ...jobsInTrend, ...{ days: getDaysArr(30) } });
    getJobsInTrendData(30);
    FormSkillTypeUI(marketDetails, item);
  };

  const changeActiveTab = () => {
    if (isMobile) {
      // Remove 'nav_menu' class from the previously selected button
      const activeElements = document.getElementsByClassName("activeTab");
      if (activeElements.length > 0) {
        activeElements[0].classList.add("nav_Menu_mobile");
        activeElements[0].classList.remove("nav_Menu_mobile_active");
        activeElements[0].classList.remove("activeTab");
      }
      const makeActive = document.getElementById("stu_employability");
      if (makeActive) {
        makeActive.classList.remove("nav_Menu_mobile");
        makeActive.classList.add("nav_Menu_mobile_active");
      }
    } else {
      // Remove 'nav_menu' class from the previously selected button
      const activeElements = document.getElementsByClassName("activeTab");
      if (activeElements.length > 0) {
        activeElements[0].classList.add("nav_normal_menu");
        activeElements[0].classList.remove("nav_menu");
        activeElements[0].classList.remove("activeTab");
      }
      const makeActive = document.getElementById("stu_employability");
      if (makeActive) {
        makeActive.classList.remove("nav_normal_menu");
        makeActive.classList.add("nav_menu", "activeTab");
      }
    }
  };

  return (
    <>
      <div className="d-flex flex-container">
        <h6 className="fs_18 fw_700 color_2D3037 mb-3">
          Market
          <OverlayTrigger
            delay={{ hide: 450, show: 300 }}
            overlay={(props) => <Tooltip {...props}>Market</Tooltip>}
            placement="bottom"
          >
            <span>
              <FaRegQuestionCircle className="info-css" />
            </span>
          </OverlayTrigger>
        </h6>
        <h6
          className="fs_16 fw_700 color_7F56D9 cursor_pointer"
          onClick={() => {
            navigate(`${window.IIShostName}stu_employability`);
            changeActiveTab();
          }}
        >
          See More <RiArrowRightSLine className="fs_18" />
        </h6>
      </div>
      <Card className="skill_card mb-5">
        <div
          /* className="overViewScroll" */ style={{
            minHeight: "312px" /* , overflowY:'auto', overflowX:'hidden'  */,
          }}
        >
          <Row>
            <Col>
              <h6 className="fs_18 fw_700 color_2D3037">Weekly Trends</h6>
            </Col>
            <Col>
              <p className="fs_12 fw_600 color_000A25 mb-0 text-end">
                <button
                  className={`${isMobile} ? "mx-0" : "mx-1" fs_10 skill_type_btn`}
                  size="lg"
                  onClick={(event) => {
                    handleSkillType(event, "List");
                  }}
                >
                  List
                </button>
                <button
                  className={`${isMobile ? "mx-0" : "mx-1"} fs_10`}
                  size="lg"
                  onClick={(event) => {
                    handleSkillType(event, "Graph");
                  }}
                >
                  Graph
                </button>
              </p>
            </Col>
          </Row>
          {SkillTypeUI}
        </div>
      </Card>
    </>
  );
};

export default Market;
