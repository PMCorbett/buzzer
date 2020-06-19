import 'raf/polyfill';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './node_modules/jest-enzyme/lib';
import './node_modules/jasmine-expect';
import './node_modules/jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });
global.mount = mount;
global.render = render;
global.shallow = shallow;
