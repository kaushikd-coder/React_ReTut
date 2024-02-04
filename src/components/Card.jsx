import PropTypes from 'prop-types';
const Card = ({ username }) => {

    const effectiveUsername = username || 'Kaushik'
 
    return (
    <div>
        <h1>Name:{effectiveUsername}</h1>
    </div>
  )
}

Card.propTypes = {
    username: PropTypes.string,
    // post: PropTypes.string,
  };

export default Card
