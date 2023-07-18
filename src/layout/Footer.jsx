import { LayoutMargin } from "../styles/commonStyle";
import { styled } from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <LayoutMargin>
        <FooterText>
          나만의 영화 리뷰 서비스 Moview에 오신 것을 환영합니다! <br />
          어떤 영화에 대한 리뷰를 작성하고 싶으신가요?
        </FooterText>
        <FooterText>
          문의 사항이 있으시면{" "}
          <FooterLink href="mailto:contact@example.com">
            contact@example.com
          </FooterLink>
          으로 연락해주세요.
        </FooterText>
        <FooterText>© 2023 Movie Reviews. All rights reserved.</FooterText>
      </LayoutMargin>
    </FooterContainer>
  );
}
const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #666666;
`;

const FooterLink = styled.a`
  color: #666666;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
