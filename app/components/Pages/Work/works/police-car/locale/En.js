module.exports = {

  Title: 'Police Siren Alarm animation in OS X Finder',
  Intro: 'As you know the OS X gives the opportunity to set image folder as background and set colour labels for folders and files. Also that can be done from Terminal. What if we make animation from this labels?',

  How: "How it's works",
  HowText: "So, how to set it up: open index.html in your browser, it has Javascript sending request to cmd.php every 2.5 seconds, which actually does the command. The command is pretty simple and looks like ./label.sh [color] [file]. File label.sh sets the Finder labels.",

  Repeat: 'Repeat this effect on your computer',
  li_1: 'Move the police folder in «DocumentRoot» folder;',
  li_2: 'Open the police folder where there is two folders with «,,,,,,,,,,» and «,,,,,,,,,,,». Set image as background, press ⌘J. Select police.jpg;',
  li_3: 'Start http server;',
  li_4: 'Open in Finder the police folder and change view option to «Show items as icons» (Press ⌘1);',
  li_5: 'In the browser open your link to the police folder (for example: http://localhost/police);',
  li_6: 'And last, press Alt+Tab to show finder window with our police folder.',

  System: 'System requirements: OS X, Apache, PHP',

};
