import React from 'react';

export default function Form(props) {
  return (
    <div className="Form">
      <h1>Add Member</h1>
      <form>
        <table>
          <tr>
            <td>
              <label htmlFor="nameInput">Name:</label>
            </td>
            <td>
              <input type="text" id="nameInput" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="emailInput">Email:</label>
            </td>
            <td>
              <input type="text" id="emailInput" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="roleSelect">Role:</label>
            </td>
            <td>
              <select id="roleSelect">
                <option value="1">UI</option>
                <option value="2">UX</option>
                <option value="3">Frontend</option>
                <option value="4">Backend</option>
                <option value="5">TL</option>
              </select>
            </td>
          </tr>
        </table>
        <input type="submit" />
      </form>
    </div> 
  )
}