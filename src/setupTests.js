import { configure } from 'enzyme';
import 'raf-polyfill';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });