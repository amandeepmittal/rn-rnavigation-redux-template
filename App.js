import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './src/store/config';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import AddPost from './src/components/views/Admin/AddPost';

const store = configureStore();

Navigation.registerComponent('sellitApp.Login', () => Login, store, Provider);
Navigation.registerComponent('sellitApp.Home', () => Home, store, Provider);
Navigation.registerComponent(
	'sellitApp.AddPost',
	() => AddPost,
	store,
	Provider
);

export default () =>
	Navigation.startSingleScreenApp({
		screen: {
			screen: 'sellitApp.Login',
			title: 'Login',
			navigatorStyle: {
				navBarHidden: true
			}
		}
	});
