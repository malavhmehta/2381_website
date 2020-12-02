import { getAllPostIds, getPostData } from "../../../util/posts";
import { media, theme } from "../../../styles";

import Head from "next/head";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";

const { colors, fonts, fontSizes } = theme;

const Text = styled.p`
  color: ${colors.secondary};
  font-size: ${fontSizes.smd};
  font-weight: 500;
  margin: 0.2rem 0;
  padding: 0.5rem 0;
`;

const Blockquote = styled.p`
  background-color: #f7fafc;
  border-left: 10px solid #e2e8f0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  color: "#2d3748";
  font-weight: 400 !important;
  padding: 0.8rem;
  margin: 0.4rem 0;
`;

const StyledLink = styled.a`
  color: ${colors.primary};
  font-size: ${fontSizes.smd};
  font-weight: 500;
  margin: 0.75rem 0;
  padding: 0.6rem 0 0.8rem;
  position: relative;

  &:before {
    background-color: ${colors.primary};
    bottom: 0.6rem;
    content: "";
    left: 0;
    height: 0.13rem;
    position: absolute;
    transition: ${theme.transition};
    width: ${({ active }) => (active ? "100%" : "0")};
  }

  &:hover {
    opacity: 1;
    text-decoration: none;

    &:before {
      width: 100%;
    }
  }
`;

const ListItem = styled.li`
  color: ${colors.secondary};
  font-size: ${fontSizes.smd};
  font-weight: 500;
  margin: 0.2rem 0;
`;

const Heading = styled.h2`
  color: ${colors.secondary};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 700;
  margin: 0.5rem 0;
  padding: ${({ level }) => `${1.5 * 0.115 * (10 - level)}rem`} 0
    ${({ level }) => `${0.115 * (10 - level)}rem`};
`;

export default function Post({ postData }) {
  const getFontSize = (level) => {
    if (level === 1) return fontSizes.xl5;
    else if (level === 2) return fontSizes.xl4;
    else if (level === 3) return fontSizes.xl3;
    else if (level === 4) return fontSizes.xl2;
    else if (level === 5) return fontSizes.xl;
    else if (level === 6) return fontSizes.lg;
    else return fontSizes.smd;
  };

  const renderers = {
    root: (props) => <div {...props} />,
    paragraph: (props) => <Text {...props} />,
    emphasis: (props) => (
      <Text style={{ fontStyle: "italic", display: "inline" }} {...props} />
    ),
    strong: (props) => (
      <Text style={{ fontWeight: 700, display: "inline" }} {...props} />
    ),
    thematicBreak: <hr />,
    blockquote: (props) => <Blockquote {...props} />,
    delete: (props) => <Text style={{ fontWeight: 700 }} {...props} />,
    link: (props) => <StyledLink {...props} />,
    image: (props) => <img className="img-fluid" {...props} />,
    linkReference: (props) => <StyledLink {...props} />,
    imageReference: (props) => <img className="img-fluid" {...props} />,
    list: (props) => (props.ordered ? <ol {...props} /> : <ul {...props} />),
    listItem: (props) => <ListItem {...props} />,
    heading: (props) => (
      <Heading
        level={props.level}
        fontSize={getFontSize(props.level)}
        {...props}
      />
    ),
    inlineCode: (props) => <code {...props} />,
    code: (props) => (
      <SyntaxHighlighter language={props.language} style={materialDark}>
        {props.value}
      </SyntaxHighlighter>
    ),
  };

  return (
    <div className="container">
      <Head>
        <title>Post - 2381 Robotics</title>
      </Head>
      <ReactMarkdown
        source={postData.htmlContent}
        renderers={renderers}
      ></ReactMarkdown>
    </div>
  );
}

export const getStaticPaths = async () => {
  let paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let postData = await getPostData(params.post);
  return {
    props: {
      postData,
    },
  };
};

const materialDark = {
  'code[class*="language-"]': {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    color: "#eee",
    background: "#2f2f2f",
    fontFamily: "Roboto Mono, monospace",
    fontSize: "1em",
    lineHeight: "1.5em",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    color: "#eee",
    background: "#2f2f2f",
    fontFamily: "Roboto Mono, monospace",
    fontSize: "1em",
    lineHeight: "1.5em",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    overflow: "auto",
    position: "relative",
    margin: "0.5em 0",
    padding: "1.25em 1em",
  },
  'code[class*="language-"]::-moz-selection': {
    background: "#363636",
  },
  'pre[class*="language-"]::-moz-selection': {
    background: "#363636",
  },
  'code[class*="language-"] ::-moz-selection': {
    background: "#363636",
  },
  'pre[class*="language-"] ::-moz-selection': {
    background: "#363636",
  },
  'code[class*="language-"]::selection': {
    background: "#363636",
  },
  'pre[class*="language-"]::selection': {
    background: "#363636",
  },
  'code[class*="language-"] ::selection': {
    background: "#363636",
  },
  'pre[class*="language-"] ::selection': {
    background: "#363636",
  },
  ':not(pre) > code[class*="language-"]': {
    whiteSpace: "normal",
    borderRadius: "0.2em",
    padding: "0.1em",
  },
  ".language-css > code": {
    color: "#fd9170",
  },
  ".language-sass > code": {
    color: "#fd9170",
  },
  ".language-scss > code": {
    color: "#fd9170",
  },
  '[class*="language-"] .namespace': {
    Opacity: "0.7",
  },
  atrule: {
    color: "#c792ea",
  },
  "attr-name": {
    color: "#ffcb6b",
  },
  "attr-value": {
    color: "#a5e844",
  },
  attribute: {
    color: "#a5e844",
  },
  boolean: {
    color: "#c792ea",
  },
  builtin: {
    color: "#ffcb6b",
  },
  cdata: {
    color: "#80cbc4",
  },
  char: {
    color: "#80cbc4",
  },
  class: {
    color: "#ffcb6b",
  },
  "class-name": {
    color: "#f2ff00",
  },
  comment: {
    color: "#616161",
  },
  constant: {
    color: "#c792ea",
  },
  deleted: {
    color: "#ff6666",
  },
  doctype: {
    color: "#616161",
  },
  entity: {
    color: "#ff6666",
  },
  function: {
    color: "#c792ea",
  },
  hexcode: {
    color: "#f2ff00",
  },
  id: {
    color: "#c792ea",
    fontWeight: "bold",
  },
  important: {
    color: "#c792ea",
    fontWeight: "bold",
  },
  inserted: {
    color: "#80cbc4",
  },
  keyword: {
    color: "#c792ea",
  },
  number: {
    color: "#fd9170",
  },
  operator: {
    color: "#89ddff",
  },
  prolog: {
    color: "#616161",
  },
  property: {
    color: "#80cbc4",
  },
  "pseudo-class": {
    color: "#a5e844",
  },
  "pseudo-element": {
    color: "#a5e844",
  },
  punctuation: {
    color: "#89ddff",
  },
  regex: {
    color: "#f2ff00",
  },
  selector: {
    color: "#ff6666",
  },
  string: {
    color: "#a5e844",
  },
  symbol: {
    color: "#c792ea",
  },
  tag: {
    color: "#ff6666",
  },
  unit: {
    color: "#fd9170",
  },
  url: {
    color: "#ff6666",
  },
  variable: {
    color: "#ff6666",
  },
};
