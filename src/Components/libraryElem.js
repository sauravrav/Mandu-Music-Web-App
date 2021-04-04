const LibraryElem = ({ song }) => {
  return (
    <div className="libraryElem">
      <div className="image">
        <img src={song.cover} alt="" />
      </div>
      <div className="info">
        <h4>{song.name}</h4>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibraryElem;
