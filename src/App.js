import React, { Component } from 'react';	// ?
// 画面部品
import './App.css';
import { Map } from './map';
// 認証関連
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);	//?

class App extends Component {
	render() {
		return (
			<div className="App">
				<AmplifySignOut />
				<Map />
			</div>
		);
	}
}

export default withAuthenticator(App);
