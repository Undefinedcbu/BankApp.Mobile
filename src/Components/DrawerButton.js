import React, { Component } from 'react';
import { TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class DrawerButton extends Component {
	toggleMenu = () => {
		this.props.navigation.toggleDrawer();
	};

  render() {
    return (
      <TouchableOpacity
				onPress={this.toggleMenu}
				style={{ paddingHorizontal: 10 }}>
			
                <Icon
					name="navicon"
					size={26}
				/>
			</TouchableOpacity>
    );
  }
}