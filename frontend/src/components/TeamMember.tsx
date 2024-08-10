import React from 'react';
import { TeamMemberData } from '../types/types';


// Define the interface for the props of the TeamMember component
interface TeamMemberProps {
  teamMember: TeamMemberData;
  onToggleAbsent: (id: number) => void;
}

function TeamMember({ teamMember, onToggleAbsent }: TeamMemberProps) {
  const handleToggle = () => {
    onToggleAbsent(teamMember.id);
  };

  return (
    <li>
      <span>
        {teamMember.firstName} {teamMember.lastInitial}. ({teamMember.position})
      </span>
      <label>
        <input
          type="checkbox"
          checked={teamMember.isAbsent}
          onChange={handleToggle}
        />
        Absent
      </label>
    </li>
  );
}

export default TeamMember;
