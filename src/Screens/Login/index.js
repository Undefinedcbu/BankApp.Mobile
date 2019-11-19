import React, {Component} from 'react';
import {Body, Header, Title} from "native-base";

import SigninForm from './SigninForm';

export default class Signup extends Component {
	render() {
		return (
			<React.Fragment>
				<Header>
					<Body>
					<Title>Login</Title>
					</Body>
				</Header>
				<SigninForm />
			</React.Fragment>
		);
	}
}