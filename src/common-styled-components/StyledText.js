import styled from 'styled-components/native';

export const StyledText = styled.Text`
  ${({color}) => (color && `color:${color}`) || ''};
  ${({fontSize}) => (fontSize && `font-size:${fontSize}`) || ''};
  ${({fontWeight}) => (fontWeight && `font-weight:${fontWeight}`) || ''};
  ${({textTransform}) =>
    (textTransform && `text-transform:${textTransform}`) || ''};
  ${({padding}) => (padding && `padding:${padding}`) || ''};
  ${({paddingTop}) => (paddingTop && `padding-top:${paddingTop}`) || ''};
  ${({paddingRight}) =>
    (paddingRight && `padding-right:${paddingRight}`) || ''};
  ${({paddingBottom}) =>
    (paddingBottom && `padding-bottom:${paddingBottom}`) || ''};
  ${({paddingLeft}) => (paddingLeft && `padding-left:${paddingLeft}`) || ''};
  ${({margin}) => (margin && `margin:${margin}`) || ''};
  ${({marginTop}) => (marginTop && `margin-top:${marginTop}`) || ''};
  ${({marginRight}) => (marginRight && `margin-right:${marginRight}`) || ''};
  ${({marginBottom}) =>
    (marginBottom && `margin-bottom:${marginBottom}`) || ''};
  ${({marginLeft}) => (marginLeft && `margin-left:${marginLeft}`) || ''};
`;
