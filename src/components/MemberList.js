import React from 'react';
import "../App.css";

export default function MemberList(props) {
  return (
    <div className="MemberList">
      <h1>Member List</h1>
      {!props.members 
        ? 
        <div>Loading...</div> 
        : 
        <table>
          <thead>
            <tr>
              <th className="name-column list-column">Name</th>
              <th className="email-column list-column">Email</th>
              <th className="role-column list-column">Role</th>
            </tr>
          </thead>
          <tbody>
            {props.members.map(member => (
              <tr>
                <td className="name-column list-column">{member.name}</td>
                <td className="email-column list-column">{member.email}</td>
                <td className="role-column list-column">{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )   
}