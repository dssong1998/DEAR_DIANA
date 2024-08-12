import styled from "styled-components";

const ImgComponent = styled.img`
  width: 70%;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
`;

export const FullImg = ({ src, alt }) => (
  <ImgComponent src={`https://boogibooks.com/assets${src}`} alt={alt} />
);
