import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import { Suspense } from "react";

function App() {
  return (
    <>
        <BrowserRouter basename={"/"}>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRouter />
          </Suspense>
        </BrowserRouter>
    </>
  );
}

export default App;
