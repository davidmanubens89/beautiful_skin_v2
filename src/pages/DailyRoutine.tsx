import React, { useState } from 'react';
import { Sun, Moon, Layers, Clock, Droplet, Repeat, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import TipCard from '../components/TipCard';
import ProductCard from '../components/ProductCard';

export const DailyRoutine: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showRoutines, setShowRoutines] = useState(false);

  const routineTips = [
    {
      icon: Layers,
      title: "Layer Products Correctly",
      description: "Apply products from thinnest to thickest consistency for optimal absorption."
    },
    {
      icon: Clock,
      title: "Timing is Key",
      description: "Wait about 1 minute between each step to allow products to absorb properly."
    },
    {
      icon: Droplet,
      title: "Stay Hydrated",
      description: "Drink plenty of water throughout the day to keep your skin hydrated from within."
    },
    {
      icon: Repeat,
      title: "Consistency is Crucial",
      description: "Stick to your routine daily for best results. Skincare is a marathon, not a sprint."
    }
  ];

  const morningRoutine = [
    { id: 1, step: "Cleanse", product: "Gentle Foaming Cleanser", time: "2 minutes" },
    { id: 2, step: "Tone", product: "Hydrating Toner", time: "30 seconds" },
    { id: 3, step: "Serum", product: "Vitamin C Serum", time: "1 minute" },
    { id: 4, step: "Moisturize", product: "Lightweight Day Cream", time: "1 minute" },
    { id: 5, step: "Sunscreen", product: "Broad Spectrum SPF 50", time: "1 minute" }
  ];

  const eveningRoutine = [
    { id: 1, step: "Cleanse", product: "Oil-based Cleanser", time: "2 minutes" },
    { id: 2, step: "Exfoliate", product: "Gentle AHA/BHA Exfoliant", time: "1 minute" },
    { id: 3, step: "Tone", product: "Hydrating Toner", time: "30 seconds" },
    { id: 4, step: "Treat", product: "Retinol Serum", time: "1 minute" },
    { id: 5, step: "Moisturize", product: "Rich Night Cream", time: "1 minute" }
  ];

  const standardRoutineProducts = [
    {
      name: "Gentle Cleanser",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      description: "A mild, soap-free cleanser suitable for all skin types.",
      benefits: "Removes impurities without stripping the skin's natural oils.",
      monthlyPrice: 20,
      importance: "High"
    },
    {
      name: "Hydrating Moisturizer",
      image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      description: "A lightweight, non-greasy moisturizer to keep skin hydrated.",
      benefits: "Improves skin hydration, softness, and overall appearance.",
      monthlyPrice: 25,
      importance: "High"
    },
    {
      name: "Broad Spectrum Sunscreen",
      image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      description: "A daily sunscreen with at least SPF 30 for sun protection.",
      benefits: "Protects against UV damage, prevents premature aging and skin cancer.",
      monthlyPrice: 30,
      importance: "High"
    }
  ];

  const RoutineList = ({ routine, icon }) => (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        {icon}
        <span className="ml-2">{icon === <Sun /> ? "Morning" : "Evening"} Routine</span>
      </h2>
      <ul className="space-y-4">
        {routine.map((item) => (
          <li key={item.id} className="flex items-start">
            <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full text-indigo-800 font-semibold mr-4">
              {item.id}
            </span>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{item.step}</h3>
              <p className="text-gray-600">{item.product}</p>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const handleAddToRoutine = (productName: string) => {
    setSelectedProducts(prevSelected => 
      prevSelected.includes(productName)
        ? prevSelected.filter(name => name !== productName)
        : [...prevSelected, productName]
    );
  };

  const handleGenerateRoutine = () => {
    setShowRoutines(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Daily Skincare Routine</h1>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Daily Routine Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {routineTips.map((tip, index) => (
          <TipCard key={index} {...tip} />
        ))}
      </div>

      <div className="bg-cover bg-center h-64 mb-12 rounded-lg shadow-md overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" }}>
        <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Want a more effective, personalized skincare routine?</h3>
            <Link to="/skin-assessment" className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full text-lg hover:bg-indigo-100 transition-colors">
              Take our Skin Assessment
            </Link>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Standard Routine Suggested Products</h2>
        <div className="flex items-center">
          <p className="text-sm text-gray-600 mr-4">Select the products you want to include in your routine and click "Generate Routine" button.</p>
          <button
            onClick={handleGenerateRoutine}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Generate Routine
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {standardRoutineProducts.map((product, index) => (
          <ProductCard 
            key={index} 
            product={product} 
            hideRecommendation={true} 
            buttonText="Buy in Store"
            isSelected={selectedProducts.includes(product.name)}
            onAddToRoutine={() => handleAddToRoutine(product.name)}
          />
        ))}
      </div>
      
      {showRoutines && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Routines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RoutineList routine={morningRoutine} icon={<Sun className="w-6 h-6 text-yellow-500" />} />
            <RoutineList routine={eveningRoutine} icon={<Moon className="w-6 h-6 text-indigo-500" />} />
          </div>
        </>
      )}
    </div>
  );
};

export default DailyRoutine;