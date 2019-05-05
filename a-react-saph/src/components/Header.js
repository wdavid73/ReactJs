import React from 'react';

const Header = (props) => {
    return(
        <header class="top">
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header