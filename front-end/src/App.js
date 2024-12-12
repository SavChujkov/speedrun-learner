import TimingPage from "./components/timing-page/timing-page";
import HomePage from "./components/home-page/home-page";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import GamesPage from "./components/games-page/games-page";
import GuidesPage from "./components/guides-page/guides-page";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/:gameAlias" element={<GuidesPage />} />
        <Route path="/guides/:gameAlias/:guideId" element={<TimingPage />} />
        <Route path="/timings" element={<TimingPage />} />
      </Route>
    </Routes>

  );
}

export default App;
