import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Image, ImageSourcePropType } from 'react-native';
import CardContainer from './CardContainer';
import styles from '../../../style/navCard';

type NavCardProps = {
    title: string,
    navigation: any,
    screen: string,
    image: ImageSourcePropType,
};

const NavCard = (props: NavCardProps) => {

    const [pressed, SetPressed] = useState(false);

    return (
        <CardContainer pressed={pressed}>
            <TouchableWithoutFeedback onPress={() => props.navigation.navigate(props.screen)} onPressIn={() => SetPressed(true)} onPressOut={() => SetPressed(false)}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {props.title}
                        </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icon} source={props.image}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </CardContainer>
    );
};

export default NavCard;
