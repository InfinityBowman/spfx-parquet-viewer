import { mount } from './mount';
import { mockProps } from './mockProps';

// Dev-only entry: the standalone harness mounts the app with mock props.
// This file is never part of the SPFx bundle.
const el = document.getElementById('root');
if (!el) {
  throw new Error('dev harness: #root element not found');
}
mount(el, mockProps);
