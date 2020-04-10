import React, { useState } from 'react';
import './App.css';
import MemberList from './components/MemberList';
import Form from './components/Form';
import { teamMembers } from './data/teamMembers';

function App() {
  const [members, setMember] = useState(teamMembers);

  const addMember = (member) => {
    setMember([...members, member]);
  }

  return (
    <div className="App">
      <MemberList members={members} />
      <Form members={members} addmember={addMember} />
    </div>
  );
}

export default App;
