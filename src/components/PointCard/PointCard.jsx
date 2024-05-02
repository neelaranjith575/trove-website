import '../../css/PointCard.css'; // Import CSS file for styling

const PointCard = ({ id, title, description, active }) => {
    return (
        <div className={`pointCard ${active ? 'active' : ''}`}>
            <h1 className={`heading ${active ? 'active' : ''}`}>{id}. {title}</h1>
            <h2 className={`description ${active ? 'active' : ''}`}>&emsp;{description}</h2>
            <hr></hr>
        </div>
    );
};

export default PointCard;
