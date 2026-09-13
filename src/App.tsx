import 'react-toastify/dist/ReactToastify.css';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import type { ITechnology } from './Types/tecnhologyType';
import { TechnologiesSection } from './Technologies/TechnologiesSection';
import { Footer } from './Components/Footer';
import { toast } from 'react-toastify';
import { useState } from 'react';

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

  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([]);

  const handleAddTechnology = (tech: ITechnology) => {
    const isAlreadySelected = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadySelected) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveTech = (id: string) => {
    const itemToRemove = selectedStack.find((item) => item.id === id);
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from your stack`);
    }
  };

  const handleClearAll = () => {
    if (selectedStack.length === 0) {
      toast.warning('Stack is already empty');
      return;
    }
    setSelectedStack([]);
    toast.error('All technologies cleared from your stack');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFC] text-gray-900 font-sans antialiased">
      
      <Nav />

      <Banner />

      <main className="grow">
        <TechnologiesSection
          technologies={technologies}
          selectedStack={selectedStack}
          onAddTechnology={handleAddTechnology}
          onRemoveTech={handleRemoveTech}
          onClearAll={handleClearAll}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;