import { Heading2, Text } from "./list";
import { media, theme } from "../../styles";

import Fade from "react-reveal/Fade";
import Heading from "../heading";
import Image from "../image";
import hashCode from "../../util/hash";
import { rgba } from "polished";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type ItemProps = {
  imageSrc?: string;
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
          className="col-12 col-sm-6 col-lg-4 mb-4 pb-2 d-flex justify-content-center"
          key={hashCode(title + item.title)}
        >
          <Fade bottom>
            <Wrapper>
              {item.imageSrc && <Image src={item.imageSrc} alt={item.title} />}
              <Title fontSize={{ base: fontSizes.lg, md: fontSizes.xl }}>
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

const Wrapper = styled.div`
  align-items: center;
  border: 1px solid ${rgba(colors.secondary, 0.05)};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.p`
  ${Heading};
  text-align: left !important;
  margin: 0.8rem 1.5rem 0.4rem;
`;

const Description = styled(Text)`
  text-align: left !important;
  font-size: ${fontSizes.smd};
  padding: 0 1.5rem 0.25rem;
  ${media.md`font-size: ${fontSizes.md}`};
`;
