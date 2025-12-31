import trackingImg from "../../../assets/delivary/live-tracking.png";
import safeDeliveryImg from "../../../assets/delivary/safe-delivery.png";
import supportImg from "../../../assets/delivary/bookingIcon.png"


const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
      image: trackingImg,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: safeDeliveryImg,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: supportImg,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="card bg-yellow-50 shadow-lg border border-gray-100"
          >
            <div className="card-body flex flex-col md:flex-row items-center gap-6">

              {/* Image */}
              <div className="w-40 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
