import { Outlet } from "react-router-dom";
import ScrollIndicator from "@/components/ui/scrollIndicator";

const LayoutHome = () => {

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <main className="w-11/12 max-w-6xl">

        <Outlet />
        <ScrollIndicator />

      </main>
    </div>
  );
};

export default LayoutHome;
