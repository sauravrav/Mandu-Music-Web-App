const LibraryElem = ({
  song,
  musicList,
  setMusicList,
  currentMusic,
  setCurrentMusic,
}) => {
  const musicSelector = () => {
    const selectedMusic = musicList.filter((music) => music.id === song.id);
    setCurrentMusic(selectedMusic[0]);
    const alteredMusic = musicList.map((altMusic) => {
      if (altMusic.id === song.id) {
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
  };
  return (
    <div
      className={`libraryElem ${song.active ? "highlighted" : ""}`}
      onClick={musicSelector}
    >
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
