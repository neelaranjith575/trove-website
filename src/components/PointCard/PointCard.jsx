import '../../css/PointCard.css'; // Import CSS file for styling

const PointCard = ({ id, title, description, active }) => {
    return (
        <div className={`pointCard ${active ? 'active' : ''}`}>
            <h1 className='heading'>{id}. {title}</h1>
            <h2 className='description'>&emsp;{description}</h2>
        </div>
    );
};

export default PointCard;
