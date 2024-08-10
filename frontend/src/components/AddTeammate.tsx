import React, { useState } from 'react';

// Define an interface for the props
interface AddTeammateProps {
  onAdd: (newTeammate: Teammate) => void;
}

// Define the same Teammate interface as in App.tsx
interface Teammate {
  id: number;
  firstName: string;
  lastInitial: string;
  position: string;
  isAbsent: boolean;
}

function AddTeammate({ onAdd }: AddTeammateProps) {
  const [firstName, setFirstName] = useState<string>('');
  const [lastInitial, setLastInitial] = useState<string>('');
  const [position, setPosition] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTeammate: Teammate = {
      id: Date.now(), // unique ID based on timestamp
      firstName,
      lastInitial,
      position,
      isAbsent: false, // default to present
    };

    onAdd(newTeammate);

    // Reset the form
    setFirstName('');
    setLastInitial('');
    setPosition('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Last Initial:</label>
        <input
          type="text"
          value={lastInitial}
          onChange={(e) => setLastInitial(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Position:</label>
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        >
          <option value="" disabled>Select Position</option>
          <option value="PM">PM</option>
          <option value="Manager">Manager</option>
          <option value="Dev">Dev</option>
          <option value="UI">UI</option>
          <option value="QA">QA</option>
        </select>
      </div>
      <button type="submit">Add Teammate</button>
    </form>
  );
}

export default AddTeammate;
