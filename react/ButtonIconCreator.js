import React from "react"
import { Icon } from 'vtex.store-icons'

const ButtonIconCreator = ({ ...props }) => {
    const { link, ...otherProps } = props;
    return (
        /* rel="noopener noreferrer" - No referrer information should be passed to the website 
        being linked to because of noreferrer tag and also prevents the newly opened page from 
        controlling the page that delivered the traffic*/
        <a href={link} target="_blank" rel="noopener noreferrer"><Icon {...otherProps} /></a>
    )
}

/* Vtex store-icons props validation by Typechecking*/
ButtonIconCreator.propTypes = {
    /** Icon size, aspect ratio 1:1 */
    size: PropTypes.number,
    /** Icon viewBox. Default 0, 0, 16, 16 */
    viewBox: PropTypes.string,
    /** Define if will be used a active or muted className */
    isActive: PropTypes.bool,
    /** Active color class */
    activeClassName: PropTypes.string,
    /** Muted color class */
    mutedClassName: PropTypes.string,
}

export default ButtonIconCreator