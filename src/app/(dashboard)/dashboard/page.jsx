import React from "react";
import Path from "../../components/Path";

export default function Dashboard() {
  return (
    <>
      <div className="">
        <Path path={"Dashboard > summery"} />
      </div>
      <section className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg h-48">1</div>
        <div className="bg-white rounded-lg h-48">2</div>
        <div className="bg-white rounded-lg h-48">3</div>
      </section>
      <section className="grid grid-cols-3 gap-4  py-4">
        <div className="col-span-2 bg-white rounded-lg h-152 ">4</div>

        <div className="col-span-1 bg-white rounded-lg h-152 ">5</div>
      </section>
    </>
  );
}
