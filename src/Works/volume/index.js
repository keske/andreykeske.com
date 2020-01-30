import React from 'react';

export default () => (
  <div>
    <h1>Volume Experiments</h1>

    <h2>Fade out Effect</h2>

    <p>
      The idea is about the effect from real life: sound is louder
      when you are closer to the source and getting quiet when you are
      moving off.
      <br />
      There is an audioplayer at the top of page. When you are
      scrolling down sound volume gets quiter just like in real life.
    </p>

    <h4>
      <a href="http://www.andreykeske.com/upload/works/volume.andreykeske.com/index.html">
        Open page and scroll it
      </a>
    </h4>

    <br />

    <a href="http://www.andreykeske.com/upload/works/volume.andreykeske.com/index.html">
      <img src={require('./files/fade.jpg')} role="presentation" />
    </a>

    <hr />

    <h2>Resize volume</h2>

    <p>
      Larger speaker can produce sound more loudly. In my experiment I
      use the same principle — larger the window louder the sound it
      produces and vice versa.
    </p>

    <h4>
      <a href="http://www.andreykeske.com/upload/works/resize.andreykeske.com/index.html">
        Open and resize window
      </a>
    </h4>

    <br />

    <a href="http://www.andreykeske.com/upload/works/resize.andreykeske.com/index.html">
      <img src={require('./files/resize.jpg')} role="presentation" />
    </a>
  </div>
);
