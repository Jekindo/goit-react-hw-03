import { FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';

const Contact = ({ name, number }) => {
  return (
    <li>
      <div>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <BsTelephoneFill /> {number}
        </p>
      </div>

      <button type="button">Delete</button>
    </li>
  );
};

export default Contact;
