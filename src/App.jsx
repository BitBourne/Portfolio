import { Routes, Route } from "react-router-dom";
import HomePage from "./home/pages/PageHome";
import PageTesting from "./testing/pages/PageTesting.jsx";
import LayoutHome from "./layouts/LayoutHome.jsx";
import PageDev from "./dev/pages/PageDev.jsx";
import PageCybersecurity from "./cybersecurity/pages/PageCybersecurity";
import LayoutPortfolio from "./layouts/LayoutPortfolio.jsx";

function App() {
    return (
        <>
            <Routes>
                {/* HOME / LANDING */}
                <Route path="/" element={<LayoutHome />}>
                    <Route index element={<HomePage />} />
                </Route>

                {/* PORTFOLIO PROFESIONAL */}
                <Route element={<LayoutPortfolio />}>
                    <Route path="/qa" element={<PageTesting />} />
                    <Route path="/dev" element={<PageDev />} />
                    {/* <Route path="/cybersecurity" element={<PageCybersecurity />} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default App