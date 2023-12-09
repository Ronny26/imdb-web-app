import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import "./index.css"

const WatchlistButton = () => {
  const [clicked, setClicked] = useState(false);
  return <CiBookmark className={clicked ? 'im-watchlist-filled' : 'im-watchlist-transparent'} onClick={() => setClicked(!clicked)}/>;
};

export default WatchlistButton;
