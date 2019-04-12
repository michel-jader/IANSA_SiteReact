import React from 'react'
import './Container.css'

const Container = props => {

    let drawerClasses = `container ${props.classe}`

    return (
        <div className={drawerClasses}>
            {props.children}
        </div>
    )
}

export default Container