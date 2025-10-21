import React from "react";
import FilterableProductTable from "./componentes/filterableProductTable";
import { PRODUTOS } from "./componentes/data";

export function App() {
  <>
    return <FilterableProductTable produtos={PRODUTOS} />;
  </>
}

export default App;