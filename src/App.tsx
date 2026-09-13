import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { ITechnology } from './Types/tecnhologyType';
import { Footer } from './Components/Footer';
import { TechnologiesSection } from './Technologies/TechnologiesSection';
import Nav from './Components/Nav';
import Banner from './Components/Banner';


const technologyPromise = async (): Promise<ITechnology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>(() => {
    let initialList: ITechnology[] = [];
    technologyPromise()
      .then((data) => {
        setTechnologies(data);
      })
      .catch((error) => {
        toast.error('Failed to load technologies data.');
        console.error(error);
      });
    return initialList;
  });

  const [selectedStack, setSelectedStack] = useState<ITechnology[]>(() => {
    const saved = localStorage.getItem('user_tech_stack');
    return saved ? JSON.parse(saved) : [];
  });

  const handleToggleTechnology = (tech: ITechnology) => {
    const isAlreadySelected = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadySelected) {
      const updated = selectedStack.filter((item) => item.id !== tech.id);
      setSelectedStack(updated);
      localStorage.setItem('user_tech_stack', JSON.stringify(updated));
      toast.info(`${tech.name} removed from your stack`);
      return;
    }

    const categoryExists = selectedStack.some((item) => item.category === tech.category);
    if (categoryExists) {
      toast.warning(`Category "${tech.category}" already selected! Replacing...`);
    }

    const remainingTechs = selectedStack.filter((item) => item.category !== tech.category);
    const updated = [...remainingTechs, tech];
    setSelectedStack(updated);
    localStorage.setItem('user_tech_stack', JSON.stringify(updated));
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveTech = (id: string) => {
    const removedItem = selectedStack.find((item) => item.id === id);
    const updated = selectedStack.filter((item) => item.id !== id);
    setSelectedStack(updated);
    localStorage.setItem('user_tech_stack', JSON.stringify(updated));
    if (removedItem) {
      toast.info(`${removedItem.name} removed`);
    }
  };

  const handleClearAll = () => {
    if (selectedStack.length === 0) {
      toast.warning('Stack is already empty');
      return;
    }
    setSelectedStack([]);
    localStorage.removeItem('user_tech_stack');
    toast.error('All technologies cleared from your stack');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFC] text-gray-900 font-sans antialiased">
      <Nav />
      <Banner />
      <main className="flex-grow">
        <TechnologiesSection
          technologies={technologies}
          selectedStack={selectedStack}
          onToggleTechnology={handleToggleTechnology}
          onRemoveTech={handleRemoveTech}
          onClearAll={handleClearAll}
        />
      </main>
      
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;