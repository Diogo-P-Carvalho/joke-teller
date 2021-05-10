const button = document.querySelector('#button');
const audioElement = document.querySelector('#audio');

// function test() {
//     VoiceRSS.speech({
//         key: 'a1e24099a1bc42df9274a4900cbf07a1',
//         src: 'Hello, world!',
//         hl: 'en-us',
//         v: 'Linda',
//         r: 0, 
//         c: 'mp3',
//         f: '44khz_16bit_stereo',
//         ssml: false
//     });
// } 

// test();

// Get jokes from Joke API
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';        
    try {
        const response = await fetch(apiUrl);
        const jokes = await response.json();
        if (jokes.setup) {
            joke = `${jokes.setup} ... ${jokes.delivery}`;
        } else {
            joke = jokes.joke;
        }
        console.log(joke);
    } catch (error) {
        // catch error here
        console.log(error);
    }
}

getJokes();