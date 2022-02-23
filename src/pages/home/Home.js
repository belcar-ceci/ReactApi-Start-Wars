import { Fragment } from "react";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import ReactPlayer from "react-player";
import styled from "styled-components";

const PlayerCard = styled.div`
display: flex;
justify-content: space-around;
`;

const PlayerSubtitle = styled.p`
text-align: center;
font-size: 1.5rem;
line-height: 1.3;
font-weight: 900;
color: white;
letter-spacing: 3px;

`;

function Home() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main>
        <Hero/> 
        <PlayerSubtitle>Lastest Video › </PlayerSubtitle>
        <PlayerCard>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=qxnPZId60jk"}
          className="swPlayer"
          playing
          controls={true}
        />
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=aOC8E8z_ifw"}
          className="swPlayer"
          playing
          controls={true}
        />
        </PlayerCard>
      </main>
    </Fragment>
  );
}
export default Home;
