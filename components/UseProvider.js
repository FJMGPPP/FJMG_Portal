import { createContext , useState} from 'react';

export default function UserProvider() {
  const UserContext = createContext();
  return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>} 
      {/* prints: Reed */}
    </UserContext.Consumer>
  )
}

