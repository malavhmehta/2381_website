import { media, theme } from "../../styles";

import Fade from "react-reveal/Fade";
import Heading from "../heading";
import Icon from "../icon";
import hashCode from "../../util/hash";
import { rgba } from "polished";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type ItemProps = {
  reference: any;
  title: string;
  description: string;
};

type SectionProps = {
  title: string;
  content: string;
  items: ItemProps[];
};

const Section = ({ title, content, items }: SectionProps) => (
  <div className="container mt-5 pt-5">
    <div className="row">
      <div className="col-12 mb-2">
        <Fade bottom>
          <div className="d-flex justify-content-center flex-column align-items-center mb-3">
            <Heading2 fontSize={{ base: fontSizes.xl4, md: fontSizes.xl5 }}>
              {title}
            </Heading2>
            <Text>{content}</Text>
          </div>
        </Fade>
      </div>
    </div>

    <div className="row d-flex justify-content-center">
      {items.map((item: ItemProps) => (
        <div
          className="col-12 col-sm-6 col-lg-3 mb-4 pb-2 d-flex justify-content-center"
          key={hashCode(title + item.title)}
        >
          <Fade bottom>
            <Wrapper>
              <Icon
                reference={item.reference}
                color={colors.primary}
                opaque={true}
              />
              <Title fontSize={{ base: fontSizes.xl, md: fontSizes.xl2 }}>
                {item.title}
              </Title>
              <Description>{item.description}</Description>
            </Wrapper>
          </Fade>
        </div>
      ))}
    </div>
  </div>
);

export default Section;

export const Heading2 = styled.h2`
  ${Heading};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Text = styled.p`
  color: ${colors.secondary};
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg}`};
  font-weight: 500;
  max-width: 575px;
  text-align: center;
`;

export const Wrapper = styled.div`
  align-items: center;
  border: 1px solid ${rgba(colors.secondary, 0.05)};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.2rem;
`;

export const Title = styled.p`
  ${Heading};
  margin: 1rem 0;
  text-align: center;
`;

export const Description = styled(Text)`
  font-size: ${fontSizes.smd};
  ${media.md`font-size: ${fontSizes.md}`};
`;
