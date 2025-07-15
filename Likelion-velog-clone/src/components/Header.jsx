// Header.jsx
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        {/* LOGO를 SVG 대신 실제 <span>으로 로고 변경 */}
        <LogoText>velog</LogoText>
      </Logo>

      <RightGroup>
        <IconWrapper>
          <IconImg src="/src/assets/icons/notifications.svg" alt="알림" />
          <IconImg src="/src/assets/icons/search.svg" alt="검색" />
        </IconWrapper>
        <LoginButton>로그인</LoginButton>
      </RightGroup>
    </HeaderContainer>
  );
}

export default Header;



const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 12px 0px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  font-family: 'Pretendard', 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #212529;
  letter-spacing: -0.5px;
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const IconImg = styled.img`
  cursor: pointer;
`;

const LoginButton = styled.button`
  padding: 6px 14px;
  background-color: #212529;
  color: white;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;