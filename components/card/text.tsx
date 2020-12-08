import { Background, Label as Title } from "./image";
import { media, theme } from "../../styles";

import Fade from "react-reveal/Fade";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type CardProps = {
  title: string;
  description: string;
  detail?: string;
  tags?: string[];
};

const Card = ({ title, description, detail, tags }: CardProps) => (
  <Background>
    <Fade bottom>
      <div>
        <Title>{title}</Title>
        {detail && <Detail>{detail}</Detail>}
        <Wrapper>
          <Description>{description}</Description>
          {tags && (
            <Tags>
              {tags.map((tag: string) => (
                <Tag>{tag}</Tag>
              ))}
            </Tags>
          )}
        </Wrapper>
      </div>
    </Fade>
  </Background>
);

export default Card;

export const Detail = styled.p`
  color: ${colors.primary};
  font-size: ${fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
  margin: 1.25rem 1.75rem;
`;

export const Description = styled.p`
  color: ${colors.secondary};
  font-size: ${fontSizes.smd};
  ${media.md`font-size: ${fontSizes.md};`};
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 1.75rem 0.2rem;
`;

const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tag = styled.p`
  background-color: ${colors.light};
  border-radius: 4px;
  padding: 0.25rem 0.6rem;
  color: ${colors.primary};
  font-size: ${fontSizes.xs};
  font-weight: 600;
  margin-left: 0.6rem;
`;
