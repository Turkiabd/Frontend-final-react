import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClick = (b) => {
    navigate("/Explore");
  };

  return (
    <div className="Home">
      <h1 className="display-3">Hey there!!</h1>
      <p className="fw-light">
        Express who you are now and show us your art in fashion
      </p>

      <button onClick={onClick} type="button" className="btn btn-light">
        Let's gooo
      </button>
    </div>
  );
};

export default Home;
