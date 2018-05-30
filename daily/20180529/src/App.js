import React from 'react';
import HelloWorld from './HelloWorld';
import Contents from './Contents';

const contents = ['apple', 'orange', 'peach', 'cherry'];

export default props => (
  <div>
    <HelloWorld label="x0" />
    <Contents contents={contents} />
  </div>
)