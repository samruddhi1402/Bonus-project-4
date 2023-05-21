import React,{useState} from 'react'
import './Contact.css';

const Contact = ({saveData}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        saveData({ firstName, lastName, email, phoneNumber });
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
      };
  return (
    <div className='container'>
     <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email Id:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className='submitbutton'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
