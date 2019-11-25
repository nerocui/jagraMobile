import React from 'react';
import { View, Text } from 'react-native';
import PersonaHeader from '../components/header/PersonaHeader';
import screenStyles from '../../style/screen';
import styles from '../../style/dashboard';
import NavCard from '../components/card/NavCard';

const DashboardScreen = (props: any) => {
    return (
        <View style={screenStyles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <PersonaHeader navigation={props.navigation}/>
            <View style={styles.grid}>
                <NavCard
                    title="Organizations"
                    navigation={props.navigation}
                    screen="Organizations"
                    image={require('../icons/orgs.png')}
                />
                <NavCard
                    title="Tasks Created"
                    navigation={props.navigation}
                    screen="Organizations"
                    image={require('../icons/taskscreated.png')}
                />
                <NavCard
                    title="Tasks Assigned"
                    navigation={props.navigation}
                    screen="Organizations"
                    image={require('../icons/tasksassigned.png')}
                />
                <NavCard
                    title="Invitations"
                    navigation={props.navigation}
                    screen="Organizations"
                    image={require('../icons/invitation.png')}
                />
            </View>
        </View>
    );
};

export default DashboardScreen;
