import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
  ${({flex}) => (flex && `flex:${flex}`) || ''};
  ${({bgColor}) => (bgColor && `background-color:${bgColor}`) || ''};
`;
