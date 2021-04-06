//Components import
import Navbar from "../Components/navbar";
import Player from "../Components/player";
import styled from "styled-components";
import Library from "../Components/library";
//importing Fontawesome for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
//importing songs from the data
import musiclist from "../musicList";
import { useRef, useState } from "react";
const MainPage = () => {
  const [musicList, setMusicList] = useState(musiclist());
  const [currentMusic, setCurrentMusic] = useState(musicList[4]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Referencing the audio
  const audioRef = useRef(null);
  //State of the audio
  const [audioState, setAudioState] = useState({
    currentTime: 0,
    duration: 0,
  });
  //Function to manage currentTime and duration
  const timeUpdateManager = (e) => {
    console.log(e.target.currentTime);
    setAudioState({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };
  return (
    <Main>
      <NavFromMain className="NavFromMain">
        <div className="svg">
          <svg
            width="265"
            height="217"
            viewBox="0 0 265 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M52 0L62 20V206L52 186V0Z" fill="#e47575" />
            <rect x="127" y="31" width="10" height="186" fill="#f16868" />
            <rect
              x="52.5359"
              y="26.477"
              width="10"
              height="110.375"
              transform="rotate(-18.6411 52.5359 26.477)"
              fill="#df6d6d"
            />
            <rect
              x="128.074"
              y="25"
              width="10"
              height="109.614"
              transform="rotate(21.4442 128.074 25)"
              fill="#b13636"
            />
            <path
              d="M29.16 124.268L24.768 149H23.148L26.964 127.616L13.644 149H12.348L6.588 127.76L2.808 149H1.188L5.58 124.268H7.272L13.392 146.84L27.468 124.268H29.16ZM31.4393 139.208C31.7993 137.192 32.5073 135.428 33.5633 133.916C34.6433 132.404 35.9753 131.24 37.5593 130.424C39.1433 129.608 40.8473 129.2 42.6713 129.2C44.7113 129.2 46.3553 129.704 47.6033 130.712C48.8753 131.72 49.6673 133.004 49.9793 134.564L50.8793 129.452H52.4993L49.0073 149H47.4233L48.3233 143.852C47.4833 145.436 46.2473 146.744 44.6153 147.776C42.9833 148.784 41.1353 149.288 39.0713 149.288C36.6953 149.288 34.7873 148.592 33.3473 147.2C31.9313 145.784 31.2233 143.876 31.2233 141.476C31.2233 140.756 31.2953 140 31.4393 139.208ZM49.1513 139.208C49.2713 138.488 49.3313 137.852 49.3313 137.3C49.3313 135.26 48.7193 133.64 47.4953 132.44C46.2713 131.216 44.6513 130.604 42.6353 130.604C41.0513 130.604 39.5873 130.952 38.2433 131.648C36.9233 132.32 35.8073 133.304 34.8953 134.6C34.0073 135.896 33.4073 137.432 33.0953 139.208C32.9753 140 32.9153 140.672 32.9153 141.224C32.9153 143.312 33.5033 144.944 34.6793 146.12C35.8793 147.272 37.5113 147.848 39.5753 147.848C41.0873 147.848 42.5153 147.5 43.8593 146.804C45.2273 146.084 46.3673 145.076 47.2793 143.78C48.2153 142.46 48.8393 140.936 49.1513 139.208ZM67.2899 129.056C69.2819 129.056 70.8779 129.596 72.0779 130.676C73.2779 131.732 73.8779 133.304 73.8779 135.392C73.8779 136.04 73.8059 136.76 73.6619 137.552L71.6459 149H70.0619L72.0779 137.66C72.1979 136.892 72.2579 136.256 72.2579 135.752C72.2579 134.024 71.7779 132.716 70.8179 131.828C69.8579 130.916 68.5139 130.46 66.7859 130.46C64.7699 130.46 63.0299 131.084 61.5659 132.332C60.1019 133.58 59.0939 135.416 58.5419 137.84L56.5619 149H54.9419L58.4339 129.452H60.0539L59.3339 133.556C60.1499 132.092 61.2539 130.976 62.6459 130.208C64.0619 129.44 65.6099 129.056 67.2899 129.056ZM78.0916 139.208C78.4516 137.192 79.1596 135.428 80.2156 133.916C81.2956 132.404 82.6276 131.24 84.2116 130.424C85.7956 129.608 87.4996 129.2 89.3236 129.2C91.3156 129.2 92.9476 129.704 94.2196 130.712C95.5156 131.696 96.3196 132.98 96.6316 134.564L98.7916 122.36H100.376L95.6596 149H94.0756L95.0116 143.816C94.1716 145.424 92.9356 146.744 91.3036 147.776C89.6716 148.784 87.8236 149.288 85.7596 149.288C83.3596 149.288 81.4396 148.592 79.9996 147.2C78.5836 145.784 77.8756 143.876 77.8756 141.476C77.8756 140.756 77.9476 140 78.0916 139.208ZM95.8036 139.208C95.9236 138.488 95.9836 137.852 95.9836 137.3C95.9836 135.26 95.3716 133.64 94.1476 132.44C92.9236 131.216 91.3036 130.604 89.2876 130.604C87.7036 130.604 86.2396 130.952 84.8956 131.648C83.5756 132.32 82.4596 133.304 81.5476 134.6C80.6596 135.896 80.0596 137.432 79.7476 139.208C79.6276 140 79.5676 140.672 79.5676 141.224C79.5676 143.312 80.1556 144.944 81.3316 146.12C82.5316 147.272 84.1636 147.848 86.2276 147.848C87.7396 147.848 89.1676 147.5 90.5116 146.804C91.8796 146.084 93.0196 145.076 93.9316 143.78C94.8676 142.46 95.4916 140.936 95.8036 139.208ZM121.574 129.452L118.118 149H116.498L117.254 144.788C116.438 146.252 115.322 147.38 113.906 148.172C112.49 148.94 110.954 149.324 109.298 149.324C107.306 149.324 105.698 148.796 104.474 147.74C103.274 146.66 102.674 145.064 102.674 142.952C102.674 142.16 102.734 141.452 102.854 140.828L104.906 129.452H106.49L104.474 140.72C104.354 141.488 104.294 142.112 104.294 142.592C104.294 144.344 104.774 145.676 105.734 146.588C106.694 147.476 108.038 147.92 109.766 147.92C111.878 147.92 113.678 147.248 115.166 145.904C116.678 144.536 117.65 142.544 118.082 139.928V140.036L119.954 129.452H121.574ZM162.543 124.268L158.151 149H156.531L160.347 127.616L147.027 149H145.731L139.971 127.76L136.191 149H134.571L138.963 124.268H140.655L146.775 146.84L160.851 124.268H162.543ZM184.082 129.452L180.626 149H179.006L179.762 144.788C178.946 146.252 177.83 147.38 176.414 148.172C174.998 148.94 173.462 149.324 171.806 149.324C169.814 149.324 168.206 148.796 166.982 147.74C165.782 146.66 165.182 145.064 165.182 142.952C165.182 142.16 165.242 141.452 165.362 140.828L167.414 129.452H168.998L166.982 140.72C166.862 141.488 166.802 142.112 166.802 142.592C166.802 144.344 167.282 145.676 168.242 146.588C169.202 147.476 170.546 147.92 172.274 147.92C174.386 147.92 176.186 147.248 177.674 145.904C179.186 144.536 180.158 142.544 180.59 139.928V140.036L182.462 129.452H184.082ZM192.688 149.288C190.672 149.288 189.064 148.808 187.864 147.848C186.688 146.888 186.172 145.52 186.316 143.744H187.936C187.816 145.016 188.176 146.036 189.016 146.804C189.88 147.548 191.14 147.92 192.796 147.92C194.5 147.92 195.856 147.548 196.864 146.804C197.872 146.036 198.376 145.052 198.376 143.852C198.376 143.132 198.172 142.532 197.764 142.052C197.356 141.572 196.852 141.188 196.252 140.9C195.652 140.612 194.812 140.276 193.732 139.892C192.532 139.484 191.548 139.088 190.78 138.704C190.036 138.32 189.4 137.792 188.872 137.12C188.368 136.424 188.116 135.548 188.116 134.492C188.116 133.46 188.416 132.548 189.016 131.756C189.616 130.94 190.444 130.316 191.5 129.884C192.556 129.428 193.732 129.2 195.028 129.2C196.828 129.2 198.328 129.668 199.528 130.604C200.728 131.516 201.328 132.728 201.328 134.24C201.328 134.552 201.316 134.792 201.292 134.96H199.708C199.732 134.84 199.744 134.648 199.744 134.384C199.744 133.232 199.276 132.308 198.34 131.612C197.428 130.892 196.276 130.532 194.884 130.532C193.396 130.532 192.16 130.892 191.176 131.612C190.216 132.308 189.736 133.256 189.736 134.456C189.736 135.248 189.952 135.908 190.384 136.436C190.816 136.94 191.344 137.348 191.968 137.66C192.616 137.948 193.48 138.284 194.56 138.668C195.76 139.076 196.708 139.46 197.404 139.82C198.124 140.18 198.736 140.684 199.24 141.332C199.744 141.98 199.996 142.808 199.996 143.816C199.996 145.496 199.312 146.828 197.944 147.812C196.6 148.796 194.848 149.288 192.688 149.288ZM209.466 125.096C209.13 125.096 208.854 125 208.638 124.808C208.422 124.592 208.314 124.316 208.314 123.98C208.314 123.5 208.482 123.104 208.818 122.792C209.154 122.456 209.538 122.288 209.97 122.288C210.306 122.288 210.582 122.396 210.798 122.612C211.038 122.828 211.158 123.104 211.158 123.44C211.158 123.92 210.978 124.316 210.618 124.628C210.282 124.94 209.898 125.096 209.466 125.096ZM209.538 129.452L206.046 149H204.426L207.918 129.452H209.538ZM212.705 139.208C213.065 137.168 213.785 135.392 214.865 133.88C215.945 132.368 217.265 131.216 218.825 130.424C220.409 129.608 222.113 129.2 223.937 129.2C226.385 129.2 228.281 129.812 229.625 131.036C230.993 132.26 231.689 133.904 231.713 135.968H230.021C229.997 134.312 229.409 133.004 228.257 132.044C227.129 131.06 225.605 130.568 223.685 130.568C222.269 130.568 220.913 130.892 219.617 131.54C218.321 132.164 217.205 133.136 216.269 134.456C215.333 135.752 214.697 137.336 214.361 139.208C214.217 139.952 214.145 140.672 214.145 141.368C214.145 143.48 214.745 145.1 215.945 146.228C217.169 147.332 218.729 147.884 220.625 147.884C222.545 147.884 224.237 147.404 225.701 146.444C227.189 145.484 228.245 144.164 228.869 142.484H230.597C229.829 144.548 228.545 146.204 226.745 147.452C224.945 148.676 222.821 149.288 220.373 149.288C217.973 149.288 216.053 148.604 214.613 147.236C213.197 145.844 212.489 143.948 212.489 141.548C212.489 140.804 212.561 140.024 212.705 139.208Z"
              fill="#e4d7d7"
            />
          </svg>
        </div>
        <Navbar
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
      </NavFromMain>
      <Player
        musicList={musicList}
        setMusicList={setMusicList}
        currentMusic={currentMusic}
        setCurrentMusic={setCurrentMusic}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        audioState={audioState}
        setAudioState={setAudioState}
      />
      <Library
        musicList={musicList}
        setMusicList={setMusicList}
        currentMusic={currentMusic}
        setCurrentMusic={setCurrentMusic}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      {/* The audio section */}
      <audio
        src={currentMusic.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdateManager}
        onLoadedMetadata={timeUpdateManager}
      ></audio>
      <div className="closeButton">
        <FontAwesomeIcon
          onClick={() => setLibraryStatus(!libraryStatus)}
          className="fsIcon"
          size="3x"
          icon={faMusic}
          style={{
            color: "blanchedalmond",
          }}
        />
      </div>
    </Main>
  );
};
const Main = styled.div`
  height: 98vh;
  width: 100%;
  position: relative;

  .closeButton {
    position: fixed;
    top: 20px;
    left: 20px;
    cursor: pointer;
    display: none;
    pointer-events: none;
  }

  @media screen and (max-width: 630px) {
    .closeButton {
      display: inline;
      pointer-events: all;
    }
    .NavFromMain {
      display: none;
    }
  }
`;
const NavFromMain = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 630px) {
    height: 150px;
  }
`;
export default MainPage;
