import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faFastForward,
  faFastBackward,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  currentMusic,
  setCurrentMusic,
  isPlaying,
  setIsPlaying,
  audioRef,
}) => {
  const audioHandle = () => {
    if (isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <PlayComps>
      <SongInfo>
        <h2>{currentMusic.name}</h2>
        <h2>{currentMusic.artist}</h2>
      </SongInfo>
      <Range>
        <h2>0:00</h2>
        <input type="range" name="" id="" />
        <h2>0:00</h2>
      </Range>
      <Buttons>
        <div className="previous">
          <FontAwesomeIcon
            className="fsIcon"
            size="4x"
            id="backward"
            icon={faFastBackward}
          />
        </div>
        <div className="playPause">
          <FontAwesomeIcon
            className="fsIcon"
            size="4x"
            id="backward"
            icon={isPlaying ? faPause : faPlay}
          />
        </div>
        <div className="next">
          <FontAwesomeIcon
            className="fsIcon"
            size="4x"
            id="backward"
            icon={faFastForward}
          />
        </div>
      </Buttons>
    </PlayComps>
  );
};
const PlayComps = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
`;
const SongInfo = styled.div`
  border: 2px solid pink;
  display: flex;
  color: white;
  justify-content: space-around;
`;
const Range = styled.div`
  border: 2px solid pink;
  padding-left: 1.5%;
  color: white;
  display: flex;
  input {
    width: 500px;
  }
  width: 667px;
`;
const Buttons = styled.div`
  display: flex;
  border: 2px solid pink;
  width: fit-content;
  padding: 0% 132px 0% 132px;
  div {
    border: 2px solid pink;
    height: fit-content;
    width: fit-content;
    margin: 0px 20px 0px 20px;
  }
  /* .playPause {
    margin-top: 10px;
  } */
`;
export default Player;
