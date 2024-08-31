import DashRoutes from "./DashRoutes";
import DashboardDrawer from "./Drawer";

const DashNav = () => {
  return (
    <div className="bg-[#090e1a] py-5 w-full">
      <div className="md:hidden inline-block">
        <DashboardDrawer />
      </div>
      <div className="hidden md:inline-block">

      <DashRoutes/>
      </div>
    </div>
  );
};

export default DashNav;
