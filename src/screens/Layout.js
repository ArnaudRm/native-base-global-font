import React from 'react';
import {StyleSheet, View} from 'react-native';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import materialSmall from '../../native-base-theme/variables/material';
import materialMedium from '../../native-base-theme/variables/materialMedium';
import materialLarge from '../../native-base-theme/variables/materialLarge';
import {connect} from "react-redux";

class Layout extends React.Component {

    getThemeWithSize() {
        let theme;

        if (this.props.size === 'small') {
            theme = materialSmall
        } else if (this.props.size === 'medium') {
            theme = materialMedium
        } else {
            theme = materialLarge
        }
        return theme;
    }

    render() {
        return (
            <StyleProvider style={getTheme(this.getThemeWithSize())}>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = ({font}) => {
    const {size} = font;
    return {size};
};

export default connect(mapStateToProps)(Layout)