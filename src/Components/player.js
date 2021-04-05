import styled from "styled-components";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faFastForward,
  faFastBackward,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  musicList,
  setMusicList,
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
  //Handling the next and previous song
  const skipper = (direction) => {
    let currentIndex = musicList.findIndex(
      (indexMusic) => indexMusic.id === currentMusic.id
    );
    //for backward skipping
    if (direction === "backward") {
      if (currentIndex == 0) {
        setCurrentMusic(musicList[musicList.length - 1]);
      } else {
        setCurrentMusic(musicList[currentIndex - 1]);
      }
    }
    //for forward skipping
    if (direction === "forward") {
      if (currentIndex == musicList.length - 1) {
        setCurrentMusic(musicList[0]);
      } else {
        setCurrentMusic(musicList[currentIndex + 1]);
      }
    }
  };
  //syncing the skip part with highlight of the playlist
  useEffect(() => {
    const alteredMusic = musicList.map((altMusic) => {
      if (altMusic.id === currentMusic.id) {
        return {
          ...altMusic,
          active: true,
        };
      } else {
        return {
          ...altMusic,
          active: false,
        };
      }
    });
    setMusicList(alteredMusic);
  }, [currentMusic]);
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
            onClick={() => skipper("backward")}
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
            onClick={() => skipper("forward")}
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
