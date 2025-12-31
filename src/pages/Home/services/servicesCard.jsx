import {
  FaTruckFast,
  FaMapLocationDot,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaRotateLeft,
} from "react-icons/fa6";

const iconMap = {
  "Express & Standard Delivery": FaTruckFast,
  "Nationwide Delivery": FaMapLocationDot,
  "Fulfillment Solution": FaWarehouse,
  "Cash on Home Delivery": FaMoneyBillWave,
  "Corporate Service / Contract In Logistics": FaBuilding,
  "Parcel Return": FaRotateLeft,
};

const ServiceCard = ({ service }) => {
  const { title, description } = service;
  const Icon = iconMap[title];

  return (
    <div className="card  shadow-md hover:shadow-xl transition duration-300 hover:bg-green-300">
      <div className="card-body items-center text-center">
        <div className="text-primary mb-4">{Icon && <Icon size={36} />}</div>

        <h3 className="card-title text-lg text-primary">{title}</h3>

        <p className="text-sm text-black font-bold">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
