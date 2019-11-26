import React from 'react';
import { View, Text, ImageBackground, ImageURISource } from 'react-native';
import PersonaHeader from '../components/header/PersonaHeader';
import screenStyles from '../../style/screen';
import styles from '../../style/dashboard';
import NavCard from '../components/card/NavCard';
import { connect } from 'react-redux';
import { State } from 'jagrastate/models';

const DashboardScreen = (props: any) => {
    console.log(props.backgroundImage);
    const defaultUrl = 'https://www.bing.com/th?id=OHR.OverwinteringMonarchs_EN-US9077881827_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp';
    const url: ImageURISource = {
        uri: props.backgroundImage !== '' ? props.backgroundImage : defaultUrl,
    };
    return (
        <ImageBackground source={url} style={styles.background}>
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
        </ImageBackground>
    );
};

function MapStateToProps(state: State) {
    return {
        backgroundImage: state.ThemeState.backgroundImage,
    };
}

export default connect(MapStateToProps)(DashboardScreen);
