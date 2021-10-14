import styled from 'styled-components/native';

import {StyledRowContainer, StyledText} from '../../common-styled-components';
import {Colors} from '../../constants';

export const StyledArticleContainer = styled(StyledRowContainer)`
  padding: 3px;
  border-bottom-color: ${Colors.separatorGrey};
  border-bottom-width: 2px;
`;

export const StyledCountBlock = styled(StyledRowContainer)`
  justify-content: center;
  width: 50%;
`;

export const PaddingText = styled(StyledText)`
  padding: 3px;
`;

export const SizeText = styled(PaddingText)`
  padding-left: 25px;
`;

export const ImageBlock = styled.View`
  padding: 10px;
  box-shadow: 0 2px 0 ${Colors.lightGrey};
`;

export const DescriptionBlock = styled.View`
  justify-content: space-evenly;
`;

export const CountWrapper = styled.View`
  background-color: ${Colors.green};
  width: 50%;
  border-radius: 10px;
  align-items: center;
`;

export const ArrowBlock = styled.View`
  padding: 20px;
`;
