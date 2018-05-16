import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import LoadTabs from '../Tabs';

class Login extends Component {
	render() {
		return (
			<View>
				<Text>Login Screen</Text>
				<Button
					title="go to Home"
					onPress={() => {
						LoadTabs();
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default Login;
