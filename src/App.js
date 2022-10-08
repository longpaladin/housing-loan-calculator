import * as React from "react";
import "./App.css";
import { LoanForm } from "./components/LoanForm";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>JJ's Housing Loan Calculator</h2>
        <p className="miniheader">
          <AccessTimeIcon />
          <span>2 mins to complete</span>
        </p>
        <p>
          Calculate your monthly mortgage repayments and plan your monthly
          expenses well.
        </p>

        <LoanForm />
      </header>
    </div>
  );
}

export default App;
