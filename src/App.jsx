import React from "react";
import kbo from "./components/kboTable"; // 같은 폴더에 저장된 경우
import KboTable from "./components/kboTable";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>kbo 순위표</h1>
      <KboTable />
    </div>
  );
}

export default App;