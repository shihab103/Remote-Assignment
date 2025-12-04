// Optimized & Cleaned Property Component with Simple English Comments
// All components combined in one file

import { useState } from "react";
import {
  MapPin,
  Sliders,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Images
import img1 from "../../assets/propertyImage/image.png";
import img2 from "../../assets/propertyImage/image (1).png";
import img3 from "../../assets/propertyImage/image (2).png";
import img4 from "../../assets/propertyImage/image (3).png";
import img5 from "../../assets/propertyImage/image (4).png";
import img6 from "../../assets/propertyImage/image (5).png";

import img11 from "../../assets/propertyImage/11.png";
import img22 from "../../assets/propertyImage/22.png";
import img33 from "../../assets/propertyImage/33.png";

// Property data array
const propertyData = [
  {
    name: "Maple Grove Garden House",
    price: "$280",
    location: "New York, USA",
    image: img1,
    details: { bedrooms: 4, bathrooms: 4, area: 2500 },
  },
  {
    name: "Sunset Towers Eklosbet",
    price: "$340",
    location: "New York, USA",
    image: img2,
    details: { bedrooms: 7, bathrooms: 4, area: 6500 },
  },
  {
    name: "Riverside Retreat",
    price: "$280",
    location: "New York, USA",
    image: img3,
    details: { bedrooms: 4, bathrooms: 3, area: 3500 },
  },
  {
    name: "Golden Meadows",
    price: "$280",
    location: "New York, USA",
    image: img4,
    details: { bedrooms: 6, bathrooms: 4, area: 4500 },
  },
  {
    name: "Ocean Sea Breeze",
    price: "$280",
    location: "New York, USA",
    image: img5,
    details: { bedrooms: 8, bathrooms: 5, area: 9500 },
  },
  {
    name: "The Urban Nest Lofts",
    price: "$280",
    location: "New York, USA",
    image: img6,
    details: { bedrooms: 6, bathrooms: 4, area: 5500 },
  },
];

// Single detail inside card (e.g. Bed, Bath)
const PropertyDetail = ({ icon: Icon, value, label }) => (
  <div className="flex items-center text-sm text-gray-600 mr-4">
    <Icon className="w-4 h-4 mr-1 text-indigo-500" />
    <span>
      {label} - {value}
    </span>
  </div>
);

// Property Card UI
const PropertyCard = ({ property }) => (
  <div
    className={`bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl`}
  >
    <div className="relative h-56">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-full object-cover hover:scale-105 transition"
        onError={(e) => {
          e.target.src = "https://placehold.co/600x400?text=No+Image";
        }}
      />
    </div>

    <div className="p-5">
      <div className="flex justify-between text-gray-400 mb-3">
        <div className="flex gap-1 items-center justify-center">
          <img src={img11} alt="" />
          <p>Bed- {property.details.bedrooms}</p>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <img src={img22} alt="" />
          <p>Bathroom- {property.details.bathrooms}</p>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <img src={img33} alt="" />
          <p>{property.details.area}sft</p>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-1">{property.name}</h3>
      <p className="font-semibold mb-1">{property.price}<span className="text-gray-500">/week</span></p>
      <p className="flex items-center text-gray-600 text-sm">
        <MapPin className="w-4 h-4 mr-1" />
        {property.location}
      </p>
    </div>
  </div>
);

// Sidebar reusable section with toggle
const FilterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b pb-4 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center font-semibold text-gray-700 mb-2"
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`transition overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

// Checkbox filter
const CheckboxFilter = ({ label, checked }) => (
  <label className="flex items-center text-sm text-gray-600 mb-2">
    <input type="checkbox" defaultChecked={checked} className="mr-2" />
    {label}
  </label>
);

// Sidebar UI
const Sidebar = () => (
  <div className="w-full md:w-72 bg-white p-6 rounded-xl shadow-xl">
    <div className="flex justify-between mb-6">
      <h2 className="text-xl font-bold flex items-center">
        <Sliders className="w-5 h-5 mr-2 text-indigo-600" /> Filters
      </h2>
      <button className="text-red-500 text-sm flex items-center">
        <X className="w-4 h-4 mr-1" /> Reset
      </button>
    </div>

    {/* Rent Budget */}
    <FilterSection title="Rent Budget">
      <input
        type="range"
        min="300"
        max="70000"
        defaultValue="5000"
        className="w-full"
      />
    </FilterSection>

    {/* Suburb */}
    <FilterSection title="Suburb">
      <CheckboxFilter label="Cranbrook" />
      <CheckboxFilter label="Cannovale" />
      <CheckboxFilter label="Cannonvale" checked />
    </FilterSection>

    {/* Property Type */}
    <FilterSection title="Property Type">
      <CheckboxFilter label="House" />
      <CheckboxFilter label="Apartment" />
      <CheckboxFilter label="Villa" checked />
    </FilterSection>
  </div>
);

// Main Property Grid
const PropertyGrid = () => (
  <div className="flex-1">
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-6">
      <h1 className="text-xl font-bold">Property ({propertyData.length})</h1>
      <select className="border p-2 rounded-lg text-sm">
        <option>Low to High</option>
        <option>High to Low</option>
        <option>Newest</option>
      </select>
    </div>

    {/* Property Cards */}
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {propertyData.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>

    {/* Pagination */}
    <div className="flex justify-center mt-10">
      <button className="px-3 py-2 text-gray-600 flex items-center">
        <ChevronLeft className="w-5 h-5 mr-1" /> Previous
      </button>

      {[1, 2, 3, "...", 9, 10].map((num, i) => (
        <button
          key={i}
          className={`px-4 py-2 ${
            num === 1 ? "bg-indigo-600 text-white" : "bg-white border"
          }`}
        >
          {num}
        </button>
      ))}

      <button className="px-3 py-2 text-gray-600 flex items-center">
        Next <ChevronRight className="w-5 h-5 ml-1" />
      </button>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-8">
        <Sidebar />
        <PropertyGrid />
      </div>
    </div>
  );
}
