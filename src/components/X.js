import React from 'react'
import PropTypes from 'prop-types'

const X = () => {
    return (
        <div>X</div>
    )
}

X.propTypes = {
    name: PropTypes.string.isRequired,
}

export default X

