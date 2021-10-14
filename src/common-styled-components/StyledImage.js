import styled from 'styled-components/native';

export const StyledImage = styled.Image`
  ${({width}) => (width && `width:${width}`) || ''};
  ${({height}) => (height && `height:${height}`) || ''};
`;
