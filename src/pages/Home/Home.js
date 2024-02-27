import React from "react";
import { Image } from "react-bootstrap";

import "./Home.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  return (
    <div className="home-container">
      <header className="header">
        <h1 style={{ marginTop: 100 }}>Welcome to Tunisian Recipes</h1>
        <p>
          Explore the vibrant flavors and rich traditions of Tunisian cuisine.
        </p>
        {!isAuth && (
          <div className="intro-button">
            <button onClick={() => navigate("/register")} class="Btn"> </button>
          </div>
        )}
      </header>


      <section className="intro">
        <div className="intro-text">
          <h2>Marhba bik f KoJintY</h2>
          <p>
            Welcome to our Tunisian Recipes Blog App where the vibrant flavors
            and rich traditions of Tunisian cuisine take center stage! As you
            step into our virtual kitchen, you're welcomed into a world where
            foodies, bloggers, and culinary enthusiasts gather to share their
            love for Tunisian gastronomy.
          </p>
        </div>
        <Image
          className="intro-image"
          src="https://i.pinimg.com/originals/51/5a/f2/515af2de6e3b8c1064728eb238075b6b.jpg"
          rounded
        />
      </section>

      {/* <section className="features">
        <div className="feature">
          <Card border="danger" className="card">
            <Card.Body>
              <Card.Title>Recipe Ideas</Card.Title>
              <Card.Text>Discover a variety of exciting recipes to try at home.</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="feature">
          <Card border="danger" className="card">
            <Card.Body>
              <Card.Title>Kitchen Tips and Tricks</Card.Title>
              <Card.Text>Get insider tips and tricks to enhance your cooking skills.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section> */}

      <section className="quote-section">
        <blockquote>
          <p>
            "Tunisian cuisine is a celebration of flavors, where each dish tells
            a story of tradition and culture."
          </p>
        </blockquote>
      </section>



      <footer className="footer">
        <p>© 2024 Tunisian Recipes. All rights reserved.</p>
      </footer>

  




    </div>
  );
};

export default Home;
