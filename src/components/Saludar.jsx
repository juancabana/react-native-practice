import React from "react"
import {Text} from 'react-native'
import PropTypes from 'prop-types'

const Saludar = ({name = null } = props) => {
return <Text>Saludos {name}</Text>
}
Saludar.defaultProps = {
    name: 'User'
}
Saludar.propTypes = {
    name: PropTypes.string.isRequired
}

export default Saludar