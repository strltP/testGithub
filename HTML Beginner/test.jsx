import React from 'react';

function Homepage() {
  return (
    <div>
      <header>
        <h1>Welcome to GrabFood</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Order Food Online</h2>
          <p>Get your favorite food delivered to your doorstep with GrabFood.</p>
          <button>Order Now</button>
        </section>
        <section className="featured-restaurants">
          <h2>Featured Restaurants</h2>
          {/* Display featured restaurants here */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 GrabFood. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
