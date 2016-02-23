import React, { Component } from 'react';

// Component styles
import { styles } from './styles/styles.scss';

// Components
import NavFooter from '../../Helpers/Works/NavFooter';

// Works
import {
  StraightFlush,
  Globalization,
  GoogleStreetView20thCentury,
  TmuxChess,
  DaftPunk,
  BlackHole,
  Catch,
  Theshellgame,
  Thehairpin,
  Footballfanstrolling,
  Tellmewhatyouwant,
  Browsertabsasthepianokeys,
  CensorshipintheiOS7,
  HedgehogintheFog,
  Graphicworks,
  InvisibleiconsontheiPad,
  MacOSUIGames,
  IfoundthewaterontheMars,
  PolicesirenalarmanimationinOSXFinder,
  Spectrumatthebrowserbar,
  Fridaydock,
  Theshadowsofthewindow,
  Like,
  Thekeyhole,
  Volumeexperiments,
  Desktopbackgroundinthebrowser,
} from './works/index.js';

const data = {
  'straight-flush': StraightFlush,
  'globalization': Globalization,
  'google-street-view-20th-century': GoogleStreetView20thCentury,
  'tmux-chess': TmuxChess,
  'daft-punk': DaftPunk,
  'black-hole': BlackHole,
  'catch': Catch,
  'the-shell-game': Theshellgame,
  'the-hairpin': Thehairpin,
  'football-fans-trolling': Footballfanstrolling,
  'money': Tellmewhatyouwant,
  'tabs-piano': Browsertabsasthepianokeys,
  'censorship-in-ios7': CensorshipintheiOS7,
  'hedgehog-in-the-fog': HedgehogintheFog,
  'graphics': Graphicworks,
  'ipad-invisible-icons': InvisibleiconsontheiPad,
  'mac-os-ui-games': MacOSUIGames,
  'water-on-mars': IfoundthewaterontheMars,
  'police-car': PolicesirenalarmanimationinOSXFinder,
  'spectrum': Spectrumatthebrowserbar,
  'friday-dock': Fridaydock,
  'shadows': Theshadowsofthewindow,
  'like': Like,
  'keyhole': Thekeyhole,
  'volume': Volumeexperiments,
  'chrome': Desktopbackgroundinthebrowser,
};

export default class Works extends Component {

  static propTypes = {
    params: React.PropTypes.object,
    work: React.PropTypes.string,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { work } = this.props.params;

    return (
      <div className={styles}>
        {React.createElement(data[work], this.props)}
        <NavFooter work={work} />
      </div>
    );
  }
}
