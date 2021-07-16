// import { useEffect, useState } from "react";
// import { supabase } from "../services/base";

function Admin() {
  // const [initData, setData] = useState([]);

  // useEffect(() => {
  //   const loader = async () => {
  //     const { data, error } = await supabase.from("complaints").select("*");
  //     setData(data);
  //     if (error) {
  //       console.log(error);
  //     }
  //   };

  //   loader();
  // }, []);

  return (
    <div className="text-center mt-10">
      <p className="text-white">Dashboard</p>
    </div>
  );
}

export default Admin;
