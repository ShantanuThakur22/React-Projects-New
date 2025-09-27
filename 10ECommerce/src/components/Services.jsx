import React from "react";
import { Truck, ShieldCheck, Headphones, RefreshCcw } from "lucide-react"; // icons

const services = [
  {
    id: 1,
    title: "Fast Delivery",
    desc: "Get your orders delivered within 2-3 days anywhere in India.",
    icon: <Truck className="w-10 h-10 text-blue-600" />
  },
  {
    id: 2,
    title: "Secure Payment",
    desc: "All transactions are protected with top-level security.",
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />
  },
  {
    id: 3,
    title: "24/7 Support",
    desc: "Our support team is here to help you anytime, anywhere.",
    icon: <Headphones className="w-10 h-10 text-purple-600" />
  },
  {
    id: 4,
    title: "Easy Returns",
    desc: "Not satisfied? Return your product within 7 days hassle-free.",
    icon: <RefreshCcw className="w-10 h-10 text-orange-600" />
  }
];

function Services() {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition"
          >
            {service.icon}
            <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

