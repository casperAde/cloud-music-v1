import React from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import Marquee from '../../components/Marquee';

const HeaderContainer = styled.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  background-color: #d44439;
  color: ${style['font-color-light']};

  .back {
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }

  > h1 {
    font-size: ${style['font-size-l']};
    font-weight: 700;
  }
`;

interface Props {
  handleClick?: () => void,
  title?: string,
  isMarquee?: boolean
}

// 处理函数组件拿不到 ref 的问题，所以用 forwardRef
const Header = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {handleClick, title, isMarquee = false} = props;

  return (
    <HeaderContainer ref={ref}>
      <i className="iconfont back" onClick={handleClick}>&#xe655;</i>
      {
        isMarquee ? <Marquee><h1>{title}</h1></Marquee> : <h1>{title}</h1>
      }
    </HeaderContainer>
  );
});


export default React.memo(Header);