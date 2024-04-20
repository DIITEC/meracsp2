import React, { useEffect, useState } from "react";
import "./Assesment.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
const Assesment = ({ user }) => {
  const [statuses, setStatuses] = useState(Array(11).fill(false));
  const [assesData, setassesData] = useState([]);
  console.log("user");
  console.log(user);

  const findObtainedMarks = (moduleName) => {
    for (let i = 0; i < assesData.length; i++) {
      if (assesData[i].module === moduleName) {
        
        return assesData[i].obtainedMarks ?? "NULL";
      }
    }
    return "NULL";
  };
  const handleTaken = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = !newStatuses[index];
    setStatuses(newStatuses);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/assesmentResponse",
          {
            username: user.username,
          }
        );
        console.log(
          "Assessment data recieved successfully. Response data:",
          response.data.customer_accessments
        );
        setassesData(response.data.customer_accessments);
      } catch (error) {
        console.error("Error fetching assessment data:", error);
        alert("Error fetching assessment data");
      }
    };

    fetchData();

    return () => {};
  }, [user.username]);
  return (
    <div className="assementPannel">
      <Sidebar />

      <div className="assesmentContentSection">
        <Header user={user} />
        <div className="assementMainBox">
          {/* Contents hereee */}
          <span className="head1Assesment">Exams</span>
          <div className="line1"></div>
          <div className="head2Assesment">
            <input
              type="search"
              name="searchTest"
              placeholder="Search"
              id="searchTest"
            />
          </div>
          <div className="examTable">
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>MODULE</th>
                  <th>NO. OF QUESTIONS</th>
                  <th>MARKS OBTAINED</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-th="Sr. No.">
                    <span class="bt-content">1.</span>
                  </td>

                  <td data-th="MODULE">
                    <span class="bt-content">Entrepreneurship</span>
                  </td>
                  <td data-th="NO. OF QUESTIONS">
                    <span class="bt-content">10</span>
                  </td>
                  <td data-th="MARKS OBTAINED">
                    <span class="bt-content">
                      {" "}
                      {findObtainedMarks("Entrepreneurship")}
                    </span>
                  </td>
                  <td data-th="STATUS">
                    <span
                      className={statuses[1] ? "successExam" : "takeExam"}
                      onClick={() => handleTaken(1)}
                    >
                      <Link
                        to={{
                          pathname: `/initialtestStart`,
                          search: `?modules=Entrepreneurship&fileName=TestQuestion1.json`,
                        }}
                      >
                        {statuses[1] ? "Taken" : "Not Taken"}
                      </Link>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td data-th="Sr. No.">
                    <span class="bt-content">2.</span>
                  </td>

                  <td data-th="MODULE">
                    <span class="bt-content">
                      Entrepreneurship and Entrepreneurial Character
                    </span>
                  </td>
                  <td data-th="NO. OF QUESTIONS">
                    <span class="bt-content">10</span>
                  </td>
                  <td data-th="MARKS OBTAINED">
                    <span class="bt-content">
                    {findObtainedMarks("Entrepreneurship and Entrepreneurial Character")}
                    </span>
                  </td>
                  <td data-th="STATUS">
                    <span
                      className={statuses[2] ? "successExam" : "takeExam"}
                      onClick={() => handleTaken(2)}
                    >
                      <Link
                        to={{
                          pathname: `/initialtestStart`,
                          search: `?modules=Entrepreneurship and Entrepreneurial Character&fileName=TestQuestion2.json`,
                        }}
                      >
                        {statuses[2] ? "Taken" : "Not Taken"}{" "}
                      </Link>
                    </span>{" "}
                  </td>
                </tr>

                <tr>
                  <td data-th="Sr. No.">
                    <span class="bt-content">3.</span>
                  </td>

                  <td data-th="MODULE">
                    <span class="bt-content">
                      Identifying Business Opportunities
                    </span>
                  </td>
                  <td data-th="NO. OF QUESTIONS">
                    <span class="bt-content">10</span>
                  </td>
                  <td data-th="MARKS OBTAINED">
                    <span class="bt-content">
                    {findObtainedMarks("Identifying Business Opportunities")}
                    </span>
                  </td>
                  <td data-th="STATUS">
                    <span
                      className={statuses[3] ? "successExam" : "takeExam"}
                      onClick={() => handleTaken(3)}
                    >
                      <Link
                        to={{
                          pathname: `/initialtestStart`,
                          search: `?modules=Identifying Business Opportunities&fileName=TestQuestion3.json`,
                        }}
                      >
                        {statuses[2] ? "Taken" : "Not Taken"}{" "}
                      </Link>
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td data-th="Sr. No.">
                    <span class="bt-content">4.</span>
                  </td>

                  <td data-th="MODULE">
                    <span class="bt-content">
                      Understanding Cost Structures
                    </span>
                  </td>
                  <td data-th="NO. OF QUESTIONS">
                    <span class="bt-content">10</span>
                  </td>
                  <td data-th="MARKS OBTAINED">
                    <span class="bt-content">
                    {findObtainedMarks("Understanding Cost Structures")}
                    </span>
                  </td>
                  <td data-th="STATUS">
                    <span
                      className={statuses[4] ? "successExam" : "takeExam"}
                      onClick={() => handleTaken(4)}
                    >
                      <Link
                        to={{
                          pathname: `/initialtestStart`,
                          search: `?modules=Understanding Cost Structures&fileName=TestQuestion4.json`,
                        }}
                      >
                        {statuses[2] ? "Taken" : "Not Taken"}{" "}
                      </Link>
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td data-th="Sr. No.">
                    <span class="bt-content">5.</span>
                  </td>

                  <td data-th="MODULE">
                    <span class="bt-content"> Long Term Orientation</span>
                  </td>
                  <td data-th="NO. OF QUESTIONS">
                    <span class="bt-content">10</span>
                  </td>
                  <td data-th="MARKS OBTAINED">
                    <span class="bt-content">
                    {findObtainedMarks("Long Term Orientation")}
                    </span>
                  </td>
                  <td data-th="STATUS">
                    <span
                      className={statuses[5] ? "successExam" : "takeExam"}
                      onClick={() => handleTaken(5)}
                    >
                      <Link
                        to={{
                          pathname: `/initialtestStart`,
                          search: `?modules=Long Term Orientation&fileName=TestQuestion5.json`,
                        }}
                      >
                        {statuses[2] ? "Taken" : "Not Taken"}{" "}
                      </Link>
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td data-th="Sr. No.">
                    <span class="bt-content">6.</span>
                  </td>

                  <td data-th="MODULE">
                    <span class="bt-content">
                      Recording Business Transactions
                    </span>
                  </td>
                  <td data-th="NO. OF QUESTIONS">
                    <span class="bt-content">10</span>
                  </td>
                  <td data-th="MARKS OBTAINED">
                    <span class="bt-content">
                    {findObtainedMarks("Recording Business Transactions")}
                    </span>
                  </td>
                  <td data-th="STATUS">
                    <span
                      className={statuses[6] ? "successExam" : "takeExam"}
                      onClick={() => handleTaken(6)}
                    >
                      <Link
                        to={{
                          pathname: `/initialtestStart`,
                          search: `?modules=Recording Business Transactions&fileName=TestQuestion6.json`,
                        }}
                      >
                        {statuses[2] ? "Taken" : "Not Taken"}{" "}
                      </Link>
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td data-th="Sr. No.">
                    <span class="bt-content">7.</span>
                  </td>

                  <td data-th="MODULE">
                    <span class="bt-content">Basic Financial Terms</span>
                  </td>
                  <td data-th="NO. OF QUESTIONS">
                    <span class="bt-content">10</span>
                  </td>
                  <td data-th="MARKS OBTAINED">
                    <span class="bt-content">
                    {findObtainedMarks("Basic Financial Terms")}
                    </span>
                  </td>
                  <td data-th="STATUS">
                    <span
                      className={statuses[7] ? "successExam" : "takeExam"}
                      onClick={() => handleTaken(7)}
                    >
                      <Link
                        to={{
                          pathname: `/initialtestStart`,
                          search: `?modules=Basic Financial Terms&fileName=TestQuestion7.json`,
                        }}
                      >
                        {statuses[2] ? "Taken" : "Not Taken"}{" "}
                      </Link>
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td data-th="Sr. No.">
                    <span class="bt-content">8.</span>
                  </td>

                  <td data-th="MODULE">
                    <span class="bt-content">
                      {" "}
                      Accounting and Business Reporting
                    </span>
                  </td>
                  <td data-th="NO. OF QUESTIONS">
                    <span class="bt-content">10</span>
                  </td>
                  <td data-th="MARKS OBTAINED">
                    <span class="bt-content">
                    {findObtainedMarks("Accounting and Business Reporting")}
                    </span>
                  </td>
                  <td data-th="STATUS">
                    <span
                      className={statuses[8] ? "successExam" : "takeExam"}
                      onClick={() => handleTaken(8)}
                    >
                      <Link
                        to={{
                          pathname: `/initialtestStart`,
                          search: `?modules=Accounting and Business Reporting&fileName=TestQuestion8.json`,
                        }}
                      >
                        {statuses[2] ? "Taken" : "Not Taken"}{" "}
                      </Link>
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td data-th="Sr. No.">
                    <span class="bt-content">9.</span>
                  </td>

                  <td data-th="MODULE">
                    <span class="bt-content">
                      Marketing Education_Handling Questions & Concerns
                    </span>
                  </td>
                  <td data-th="NO. OF QUESTIONS">
                    <span class="bt-content">10</span>
                  </td>
                  <td data-th="MARKS OBTAINED">
                    <span class="bt-content">
                    {findObtainedMarks("Marketing Education_Handling Questions & Concerns")}
                    </span>
                  </td>
                  <td data-th="STATUS">
                    <span
                      className={statuses[9] ? "successExam" : "takeExam"}
                      onClick={() => handleTaken(9)}
                    >
                      <Link
                        to={{
                          pathname: `/initialtestStart`,
                          search: `?modules=Marketing Education_Handling Questions & Concerns&fileName=TestQuestion9.json`,
                        }}
                      >
                        {statuses[2] ? "Taken" : "Not Taken"}{" "}
                      </Link>
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td data-th="Sr. No.">
                    <span class="bt-content">10.</span>
                  </td>

                  <td data-th="MODULE">
                    <span class="bt-content"> Marketing Education Value</span>
                  </td>
                  <td data-th="NO. OF QUESTIONS">
                    <span class="bt-content">10</span>
                  </td>
                  <td data-th="MARKS OBTAINED">
                    <span class="bt-content">
                    {findObtainedMarks("Marketing Education Value")}
                    </span>
                  </td>
                  <td data-th="STATUS">
                    <span
                      className={statuses[10] ? "successExam" : "takeExam"}
                      onClick={() => handleTaken(10)}
                    >
                      <Link
                        to={{
                          pathname: `/initialtestStart`,
                          search: `?modules=Marketing Education Value&fileName=TestQuestion10.json`,
                        }}
                      >
                        {statuses[2] ? "Taken" : "Not Taken"}{" "}
                      </Link>
                    </span>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assesment;
