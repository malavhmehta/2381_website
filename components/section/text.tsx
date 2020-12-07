import { media, theme } from "../../styles";

import Fade from "react-reveal/Fade";
import Heading from "../heading";
import Image from "../image";
import Link from "../link";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type SectionProps = {
  title: string;
  content: any;
  link?: {
    href: string;
    name: string;
    ext?: boolean;
  };
};

const Section = ({ title, content, link }: SectionProps) => (
  <div className="container pt-2 mt-3">
    <div className="row">
      <div className="col-12 mb-5">
        <Fade bottom>
          <Heading2 fontSize={{ base: fontSizes.xl4, md: fontSizes.xl5 }}>
            {title}
          </Heading2>
        </Fade>
        <Fade bottom cascade>
          <Text>{content}</Text>
        </Fade>
        <Fade bottom>{link && <Link {...link} />}</Fade>
      </div>
    </div>
  </div>
);

export default Section;

const Heading2 = styled.h2`
  ${Heading};
  margin-bottom: 2rem;
`;

const Text = styled.p`
  color: ${colors.secondary};
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg}`};
  font-weight: 500;
`;
