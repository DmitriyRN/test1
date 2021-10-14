import styled from 'styled-components/native/dist/styled-components.native.esm';

export const StyledSafeAreaView = styled.SafeAreaView`
  ${({flex}) => (flex && `flex:${flex}`) || ''};
  ${({bgColor}) => (bgColor && `background-color:${bgColor}`) || ''};
`;

export const StyledBox = styled.View`
  ${({flex}) => (flex && `flex:${flex}`) || ''};
  ${({justifyContent}) =>
    (justifyContent && `justify-content:${justifyContent}`) || ''};
  ${({alignItems}) => (alignItems && `align-items:${alignItems}`) || ''};
  ${({flexDirection}) =>
    (flexDirection && `flex-direction:${flexDirection}`) || ''};
  ${({flexGrow}) => flexGrow && `flex-grow:${flexGrow}`};

  ${({borderWidth}) => (borderWidth && `border-width:${borderWidth}`) || ''};
  ${({borderColor}) => (borderColor && `border-color:${borderColor}`) || ''};
  ${({borderRadius}) =>
    (borderRadius && `border-radius:${borderRadius}`) || ''};
  ${({borderTopColor}) =>
    (borderTopColor && `border-top-color:${borderTopColor}`) || ''};
  ${({borderRightColor}) =>
    (borderRightColor && `border-right-color:${borderRightColor}`) || ''};
  ${({borderBottomColor}) =>
    (borderBottomColor && `border-bottom-color:${borderBottomColor}`) || ''};
  ${({borderBottomWidth}) =>
    (borderBottomWidth && `border-bottom-width:${borderBottomWidth}`) || ''};
  ${({borderLeftColor}) =>
    (borderLeftColor && `border-left-color:${borderLeftColor}`) || ''};

  ${({paddingTop}) => (paddingTop && `padding-top:${paddingTop}`) || ''};
  ${({paddingRight}) =>
    (paddingRight && `padding-right:${paddingRight}`) || ''};
  ${({paddingBottom}) =>
    (paddingBottom && `padding-bottom:${paddingBottom}`) || ''};
  ${({paddingLeft}) => (paddingLeft && `padding-left:${paddingLeft}`) || ''};

  ${({marginTop}) => (marginTop && `margin-top:${marginTop}`) || ''};
  ${({marginRight}) => (marginRight && `margin-right:${marginRight}`) || ''};
  ${({marginBottom}) =>
    (marginBottom && `margin-bottom:${marginBottom}`) || ''};
  ${({marginLeft}) => (marginLeft && `margin-left:${marginLeft}`) || ''};

  ${({width}) => (width && `width:${width}`) || ''};
  ${({height}) => (height && `height:${height}`) || ''};
  ${({boxShadow}) => (boxShadow && `box-shadow:${boxShadow}`) || ''};
  ${({bgColor}) => (bgColor && `background-color:${bgColor}`) || ''};
`;

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

export const StyledImage = styled.Image`
  ${({width}) => (width && `width:${width}`) || ''};
  ${({height}) => (height && `height:${height}`) || ''};
`;

export const StyledTouchableOpacity = styled.TouchableOpacity``;

export const StyledFlatlist = styled.FlatList``;
