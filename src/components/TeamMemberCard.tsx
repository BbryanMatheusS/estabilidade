import { FC } from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const TeamMemberCard: FC<TeamMemberCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4 max-w-xs mx-auto">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};
