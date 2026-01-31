import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecures from "../../../hook/useAxiosSecures";

const ActiveRider = () => {
  const axiosSecure = useAxiosSecures();
  const [search, setSearch] = useState("");

  const {
    data: riders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["active-riders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders/active");
      return res.data;
    },
  });

  /* 🔍 Search by name or phone */
  const filteredRiders = riders.filter((rider) =>
    `${rider.name} ${rider.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  /* 👁 View Rider */
  const handleView = (rider) => {
    Swal.fire({
      title: rider.name,
      html: `
        <div style="text-align:left">
          <img src="${rider.photoURL}" 
               style="width:80px;height:80px;border-radius:50%;margin-bottom:10px"/>

          <p><b>Email:</b> ${rider.email}</p>
          <p><b>Phone:</b> ${rider.phone}</p>
          <p><b>Age:</b> ${rider.age}</p>
          <p><b>Region:</b> ${rider.region}</p>
          <p><b>District:</b> ${rider.district}</p>
          <p><b>Bike Brand:</b> ${rider.bike_brand}</p>
          <p><b>Bike Reg:</b> ${rider.bike_registration}</p>
          <p><b>Status:</b> ${rider.application_status}</p>
        </div>
      `,
      confirmButtonText: "Close",
      showCloseButton: true,
    });
  };

  /* 🚫 Deactivate Rider */
  const handleDeactivate = async (id) => {
    const result = await Swal.fire({
      title: "Deactivate Rider?",
      text: "Rider will be inactive",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Deactivate",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.patch(`/riders/status/${id}`, {
          status: "inactive",
        });

        Swal.fire("Success", "Rider deactivated", "success");
        refetch();
      } catch (error) {
        Swal.fire("Error", "Failed to deactivate rider", "error", error);
      }
    }
  };

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Active Riders ({filteredRiders.length})
      </h2>

      {/* 🔍 Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name or phone"
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Region</th>
              <th>District</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredRiders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.phone}</td>
                <td>{rider.region}</td>
                <td>{rider.district}</td>
                <td>
                  <span className="badge badge-success text-black">
                    Active
                  </span>
                </td>
                <td className="flex gap-2 justify-center">
                  <button
                    onClick={() => handleView(rider)}
                    className="btn btn-xs btn-info"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleDeactivate(rider._id)}
                    className="btn btn-xs btn-error"
                  >
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredRiders.map((rider) => (
          <div
            key={rider._id}
            className="border rounded-lg p-4 shadow bg-base-100"
          >
            <div className="flex items-center gap-3">
              <img
                src={rider.photoURL}
                alt="rider"
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <h3 className="font-semibold">{rider.name}</h3>
                <p className="text-sm text-gray-500">{rider.phone}</p>
                <p className="text-sm text-gray-500">
                  {rider.region}, {rider.district}
                </p>
              </div>
            </div>

            <span className="badge badge-success text-black mt-3">
              Active
            </span>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleView(rider)}
                className="btn btn-xs btn-info"
              >
                View
              </button>

              <button
                onClick={() => handleDeactivate(rider._id)}
                className="btn btn-xs btn-error"
              >
                Deactivate
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredRiders.length === 0 && (
        <p className="text-center mt-6 text-gray-500">
          No active riders found
        </p>
      )}
    </div>
  );
};

export default ActiveRider;
