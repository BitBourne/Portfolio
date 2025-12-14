import { Routes, Route } from "react-router-dom"; 
import HomePage from "./home/pages/PageHome"; 
import PageTesting from "./testing/pages/PageTesting.jsx"; 
import LayoutHome from "./home/layout/LayoutHome.jsx"; 
import PageDev from "./dev/pages/PageDev.jsx"; 
import PageCybersecurity from "./cybersecurity/pages/PageCybersecurity";



function App() { 
    return ( 
<> 
    <div className="app-content"> 
        <Routes> 
            <Route path="/" element={<LayoutHome />}> 
                <Route index element={<HomePage />} /> 
                <Route path="/qa" element={<PageTesting />} /> 
                <Route path="/dev" element={<PageDev />} /> 
                <Route path="/cybersecurity" element={<PageCybersecurity />} /> 
            </Route> 
        </Routes> 
    </div> 
</> 
);
} 
export default App;