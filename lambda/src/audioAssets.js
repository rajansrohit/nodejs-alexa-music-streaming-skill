'use strict';

let en = {
    card : {
        title: 'D100',
        subtitle: 'Tune into The Webs Hit Music Station',
        cardContent: "https://d100radio.com",
        image: {
            largeImageUrl: 'https://www.dropbox.com/s/1vjucli7hurecd0/Alexa_Card_Small.png?dl=0',
            smallImageUrl: 'https://www.dropbox.com/s/hwpt8gj5vqtui1z/Alexa_Card_Large.png?dl=0'
        }
    },
    url: 'https://los.cdnstream.com/1119_128',
    startJingle : ''    
};

let de = { // TODO add german translation
    card : {
        title: 'My Radio',
        subtitle: 'Less bla bla, more la la',
        cardContent: "Visit our web site https://www.myradio.com",
        image: {
            largeImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-1200.png',
            smallImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-720.png'
        }
    },
    url: 'https://audio1.maxi80.com',
    startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'        
} 

let globalAudioData = {
    'en-US': en,
    'en-GB': en,
    'en-CA': en,
    'en-IN': en,
    'en-AU': en,
    'de-DE': de
};

function audioData(request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = request === undefined ? DEFAULT_LOCALE : request.locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

module.exports = audioData;
