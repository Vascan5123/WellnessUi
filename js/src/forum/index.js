import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import sidebarItems from './components/sidebarItems.js';

app.initializers.add('vascan/wellness-ui', () => {
  sidebarItems();
});
