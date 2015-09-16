import React, { Component } from 'react';

// Component styles
import styles from './Work.styles.js';

// Works
import {
  Catch,
  CensorshipintheiOS7,
  Footballfanstrolling,
  Graphicworks,
  HedgehogintheFog,
  InvisibleiconsontheiPad,
  MacOSUIGames,
  IfoundthewaterontheMars,
  Tellmewhatyouwant,
  PolicesirenalarmanimationinOSXFinder,
  Spectrumatthebrowserbar,
  Browsertabsasthepianokeys,
  Thehairpin,
  Fridaydock,
  Theshadowsofthewindow,
  Like,
  Thekeyhole,
  Volumeexperiments,
  Desktopbackgroundinthebrowser,
  Theshellgame
} from './works/index.js';

const data = {
  'catch': Catch,
  'the-shell-game': Theshellgame,
  'the-hairpin': Thehairpin,
  'football-fans-trolling': Footballfanstrolling,
  'money': Tellmewhatyouwant,
  'tabs-piano': Browsertabsasthepianokeys,
  'censorship-in-ios7': CensorshipintheiOS7,
  // '': Graphicworks,
  // '': HedgehogintheFog,
  // '': InvisibleiconsontheiPad,
  // '': MacOSUIGames,
  // '': IfoundthewaterontheMars,
  // '': Tellmewhatyouwant,
  // '': PolicesirenalarmanimationinOSXFinder,
  // '': Spectrumatthebrowserbar,
  // '': Browsertabsasthepianokeys,
  // '': Fridaydock,
  // '': Theshadowsofthewindow,
  // '': Like,
  // '': Thekeyhole,
  // '': Volumeexperiments,
  // 'chrome': Desktopbackgroundinthebrowser,
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
      </div>
    );
  }
}
