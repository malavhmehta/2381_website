import { media, theme } from "../styles";

import Fade from "react-reveal/Fade";
import React from "react";
import styled from "styled-components";

const { colors, fontSizes } = theme;

export type StatProps = {
  value: number;
  label: string;
};

const Stat = ({ value, label }: StatProps) => (
  <div className="col-12 col-sm-6 col-md-4 mb-5">
    <Fade bottom>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </Fade>
  </div>
);

export default Stat;

const Value = styled.h2`
  color: ${colors.primary};
  font-size: ${fontSizes.xl5};
  ${media.md`font-size: ${fontSizes.xl6};`};
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const Label = styled.p`
  color: ${colors.secondary};
  font-size: ${fontSizes.smd};
  ${media.md`font-size: ${fontSizes.md};`};
  font-weight: 500;
  text-align: center;
`;
