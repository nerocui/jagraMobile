import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../../style/persona';
import { Avatar } from 'react-native-elements';
import { State } from 'jagrastate/models';
import { capitalizeFirstLetter } from 'jagrastate/utils/StringUtils';
import { Icon } from 'react-native-elements';
import HeaderContainer from './HeaderContainer';

const PersonaHeader = (props: any) => {

    const [pressed, SetPressed] = useState(false);

    return (
        <HeaderContainer pressed={pressed}>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Settings')} onPressIn={() => SetPressed(true)} onPressOut={() => SetPressed(false)}>
                <View style={styles.horizontalStack}>
                    <Avatar rounded title={props.user.username[0].toUpperCase()} />
                    <Text style={styles.greeting}>Hello {capitalizeFirstLetter(props.user.username)}</Text>
                    <Icon style={styles.greeting} name='keyboard-arrow-right'/>
                </View>
            </TouchableWithoutFeedback>
        </HeaderContainer>
    );
};

function MapStateToProps(state: State) {
    return {
        user: state.AuthState,
    };
}

export default connect(MapStateToProps)(PersonaHeader);
