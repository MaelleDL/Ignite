import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({pathId}) => {
    const history = useHistory();
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = "auto";
            history.push('/');
        }
    }

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++){
            if (i <= rating) {
                stars.push(<img key={i} src={starFull} alt="full-star" />)
            } else {
                stars.push(<img key={i} src={starEmpty} alt="empty-star" />)
            }
        }
        return stars;
    };

    const getPlatform = (platform) => {
        switch (platform) {
          case "PlayStation 4":
            return playstation;
          case "Xbox One":
            return xbox;
          case "PC":
            return steam;
          case "Nintendo Switch":
            return nintendo;
          case "iOS":
            return apple;
          default:
            return gamepad;
        }
      };

    const { screen, game, isLoading } = useSelector((state) => state.detail);
    return (
        <>
            {!isLoading &&(
                <Cardshadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data) => (
                                        <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.background_image}/>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathId}`} src={game.background_image} alt="screenshot" />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map((screen) => (
                                <img src={screen.image} key={screen.id} alt={screen.image} />
                            ))}
                        </div>
                    </Detail>
                </Cardshadow>
            )}
        </>
    );
};

const Cardshadow = styled(motion.div)`
    width: 100%;
    z-index: 5;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left:0;
    &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #ff7676;
        }
        &::-webkit-scrollbar-track{
            background: white;
        }
        scrollbar-color: #ff7676 white;
        scrollbar-width: 0.5rem;
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding:2rem 5rem;
    background: white;
    position: absolute;
    left:10%;
    color:black;
    z-index: 10;
    img{
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 2rem;
        height:2rem;
        display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top:5rem;
    img{
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetail;