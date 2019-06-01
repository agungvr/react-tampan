import { configure, addDecorator, addParameters } from '@storybook/react';
import '@storybook/addon-console';
import "../src/assets/styles/index.scss";
import { setConsoleOptions } from '@storybook/addon-console';
import { withInfo, setDefaults } from '@storybook/addon-info'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';


addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
          width: '600px',
          height: '963px',
        },
      },
      kindleFireHD: {
        name: 'Kindle Fire HD',
        styles: {
          width: '533px',
          height: '801px',
        },
      },
    },
  },
});

addDecorator(withA11y)
addDecorator((story, context) => withInfo('common info')(story)(context));
setConsoleOptions({
  panelExclude: [],
});

setDefaults({
  header: true, // Toggles display of header with component name and description
})

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);