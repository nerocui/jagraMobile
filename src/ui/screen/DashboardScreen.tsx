import React from 'react';
import { View } from 'react-native';
import PersonaHeader from '../components/header/PersonaHeader';
import screenStyles from '../../style/screen';
import styles from '../../style/dashboard';
import NavCard from '../components/card/NavCard';

const DashboardScreen = (props: any) => {
    return (
        <View style={screenStyles.container}>
            <PersonaHeader navigation={props.navigation}/>
            <View>
                <NavCard
                    title="Organizations"
                    navigation={props.navigation}
                    screen="Organizations"
                    image={require('../icons/orgs.png')}
                />
            </View>
        </View>
    );
};

export default DashboardScreen;
