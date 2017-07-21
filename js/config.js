/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    Tutoriel par MrPikou / Abonnez-Vous !
*/

/* Chemin d'accès à votre logo
NE PAS CHANGER */
var l_serverImage = "images/logo.png";

/* Nom de Votre serveur
Changez le nom de votre serveur en dessous :*/
var l_serverName = "[ArabCity]";

/* Utiliser une vidéo en fond
NE PAS CHANGER */
var l_bgVideo = false;

/* Images de Fond
Placez 5 Images ! */
var l_bgImages = [
	"backgrounds/images/fond1.jpg",
	"backgrounds/images/fond2.jpg",
	"backgrounds/images/fond3.jpg",
	"backgrounds/images/fond4.jpg",
	"backgrounds/images/fond5.jpg"
];

/* Images dans le Désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_bgImagesRandom = true;

/* Delai ( millisecondes ) entre les images
NE PAS CHANGER */
var l_bgImageDuration = 3000;

/* Durée ( millisecondes ) de la transition entre les images*/
var l_bgImageFadeVelocity = 2000;

/* Mettre des images de fond ? ( "True" pour Oui / "False" pour Non )*/
var l_bgOverlay = true;

/* Pourcentage de "points noirs" sur les images de fond :*/
var l_bgDarkening = 50;

/* Musique
Activer la musique en fond ? ( "True" pour Oui / "False" pour Non )*/
var l_music = true;

/*Montrer le nom de la musique ? ( "True" pour Oui / "False" pour Non )*/
var l_musicDisplay = true;

/*Playlist musicale
Placez les musiques que vous souhaitez après "ogg:" et leur nom après "name:"*/
var l_musicPlaylist = [
	{ogg: "songs/song1.ogg", name: "Song1"},
	{ogg: "songs/song2.ogg", name: "Song2"},
	{ogg: "songs/song3.ogg", name: "song3"}
];

/*Musiques dans le désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_musicRandom = true;

/*Volume de la musiqe
Mettez un nombre entre 0 et 100*/
var l_musicVolume = 25;

/*Activer les messages personnalisés ? ( "True" pour Oui / "False" pour Non )*/
var l_messagesEnabled = true;

/*Mettez vos messages pérsonnalisés en dessous
Remplacez le "Message #..." par votre message*/
var l_messages = [
"Welcome to [Arabs] ||| PC Community CafeNet |||",
"We Wish You Have Fun",
"Use @ To Call An Admin",
"Our Staff Team Is friendly",
"Our Staff are Mostly Online",
"Join our Steam Group [Arabs] ||| PC Community CafeNet |||",
"You Can Download Our Workshop",
"Please Wait Untill The Download Finishes"
];

/*Messages en désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_messagesRandom = false;

/*Delai entre les changements de message ( millisecondes)
Il est conseillé de mettre la même valeur qu'à "Delai ( millisecondes ) entre les images"*/
var l_messagesDelay = 3000;

/*Durée de l'animation de changement d'image ( millisecondes ) */
var l_messagesFade = 1000;