import { useEffect, useState } from "react";
import { supabase } from "../services/base";
import moment from "moment";
import Dashnavbar from "../components/Dashnavbar";
import Loader from "../components/Loader";
import Fuse from "fuse.js";

function Admin() {
  const [initData, setData] = useState([]);
  const [initQuery, setQuery] = useState("");

  useEffect(() => {
    const loader = async () => {
      const { data, error } = await supabase.from("complaints").select("*");
      setData(data);
      if (error) {
        console.log(error);
      }
    };

    loader();
  }, []);

  const fuse = new Fuse(initData, {
    keys: ["id", "title", "email"],
  });

  const results = fuse.search(initQuery);
  const charecterResults = initQuery
    ? results.map((result) => result.item)
    : initData;

  function searchHandler({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
  }

  return (
    <div className="mt-10">
      <Dashnavbar />
      <div className="mx-auto container mt-10 md:w-1/2 w-full">
        <input
          placeholder="🔍 Search..."
          className="bg-gray-700 p-3 text-white md:w-full w-full focus:outline-none focus:ring focus:border-blue-300 rounded shadow"
          value={initQuery}
          onChange={searchHandler}
        />
      </div>
      {initData.length === 0 && (
        <div className="md:container md:mx-auto flex justify-center">
          <Loader />
        </div>
      )}
      {charecterResults.map((instance) => {
        return (
          <section className="mt-5" key={instance.title}>
            <div className="md:container md:mx-auto flex justify-center">
              <section className="p-5 w-full md:w-1/2 block bg-gray-700">
                <p className="text-white text-3xl font-bold cursor-pointer hover:text-blue-400">
                  {instance.title}
                </p>
                {instance.createdOn && (
                  <p className="mt-2 text-gray-200 font-light text-sm">
                    {moment(instance.createdOn.toString()).calendar()}
                  </p>
                )}
              </section>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Admin;
