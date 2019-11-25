import React from 'react';
import posed from 'react-native-pose';
import styles from '../../../style/cardContainer';

const StyledContainer = posed.View({
    pressed: { opacity: 0.6, scale: 0.95 },
    normal: { opacity: 1, scale: 1 },
});

const CardContainer = (props: any) => {
    return (
        <StyledContainer style={styles.container} pose={props.pressed? 'pressed' : 'normal'}>
            {props.children}
        </StyledContainer>
    );
};

export default CardContainer;
