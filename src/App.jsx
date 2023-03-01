import React, { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  // console.log(loading);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center py-[40vh]">
          <Watch
            height="100"
            width="100"
            radius="48"
            color="#2B3467"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={loading}
          />
        </div>
      ) : (
        <div className="text-center text-4xl text-slate-700 py-[50vh]">
          Loaded ;]{" "}
        </div>
      )}
    </div>
  );
}
