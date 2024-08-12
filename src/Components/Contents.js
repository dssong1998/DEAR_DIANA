import styled from "styled-components";

const ImgComponent = styled.img`
  width: 70%;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
`;

export const FullImg = ({ src, alt }) => (
  <ImgComponent
    src={`https://dssong1998.github.io/DEAR_DIANA${src}`}
    alt={alt}
  />
);
