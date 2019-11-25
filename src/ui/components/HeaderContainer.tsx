import React from 'react';
import posed from 'react-native-pose';
import styles from '../../style/headerContainer';

const StyledContainer = posed.View({
    pressed: { opacity: 0.6, scale: 0.95 },
    normal: { opacity: 1, scale: 1 },
});

const HeaderContainer = (props: any) => {
    return (
        <StyledContainer style={styles.container} pose={props.pressed? 'pressed' : 'normal'}>
            {props.children}
        </StyledContainer>
    );
};

export default HeaderContainer;
