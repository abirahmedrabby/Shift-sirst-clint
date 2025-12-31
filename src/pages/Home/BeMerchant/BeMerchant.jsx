import React from 'react';
import locationMerchent from "../../../assets/location-merchant.png" 

const BeMerchant = () => {
    return (
       <div className="hero bg-[#03373D]  rounded-4xl p-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={locationMerchent}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction <br /> is Our First Priority!</h1>
      <p className="py-6">
       We offer the lowest delivery charge with <br /> the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.
      </p>
      <button className="btn btn-primary">Become a Merchant</button>
        <button className="btn btn-primary">Earn with ZapShift Courier</button>
    </div>
  </div>
</div>
    );
};

export default BeMerchant;