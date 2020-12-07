import { media, theme } from "../../styles";

import Fade from "react-reveal/Fade";
import Heading from "../heading";
import Link from "../link";
import hashCode from "../../util/hash";
import { rgba } from "polished";
import styled from "styled-components";

const { colors, fontSizes } = theme;

type SectionProps = {
  title: string;
  content: any;
  table: {
    rows: string[];
    cols: any[][];
  };
  link?: {
    href: string;
    name: string;
    ext?: boolean;
  };
};

const Section = ({ title, content, table, link }: SectionProps) => (
  <div className="container pt-2 mt-3">
    <div className="row">
      <div className="col-12 mb-2">
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

    <div className="row">
      <div className="col-md-1 col-lg-2" />
      <div className="col-12 col-md-10 col-lg-8">
        <div className="row">
          <div className="col-12">
            <Fade bottom>
              <Table>
                <thead>
                  <Tr alt={false}>
                    {table.rows.map((row) => (
                      <Th key={`__table__row__${row}_${hashCode(row)}`}>
                        {row}
                      </Th>
                    ))}
                  </Tr>
                </thead>
                <tbody>
                  {table.cols.map((col, i) => (
                    <Tr
                      alt={!(i & 1)}
                      key={`__table__col__${col.toString()}_${hashCode(
                        col.toString()
                      )}`}
                    >
                      {col.map((cell) => (
                        <Td
                          key={`__table__cell__${cell.toString()}_${hashCode(
                            cell.toString()
                          )}`}
                        >
                          {cell}
                        </Td>
                      ))}
                    </Tr>
                  ))}
                </tbody>
              </Table>
            </Fade>
          </div>
        </div>
      </div>
      <div className="col-md-1 col-lg-2" />
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

const Table = styled.table.attrs({ className: "table" })`
  width: 100%;
`;

const Th = styled.th.attrs({ scope: "col" })`
  color: ${colors.secondary};
  font-size: ${fontSizes.md};
  ${media.md`font-size: ${fontSizes.lg}`};
  font-weight: 600;
  padding: 25px 15px !important;
  border: none !important;
`;

const Tr = styled.tr`
  border: ${({ alt }: { alt: boolean }) =>
    alt ? `1px solid ${rgba(colors.secondary, 0.08)}` : `none !important`};
  border-left: none !important;
  border-right: none !important;
  background-color: ${({ alt }: { alt: boolean }) =>
    alt ? `${rgba(colors.secondary, 0.025)}` : `${colors.white}`};
`;

const Td = styled.td`
  color: ${colors.secondary};
  font-size: ${fontSizes.smd};
  ${media.md`font-size: ${fontSizes.md}`};
  font-weight: 400;
  padding: 25px 15px !important;
  border: none !important;
`;
