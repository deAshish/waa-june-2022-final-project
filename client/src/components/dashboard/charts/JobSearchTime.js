import ReactECharts from "echarts-for-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentList } from "../../../redux/reducers/Student/actions";

function JobSearchTime(props) {
  const dispatch = useDispatch();

  const { students } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(getStudentList());
  }, []);

  const xAxisData = [];
  const yAxisData = [];

  const gpaData = (min, max) => {
    const dayList = students
      .filter((x) => x.gpa > min && x.gpa < max)
      .map((x) => (x.daysToSearchJob ? x.daysToSearchJob : 0));

    if (dayList.length) {
      const averageDay = dayList.reduce((x, y) => {
        return x + y;
      });
      return averageDay / dayList.length;
    }
    return 0;
  };

  xAxisData.push("2.0 - 2.5");
  yAxisData.push(gpaData(2.0, 2.5));

  xAxisData.push("2.6-3.0");
  yAxisData.push(gpaData(2.6, 3.0));

  xAxisData.push("3.1-3.5");
  yAxisData.push(gpaData(3.1, 3.5));

  xAxisData.push("3.6-4.0");
  yAxisData.push(gpaData(3.6, 4.0));

  //   const jobAdvertisementData = stateList.map((x) => {
  //     return {
  //       name: x,
  //       value: 0,
  //     };
  //   });

  //   jobAdvertisementData.forEach((element) => {
  //     let filterData = jobAdvertisement.filter(
  //       (x) => x.address?.state == element.name
  //     );

  //     element.value = filterData.length;
  //   });

  const option = {
    title: {
      text: "Number Of Days Required To Search Job",
      subtext: "Per GPA",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: xAxisData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: yAxisData,
        type: "bar",
      },
    ],
  };

  return (
    // <>Hello{JSON.stringify(students)}</>
    <div className="card">
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        style={{ height: "500px", width: "100%" }}
      />
    </div>
  );
}

export default JobSearchTime;
