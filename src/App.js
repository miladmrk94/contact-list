import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import allPages from "./Layout/Router";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {allPages.map((i) => {
          return <Route key={i.path} {...i} />;
        })}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
