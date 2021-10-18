import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const StyledSafeAreaView = styled(SafeAreaView)`
  ${({flex}) => (flex && `flex:${flex}`) || ''};
  ${({bgColor}) => (bgColor && `background-color:${bgColor}`) || ''};
`;
