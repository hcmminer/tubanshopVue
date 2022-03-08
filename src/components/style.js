import styled from "vue-styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh; // cao bang trinh duyet
  position: relative;
  overflow: hidden;
`;
const arrProps = { direction: String };
export const Arrow = styled('div', arrProps)`
  color: #00ff73;
  height: 50px;
  width: 50px;
  display: flex;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0; // bo 3 can chinh giua cha theo chieu doc
  bottom: 0; //
  margin: auto; // luat su hoa giai toi uu 2 thuoc tinh tren
  left: ${(props) =>
    props.direction === "left" &&
    "10px"}; // lay gia tri cuoi cung
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 1; // mac dinh z-index = 0 va tang theo thu tu xuat hien
`;

const wraProps = { slideIndex: Number }
export const Wrapper = styled('div', wraProps)`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const slideProps = { bg: String }
export const Slide = styled('div', slideProps)`
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #${(props) => props.bg};
`;
export const Img = styled.img`
  height: 80%;
`;
export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  padding: 50px;
`;
export const InfoContainer = styled.div`
  flex: 1;
`;
export const Title = styled.h1`
  font-size: 70px;
`;
export const Desciption = styled.p`
  font-size: 20px;
  margin: 50px 0;
  letter-spacing: 3px;
  font-weight: 500;
`;
export const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;