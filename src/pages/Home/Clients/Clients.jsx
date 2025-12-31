import Marquee from "react-fast-marquee";

import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";

const Clients = () => {
  const logos = [
    amazon,
    casio,
    moonstar,
    randstad,
    star,
    startPeople,
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Our Trusted Clients
          </h2>
          <p className="text-gray-600 mt-3">
            We work with top brands and growing companies
          </p>
        </div>

        {/* ✅ react-fast-marquee */}
        <Marquee
          pauseOnHover={true}
          speed={50}
          gradient={false}
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="mx-8 flex items-center"
            >
              <img
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                className="h-6 object-contain"
              />
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
};

export default Clients;
