import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../style/persona';
import { Avatar } from 'react-native-elements';
import { State } from 'jagrastate/models';
import { capitalizeFirstLetter } from 'jagrastate/utils/StringUtils';
import { Icon } from 'react-native-elements';
import posed from 'react-native-pose';

const StyledContainer = posed.View({
    pressed: { opacity: 0.6, scale: 0.95 },
    normal: { opacity: 1, scale: 1 },
});

const PersonaHeader = (props: any) => {

    const [pressed, SetPressed] = useState(false);

    return (
        <StyledContainer style={styles.container} pose={pressed? 'pressed' : 'normal'}>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Settings')} onPressIn={() => SetPressed(true)} onPressOut={() => SetPressed(false)}>
                <View style={styles.horizontalStack}>
                    <Avatar rounded title={props.user.username[0].toUpperCase()} />
                    <Text style={styles.greeting}>Hello {capitalizeFirstLetter(props.user.username)}</Text>
                    <Icon style={styles.greeting} name='keyboard-arrow-right'/>
                </View>
            </TouchableWithoutFeedback>
        </StyledContainer>
    );
};

function MapStateToProps(state: State) {
    return {
        user: state.AuthState,
    };
}

export default connect(MapStateToProps)(PersonaHeader);
