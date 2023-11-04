import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/Context";

function Header() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  const handleLogOut = () => {
    firebase.auth().signOut();
    history.push("/login");
  };

  const handleLogin = () => {
    firebase.auth().signOut();
    history.push("/login");
  };

  const handleSell = () => {
    history.push("/login");
  };
  const handleUserSell = () => {
    history.push("/create");
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo />
        </div>
        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" />
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow />
        </div>
        <div className="loginPage">
          <span>
            {user ? user.displayName : <span onClick={handleLogin}>login</span>}
          </span>
          <hr />
        </div>
        {user && <span onClick={handleLogOut}>Logout</span>}

        <div className="sellMenu">
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            {user ? (
              <span onClick={handleUserSell}>SELL</span>
            ) : (
              <span onClick={handleSell}> SELLS</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );  
}

export default Header;
