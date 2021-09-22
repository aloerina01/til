// import * as React from 'react';
import { render } from 'react-dom';

import { Hello } from 'src/components/Hello';

const root = document.querySelector('#root');
render(<div>
  <Hello name="You" />
</div>, root);
