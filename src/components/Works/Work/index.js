import React, { Component } from 'react';

// Component styles
import styles from './Work.styles.js';

// Components
import NavFooter from './_navFooter.js';

// Works
import {
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
  }

  render() {
    const { work } = this.props.params;

    return (
      <div className={ styles }>
        { React.createElement(data[work], this.props) }
        <NavFooter work={ work } />
      </div>
    );
  }
}
