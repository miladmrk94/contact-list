import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import allPages from "./Layout/Router";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {allPages.map((i) => {
            return <Route key={i.path} {...i} />;
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
