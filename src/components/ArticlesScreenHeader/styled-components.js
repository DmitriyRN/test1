import styled from 'styled-components/native';
import {
  StyledContainer,
  StyledRowContainer,
} from '../../common-styled-components';
import {Colors} from '../../constants';

export const StyledScreenContainer = styled(StyledContainer)`
  padding-top: 15px;
`;

export const IconsBlock = styled(StyledRowContainer)`
  justify-content: space-between;
  padding: 0 5px;
`;

export const IconWithTextBlock = styled(StyledRowContainer)`
  width: 60px;
`;

export const ButtonsBlock = styled(StyledRowContainer)`
  justify-content: space-between;
  padding: 20px 3px;
`;

export const IconText = styled.Text`
  font-size: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.blue};
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.darkGrey};
`;
