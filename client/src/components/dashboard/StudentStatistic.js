import React from "react";
import ReactECharts from "echarts-for-react";
import NumberOfStudents from "./charts/NumberOfStudents";
import NumberOfJobs from "./charts/NumberOfJobs";
import JobSearchTime from "./charts/JobSearchTime";
import TagPieChart from "./charts/TagPieChart";
import TagPerLocation from "./charts/TagPerLocation";
import NumberOfStudentsPerCity from "./charts/NumberOfStudentsPerCity";
import JobApplicationRate from "./charts/JobAdvertisementRate";
import JobAdvertisementRate from "./charts/JobAdvertisementRate";
import TopCompanies from "./charts/TopCompanies";
import StudentDepartment from "./charts/StudentDepartment";

function StudentStatistic() {
  const option = {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <NumberOfStudents />
        </div>

        <div className="col-md-6">
          <NumberOfStudentsPerCity />
        </div>
        <div className="col-md-12">
          <StudentDepartment />
        </div>
      </div>
    </div>
  );
}

export default StudentStatistic;
