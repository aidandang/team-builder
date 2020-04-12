import React, { useState } from 'react';

export default function Form(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  return (
    <div className="Form">
      <h1>Add Member</h1>
      <form onSubmit={e => {
        e.preventDefault();
        props.addmember(name, email, role)
      }}>
        <table>
          <tr>
            <td>
              <label htmlFor="nameInput">Name:</label>
            </td>
            <td>
              <input 
                type="text" 
                id="nameInput" 
                onChange={e => {
                  setName(e.target.value)
                }} 
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="emailInput">Email:</label>
            </td>
            <td>
              <input 
                type="text" 
                id="emailInput"
                onChange={e => {
                  setEmail(e.target.value)
                }} 
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="roleSelect">Role:</label>
            </td>
            <td>
              <select 
                id="roleSelect" 
                onChange={e => {
                  setRole(e.target.value)
                }}
              >
                <option value="" selected disabled hidden>Choose here</option>
                <option value="UI">UI</option>
                <option value="UX">UX</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="TL">TL</option>
              </select>
            </td>
          </tr>
        </table>
        <button>Add Member</button>
      </form>
    </div> 
  )
}