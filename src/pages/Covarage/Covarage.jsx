import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const Coverage = () => {
  return (
    <div className="min-h-screen bg-base-200 px-4 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto">

        {/* 🔹 Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3F45]">
            We Are Available in 64 Districts
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Nationwide parcel delivery across Bangladesh
          </p>
        </div>

        {/* 🔹 Search Box (UI only) */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <input
            type="text"
            placeholder="Search district (e.g. Dhaka, Chattogram)"
            className="input input-bordered w-full max-w-md"
          />
        </div>

        {/* 🔹 Map Section */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={[23.685, 90.3563]}
            zoom={7}
            scrollWheelZoom={false}
            className="
              w-full
              h-[280px]
              sm:h-[350px]
              md:h-[420px]
              lg:h-[450px]
            "
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[23.8103, 90.4125]}>
              <Popup>
                <strong>Dhaka</strong> <br />
                Delivery Available
              </Popup>
            </Marker>
          </MapContainer>
        </div>

      </div>
    </div>
  );
};

export default Coverage;
