import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto"; // this line is needed to prevent Canvas from throwing index error

export function ChartTable({
  yearOnlyArray,
  thisYearPrincipalArray,
  thisYearInterestArray,
  thisYearBalanceArray,
}) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Housing Loan Repayment Schedule",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const chartData = {
    labels: yearOnlyArray,
    datasets: [
      {
        label: "Outstanding Balance",
        data: thisYearBalanceArray,
        backgroundColor: "#025043",
      },
      {
        label: "Principal Repayment",
        data: thisYearPrincipalArray,
        backgroundColor: "#048c7f",
      },
      {
        label: "Interest Repayment",
        data: thisYearInterestArray,
        backgroundColor: "#4fb9af",
      },
    ],
  };

  return (
    <div style={{ padding: "30px"}}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
