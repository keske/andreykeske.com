import React, { PropTypes } from 'react';

// Language
import Language from './locale/';

const Work = ({ language, work }) => {
  // Set language
  Language.setLocale(language);

  // Path to photos
  const path = `./src/components/Content/Works/${work}/files`;

  return (
    <div>
      <h1>
        {Language.translate('Title')}
      </h1>
      <p>
        {Language.translate('Text')}
      </p>

      <hr />

      <h1>
        {Language.translate('SlotMachines')}
      </h1>
      <p>
        {Language.translate('SlotMachinesText')}
      </p>

      <iframe
        src="//player.vimeo.com/video/40103163"
        width="100%"
        height="430"
        frameBorder="0"
        allowFullScreen
      />

      <h2>
        {Language.translate('SlotMachinesHow')}
      </h2>

      <ul>
        <li>
          {Language.translate('SlotMachinesHowOpen')}
          <br />
          {Language.translate('SlotMachinesHowCd')}
        </li>
        <li>
          {Language.translate('SlotMachinesHowOpenFolders')}
          <br />
          {Language.translate('SlotMachinesHowOpenFolders1')}
          <br />
          {Language.translate('SlotMachinesHowOpenFolders2')}
          <br />
          {Language.translate('SlotMachinesHowOpenFolders3')}
        </li>
        <li>
          {Language.translate('SlotMachinesHowRun')}
          <br />
          {Language.translate('SlotMachinesHowStart')}
        </li>
      </ul>

      <p>
        {Language.translate('SlotMachinesNow')}
      </p>

      <h4>
        <a href={`${path}/slotmachine.zip`}>
          {Language.translate('SlotMachinesDownload')}
        </a>
      </h4>

      <hr />

      <h1>
        {Language.translate('DiceGame')}
      </h1>

      <p>
        {Language.translate('DiceGameText')}
      </p>

      <iframe
        src="//player.vimeo.com/video/40102765"
        width="100%"
        height="430"
        frameBorder="0"
        allowFullScreen
      />

      <h2>
        {Language.translate('DiceGameNow')}
      </h2>

      <ul>
        <li>
          {Language.translate('DiceGameNowOpenFolder')}
        </li>
        <li>
          {Language.translate('DiceGameNowOpenTerminal')}
          <br />
          {Language.translate('DiceGameNowTerminalCommand')}
        </li>
        <li>
          {Language.translate('DiceGameNowRun')}
        </li>
        <li>
          {Language.translate('DiceGameNowEach')}
        </li>
      </ul>

      <h4>
        <a href={`${path}/dicegame.zip`}>
          {Language.translate('DiceGameDownload')}
        </a>
      </h4>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
  work: PropTypes.string,
};

export default Work;
