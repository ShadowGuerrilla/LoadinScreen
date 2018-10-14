/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Guerrilla Gaming CWRP";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"background/images/04GBQoO",
	"backgrounds/images/53e50bb3741df52fa0ac12d92ba5888a-1",
	"backgrounds/images/212thAttackBattalion",
	"backgrounds/images/Aayla_Secura_Order_66",
	"backgrounds/images/BravoSquad-CC",
	"backgrounds/images/commando_droids_4c52e273",
	"backgrounds/images/High_Council_Chamber",
	"backgrounds/images/maxresdefault",
	"backgrounds/images/Rex501stUmbara",
	"backgrounds/images/Thorn",
	"backgrounds/images/Wolfpack_Aleen",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "d8_mS34zM1Y", name: "The Grand Army of the Republic March"},
	{youtube: "OBCrkHmMr9c", name: "The Clones - Star Wars: The Clone Wars Soundtrack"},
	{youtube: "ZTg6hg1miFg", name: "Duel Of The Fates"},
	{youtube: "BjDaPOWdx6s", name: "Throne Room Theme "},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Enjoy the server",
"Thanks for joining us!",
"Ready to join the Galactic Republic?"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
