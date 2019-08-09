import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withPropsTable } from 'storybook-addon-react-docgen';

import '../src/components/style/index.css';

addDecorator(centered);
addDecorator(withPropsTable);

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
