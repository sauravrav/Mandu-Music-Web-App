import styled from "styled-components";
import LibraryElem from "./libraryElem";
const Library = ({ musicList, libraryStatus, setLibraryStatus }) => {
  return (
    <div
      className={`library ${libraryStatus ? "library-transformed" : "library"}`}
    >
      {musicList.map((song) => (
        <LibraryElem song={song} />
      ))}
    </div>
  );
};
export default Library;
