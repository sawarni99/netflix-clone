
// Paths...
const videos_path = "./assets/videos";
const profiles_path = "./assets/images";

// Genres...
const action = "Action";
const horror = "Horror";
const sciFi = "Sci-Fi";
const superHero = "Super Hero";
const anime = "Anime";
const indian = "Indian";
const science = "Science";
const drama = "Drama";
const comedy = "Comedy";
const suspense = "Suspense";
const exciting = "Exciting"
const cartoon = "Cartoon";
const thriller = "Thriller";
const genres = [ 
    action, horror, sciFi, superHero, anime, indian, science, drama, comedy, suspense, exciting, cartoon, thriller 
];

// Rates...
const r_rated = "R";
const a_rated = "A";
const thirteen_plus_rated = "U/A 13+";
const eighteen_plus_rated = "U/A 18+";
const sixteen_plus_rated = "U/A 16+";
const seven_plus_rated = "U/A 7+";
const rates = [ 
    a_rated, r_rated, thirteen_plus_rated, eighteen_plus_rated, seven_plus_rated, sixteen_plus_rated
];


// Videos...
const videos = [
    {
        name: "avengers-2",
        displayName: "Avengers : The Age of Ultron",
        trailer: `${videos_path}/avengers_2/avengers-2-trailer.mov`,
        logo: `${videos_path}/avengers_2/avengers-2-logo.png`,
        poster: `${videos_path}/avengers_2/avengers-2-poster.jpg`,
        genres: [ action, superHero, exciting, sciFi],
        rated: thirteen_plus_rated,
        decription: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    },
    {
        name: "demon-slayer",
        displayName: "Demon Slayer",
        trailer: `${videos_path}/demon_slayer/demon-slayer-trailer.mp4`,
        logo: `${videos_path}/demon_slayer/demon-slayer-logo.png`,
        poster: `${videos_path}/demon_slayer/demon-slayer-poster.jpg`,
        genres: [ anime, action, exciting ],
        rated: sixteen_plus_rated,
        decription: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    },
    {
        name: "fast-and-furious-7",
        displayName: "Fast And Furious 7",
        tailer: `${videos_path}/fast_and_furious_7/fast-and-furious-7-trailer.mov`,
        logo: `${videos_path}/fast_and_furious_7/fast-and-furious-7-logo.png`,
        poster: `${videos_path}/fast_and_furious_7/fast-and-furious-7-poster.jpg`,
        genres: [ action ],
        rated: sixteen_plus_rated,
        decription: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
    },
    {
        name: "mission-impossible-rouge-nation",
        displayName: "Mission Impossible : Rouge Nation",
        tailer: `${videos_path}/mission_impossible_rouge_nation/mission-impossible-rouge-nation-trailer.mp4`,
        logo: `${videos_path}/mission_impossible_rouge_nation/mission-impossible-rouge-nation-logo.png`,
        poster: `${videos_path}/mission_impossible_rouge_nation/mission-impossible-rouge-nation-poster.jpg`,
        genres: [ action, suspense ],
        rated: thirteen_plus_rated,
        decription: "Ethan and his team take on their most impossible mission yet when they have to eradicate an international rogue organization as highly skilled as they are and committed to destroying the IMF.",
    },
    {
        name: "naruto-shippuden",
        displayName: "Naruto Shippuden",
        tailer: `${videos_path}/naruto_shippuden/naruto-shippuden-trailer.mp4`,
        logo: `${videos_path}/naruto_shippuden/naruto-shippuden-logo.png`,
        poster: `${videos_path}/naruto_shippuden/naruto-shippuden-poster.jpe`,
        genres: [ anime, action, exciting ],
        rated: seven_plus_rated,
        decription: "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
    },
    {
        name: "omg-2",
        displayName: "OMG 2",
        tailer: `${videos_path}/omg_2/omg-2-trailer.mp4`,
        logo: `${videos_path}/omg_2/omg-2-logo.png`,
        poster: `${videos_path}/omg_2/omg-2-poster.avif`,
        genres: [ indian, drama, comedy ],
        rated: seven_plus_rated,
        decription: "An unhappy civilian asks the court to mandate comprehensive education in schools in a dramatic yet amusing courtroom play.",
    },
    {
        name: "once-upon-a-time-in-hollywood",
        displayName: "Once Upon a Time in Hollywood",
        tailer: `${videos_path}/once_upon_a_time_in_hollywood/once-upon-a-time-in-hollywood-trailer.mp4`,
        logo: `${videos_path}/once_upon_a_time_in_hollywood/once-upon-a-time-in-hollywood-logo.png`,
        poster: `${videos_path}/once_upon_a_time_in_hollywood/once-upon-a-time-in-hollywood-poster.jpg`,
        genres: [ drama, comedy ],
        rated: a_rated,
        decription: "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    },
    {
        name: "oppenheimer",
        displayName: "Oppenheimer",
        tailer: `${videos_path}/oppenheimer/oppenheimer-trailer.mp4`,
        logo: `${videos_path}/oppenheimer/oppenheimer-logo.png`,
        poster: `${videos_path}/oppenheimer/oppenheimer-poster.jpg`,
        genres: [ sciFi, drama, science, exciting ],
        rated: thirteen_plus_rated,
        decription: "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    },
    {
        name: "shutter-island",
        displayName: "Shutter Island",
        tailer: `${videos_path}/shutter_island/shutter-island-trailer.mov`,
        logo: `${videos_path}/shutter_island/shutter-island-logo.png`,
        poster: `${videos_path}/shutter_island/shutter-island-poster.jpg`,
        genres: [ suspense, exciting, thriller ],
        rated: eighteen_plus_rated,
        decription: "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    },
    {
        name: "spider-man-across-the-spider-verse",
        displayName: "Spider Man : Across the Spider Verse",
        tailer: `${videos_path}/spider_man_scross_the_spider_verse/spider-man-across-the-spider-verse-trailer.mp4`,
        logo: `${videos_path}/spider_man_scross_the_spider_verse/spider-man-across-the-spider-verse-logo.png`,
        poster: `${videos_path}/spider_man_scross_the_spider_verse/spider-man-across-the-spider-verse-poster.jpg`,
        genres: [ superHero, action ],
        rated: thirteen_plus_rated,
        decription: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    },
    {
        name: "the-conjuring-2",
        displayName: "The Conjuring 2",
        tailer: `${videos_path}/the_conjuring_2/the-conjuring-2-trailer.mp4`,
        logo: `${videos_path}/the_conjuring_2/the-conjuring-2-logo.png`,
        poster: `${videos_path}/the_conjuring_2/the-conjuring-2-poster.jpg`,
        genres: [ horror, thriller, suspense ],
        rated: r_rated,
        decription: "Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.",
    },
    {
        name: "transformers",
        displayName: "Transformers : The Last Knight",
        tailer: `${videos_path}/transformers/transformers-trailer.mp4`,
        logo: `${videos_path}/transformers/transformers-logo.png`,
        poster: `${videos_path}/transformers/transformers-poster.jpg`,
        genres: [ sciFi, action ],
        rated: thirteen_plus_rated,
        decription: "Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.",
    }
]

// Profiles...
const profiles = [
    {
        name: "Mayur",
        dp: `${profiles_path}/user-dp-1.png`,
    },
    {
        name: "Anugya",
        dp: `${profiles_path}/user-dp-2.png`,
    }
]

export {videos, genres, rates, profiles};