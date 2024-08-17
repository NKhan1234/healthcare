"use client";

import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const generateParabolicData = () => {
  const dataPoints = [];
  for (let x = -10; x <= 10; x++) {
    const y = Math.pow(x, 2);
    dataPoints.push({ x: x, y: y });
  }
  return dataPoints;
};

const ParabolicLineChart1 = () => {
  const data = {
    datasets: [
      {
        label: "Doctor Acquistion",
        data: generateParabolicData(),
        borderColor: "rgba(0, 192, 0, 1)",
        backgroundColor: "rgba(0, 192, 0, 0.2)",
        fill: false,
        borderWidth: 1,
        pointRadius: 3,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "X-Axis",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y-Axis",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
  };

  return <Line data={data} options={options} />;
};
const ParabolicLineChart2 = () => {
  const data = {
    datasets: [
      {
        label: "Income Accumulation Graph",
        data: generateParabolicData(),
        borderColor: "rgba(0, 192, 0, 1)",
        backgroundColor: "rgba(0, 192, 0, 0.2)",
        fill: false,
        borderWidth: 1,
        pointRadius: 3,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "X-Axis",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y-Axis",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
  };

  return <Line data={data} options={options} />;
};

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales in 2024 (in USD)",
        data: [12000, 19000, 3000, 5000, 2000, 3000, 12000],
        backgroundColor: "rgba(0, 0, 256, 0.7)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Sales in 2023 (in USD)",
        data: [15000, 12000, 14000, 6000, 7000, 8000, 14000],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Comparison for 2023 vs 2024",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales (in USD)",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

function Home() {
  return (
    <div className="container">
      <div className="upper">
        <div className="upper-in">
          <i className="ri-user-fill"></i>

          <h1>3540</h1>

          <p>Total Patients</p>
        </div>
        <div className="upper-in">
          <h3>
            <i className="ri-radio-line"></i>
          </h3>
          <h1>3540</h1>
          <p>Total TDMs</p>
        </div>
        <div className="upper-in">
          <h3>
            <i className="ri-stethoscope-line"></i>
          </h3>
          <h1>3540</h1>
          <p>Total Doctors</p>
        </div>
        <div className="upper-in">
          <h3>
            <i className="ri-briefcase-4-fill"></i>
          </h3>
          <h1>3540</h1>
          <p>Total Consultations</p>
        </div>
        <div className="upper-in">
          <h3>
            <i className="ri-radio-line"></i>
          </h3>
          <h1>3540</h1>
          <p>Active TDMs</p>
        </div>
        <div className="upper-in">
          <h3>
            <i className="ri-stethoscope-line"></i>
          </h3>
          <h1>3540</h1>
          <p>Active Doctors</p>
        </div>
      </div>

      <div className="two-chart">
        <div className="chart1">
          <ParabolicLineChart1 />
        </div>
        <div className="chart2">
          <ParabolicLineChart2 />
        </div>
      </div>

      <div className="all-and-chart">
        <div className="bar-chart">
          <BarChart />
        </div>
        <div className="insight">
          <h3 className="heading">Consultation insights</h3>
          <div className="insight-content">
            <div className="single-insight">
              <h3 className="h1">124</h3>
              <p>Daily Consultation</p>
            </div>
            <div className="single-insight">
              <h3 className="h2">21:00</h3>
              <p>Consultation Duration</p>
            </div>
            <div className="single-insight">
              <h3 className="h3">$300</h3>
              <p>Avg Consultation Fee</p>
            </div>
            <div className="single-insight">
              <h3 className="h4">$145</h3>
              <p>Mini-Consultation Fee</p>
            </div>
            <div className="single-insight">
              <h3 className="h5">$650</h3>
              <p>Max-Consultation Fee</p>
            </div>
            <button>
              Select Duration <i className="ri-arrow-down-s-line"></i>
            </button>
          </div>
        </div>
        <div className="server">
          <div className="cost">
            <h3>Server Cost</h3>
            <div className="cost-detail">
              <p>
                Today: <span>$1000</span>
              </p>
              <p>
                This Month: <span>$1000</span>
              </p>
              <p>
                Last Month: <span>$1000</span>
              </p>
              <p>
                This Year: <span>$1000</span>
              </p>
            </div>
          </div>
          <div className="cost">
            <h3>BandWidth Usage</h3>
            <div className="band-detail">
              <p>
                Today: <span>300 GB</span>
              </p>
              <p>
                Yesterday: <span>278 GB</span>
              </p>
              <p>
                7 Day Average: <span>320 GB</span>
              </p>
              <p>
                Peak Today: <span>27 Mbps @ 21:00</span>
              </p>
            </div>
          </div>
          <div className="compare">
            <p>
              <i className="ri-arrow-left-right-fill"></i>
            </p>
            <h3>Compare Charts</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
