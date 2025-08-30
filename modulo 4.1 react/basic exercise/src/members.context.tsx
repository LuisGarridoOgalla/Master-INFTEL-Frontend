import React, { PropsWithChildren } from "react";
import { InputContext } from "./user-filter.context";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}
interface UserModelContext {
    members: MemberEntity[];
    setMembers: (user: MemberEntity[]) => void;
}
export const UserContext = React.createContext<UserModelContext | undefined>(undefined); 

export const MembersProvider: React.FC <PropsWithChildren>= ({children}) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const{ inputValue } = React.useContext(InputContext);
  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members?login=${inputValue}`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [inputValue]);

  return (
    <UserContext.Provider value={{ members, setMembers }}>
      {children}
    </UserContext.Provider>
  );
};
// members.map(member => fetch(`https://api.github.com/users/${member.login}/orgs?id=${inputValue}`)
//       .then((response) => response.json())
//       .then((json) => setMembers(json)));
//   }, [inputValue]);