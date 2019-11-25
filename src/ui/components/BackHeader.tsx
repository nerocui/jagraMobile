import React, { useState } from 'react';
import HeaderContainer from './HeaderContainer';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../../style/backHeader';

const BackHeader = (props: any) => {
    const [pressed, SetPressed] = useState(false);
    return (
        <HeaderContainer pressed={pressed}>
            <TouchableWithoutFeedback onPress={() => props.navigation.goBack()} onPressIn={() => SetPressed(true)} onPressOut={() => SetPressed(false)}>
                <View style={styles.horizontalStack}>
                    <Icon name='keyboard-arrow-left'/>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        </HeaderContainer>
    );
};

export default BackHeader;

