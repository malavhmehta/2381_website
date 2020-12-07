import { media, theme } from "../../styles";

import Fade from "react-reveal/Fade";
import Heading from "../heading";
import Icon from "../icon";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type CardProps = {
  icon: any;
  title: string;
  description: string;
};

type DetailsProps = {
  title: string;
  description: string;
  cards: CardProps[];
};

const Details = ({ title, description, cards }: DetailsProps) => (
  <Background>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Fade bottom>
            <Heading2
              fontSize={{
                base: fontSizes.xl3,
                md: fontSizes.xl4,
              }}
            >
              {title}
            </Heading2>
            <Description>{description}</Description>
          </Fade>
        </div>
      </div>
      <div className="row">
        {cards.map((card: CardProps) => (
          <div className="col-12 col-sm-6 col-md-4 mt-5" key={card.title}>
            <Fade bottom>
              <Icon reference={card.icon} color={colors.white} opaque={false} />
              <Heading3
                fontSize={{
                  base: fontSizes.xl,
                  md: fontSizes.xl2,
                }}
              >
                {card.title}
              </Heading3>
              <CardDescription>{card.description}</CardDescription>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  </Background>
);

export default Details;

const Background = styled.div`
  background-color: ${colors.secondary};
  margin: 0;
  padding: 10rem 0;
  position: relative;

  ${media.sm`padding: 15rem 0;`};
  ${media.lg`padding: 15rem 0 10rem;`};
  transform: skewY(-6deg) translateY(-180px);
  ${media.sm`transform: skewY(-6deg) translateY(-225px);`};
  transition: ${theme.transition};
  width: 100%;
  z-index: -10 !important;

  & > * {
    transform: skewY(6deg);
  }
`;

const Heading2 = styled.h2`
  ${Heading};
  color: ${colors.white} !important;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  color: ${colors.white};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl};`}
  font-weight: 500;
  max-width: 650px;
  opacity: 0.6;
`;

const Heading3 = styled.h3`
  ${Heading};
  color: ${colors.white} !important;
  margin-top: 1.5rem;
`;

const CardDescription = styled.p`
  color: ${colors.white} !important;
  font-size: ${fontSizes.md};
  font-weight: 500;
  margin-top: 1rem;
  opacity: 0.6;
`;
