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
  audioState,
  setAudioState,
}) => {
  //Handling the play pause function
  const audioHandle = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  //Handling the input slider
  const sliderHandler = (e) => {
    console.log(e.target.value);
    audioRef.current.currentTime = e.target.value;
    setAudioState({ ...audioState, currentTime: e.target.value });
  };
  //Converting time into mins and sec
  const minSecTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  return (
    <PlayComps>
      <SongInfo>
        <h2>{currentMusic.name}</h2>
        <h2>{currentMusic.artist}</h2>
      </SongInfo>
      <Range>
        <h2>{minSecTime(audioState.currentTime)}</h2>
        <input
          type="range"
          name=""
          id=""
          min={0}
          max={audioState.duration}
          value={audioState.currentTime}
          onChange={sliderHandler}
        />
        <h2>{minSecTime(audioState.duration)}</h2>
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
            onClick={audioHandle}
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
