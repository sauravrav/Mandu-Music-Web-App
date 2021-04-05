import styled from "styled-components";
import LibraryElem from "./libraryElem";
const Library = ({
  musicList,
  libraryStatus,
  setLibraryStatus,
  setMusicList,
  currentMusic,
  setCurrentMusic,
}) => {
  return (
    <div
      className={`library ${libraryStatus ? "library-transformed" : "library"}`}
    >
      {musicList.map((song) => (
        <LibraryElem
          musicList={musicList}
          song={song}
          setMusicList={setMusicList}
          currentMusic={currentMusic}
          setCurrentMusic={setCurrentMusic}
        />
      ))}
    </div>
  );
};
export default Library;
