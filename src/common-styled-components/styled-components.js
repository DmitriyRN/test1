import styled from 'styled-components/native';
import {Colors} from '../constants';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.lightGrey};
`;

export const StyledContainer = styled.View`
  justify-content: center;
  background-color: ${Colors.white};
`;

export const StyledBorderedContainer = styled.View`
  border-width: 2px;
  border-color: ${Colors.separatorGrey};
`;

export const StyledRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: ${props => props.color || 'black'};
`;

export const StyledImage = styled.Image`
  height: ${props => props.height || '70px'};
  width: ${props => props.width || '70px'};
`;

// ${({width}) => (width && `width:${width}`) || ''};
