import React from 'react';
import Layout from './Layout';
import {
    Text,
    Button,
} from 'native-base';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {

    setSelectedSize = (selectedSize) => {
        this.props.dispatch({
            type: 'CHANGE_FONT_SIZE',
            payload: selectedSize
        })
    };

    render() {
        return (
            <Layout>
                <Text>Home screen</Text>
                <Button
                    block
                    onPress={() => this.setSelectedSize('small')}
                    primary={(this.props.size === 'small')}
                    info={(this.props.size !== 'small')}
                >
                    <Text>Small</Text>
                </Button>

                <Button
                    block
                    onPress={() => this.setSelectedSize('medium')}
                    primary={(this.props.size === 'medium')}
                    info={(this.props.size !== 'medium')}
                >
                    <Text>Medium</Text>
                </Button>

                <Button
                    block
                    onPress={() => this.setSelectedSize('large')}
                    primary={(this.props.size === 'large')}
                    info={(this.props.size !== 'large')}
                >
                    <Text>Large</Text>
                </Button>

                <Button
                    success
                    block
                    style={{marginTop: 16}}
                    onPress={() => this.props.navigation.navigate('Other')}
                >
                    <Text>Autre page</Text>
                </Button>
            </Layout>
        );
    }
}

const mapStateToProps = ({font}) => {
    const {size} = font;
    return {size};
};

export default connect(mapStateToProps)(HomeScreen)