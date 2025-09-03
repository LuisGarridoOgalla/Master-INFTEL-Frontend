import React from "react";
import { Link } from "react-router-dom";
import { InputContext } from "./user-filter.context";
import { Input } from "./Input";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
  company: string;
}
export const ListApp: React.FC = () => (
  <>
    <Input />
    <ListPage />
  </>
);
const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { inputValue } = React.useContext(InputContext);

  React.useEffect(() => {
    const getData = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://api.github.com/orgs/${inputValue}/members`
        );

        if (response.status === 404) {
          setMembers([]); // Lista vacía para 404
          return;
        }

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const json = await response.json();
        setMembers(json);
      } catch (error) {
        console.error("Error fetching members:", error);
        setMembers([]);
      }
    }, 2000);

    return () => clearTimeout(getData);
  }, [inputValue]);

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
