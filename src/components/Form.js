import React, { useState } from 'react';

export default function Form(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  })

  const onSubmit = event => {
    event.preventDefault();
    props.addmember(formData);
  }

  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="Form">
      <h1>Add Member</h1>
      <form onSubmit={onSubmit}>
        <table>
          <tr>
            <td>
              <label htmlFor="name">Name:</label>
            </td>
            <td>
              <input 
                type="text" 
                name="name"
                onChange={onInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">Email:</label>
            </td>
            <td>
              <input 
                type="text" 
                name="email"
                onChange={onInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="role">Role:</label>
            </td>
            <td>
              <select 
                name="role" 
                onChange={onInputChange}
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