import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { ChartTable } from "./ChartTable";
import { withTheme } from "@emotion/react";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#006d5b",
  },
  title: {
    fontFamily: "Helvetica-Bold",
    paddingTop: "20px",
    color: "white",
    fontSize: "28px",
    textAlign: "center",
  },
  info: {
    fontFamily: "Helvetica-Bold",
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "20px",
    margin: "20px",
    fontSize: "12px",
  },
  table: {
    textAlign: "center",
    fontFamily: "Helvetica",
    margin: "20px",
  },
  tablehead: {
    flexDirection: "row",
    border: "0.4px solid black",
    margin: 0,
    padding: "3px",
    flexGrow: 1,
    backgroundColor: "#006d5b",
  },
  tableheadcell: {
    fontSize: "10px",
    color: "white",
    flex: 1,
    margin: 0,
    padding: "3px",
  },
  tablerow: {
    flexDirection: "row",
    border: "0.4px solid black",
    margin: 0,
    padding: 0,
    flexGrow: 1,
    backgroundColor: "white",
  },
  tablecell: {
    fontSize: "10px",
    flex: 1,
    margin: 0,
    padding: "3px",
  },
});

// Create PDF
export function HousingLoanPDF({
  finalArray,
  property,
  loanAmount,
  interestRate,
  loanTenure,
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.title}>
          <Text>JJ's housing loan calculator</Text>
        </View>
        <View style={styles.info}>
          <Text>Property type: {property}</Text>
          <Text>Loan amount: SGD$ {loanAmount}</Text>
          <Text>Interest rate: {interestRate} %</Text>
          <Text>Loan Tenure: {loanTenure} years</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tablehead}>
            <View style={styles.tableheadcell}>
              <Text>Year</Text>
            </View>
            <View style={styles.tableheadcell}>
              <Text>Principal Repayment (SGD$)</Text>
            </View>
            <View style={styles.tableheadcell}>
              <Text>Interest Repayment (SGD$)</Text>
            </View>
            <View style={styles.tableheadcell}>
              <Text>Outstanding Balance (SGD$)</Text>
            </View>
          </View>
          {finalArray.map((rowOfArray, index) => {
            return (
              <View key={index} style={styles.tablerow}>
                {rowOfArray.map((cellOfArray, index) => {
                  return (
                    <View style={styles.tablecell}>
                      <Text
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
                      </Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
}
