import React from "react";
import { Link } from "react-router-dom";
import { InputProvider, InputContext } from "./user-filter.context";
import { MembersProvider } from "./members.context";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
  company: string;
}
export const ListApp: React.FC = () => (
  <InputProvider>
    <Input />
    <MembersProvider>
      <ListPage />
    </MembersProvider>
    <Input />
  </InputProvider>
);
 const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <>
        <h2>Hello from List page</h2>
        <div className="list-user-list-container">
          <span className="list-header">Avatar</span>
          <span className="list-header">Id</span>
          <span className="list-header">Name</span>
          {members.map((member) => (
            <React.Fragment key={member.id}>
              <img src={member.avatar_url} alt={member.login} />
              <span>{member.id}</span>
              <Link to={`/detail/${member.login}`}>{member.login}</Link>
            </React.Fragment>
          ))}
        </div>
        <Link to="/detail">Navigate to detail page</Link>
      </>
  );
};
const Input: React.FC = () => {
  const { inputValue, setInputValue } = React.useContext(InputContext);
  return (
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
  );
};
