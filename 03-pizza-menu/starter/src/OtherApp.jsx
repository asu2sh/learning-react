import PropTypes from "prop-types";

function OtherApp({ props }) {
    return (
        <div>
            <h1>{props}</h1>
        </div>
    )
}

OtherApp.propTypes = {
    props: PropTypes.number
}

export default OtherApp
