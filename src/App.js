import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Components
import * as Works from './Works/';

import './App.css';

export default () => (
  <section className="root">
    <Grid>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={6}
          mdOffset={3}
          lg={6}
          lgOffset={3}
        >
          <div className="work">
            <Works.EmojiBack />
            <Works.IkeaPlace />
            <Works.EmojiTattooFlashes />
            <Works.Tinder />
            <Works.RollingStones />
            <Works.Emojihub />
            <Works.Matryoshka />
            <Works.Ball />
            <Works.Pinhead />
            <Works.Hodor />
            <Works.Skyscraper />
            <Works.Water />
            <Works.Globalization />
            <Works.GoogleStreetView20thCentury />
            <Works.TmuxChess />
            <Works.BlackHole />
            <Works.Infinity />
            <Works.Catch />
            <Works.TheShellGame />
            <Works.FootballFansTrolling />
            <Works.Money />
            <Works.TabsPiano />
            <Works.CensorshipInIos7 />
            <Works.IpadInvisibleIcons />
            <Works.MacOsUiGames />
            <Works.WaterOnMars />
            <Works.PoliceCar />
            <Works.Spectrum />
            <Works.TheHairpin />
            <Works.FridayDock />
            <Works.Shadows />
            <Works.Like />
            <Works.Keyhole />
            <Works.Volume />
            <Works.CloseFavicon />
            <Works.Chrome />
            <Works.About />
          </div>
        </Col>
      </Row>
    </Grid>
  </section>
);
