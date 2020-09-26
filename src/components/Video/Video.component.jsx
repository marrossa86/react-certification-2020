import styled from "styled-components";

const VideoCardHeader = styled.header`
  margin-bottom: auto;

  & p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
  }

  & h2 {
    font-size: 20px;
    margin: 0.25rem 0 auto;
    text-decoration: none;
    color: inherit;
    border: 0;
    display: inline-block;
    cursor: pointer;
  }

  & h2:hover {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const VideoCard = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;

  border-radius: 16px;
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;

  transition: 0.2s;

  &:hover {
    transform: translateY(-1rem);
  }

  &:hover ~ & {
    transform: translateX(150px);
  }

  &:not(:first-child) {
    margin-left: -130px;
  }
`;

const VideoCardList = styled.section`
  display: flex;
  padding: 3rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  &::-webkit-scrollbar-track {
    background: linear-gradient(
      90deg,
      #201c29,
      #201c29 1px,
      #17141d 0,
      #17141d
    );
  }
`;

const VideoCardAuthor = styled.div`
  font-size: 32px;
`;

export default { VideoCard, VideoCardHeader, VideoCardList, VideoCardAuthor };
