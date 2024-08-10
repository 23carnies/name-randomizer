import React from 'react';
import TeamMember from './TeamMember';
import { Teammate } from '../types/types';

// Define the interface for the props of TeammateList
interface TeammateListProps {
  teammates: Teammate[];
  onToggleAbsent: (id: number) => void;
}

function TeammateList({ teammates, onToggleAbsent }: TeammateListProps) {
  return (
    <div>
      {teammates.length === 0 ? (
        <p>No teammates added yet.</p>
      ) : (
        <ul>
          {teammates.map((teammate) => (
            <TeamMember
              key={teammate.id}
              teamMember={teammate}
              onToggleAbsent={onToggleAbsent}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TeammateList;
