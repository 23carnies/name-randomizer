import React, { useState } from 'react';
import AddTeammate from './components/AddTeammate';
import TeammateList from './components/TeammateList';
import Controls from './components/Controls';

// Define an interface for the Teammate object
interface Teammate {
  id: number;
  firstName: string;
  lastInitial: string;
  position: string;
  isAbsent: boolean;
}

function App() {
  const [teammates, setTeammates] = useState<Teammate[]>([]);

  const addTeammate = (newTeammate: Teammate) => {
    setTeammates([...teammates, newTeammate]);
  };

  const toggleAbsent = (id: number) => {
    setTeammates(teammates.map(tm => 
      tm.id === id ? { ...tm, isAbsent: !tm.isAbsent } : tm
    ));
  };

  const randomizeOrder = () => {
    const presentTeammates = teammates.filter(tm => !tm.isAbsent);
    const shuffledTeammates = presentTeammates.sort(() => Math.random() - 0.5);
    setTeammates(shuffledTeammates.concat(teammates.filter(tm => tm.isAbsent)));
  };

  const sortTeammates = (criteria: keyof Teammate) => {
    const sortedTeammates = [...teammates].sort((a, b) => {
      return (a[criteria] as string).localeCompare(b[criteria] as string);
    });
    setTeammates(sortedTeammates);
  };

  return (
    <div>
      <h1>Team Standup Randomizer</h1>
      <AddTeammate onAdd={addTeammate} />
      <Controls onRandomize={randomizeOrder} onSort={sortTeammates} />
      <TeammateList teammates={teammates} onToggleAbsent={toggleAbsent} />
    </div>
  );
}

export default App;
