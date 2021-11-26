/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { AppBar } from './style/componnent-styles';


class Header extends React.PureComponent {
    render() {
        return (
            <AppBar>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log('Menu clicked')}>

                    <Icon name={'grid'} size={28} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => console.log('Cart clicked')}>
                    <Icon name={'cart-outline'} size={28} color="black" />
                </TouchableOpacity>
            </AppBar>

        );
    }
}

export default Header;

