import * as React from 'react';

// Components
import * as Hacks from '../Hacks';

const Projects: React.FC = (): JSX.Element => {
  const [limit, setLimit] = React.useState(51);

  const hacks = React.useMemo(
    () => [
      <Hacks.WarpedTypography />,
      // <Hacks.ClothUI />,
      // <Hacks.RecycleBins />,
      // <Hacks.WarpedMinecraft />,
      // <Hacks.WarpedMacOS />,
      // <Hacks.WarpedLego />,
      // <Hacks.LegoHTMLElement />,
      // <Hacks.Hydra />,
      // <Hacks.Volume />,
      // <Hacks.MandelbrotSet />,
      // <Hacks.EsherSwitchButton />,
      // <Hacks.SwitchInButton />,
      // <Hacks.TickyApplication />,
      // <Hacks.BTCBubble />,
      // <Hacks.LOT2046Tattoo />,
      // <Hacks.EmojiBack />,
      // <Hacks.IkeaGarbage />,
      // <Hacks.RollingStones />,
      // <Hacks.EmojiTattooFlashes />,
      // <Hacks.Battleship />,
      // <Hacks.Ball />,
      // <Hacks.BlackHole />,
      // <Hacks.TmuxChess />,
      // <Hacks.Matryoshka />,
      // <Hacks.ShellGame />,
      // <Hacks.Hodor />,
      // <Hacks.Catch />,
      // <Hacks.Spectrum />,
      // <Hacks.Globalization />,
      // <Hacks.EnergyOrParticle />,
      // <Hacks.WaterFilter />,
      // <Hacks.WaterOnMars />,
      // <Hacks.VintageGoogleStreetView />,
      // <Hacks.PinHead />,
      // <Hacks.FootballFansTrolling />,
      // <Hacks.MacOSGamesDice />,
      // <Hacks.MacOSGamesSlot />,
      // <Hacks.FridayDock />,
      // <Hacks.Hairpin />,
      // <Hacks.PianoTabs />,
      // <Hacks.Shadows />,
      // <Hacks.IPadIcons />,
      // <Hacks.Sneakers />,
      // <Hacks.Emoticons />,
      // <Hacks.Manhattan />,
      // <Hacks.Graffiti />,
    ],
    [],
  );

  const content = React.useMemo(
    () => hacks.slice(0, limit),
    [hacks, limit],
  );

  const handleScroll = React.useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight - 300
    ) {
      return;
    }

    setLimit(limit + 5);
  }, [limit]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <>{content}</>;
};

export default Projects;
