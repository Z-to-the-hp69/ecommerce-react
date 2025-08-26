import React, { useEffect } from "react";
import SellerRoute from "../../../Routes/SellerRoute";
import AdminDrawerList from "../../components/AdminDrawerList";
import AdminRoutes from "../../../Routes/AdminRoutes";
import { useAppDispatch } from "../../../State/Store";
import { fetchHomeCategories } from "../../../State/admin/adminSlice";

const AdminDashBoard = () => {
  const toggleDrawer = () => {};
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchHomeCategories();
  }, []);
  return (
    <div>
      <div className=" lg:flex lg:h-[90vh]">
        <section className="hidden lg:block h-full">
          <AdminDrawerList toggleDrawer={toggleDrawer} />
        </section>
        <section className="p-10 w-full  lg:w-[80%]  overflow-y-auto">
          {/* seller routes */}
          <AdminRoutes />
        </section>
      </div>
    </div>
  );
};

export default AdminDashBoard;
