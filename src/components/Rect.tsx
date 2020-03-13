import * as React from "react";
import styled from "styled-components";

import { color } from './helper';



const StyleRect: any = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  top: ${(props: any) => props.top};
  left: ${(props: any) => props.left};
  background: ${(props: any) => color[props.color]};
  border-top: 1px solid #999;
  border-left: 1px solid #999;
  border-bottom: ${(props: any) => props.top === "380px" ? '1px solid #999' : '0px solid #999'};
  border-right: ${(props: any) => props.left === "940px" ? '1px solid #999' : '0px solid #999'};
  box-sizing: border-box;
  position: absolute;
`;

const Rect = React.memo(({ pos, color }: any) => {
  // console.log('re-render', pos);
  return <StyleRect top={pos.y} left={pos.x} color={color} />;
}, (prevProps, nextProps) => {
  return prevProps.color === nextProps.color;
});

export default Rect;
