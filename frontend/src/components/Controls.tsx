import React from 'react';
import Teammate from './TeamMember';
import { TeamMemberData } from '../types/types';

// Define the interface for the props of the Controls component
interface ControlsProps {
  onRandomize: () => void;
  onSort: (criteria: keyof TeamMemberData) => void;
}

function Controls({ onRandomize, onSort }: ControlsProps) {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSort(e.target.value as keyof TeamMemberData);
  };

  return (
    <div>
      <button onClick={onRandomize}>Randomize Order</button>
      <select onChange={handleSortChange} defaultValue="">
        <option value="" disabled>
          Sort By...
        </option>
        <option value="firstName">First Name</option>
        <option value="lastInitial">Last Initial</option>
        <option value="position">Position</option>
      </select>
    </div>
  );
}

export default Controls;
