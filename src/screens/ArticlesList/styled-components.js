import styled from 'styled-components/native';
import {
  StyledBorderedContainer,
  StyledContainer,
  StyledRowContainer,
  StyledText,
} from '../../common-styled-components';
import {Colors} from '../../constants';

export const StyledFlexContainer = styled(StyledContainer)`
  flex: 1;
`;

export const IconsBlock = styled(StyledRowContainer)`
  justify-content: space-between;
  padding: 10px;
  background-color: ${Colors.lightGrey};
`;

export const TitlesBlock = styled(StyledRowContainer)`
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 70px;
`;

export const IconText = styled(StyledText)`
  padding: 4px;
  font-size: 12px;
  font-weight: bold;
  color: ${Colors.greyForText};
`;

export const TitleText = styled(StyledText)`
  text-transform: uppercase;
  padding: 12px;
  color: ${Colors.greyForText};
`;

export const StyledFooterContainer = styled(StyledBorderedContainer)`
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
`;

export const MainBlock = styled(StyledBorderedContainer)`
  border-color: ${Colors.blueGrey};
  border-radius: 5px;
  width: 90%;
  align-items: center;
`;

export const FooterText = styled(StyledText)`
  padding: 20px 0;
  color: ${Colors.blueGrey};
  font-size: 18px;
  font-weight: 500;
`;
