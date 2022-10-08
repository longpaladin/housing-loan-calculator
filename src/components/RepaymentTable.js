import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ChartTable } from "./ChartTable";
import { HousingLoanPDF } from "./HousingLoanPDF";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const columns = [
  { id: "year", label: "Year", minWidth: 80, align: "right" },
  {
    id: "principal",
    label: "Principal Repayment (SGD$)",
    minWidth: 120,
    align: "right",
  },
  {
    id: "interest",
    label: "Interest Repayment (SGD$)",
    minWidth: 120,
    align: "right",
  },
  {
    id: "balance",
    label: "Outstanding Balance (SGD$)",
    minWidth: 120,
    align: "right",
  },
];

export function RepaymentTable({
  property,
  loanAmount,
  interestRate,
  loanTenure,
}) {
  let monthlyInterest = interestRate / 100 / 12;
  let monthlyCompoundingInterest = (1 + monthlyInterest) ** (loanTenure * 12);
  let monthlyRepayment =
    loanAmount *
    ((monthlyInterest * monthlyCompoundingInterest) /
      (monthlyCompoundingInterest - 1));

  let year = 2022;
  let currentMonthBalance = loanAmount;
  let finalArray = [];
  let yearOnlyArray = [];
  let thisYearPrincipalArray = [];
  let thisYearInterestArray = [];
  let thisYearBalanceArray = [];
  let currentMonthInterest;
  let currentMonthPrincipal;

  const calculator = () => {
    let tempArray = [];
    let thisYearPrincipalPaid = 0;
    let thisYearInterestPaid = 0;
    for (let i = 0; i < 12; i++) {
      currentMonthInterest = currentMonthBalance * monthlyInterest;
      thisYearInterestPaid += currentMonthInterest;
      currentMonthBalance = currentMonthBalance * (1 + monthlyInterest);
      currentMonthPrincipal = monthlyRepayment - currentMonthInterest;
      thisYearPrincipalPaid += currentMonthPrincipal;
      currentMonthBalance =
        currentMonthBalance - currentMonthPrincipal - currentMonthInterest;
    }

    yearOnlyArray.push(year);
    thisYearPrincipalArray.push(thisYearPrincipalPaid);
    thisYearInterestArray.push(thisYearInterestPaid);
    thisYearBalanceArray.push(currentMonthBalance);
    tempArray.push(year); // current year
    tempArray.push(thisYearPrincipalPaid); // principal sum paid for current year
    tempArray.push(thisYearInterestPaid); // interest sum paid for current year
    tempArray.push(currentMonthBalance); // balance to next year
    finalArray.push(tempArray);

    year++;
  };

  for (let i = 0; i < loanTenure; i++) {
    calculator();
  }

  return (
    <>
      <p style={{ fontSize: "24px" }}>
        Your estimated monthly repayment: &nbsp;
        <span style={{ fontSize: "60px", fontWeight: "bold" }}>
          SGD$ {parseInt(monthlyRepayment)}
        </span>
      </p>

      <ChartTable
        yearOnlyArray={yearOnlyArray}
        thisYearPrincipalArray={thisYearPrincipalArray}
        thisYearInterestArray={thisYearInterestArray}
        thisYearBalanceArray={thisYearBalanceArray}
      />
      <Paper
        className="repayment-table"
        sx={{ width: "90%", overflow: "hidden", margin: "0 auto" }}
      >
        <TableContainer sx={{ maxHeight: 800 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className="table-head">
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{
                      backgroundColor: "#006d5b",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {finalArray.map((rowOfArray, index) => {
                return (
                  <TableRow key={index}>
                    {rowOfArray.map((cellOfArray, index) => {
                      return (
                        <TableCell
                          key={index}
                          align={"right"}
                          style={{ minWidth: 100 }}
                        >
                          {index === 0
                            ? parseInt(cellOfArray)
                            : cellOfArray < 0
                            ? -1 *
                              cellOfArray.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })
                            : cellOfArray.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div style={{ margin: "20px" }}>
        <PDFDownloadLink
          style={{ textDecoration: "none" }}
          document={
            <HousingLoanPDF
              finalArray={finalArray}
              property={property}
              loanAmount={loanAmount}
              interestRate={interestRate}
              loanTenure={loanTenure}
            />
          }
          fileName="housingloan.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button variant="contained" size="large">
                Save as PDF &nbsp;
                <PictureAsPdfIcon />
              </Button>
            )
          }
        </PDFDownloadLink>
      </div>
    </>
  );
}
