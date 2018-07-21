import React from 'react';
import Layout from './Layout';
import { Text } from 'native-base';

export default class OtherScreen extends React.Component {

    render() {
        return (
            <Layout>
                <Text>Other screen</Text>
            </Layout>
        );
    }
}