import { createContext , useState} from 'react';

const UserContext = createContext({
  username: '',
  updateUsername: () => {},
});

export default function UserProvider()
{
    const [active, setActive] = useState();
    state = {
        username: 'anonymous',
        rank: 'anonymous',
        verifyUsername: this.updateUsername,
    };

    verifyUsername = userName => {
    this.setState({ username: userName });
  };
  
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
}

export const UserProvider = UserContext.Provider;
