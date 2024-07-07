const quotes = [
    {
        title: "The Magic of Movies",
        text1: "Movies can transport us to another world, showing us the magic of storytelling.",
        text2: "In a dark theater, we find a place where dreams come true."
    },
    {
        title: "The Power of Music",
        text1: "Music can change the world because it can change people.",
        text2: "Let the melodies take you on a journey beyond words."
    },
    {
        title: "Life is a Journey",
        text1: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
        text2: "Cherish every moment as if it were your last."
    },
    {
        title: "Overcoming Challenges",
        text1: "The greater the obstacle, the more glory in overcoming it.",
        text2: "Rise to the challenge and let it shape you into a stronger person."
    },
    {
        title: "Thrills of Sports",
        text1: "Sports teach us the power of teamwork, perseverance, and dedication.",
        text2: "Every game is a chance to push beyond your limits."
    },
    {
        title: "Embrace the Horror",
        text1: "Horror stories remind us of our deepest fears and the courage it takes to face them.",
        text2: "Embrace the darkness to appreciate the light."
    },
    {
        title: "The Beauty of Nature",
        text1: "Nature is not a place to visit. It is home.",
        text2: "Find peace and inspiration in the world around you."
    },
    {
        title: "Pursuit of Knowledge",
        text1: "Knowledge is power. Information is liberating.",
        text2: "Education is the premise of progress in every society."
    },
    {
        title: "Love and Relationships",
        text1: "Love is composed of a single soul inhabiting two bodies.",
        text2: "True love stories never have endings."
    },
    {
        title: "The Essence of Friendship",
        text1: "A friend is someone who knows all about you and still loves you.",
        text2: "Friendship is the only cement that will ever hold the world together."
    },
    {
        title: "Adventures Await",
        text1: "Adventure is worthwhile in itself.",
        text2: "Life is either a daring adventure or nothing at all."
    },
    {
        title: "The Spirit of Innovation",
        text1: "Innovation distinguishes between a leader and a follower.",
        text2: "Embrace creativity and make the impossible possible."
    },
    {
        title: "Wisdom in Words",
        text1: "The only true wisdom is in knowing you know nothing.",
        text2: "Wisdom begins in wonder."
    },
    {
        title: "Strength in Adversity",
        text1: "Out of difficulties grow miracles.",
        text2: "The struggle you're in today is developing the strength you need for tomorrow."
    },
    {
        title: "The Joy of Reading",
        text1: "A room without books is like a body without a soul.",
        text2: "Reading gives us someplace to go when we have to stay where we are."
    },
    {
        title: "The World of Art",
        text1: "Art is the lie that enables us to realize the truth.",
        text2: "Every artist was first an amateur."
    },
    {
        title: "The Dance of Life",
        text1: "Dance is the hidden language of the soul.",
        text2: "Life is better when you dance."
    },
    {
        title: "Facing Fear",
        text1: "Fear is only as deep as the mind allows.",
        text2: "Do one thing every day that scares you."
    },
    {
        title: "Perseverance",
        text1: "Perseverance is not a long race; it's many short races one after the other.",
        text2: "Keep going, and never give up."
    },
    {
        title: "The Power of Imagination",
        text1: "Imagination is more important than knowledge.",
        text2: "Logic will get you from A to B. Imagination will take you everywhere."
    },
    {
        title: "Exploring Space",
        text1: "Space: the final frontier.",
        text2: "To infinity and beyond!"
    },
    {
        title: "Mysteries of the Ocean",
        text1: "The sea, once it casts its spell, holds one in its net of wonder forever.",
        text2: "Explore the depths and find the unknown."
    },
    {
        title: "Journey to the Unknown",
        text1: "The only journey is the one within.",
        text2: "Step into the unknown with courage and curiosity."
    },
    {
        title: "The Art of Cooking",
        text1: "Cooking is like love. It should be entered into with abandon or not at all.",
        text2: "The secret ingredient is always love."
    },
    {
        title: "The Importance of Family",
        text1: "Family is not an important thing, it's everything.",
        text2: "Cherish your family for they are your treasure."
    },
    {
        title: "Learning from Failure",
        text1: "Failure is simply the opportunity to begin again, this time more intelligently.",
        text2: "Don't be afraid to fail. Be afraid not to try."
    },
    {
        title: "The Serenity of Meditation",
        text1: "Meditation is the key to tranquility.",
        text2: "Find peace within yourself."
    },
    {
        title: "Strength of Character",
        text1: "Character is how you treat those who can do nothing for you.",
        text2: "True character is revealed in the choices a person makes under pressure."
    },
    {
        title: "Passion for Travel",
        text1: "Travel is the only thing you buy that makes you richer.",
        text2: "The world is a book and those who do not travel read only one page."
    },
    {
        title: "The Magic of Books",
        text1: "A book is a dream that you hold in your hand.",
        text2: "Books are a uniquely portable magic."
    }
];


function getQuoteFromURL() {
    const params = new URLSearchParams(window.location.search);
    let quoteIndex = parseInt(params.get('q')) - 1;
    if (isNaN(quoteIndex) || quoteIndex < 0 || quoteIndex >= quotes.length) {
        quoteIndex = 0;
    }
    return quoteIndex;
}

function updateURL(quoteIndex) {
    const newURL = `${window.location.pathname}?q=${quoteIndex + 1}`;
    window.history.pushState({}, '', newURL);
}

function displayQuote(quoteIndex) {
    const quote = quotes[quoteIndex];
    document.getElementById('quote-title').textContent = quote.title;
    document.getElementById('quote-text-1').textContent = quote.text1;
    document.getElementById('quote-text-2').textContent = quote.text2;
    document.getElementById('quote-day').textContent = `Day ${quoteIndex + 1}/${quotes.length}`;
    updateURL(quoteIndex);

    // Set random background image
    document.body.style.backgroundImage = `url('${getRandomImageURL()}')`;
}

function changeQuote(increment) {
    let currentQuoteIndex = getQuoteFromURL();
    currentQuoteIndex = (currentQuoteIndex + increment + quotes.length) % quotes.length;
    displayQuote(currentQuoteIndex);
}

function getRandomQuoteIndex() {
    return Math.floor(Math.random() * quotes.length);
}

function handleKeyDown(event) {
    switch(event.key) {
        case 'ArrowLeft':
            changeQuote(-1);
            break;
        case 'ArrowRight':
            changeQuote(1);
            break;
        case 'ArrowUp':
            changeQuote(5);
            break;
        case 'ArrowDown':
            changeQuote(-5);
            break;
        case 'r':
        case 'R':
            displayQuote(getRandomQuoteIndex());
            break;
    }
}

function handleSwipe(event) {
    const touch = event.changedTouches[0];
    const swipeDirectionX = touch.clientX - touchStartX;
    const swipeDirectionY = touch.clientY - touchStartY;
    if (Math.abs(swipeDirectionX) > Math.abs(swipeDirectionY)) {
        if (Math.abs(swipeDirectionX) > 50) {
            if (swipeDirectionX < 0) {
                changeQuote(1);
            } else {
                changeQuote(-1);
            }
        }
    } else {
        if (Math.abs(swipeDirectionY) > 50) {
            if (swipeDirectionY < 0) {
                changeQuote(5);
            } else {
                changeQuote(-5);
            }
        }
    }
}

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('DOMContentLoaded', () => {
    const quoteIndex = getQuoteFromURL();
    displayQuote(quoteIndex);

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].clientX;
        touchStartY = event.changedTouches[0].clientY;
    });
    document.addEventListener('touchend', handleSwipe);
});




function getRandomImageURL() {
    const randomNum = Math.floor(Math.random() * 1000); // Generate a random number
    return `https://picsum.photos/1920/1080?random=${randomNum}`;
}
