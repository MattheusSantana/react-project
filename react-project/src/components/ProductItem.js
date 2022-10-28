import PropTypes from 'prop-types';


function ProductItem( {marker, releaseYear}) {
    return <li> {marker} - {releaseYear} </li>

}

ProductItem.propTypes = {
    marker: PropTypes.string.isRequired,
    releaseYear: PropTypes.number
}

ProductItem.defaultProps = {
    marker: "Unknown",
    releaseYear: 0

}

export default ProductItem