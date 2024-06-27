// components/ClientComponent.jsx
'use client';

import { UUID } from 'crypto';
import { useEffect } from 'react';

type User = {
    id: UUID,
    created_at: Date,
    email: string,
    name: string,
    avatar_url: string, 
    username: string,
}
const LocalStorage = ({ data }: {data: User}) => {
  useEffect(() => {
    // Store data in localStorage
    localStorage.setItem('serverData',JSON.stringify(data));
  }, [data]);

  return (
    <div>
    </div>
  );
};

export default LocalStorage;
