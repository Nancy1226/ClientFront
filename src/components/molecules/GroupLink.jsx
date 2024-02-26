import { Link } from 'react-router-dom';

function GroupLink({ to, msn, onClick }) {
  return (
    <div className="container-group">
      <Link to={to} className="link">
        <button onClick={onClick} className="hidden">{msn}</button>
      </Link>
    </div>
  );
}

export default GroupLink;