import React from 'react';
export default ({ contents }) => 
    <ul>{contents.map(each => <li key={ each }>{ each }</li>)}</ul>;