import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { 
    SET_CURRENT_DOG,
    SET_CURRENT_LITTER,
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_TO_COMPARE,
    REMOVE_ITEM_FROM_COMPARE
} from '../actions/action-types/cart-actions'
import { SIGCHLD } from 'constants';

const initState = {
    products: [
        {
            id: 1,
            title: "Belted chino trousers polo",
            price: 190,
            image: require('../../images/img1.jpg'),
            imageHover: require('../../images/img-hover1.jpg'),
            quickView: require('../../images/quick-view-img.jpg')
        },
    ],
    addedItems:[],
    addedItemsToCompare:[],
    total: 0,
    shipping: 0,
    currentDog: 1,
    currentLitter: 1,
    dogs: [
        {
            id: 1,
            call: "Sirius",
            toptwenty: "",
            ours: true,
            sex: "male",
            stud: true,
            name: "GCH Old Bay's Let's Get Sirius CGC, TDI",
            sire: "CH Bear N Mind's Maritime Traveler",
            dam: "CH Waterford FrontPage",
            dob: "10/26/2010",
            neutered: false,
            rip: "",
            owner: "Cindy and John Flowers",
            aka: "Seriously Cute, Serial",
            lives: "Cindy and John Flowers",
            health: "http://www.offa.org/display.html?appnum=1497430#animal",
            image: require('../../images/info/Sirius.jpg'),
            Titles: [
                "AKC Champion",
                "AKC Grand Champion",
                "Canine Good Citizen",
                "Therapy Dog International"
            ],
        },
        {
            id: 2,
            call: "Bennie",
            toptwenty: "",
            ours: true,
            sex: "male",
            stud: false,
            name: "OLD BAY'S BUMBLE BENNIE",
            sire: "GCH Bear N Mind's Stand Up And Cheer, RN, DD",
            dam: "GCH Old Bay's Lucy Fur",
            dob: "December 9, 2012",
            neutered: true,
            rip: "",
            owner: "Cindy and John Flowers",
            aka: "	Bennie Boo Boo Bear",
            lives: "Kathy Hamilton",
            health: "http://www.offa.org/display.html?appnum=1565055#animal",
            image: require('../../images/info/Bennie.jpg'),
            Titles: [
            ],
        },
        {
            id: 3,
            call: "Sunny",
            toptwenty: "",
            ours: true,
            stud: false,
            sex: "male",
            name: "Old Bay's Seriously Charming Son",
            sire: "GCH Old Bay's Let's Get Sirius",
            dam: "GCH Old Bay's Please Don't Squeeze The Charm'n",
            dob: "December 5, 2013",
            neutered: true,
            rip: "",
            owner: "Cindy and John Flowers",
            aka: "Sonnora",
            lives: "Cindy and John Flowers",
            health: "https://www.ofa.org/advanced-search?f=sr&appnum=1718393",
            image: require('../../images/info/Sunny.jpg'),
            Titles: [
            ],
        },
        {
            id: 4,
            call: "Rolex",
            toptwenty: "2017",
            ours: true,
            sex: "male",
            stud: true,
            name: "GCHB Old Bay's Perfect Timing",
            sire: "CH Old Bay's Lead Me To Temptation ",
            dam: "Old Bay's Seasoned with Spice ROM",
            dob: "February 23, 2014",
            neutered: false,
            rip: "",
            owner: "Cindy Flowers and Kathy Hamilton",
            aka: "Rollie-Pollie-Bear",
            lives: "Cindy and John Flowers",
            health: "http://www.offa.org/display.html?appnum=1718399#animal",
            image: require('../../images/info/Rolex.jpg'),
            Titles: [
                "AKC Champion",
                "AKC Grand Champion",
                "AKC Bronze Grand Champion",
                "NCA Select Dog 2018",
                "NCA Top Twenty 2017"
            ],
        },
        {
            id: 5,
            call: "Metronome",
            toptwenty: "",
            ours: false,
            sex: "male",
            stud: true,
            name: "CH Old Bay's Keeping Time With Sun Valley",
            sire: "GCHB Old Bay's Perfect Timing",
            dam: "GCHB Old Bay's Keep It Simple ROM",
            dob: "June 23, 2017",
            neutered: false,
            rip: "",
            owner: "Cindy and John Flowers",
            aka: "Metro",
            lives: "Mike and Kathy Paxton",
            health: "https://www.ofa.org/advanced-search?f=sr&appnum=2027902",
            image: require('../../images/info/Metro.jpg'),
            Titles: [
                "AKC Champion",
                "NCA National Best of Opposite in Sweepstakes 2018",
                "NCA National 1st 9-12 Dog 2018"
            ],
        },
        {
            id: 6,
            call: "Maestro",
            toptwenty: "",
            ours: true,
            sex: "male",
            stud: true,
            name: "CH Old Bay's Master of Time in Dreamhaven",
            sire: "GCHB Old Bay's Perfect Timing",
            dam: "GCHB Old Bay's Snowball's Chance",
            dob: "January 11, 2018",
            neutered: false,
            rip: "",
            owner: "Cindy and John Flowers and Andrea Jung and Kathy Hamilton",
            aka: "Maestro :-)",
            lives: "Cindy and John Flowers",
            health: "https://www.ofa.org/advanced-search?f=sr&appnum=2027902",
            image: require('../../images/info/Maestro.jpg'),
            Titles: [
                "AKC Champion",
            ],
        },
        {
            id: 7,
            call: "Nemo",
            toptwenty: "",
            ours: false,
            stud: false,
            sex: "male",
            name: "CH Old Bay's Finding BluWater",
            sire: "GCHB Old Bay's Perfect Timing",
            dam: "OLD BAY'S SPICIN' IT UP AT BLUWATER",
            dob: "12/21/2017",
            neutered: true,
            rip: "",
            owner: "Cindy and John Flowers and Joan Locker-Thuring",
            aka: "Nemonator",
            lives: "Jenni and David Arnett",
            health: "https://www.ofa.org/advanced-search?f=sr&appnum=1955991",
            image: require('../../images/info/Nemo.jpg'),
            Titles: [
                {
                    "title": "CH",
                    "date": "01/06/2019",
                    "org": "AKC"
                  }
            ],
        },
        {
            id: 8,
            call: "Raisin",
            toptwenty: "",
            ours: true,
            stud: false,
            sex: "female",
            name: "CH Old Bay's Ragin' Infurno",
            sire: "CH CYPRESS BAY IMAT CORNERBROOK",
            dam: "GCH Old Bay's Lucy Fur ROM",
            dob: "September 10, 2011",
            neutered: true,
            rip: "",
            owner: "Kathy Hamilton, John Borklund and Cindy Flowers",
            aka: "Rasinette, Rasie",
            lives: "Kathy Hamilton",
            health: "http://www.offa.org/display.html?appnum=1522576#animal",
            image: require('../../images/info/Raisin.jpg'),
            Titles: [
                "AKC Champion",
            ],
        },
        {
            id: 9,
            call: "Kiss",
            toptwenty: "2018",
            rom: true,
            ours: true,
            stud: false,
            sex: "female",
            name: "GCHB Old Bay's Keep It Simple",
            sire: "GCH Sun Valley's It's As Simple As A.B.C (HG/L/P/HrC/Cn/Cerf)",
            dam: "GCH Old Bay's Please Don't Squeeze The Charm'n CGC, TDI (HF/L/P/CrC/Cn/Cerf/DNA) ",
            dob: "November 25, 2014",
            neutered: false,
            rip: "",
            owner: "Cindy Flowers and Kathy Hamilton",
            aka: "Kissy",
            lives: "Cindy and John Flowers",
            health: "http://www.offa.org/display.html?appnum=1698851#animal",
            image: require('../../images/info/Kiss.jpg'),
            Titles: [
                "AKC Champion",
                "AKC Grand Champion",
                "AKC Bronze Grand Champion",
                "NCA Top Twenty 2018",
                "NCA Register of Merit"     
            ],
        },
        {
            id: 10,
            call: "Snowball",
            toptwenty: "",
            ours: false,
            stud: false,
            sex: "female",
            name: "GCH CH Old Bay's Snowball's Chance CD",
            sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
            dam: "GCH CH Old Bay's Lucy Fur CGC, TDI, THDN",
            dob: "February 4, 2014",
            neutered: false,
            rip: "",
            owner: "Andrea Jung and Cindy Flowers and Kathy Hamilton",
            aka: "SnowBeast",
            lives: "Andrea Jung",
            health: "http://www.offa.org/display.html?appnum=1718388#animal",
            image: require('../../images/info/Snowball.jpg'),
            Titles: [
                "AKC Companion Dog",
                "AKC Champion",
                "AKC Grand Champion",
            ],
        },
        {
            id: 11,
            call: "Flash",
            toptwenty: "2018",
            ours: false,
            stud: false,
            sex: "male",
            name: "GCHS CH Old Bay's Big Bang CGC",
            sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
            dam: "GCH CH Old Bay's Lucy Fur CGC, TDI, THDN",
            dob: "February 4, 2014",
            neutered: false,
            rip: "",
            owner: "Anne and David Nored and Cindy Flowers",
            aka: "Flash Man",
            lives: "Anne and David Nored",
            health: "https://www.ofa.org/advanced-search?f=sr&appnum=1876590",
            image: require('../../images/info/Flash.jpg'),
            Titles: [
                {
                    "title": "CGC",
                    "date": "05/03/2019",
                    "org": "AKC"
                  },
                  {
                    "title": "CH",
                    "date": "10/16/2016",
                    "org": "AKC"
                  },
                  {
                    "title": "GCH",
                    "date": "04/07/2018",
                    "org": "AKC"
                  },
                  {
                    "title": "GCHB",
                    "date": "08/31/2018",
                    "org": "AKC"
                  },
                  {
                    "title": "GCHS",
                    "date": "06/01/2019",
                    "org": "AKC"
                  }
            ],
        },
        {
            id: 12,
            call: "Carson",
            toptwenty: "",
            ours: true,
            stud: false,
            sex: "male",
            name: "BISS GCH PORICIA'S STRAIGHT TO THE TOP CGC, TDI, ROM, HOF",
            sire: "",
            dam: "",
            dob: "September 7, 2005",
            neutered: false,
            rip: "December 11, 2019",
            owner: "Kathy Hamilton and Pat Hall",
            aka: "Carson-ova",
            lives: "Kathy Hamilton ",
            health: "",
            image: require('../../images/info/Carson.jpg'),
            Titles: [
                "AKC Champion",
                "National Best of Breed",
                "Register of Merit",
                "Hall of Fame",
                "Canine Good Citizen",
            ],
        },
        {
            id: 13,
            call: "Sparkle",
            toptwenty: "",
            ours: true,
            stud: false,
            sex: "female",
            name: "CH Old Bay's Sparks Are Flyin', RN, WD",
            sire: "CH Top Shelf's Troubles A Brewin, DD",
            dam: "GCH TOP SHELF SPICED WITH OLD BAY, NJP",
            dob: "December 3, 2008",
            neutered: false,
            rip: "January 2018",
            owner: "Cindy and John Flowers and Rose Miller",
            aka: "Spark, Sparky, Sparkly, Sparkly-Darkly-Dog",
            lives: "Cindy and John Flowers",
            health: "http://www.offa.org/display.html?appnum=1370314#animal",
            image: require('../../images/info/Sparkle.jpg'),
            Titles: [
                "AKC Champion",
                "AKC Rally Novice",
                "NCA Water Dog"
            ],
        },
        {
            id: 14,
            call: "Lucy",
            toptwenty: "",
            rom: true,
            ours: true,
            stud: false,
            sex: "female",
            name: "GCH CH OLD BAY'S LUCY FUR CGC, TDI, THDN, ROM",
            sire: "Muddy Creek's Carson",
            dam: "CH OLD BAY'S HELLFROZOVER TOPSHELF ROM",
            dob: "June 9, 2009",
            neutered: false,
            rip: "April 29, 2017",
            owner: "Kathy Hamilton & Cindy Flowers",
            aka: "Lou Lou, Lucy I'm Home, LucyFur",
            lives: "Kathy Hamilton",
            health: "http://www.offa.org/display.html?appnum=1429095#animal",
            image: require('../../images/info/Lucy.jpg'),
            Titles: [
                "AKC Champion",
                "AKC Grand Champion",
                "Canine Good Citizen",
                "Therapy Dog international",
                "AKC Therapy Dog Novice",
                "NCA Register of Merit"
            ],
        },
        {
            id: 15,
            call: "Spice",
            toptwenty: "2010, 2012",
            rom: true,
            ours: true,
            stud: false,
            sex: "female",
            name: "BISS GCH CH TOP SHELF SPICED WITH OLD BAY, NJP, RN, DD, ROM",
            sire: "CH Pouch Coves Too Close To Call",
            dam: "Top Shelfs Something Different ROM",
            dob: "April 29, 2005",
            neutered: false,
            rip: "April 2017",
            owner: "Cindy and John Flowers",
            aka: "	Spicy, Spice Girl, Licky, Licky Mill, Spice Cake, Cakes",
            lives: "Cindy and John Flowers",
            health: "http://www.offa.org/display.html?appnum=1240326#animal",
            image: require('../../images/info/Spice.jpg'),
            Titles: [
                "AKC Champion",
                "AKC Grand Champion",
                "AKC Novice Jumpers Preferred",
                "AKC Rally Novice",
                "NCA Draft Dog",
                "NCA Register of Merit",
                "2010 and 2012 NCA Top Twenty",
                "2010 NCA Top Show Bitch",
            ],
        },
        {
            id: 16,
            call: "Dexter",
            toptwenty: "",
            rom: false,
            ours: true,
            stud: false,
            sex: "male",
            name: "CH ALLEGIANCE ROCK THE BOAT OLD BAY",
            sire: "CH Top Shelfs On The Rocks",
            dam: "CH Darbydales Zoo Two",
            dob: "September 14, 2006",
            neutered: false,
            rip: "September 18, 2014",
            owner: "Kathy Hamilton",
            aka: "	Dex, Dexi, Dex-a-trim, Walking Head",
            lives: "Kathy Hamilton",
            health: "http://www.offa.org/display.html?appnum=1240326#animal",
            image: require('../../images/info/Dexter.jpg'),
            Titles: [
                "AKC Champion",
            ],
        },
        {
            id: 17,
            call: "Simon",
            toptwenty: "",
            rom: false,
            ours: true,
            stud: false,
            sex: "male",
            name: "CH TOP SHELF'S SIMPLY IRRESISTIBLE, DD, WD, OAP, AJP",
            sire: "BISS, CH NUMA'S HAD TO BE POUCH COVE, DD ROM",
            dam: "VN CH TOP SHELF'S STAR DAISY, CD, DD, WRD ROM",
            dob: "May 16, 2002",
            neutered: false,
            rip: "September 2, 2014",
            owner: "Katie Amundson & Cindy Flowers",
            aka: "Simonator, Simatraitor, Tater, Tater Tot, Tate",
            lives: "Katie Amundson & Cindy Flowers",
            health: "http://www.offa.org/display.html?appnum=1096035#animal",
            image: require('../../images/info/Simon.jpg'),
            Titles: [
                "AKC Champion",
                "AKC Excellent Jumpers w/ Weaves Preferred (AJP)",
                "AKC Open Jumpers w/ Weaves Preferred (OJP)",
                "AKC Novice Jumpers w Weaves Preferred (NJP)",
                "AKC Open Agility Preferred (OAP)",
                "AKC Novice Agility Preferred (NAP)",
                "NCA Draft Dog",
                "NCA Water Dog",
            ],
        },
        {
            id: 18,
            call: "Chilly",
            toptwenty: "",
            rom: true,
            ours: true,
            stud: false,
            sex: "female",
            name: "CH OLD BAY'S HELLFROZOVER TOPSHELF",
            sire: "CH TOP SHELF'S ON THE ROCKS, ROM",
            dam: "CH TOP SHELF'S WILD NIGHT OUT, ROM",
            dob: "September 26, 2005",
            neutered: false,
            rip: "August 2014",
            owner: "Nancy Beres and Kathy Hamilton",
            aka: "Chillster, Chinchilla, The Arsonist, Fire Starter",
            lives: "Nancy Beres ",
            health: "http://www.offa.org/display.html?appnum=1240358#animal",
            image: require('../../images/info/Chilly.jpg'),
            Titles: [
                "AKC Champion",
            ],
        },
        {
            id: 19,
            call: "Katie",
            toptwenty: "",
            rom: false,
            vn: true,
            ours: true,
            stud: false,
            sex: "female",
            name: "VN CH TOP SHELF'S JUMP UP N KISS ME, CD, DD1, WRD2, NAP, RN, CGC, TDI",
            sire: "CH TOP SHELF'S ON THE ROCKS, ROM",
            dam: "CH TOP SHELF'S WILD NIGHT OUT, ROM",
            dob: "March 5, 2002",
            neutered: false,
            rip: "May 18, 2012",
            owner: "Cindy and John Flowers",
            aka: "Kate, Kaitlin, Katydid, Katie-Did-It",
            lives: "Cindy and John Flowers",
            health: "http://www.offa.org/display.html?appnum=1096033#animal",
            image: require('../../images/info/Katie.jpg'),
            Titles: [
                "NCA Versatile Newfoundland",
                "AKC Champion",
                "AKC Companion Dog",
                "AKC Novice Agility Preferred",
                "NCA Draft Dog - requalified 1 time",
                "NCA Water Rescue Dog - requalified 2 times",
                "AKC Canine Good Citizen",
                "AKC Rally Novice",
                "Therapy Dog Internaltional",
            ],
        },
        {
            id: 20,
            call: "Dasher",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: true,
            stud: false,
            sex: "male",
            name: "Old Bay's Dash of Spice",
            sire: "CH TOP SHELF'S ON THE ROCKS, ROM",
            dam: "CH TOP SHELF'S WILD NIGHT OUT, ROM",
            dob: "December 25, 2010",
            neutered: false,
            rip: "February 24, 2011",
            owner: "Cindy and John Flowers",
            aka: "Dash, Dashing",
            lives: "Cindy and John Flowers",
            health: "",
            image: require('../../images/info/Dasher.jpg'),
            Titles: [
            ],
        },
        {
            id: 21,
            call: "Daisy",
            toptwenty: "",
            rom: true,
            vn: true,
            ours: true,
            stud: false,
            sex: "female",
            name: "VN CH TOP SHELF'S STAR DAISY CD, TDD, WRD, ROM ",
            sire: "CH Darbydales Keep´M Guess´N",
            dam: "VN CH Top Shelfs Baileys Irish Cream CDX, DD, WRD",
            dob: "February 17, 1999",
            neutered: false,
            rip: "September 29, 2011",
            owner: "Cindy and John Flowers",
            aka: "Daisy Dukes, Dukes, Dukey, Daisy May, Dazed",
            lives: "Cindy and John Flowers",
            health: "http://www.offa.org/display.html?appnum=830863#animal",
            image: require('../../images/info/Daisy.jpg'),
            Titles: [
                "NCA Versatile Newfoundland",
                "AKC Champion",
                "AKC Companion Dog",
                "NCA Draft Dog",
                "NCA Water Rescue Dog",
                "NCA Register of Merit"
            ],
        },
        {
            id: 22,
            call: "Flyer",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: true,
            stud: false,
            sex: "male",
            name: "MUDDY CREEKS FREQUENT FLYER",
            sire: "Muddy Creeks",
            dam: "Muddy Creek Old Bays Moonbeam",
            dob: "2000",
            neutered: false,
            rip: "September 28, 2010",
            owner: "Kathy Hamilton",
            aka: "	Fly, Fly Paper, Fly me to the moon",
            lives: "Kathy Hamilton",
            health: "",
            image: require('../../images/info/Flyer.jpg'),
            Titles: [
            ],
        },
        {
            id: 23,
            call: "Tommy",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: true,
            stud: false,
            sex: "male",
            name: "CH TOP SHELF TOM COLINS, DD, WRD2",
            sire: "CH Darbydales Keep´M Guess´N",
            dam: "VN CH Top Shelfs Baileys Irish Cream CDX, DD, WRD",
            dob: "March 8, 2001",
            neutered: false,
            rip: "September 16, 2010",
            owner: "Cindy and John Flowers",
            aka: "Tom, Thomas The Train, Taahhh-me",
            lives: "Cindy and John Flowers",
            health: "http://www.offa.org/display.html?appnum=1041710#animal",
            image: require('../../images/info/Tommy.jpg'),
            Titles: [
                "AKC Champion",,
                "NCA Draft Dog",
                "NCA Water Rescue Dog2",
            ],
        },
        {
            id: 24,
            call: "Opie",
            toptwenty: "2004, 2005",
            ours: true,
            stud: false,
            sex: "male",
            name: "BISS CH TOP SHELF'S SMOOTH OPERATOR, CGC, TDI",
            sire: "BISS, CH NUMA'S HAD TO BE POUCH COVE, DD ROM",
            dam: "VN CH TOP SHELF'S STAR DAISY, CD, DD, WRD ROM ",
            dob: "May 16, 2002",
            neutered: false,
            rip: "September 20, 2006",
            owner: "Kathy Hamilton and Cindy and John Flowers",
            aka: "Obi-Wan-Konobi",
            lives: "Kathy Hamilton",
            health: "http://www.offa.org/display.html?appnum=1096214#animal",
            image: require('../../images/info/Opie.jpg'),
            Titles: [
                "AKC Champion",
                "NCA Top Twenty 2006",
            ],
        },
        {
            id: 25,
            call: "Yogi",
            toptwenty: "",
            ours: true,
            stud: false,
            sex: "male",
            name: "SHADRACK'S MIDNITE MAGIC CD, NAP, RE, TDD, WRD6",
            sire: "CH Shadracks Midnite Habit",
            dam: "CH Midnite Startin´ Over W Shadrack ",
            dob: "June 30, 1999",
            neutered: false,
            rip: "March 15, 2009",
            owner: "Cindy & John Flowers",
            aka: "Yogi-Bear, Yogity-Bogity-Bear, Yoggers, Yogi Beara, Smarter Than the Average Bear, Best Puppy in the Whole World",
            lives: "Cindy & John Flowers",
            health: "",
            image: require('../../images/info/Yogi.jpg'),
            Titles: [
                "AKC Companion Dog",
                "AKC Novice Agility Preferred",
                "AKC Rally Novice",
                "AKC Rally Advanced",
                "AKC Rally Excellent",
                "NCA Draft Dog",
                "NCA Team Draft Dog",
                "NCA Water Dog",
                "NCA Water Rescue Dog - requalified 6 times!",
            ],
        },
        {
            id: 26,
            call: "Sporty",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: true,
            stud: false,
            sex: "female",
            name: "CH. OLD BAY'S SPORTIN' A SPICY ATTITUDE",
            sire: "CH Skippers Eminence King of Helluland",
            dam: "CH Top Shelfs Spiced With Old Bay ROM",
            dob: "April 10, 2008",
            neutered: false,
            rip: "August 10, 2009",
            owner: "Cindy and John Flowers",
            aka: "Sporty Spice, Good Sport, Bad Sport, Sportscaster, Sport-Zilla",
            lives: "Cindy and John Flowers",
            health: "http://www.offa.org/display.html?appnum=1370494#animal",
            image: require('../../images/info/Sporty.jpg'),
            Titles: [
                "AKC Champion",
            ],
        },
        {
            id: 27,
            call: "Burnie",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: true,
            stud: false,
            sex: "male",
            name: "OLD BAY'S SITTIN ON THE BACK BURNER",
            sire: "BISS CH SUNVALLEY PETITIONS POUCH COVE, ROM",
            dam: "CH OLD BAY'S HELLFROZOVER TOPSHELF ROM",
            dob: "May 10, 2008",
            neutered: false,
            rip: "July 27, 2009",
            owner: "Cindy Flowers and Kathy Hamiltons",
            aka: "Bernardo, Burn, Burnard, Burn Pile, Fat Face",
            lives: "Cindy Flowers and Kathy Hamilton",
            health: "",
            image: require('../../images/info/Burnie.jpg'),
            Titles: [
                
            ],
        },
        {
            id: 28,
            call: "Snoopy",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: true,
            stud: false,
            sex: "female",
            name: "MUDDY CREEK OLD BAYS MOONBEAM ",
            sire: "Ledgelights Muddy Creek Caruso",
            dam: "	Muddy Creeks Mercedes",
            dob: "",
            neutered: false,
            rip: "2007",
            owner: "Kathy Hamiltons",
            aka: "Moon, Snoop",
            lives: "Kathy Hamilton",
            health: "",
            image: require('../../images/info/Snoopy.jpg'),
            Titles: [
                
            ],
        },
        {
            id: 29,
            call: "RRRocky",
            toptwenty: "2006",
            rom: true,
            ours: true,
            stud: false,
            sex: "male",
            name: "CH Top Shelf's On The Rocks ROM",
            sire: "BISS, CH NUMA'S HAD TO BE POUCH COVE, DD ROM",
            dam: "VN CH TOP SHELF'S STAR DAISY, CD, DD, WRD ROM",
            dob: "May 16, 2002",
            neutered: false,
            rip: "September 15, 2006",
            owner: "Kathy Hamilton and Cindy and John Flowers",
            aka: "RRRRRRRocky",
            lives: "Kathy Hamilton",
            health: "http://www.offa.org/display.html?appnum=1096214#animal",
            image: require('../../images/info/Rocky.jpg'),
            Titles: [
                "AKC Champion",
                "NCA Top Twenty 2006",
            ],
        },
        {
            id: 30,
            call: "Betty",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: true,
            stud: false,
            sex: "female",
            name: "BROAD RUN'S BLACK BETTY, CD, TDD, WRD",
            sire: "",
            dam: "Shadracks Babylon Beauty",
            dob: "May 30, 1992",
            neutered: false,
            rip: "May 19, 2006",
            owner: "Cindy & John Flowers",
            aka: "Betty Boop",
            lives: "Cindy & John Flowers",
            health: "",
            image: require('../../images/info/Betty.jpg'),
            Titles: [
                "AKC Companion Dog", "NCA Water Rescue Dog", "NCA Draft Dog",  "NCA Team Draft Dog"
            ],
        },
        {
            id: 31,
            call: "Kindle",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: true,
            stud: false,
            sex: "female",
            name: "Old Bay's Light My Fire With Dreamhaven",
            sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
            dam: "GCHB Old Bay's Keep It Simple ROM",
            dob: "November 10, 2018",
            neutered: false,
            rip: "",
            owner: "Kathy Hamilton, Andrea Jung and Cindy Flowers",
            aka: "Singleton",
            lives: "Kathy Hamilton",
            health: "",
            image: require('../../images/info/Kindle.jpg'),
            Titles: [
                ""
            ],
        },
        {
            id: 32,
            call: "Sing",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: true,
            stud: false,
            sex: "female",
            name: "Old Bay's I Put The Sing In Single",
            sire: "GCH Chateaunewf'N Nakiska's Legend Of The Stones",
            dam: "GCHB Old Bay's Keep It Simple",
            dob: "November 8, 2019",
            neutered: false,
            rip: "",
            owner: "Cindy & John Flowers",
            aka: "Singleton",
            lives: "Cindy & John Flowers",
            health: "",
            image: require('../../images/info/Sing.jpg'),
            Titles: [
                ""
            ],
        },
        {
            id: 32,
            call: "Miss Flash",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "female",
            name: "CH Celtic Cross Mischief Managed At Old Bay RN, RA, WD",
            sire: "GCH Old Bay's Potter As In Harry",
            dam: "CH Old Bay's Sparks Are Flyin'",
            dob: "09/06/2011",
            neutered: true,
            rip: "",
            owner: "Rosemary Miller & Cindy Flowers & Barbara Plasse",
            aka: "",
            lives: "Rose",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CD",
                    "date": "11/05/2015",
                    "org": "AKC"
                  },
                  {
                    "title": "CH",
                    "date": "08/18/2018",
                    "org": "AKC"
                  },
                  {
                    "title": "RA",
                    "date": "11/04/2015",
                    "org": "AKC"
                  },
                  {
                    "title": "RN",
                    "date": "05/02/2012",
                    "org": "AKC"
                  },
                  {
                    "title": "WD",
                    "date": "08/22/2015",
                    "org": "NCA"
                  }	
            ],
        },
        {
            id: 32,
            call: "Jack",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "female",
            name: "CH Celtic Cross Skipjack At Old Bay CGC",
            sire: "GCH 	Old Bay's Here At Last",
            dam: "CH Celtic Cross Mischief Managed At Old Bay'",
            dob: "10/17/2013",
            neutered: true,
            rip: "",
            owner: "Michael Acosta & Cindy Flowers & Rosemary Miller & Susan Acosta",
            aka: "",
            lives: "Mike and Susan",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CGC",
                    "date": "10/26/2014",
                    "org": "AKC"
                  },
                  {
                    "title": "CH",
                    "date": "11/06/2015",
                    "org": "AKC"
                  }		
            ],
        },
        {
            id: 32,
            call: "Tilly",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "female",
            name: "CH Dreamhaven's Cascading Waterfalls At Old Bay CGC",
            sire: "Southwind's Pouch Cove Dark Star",
            dam: "CH Old Bay's Keep It Simple'",
            dob: "11/10/2018",
            neutered: false,
            rip: "",
            owner: "Wendy Sparks & Andrea Jung & Harold Sparks",
            aka: "",
            lives: "Wendy",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CGC",
                    "date": "04/09/2019",
                    "org": "AKC"
                  },
                  {
                    "title": "CH",
                    "date": "11/09/2019",
                    "org": "AKC"
                  }
            ],
        },
        {
            id: 32,
            call: "Elsa",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "female",
            name: "CH Dreamhaven's Frozen In Time With Old Bay",
            sire: "GCHB Old Bay's Perfect Timing",
            dam: "GCH Old Bay's Snowball's Chance CD",
            dob: "01/11/2018",
            neutered: false,
            rip: "",
            owner: "Andrea Jung & Cindy Flowers",
            aka: "",
            lives: "Andrea",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CH",
                    "date": "11/04/2018",
                    "org": "AKCKC"
                }	
            ],
        },
        {
            id: 32,
            call: "Nash",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "male",
            name: "CH Dreamhaven's Sum It Up With Old Bay WD, CGC",
            sire: "Southwind's Pouch Cove Dark Star",
            dam: "GCHB Old Bay's Keep It Simple",
            dob: "11/10/2018",
            neutered: false,
            rip: "",
            owner: "Sue Lynn Morton & Robin Love",
            aka: "",
            lives: "Sue Lynn Morton & Robin Love",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CGC",
                    "date": "07/13/2019",
                    "org": "AKC"
                  },
                  {
                    "title": "WD",
                    "date": "08/17/2019",
                    "org": "NCA"
                  },
                {
                    "title": "CH",
                    "date": "12/04/2018",
                    "org": "AKCKC"
                }
            ],
        },
        {
            id: 32,
            call: "Essi",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "female",
            name: "Dreamhaven's Old Bay Bright Star Over Brandywine CGC",
            sire: "Southwind's Pouch Cove Dark Star",
            dam: "GCHB Old Bay's Keep It Simple",
            dob: "11/10/2018",
            neutered: false,
            rip: "",
            owner: "Karin Bystol & Cindy Flowers & Andrea Jung & Adam Bystol",
            aka: "",
            lives: "Karin and Adam",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CGC",
                    "date": "05/03/2019",
                    "org": "AKC"
                  }
            ],
        },
        {
            id: 32,
            call: "Fable",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "female",
            name: "CH Dreamhaven's Once Upon A Time At Old Bay CGC",
            sire: "GCHB Old Bay's Perfect Timing",
            dam: "GCH Old Bay's Snowball's Chance",
            dob: "01/11/2018",
            neutered: false,
            rip: "",
            owner: "Rachel Teiman & Cindy Flowers & Andrea Jung & Michael Epstein",
            aka: "",
            lives: "Rachel and Michael",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CGC",
                    "date": "07/25/2018",
                    "org": "AKC"
                  },
                  {
                    "title": "CH",
                    "date": "03/16/2019",
                    "org": "AKC"
                  }
            ],
        },
        {
            id: 32,
            call: "Emma",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "female",
            name: "GCHB Emalani Of Old Bay CGC, RN, WD",
            sire: "Topshelfs Israel Kamakawiwoole",
            dam: "Old Bay's Seasoned With Spice",
            dob: "05/12/2013",
            neutered: false,
            rip: "",
            owner: "Kathy Holshey & Cindy Flowers",
            aka: "",
            lives: "Kathy Holshey",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CGC",
                    "date": "10/26/2014",
                    "org": "AKC"
                  },
                  {
                    "title": "CH",
                    "date": "06/01/2014",
                    "org": "AKC"
                  },
                  {
                    "title": "GCH",
                    "date": "10/25/2014",
                    "org": "AKC"
                  },
                  {
                    "title": "GCHB",
                    "date": "02/20/2016",
                    "org": "AKC"
                  },
                  {
                    "title": "RN",
                    "date": "01/17/2016",
                    "org": "AKC"
                  },
                  {
                    "title": "WD",
                    "date": "08/06/2017",
                    "org": "NCA"
                  }
            ],
        },
        {
            id: 32,
            call: "Sigi",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "male",
            name: "CH Old Bay Because I Can",
            sire: "CH Top Shelf Troubles A Brewin",
            dam: "CH Top Shelf Spiced With Old Bay",
            dob: "12/03/2008",
            neutered: false,
            rip: "",
            owner: "Cindy Flowers & John Flowers",
            aka: "",
            lives: "Cindy Flowers & John Flowers",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CH",
                    "date": "05/29/2010",
                    "org": "AKC"
                  }
            ],
        },
        {
            id: 32,
            call: "Sampson",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "male",
            name: "CH Old Bay Forged In Flames RN, WD",
            sire: "CH Sunvalley Petitions Pouch Cove",
            dam: "CH Old Bay's Hellfrozover Topshelf",
            dob: "04/10/2008",
            neutered: false,
            rip: "",
            owner: "Karin Bystol & Adam Bystol",
            aka: "",
            lives: "Karin Bystol & Adam Bystol",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CGC",
                    "date": "10/05/2018",
                    "org": "AKC"
                  },
                  {
                    "title": "CGCA",
                    "date": "09/29/2018",
                    "org": "AKC"
                  }
            ],
        },
        {
            id: 32,
            call: "Brenden",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "male",
            name: "	Old Bay Irish Maritime Navigator CGC, CGCA",
            sire: "CH Bear N Mind's Maritime Traveler",
            dam: "CH Top Shelf Spiced With Old Bay",
            dob: "12/25/2010",
            neutered: false,
            rip: "",
            owner: "Jessica Regan",
            aka: "",
            lives: "Jessica Regan",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CGC",
                    "date": "10/05/2018",
                    "org": "AKC"
                  },
                  {
                    "title": "CGCA",
                    "date": "09/29/2018",
                    "org": "AKC"
                  }
            ],
        },
        {
            id: 32,
            call: "Rudd",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "male",
            name: "CH Old Bay Screerhum Rudder",
            sire: "Muddy Creek's Carson",
            dam: "CH Top Shelfs Cosmopolitan",
            dob: "06/02/2009",
            neutered: false,
            rip: "",
            owner: "Mollie Standish & Carlton Standish",
            aka: "",
            lives: "Mollie Standish & Carlton Standish",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CH",
                    "date": "01/22/2011",
                    "org": "AKC"
                },
            ],
        },
        {
            id: 32,
            call: "Sonar",
            toptwenty: "",
            rom: false,
            vn: false,
            wa: true,
            ours: false,
            stud: false,
            sex: "male",
            name: "WA Old Bay Sonic Wave AXP, CD, CDX, NAP, NJP, OAP, OJP, UD, DD, DDX, TDD3, TDDX, WD, WRD5, WRDX ",
            sire: "Bear N Mind's Maritime Traveler",
            dam: "CH Waterford Frontpage",
            dob: "06/02/2009",
            neutered: false,
            rip: "",
            owner: "Christie Smith",
            aka: "",
            lives: "Christie Smith",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "AXP",
                    "date": "10/26/2013",
                    "org": "AKC"
                },
                {
                    "title": "CD",
                    "date": " 05/05/2012",
                    "org": "AKC"
                },
                {
                    "title": "CDX",
                    "date": "02/10/2013",
                    "org": "AKC"
                },
                {
                    "title": "NAP",
                    "date": "11/03/2012",
                    "org": "AKC"
                },
                {
                    "title": "NJP",
                    "date": "02/15/2013",
                    "org": "AKC"
                },
                {
                    "title": "OAP",
                    "date": "03/16/2013",
                    "org": "AKC"
                },
                {
                    "title": "OJP",
                    "date": "12/15/2013",
                    "org": "AKC"
                },
                {
                    "title": "UD",
                    "date": "02/07/2015",
                    "org": "AKC"
                },
                {
                    "title": "DD",
                    "date": "11/17/2012",
                    "org": "NCA"
                },
                {
                    "title": "DDX",
                    "date": "04/08/2016",
                    "org": "NCA"
                },
                {
                    "title": "TDD",
                    "date": "03/23/2013",
                    "org": "NCA"
                },
                {
                    "title": "TDD",
                    "date": "11/14/2015",
                    "org": "NCA"
                },
                {
                    "title": "TDD",
                    "date": "11/06/2016",
                    "org": "NCA"
                },
                {
                    "title": "TDDX",
                    "date": "11/04/2018",
                    "org": "NCA"
                },
                {
                    "title": "WD",
                    "date": "08/27/2011",
                    "org": "NCA"
                },
                {
                    "title": "WRD",
                    "date": "08/11/2012",
                    "org": "NCA"
                },
                {
                    "title": "WRD",
                    "date": "08/12/2012",
                    "org": "NCA"
                },
                {
                    "title": "WRD",
                    "date": "08/25/2012",
                    "org": "NCA"
                },
                {
                    "title": "WRD",
                    "date": "08/26/2012",
                    "org": "NCA"
                },
                {
                    "title": "WRD",
                    "date": "08/24/2013",
                    "org": "NCA"
                },
                {
                    "title": "WRDX",
                    "date": "08/23/2014",
                    "org": "NCA"
                }
            ],
        },
        {
            id: 32,
            call: "Spinnaker",
            toptwenty: "",
            rom: false,
            wa: true,
            vn: false,
            ours: false,
            stud: false,
            sex: "male",
            name: "Old Bay Spinnaker Flyin",
            sire: "Powder Ridge's Dreams Come True",
            dam: "Old Bay's Seasoned With Spice",
            dob: "06/01/2014",
            neutered: true,
            rip: "",
            owner: "Mollie Standish & Carlton Standish",
            aka: "",
            lives: "Mollie Standish & Carlton Standish",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CD",
                    "date": "03/15/2015",
                    "org": "AKC"
                  },
                  {
                    "title": "CDX",
                    "date": "11/20/2016",
                    "org": "AKC"
                  },
                  {
                    "title": "RA",
                    "date": "10/27/2018",
                    "org": "AKC"
                  },
                  {
                    "title": "RN",
                    "date": "05/05/2018",
                    "org": "AKC"
                  },
                  {
                    "title": "DD",
                    "date": "11/05/2016",
                    "org": "NCA"
                  },
                  {
                    "title": "DDX",
                    "date": "03/24/2017",
                    "org": "NCA"
                  },
                  {
                    "title": "TDD",
                    "date": "11/06/2016",
                    "org": "NCA"
                  },
                  {
                    "title": "TDDX",
                    "date": "11/04/2018",
                    "org": "NCA"
                  },
                  {
                    "title": "WD",
                    "date": "08/07/2015",
                    "org": "NCA"
                  },
                  {
                    "title": "WRD",
                    "date": "07/24/2016",
                    "org": "NCA"
                  },
                  {
                    "title": "WRD",
                    "date": "08/19/2016",
                    "org": "NCA"
                  },
                  {
                    "title": "WRD",
                    "date": "08/04/2017",
                    "org": "NCA"
                  },
                  {
                    "title": "WRD",
                    "date": "08/06/2017",
                    "org": "NCA"
                  }
            ],
        },
        {
            id: 32,
            call: "Annie",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "female",
            name: "Old Bay's Brewed To Perfection RN",
            sire: "CH Top Shelf Troubles A Brewin",
            dam: "CH Top Shelf Spiced With Old Bay",
            dob: "12/03/2008",
            neutered: false,
            rip: "",
            owner: "Jaclyn Lobur & Rose Miller & Cindy Flowers",
            aka: "",
            lives: "Jaclyn Lobur & Rose Miller & Cindy Flowers",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "RN",
                    "date": "07/30/2010",
                    "org": "AKC"
                  }
            ],
        },
        {
            id: 32,
            call: "Tiffany",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "female",
            name: "CH Old Bay's Charming Gift",
            sire: "CH Old Bay's Let's Get Sirius",
            dam: "CH Old Bay's Please Don't Squeeze The Charm'n",
            dob: "12/05/2013",
            neutered: false,
            rip: "",
            owner: "Rozalin Shun",
            aka: "",
            lives: "Rozalin Shun",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CH",
                    "date": "01/17/2015",
                    "org": "AKC"
                  }
            ],
        },
        {
            id: 32,
            call: "Luke",
            toptwenty: "",
            rom: false,
            vn: false,
            ours: false,
            stud: false,
            sex: "female",
            name: "GCH Old Bay's Cool Hand Luke At Belle Harbour",
            sire: "Muddy Creek's Carson",
            dam: "CH Old Bay's Hellfrozover Topshelf",
            dob: "06/09/2009",
            neutered: false,
            rip: "",
            owner: "Dawn Blaine & Cindy Flowers & Becker Reep",
            aka: "",
            lives: "Dawn Blaine & Cindy Flowers & Becker Reep",
            health: "",
            image: "",
            Titles: [
                {
                    "title": "CH",
                    "date": "02/03/2012",
                    "org": "AKC"
                  },
                  {
                    "title": "GCH",
                    "date": "10/24/2014",
                    "org": "AKC"
                  }
            ],
        },
    ],
    litters: [
        {
            id: 1,
            parents: "Rhone and Kiss",
            breeders: "Old Bay Newfs - Cindy Flowers and Kathy Hamilton",
            sire: "GCH Chateaunewf'N Nakiska's Legend Of The Stones",
            dam: "GCHB Old Bay's Keep It Simple ROM",
            dob: "November 8, 2019",
            boys: 0,
            girls: 1,
            puppies: [
                "Sing",
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Kiss.jpg'),
            pupimg: require('../../images/info/Sing.jpg'),
        },
        {
            id: 2,
            parents: "Crosby and Kiss",
            breeders: "Dreamhaven Newfs - Andrea Jung, Cindy Flowers and Kathy Hamilton",
            sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
            dam: "GCHB Old Bay's Keep It Simple ROM",
            dob: "",
            boys: 2,
            girls: 6,
            puppies: [
                "Charlie",
                "Cricket",
                "Essi",
                "Gossip",
                "Kindle",
                "Nash",
                "Tilly",
            ],
            sireimg: require('../../images/litters/Crosby.jpg'),
            damimg: require('../../images/litters/Kiss.jpg'),
        },
        {
            id: 3,
            parents: "Rolex and Snowball",
            breeders: "Dreamhaven Newfs - Andrea Jung, Cindy Flowers and Kathy Hamilton",
            sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
            dam: "GCHB Old Bay's Snowballs Chance CD",
            dob: "January 11, 2018",
            boys: 1,
            girls: 2,
            puppies: [
                "Ellsa",
                "Fable",
                "Maestro",
            ],
            sireimg: require('../../images/litters/Rolex.jpg'),
            damimg: require('../../images/litters/Snowball.jpg'),
        },
        {
            id: 4,
            parents: "Jon Snow and Snowball",
            breeders: "Dreamhaven Newfs - Andrea Jung, Cindy Flowers and Kathy Hamilton",
            sire: "CH. GOLDCOASTS KEEPER OF THE WATCH",
            dam: "GCHB Old Bay's Snowballs Chance CD",
            dob: "",
            boys: 2,
            girls: 0,
            puppies: [
                "Obi",
                "Finn",
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Snowball.jpg'),
        },
        {
            id: 5,
            parents: "Rolex and Kiss",
            breeders: "Sunvalley Newfs - Lou Ann Lenner and Cindy Flowers",
            sire: "GCHB Old Bay's Perfect Timing",
            dam: "GCHB Old Bay's Keep It Simple",
            dob: "January 11, 2018",
            boys: 7,
            girls: 3,
            puppies: [
                "Maestro",
                "Radar",
            ],
            sireimg: require('../../images/litters/Rolex.jpg'),
            damimg: require('../../images/litters/Kiss.jpg'),
        },
        {
            id: 6,
            parents: "Sirius and Raisin",
            breeders: "Kathy Hamilton and Cindy Flowers",
            sire: "GCH Old Bay's Let's Get Sirius (HE/L/P/HrC/Cn/Cerf/DNC)",
            dam: "CH Old Bay's Ragin' Infurno  (HG/L/HrC/P/DNA)",
            dob: "February 24, 2014",
            boys: 3,
            girls: 2,
            puppies: [
                "Jet - lime boy - Lezli and Bennett Alford",
                "Karma - raspberry girl - Rose Miller",  
                "Thunder - red boy - Jolene Maschuck Smith (PA)",
                "Torben- silver boy - Ardys and Lincoln (MD)",
                "Nessie - purple girl - Rose Miller (VA)",
            ],
            sireimg: require('../../images/litters/Sirius.jpg'),
            damimg: require('../../images/litters/Raisin.jpg'),
        },
        {
            id: 7,
            parents: "Tate and Nutmeg",
            breeders: "Cindy Flowers and Sue Faulkner",
            sire: "CH Old Bay's Lead Me To Temptation  ",
            dam: "Old Bay's Seasoned with Spice  ROM",
            dob: "February 23, 2014",
            boys: 5,
            girls: 1,
            puppies: [
                "Rolex - purple boy - Cindy Flowers",
                "Bunbury - Rainbow boy - James Kallmerten (NY)",
                "Jupiter - gray boy - Colette Chipman - (VA)", 
                "Charlie - green boy - David Leever and Sharon Yost (MD)",
                "Walter - gold boy - Terri Lewin Gilbert (PA)",
                "Gracie - Pink girl - Mary Jeanne Levitt (MN)",
            ],
            sireimg: require('../../images/litters/Tate.jpg'),
            damimg: require('../../images/litters/Nutmeg.jpg'),
        },
        {
            id: 8,
            parents: "Crosby and Lucy",
            breeders: "Kathy Hamilton and Cindy Flowers",
            sire: "VN GCH Southwind's Pouch Cove Dark Star CD, RE, TDD, WRD3",
            dam: "GCH CH Old Bay's Lucy Fur CGC, TDI, THDN  ",
            dob: "February 4, 2014",
            boys: 4,
            girls: 3,
            puppies: [
                "Flash - purple boy - Anne Nored (NC)",
                "Sailor - blue boy - (VA)",        
                "Teddy - orange boy - Shawna Rogers-Curns (VA)",        
                "Max - burgundy boy - Jeff and Jane Brueckner Totten (VA)",        
                "Ellie - green girl - John and Juli Paladino (MD)",         
                "Cayenne - yellow girl - Tom and Joan Locker-Thuring (Long Island)",         
                "Snowball - Snowball - Cindy Flowers and Andrea Jung)",
            ],
            sireimg: require('../../images/litters/Crosby.jpg'),
            damimg: require('../../images/litters/Lucy.jpg'),
        },
        {
            id: 9,
            parents: "Todd and Charm",
            breeders: "Cindy and John Flowers and Rose Miller",
            sire: "GCH Sun Valley's It's As Simple As A.B.C (HG/L/P/HrC/Cn/Cerf)",
            dam: "GCH Old Bay's Please Don't Squeeze The Charm'n CGC, TDI (HF/L/P/CrC/Cn/Cerf/DNA)",
            dob: "November 25, 2014",
            boys: 3,
            girls: 1,
            puppies: [
                "Kiss - Cindy and John",
                "Soloman - black boy - Sue and Andrew",
                "Frankie - gray boy with white - Judith Janasik (WI)",
                "Mr. Whipple - Mr. Whipple (LA)",
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Charm.jpg'),
        },
        {
            id: 10,
            parents: "Brodie and Nutmeg",
            breeders: "Cindy Flowers and Julia and Don Sharkey and Sue Faulkner",
            sire: "CH Powder Ridge's Dreams Come True, WD (HG/L/P/DNA)",
            dam: "Old Bay's Seasoned with Spice (HG/L/HrC/P/Eyes/DNA) ",
            dob: "June 1, 2014",
            boys: 2,
            girls: 0,
            puppies: [
                "Vail Cruiser - Glenn Lesher",
                "Spinnaker - blue boy - Christie Smith (VA)",
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Nutmeg.jpg'),
        },
        {
            id: 11,
            parents: "Raisin and Todd",
            breeders: "Kathy Hamilton and John Borklund and Cindy Flowers",
            sire: "G.Ch. Sun Valley's It's As Simple As A.B.C (HG/L/P/HrC/Cn/Cerf)",
            dam: "CH Old Bay's Ragin' Infurno (HG/L/HrC/P/DNA)",
            dob: "April 17, 2014",
            boys: 4,
            girls: 0,
            puppies: [
                "Evan",
                "Hank",
                "Justin",
                "Sirius II",
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Raisin.jpg'),
        },
        {
            id: 12,
            parents: "Charm and Sirius",
            breeders: "Cindy and John Flowers and Rose Miller",
            sire: "CH Old Bay's Let's Get Sirius",
            dam: "GCH CH Old Bay's Please Don't Squeeze The Charm'n ",
            dob: "December 5, 2013",
            boys: 1,
            girls: 1,
            puppies: [
                "Tiffany",
                "Sunny",
            ],
            sireimg: require('../../images/litters/Sirius.jpg'),
            damimg: require('../../images/litters/Charm.jpg'),
        },
        {
            id: 13,
            parents: "Miss Flash and Atlas",
            breeders: "Celtic Cross - Rose Miller and Cindy Flowers and Barbara Plasse",
            sire: "CH Old Bay's Here At Last, WRD",
            dam: "Celtic Cross Mischief Managed At Old Bay, RN",
            dob: "October 17, 2013",
            boys: 1,
            girls: 2,
            puppies: [
            ],
            sireimg: require('../../images/litters/Atlas.jpg'),
            damimg: require('../../images/litters/Dam.jpg'),
        },
        {
            id: 14,
            parents: "Izzy and Nutmeg",
            breeders: "Cindy and John Flowers",
            sire: "CH Top Shelfs Israel Kamakawiwoole CD, DD, CGC, RN",
            dam: "Old Bay's Seasoned with Spice ",
            dob: "May 12, 2013",
            boys: 2,
            girls: 3,
            puppies: [
                "Emma",
                "Fred",
                "Kasey",
                "Parker",
                "Ruby",
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Nutmeg.jpg'),
        },
        {
            id: 15,
            parents: "Lucy and Bravo",
            breeders: " Kathy Hamilton and Cindy Flowers",
            sire: "GCH CH Bear N Mind's Stand Up and Cheer",
            dam: "GCH CH Old Bay's Lucy Fur ",
            dob: "December 9, 2012",
            boys: 5,
            girls: 3,
            puppies: [
                "Tate",
                "Snickers",
                "Bennie",
                "Jayden",
                "Sophie"
            ],
            sireimg: require('../../images/litters/Bravo.jpg'),
            damimg: require('../../images/litters/Lucy.jpg'),
        },
        {
            id: 16,
            parents: "Lucy and Mick",
            breeders: "Kathy Hamilton and John Borkland and Cindy Flowers",
            sire: "Ch. Cypress Bay Imat Cornerbrook CGC, TDI",
            dam: "CH Old Bay's Lucy Fur ",
            dob: "September 10, 2011",
            boys: 2,
            girls: 6,
            puppies: [
                "Raisin",
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Lucy.jpg'),
        },
        {
            id: 17,
            parents: "Sparkle and Potter",
            breeders: "Cindy and John Flowers and Rose Miller",
            sire: "GCH Old Bay's 'Potter As In Harry'",
            dam: "CH Old Bay's Sparks Are Flyin', RN",
            dob: "September 6, 2011",
            boys: 4,
            girls: 8,
            puppies: [
                "General Lee",
                "Oliver",
                "Cutter",
                "Hagrid",
                "Liebe",
                "Luna",
                "Ms. Flash",
                "Chloe",
                "Sophie",
                "Charm",
                "Maggie",
            ],
            sireimg: require('../../images/litters/Potter.jpg'),
            damimg: require('../../images/litters/Sparkle.jpg'),
        },
        {
            id: 18,
            parents: "Allie x Lincoln",
            breeders: "Powder Ridge Newfs - Julia and Don Sharkey and Kathy Hamilton",
            sire: "BIS, BISS, GCH SKIPPER'S EMINENCE KING OF HELLULAND",
            dam: "CH Old Bay Get My Drift At Powder Ridge  ",
            dob: "June 24, 2011",
            boys: 6,
            girls: 1,
            puppies: [

            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Allie.jpg'),
        },
        {
            id: 19,
            parents: "Spice and Travis",
            breeders: "Cindy and John Flowers",
            sire: "CH Bear N Mind's Maritime Traveler",
            dam: "GCH Top Shelf Spiced With Old Bay, NJP ",
            dob: "December 25, 2010",
            boys: 4,
            girls: 4,
            puppies: [
                "Blitzen",
                "Brenden",
                "Dasher",
                "Dory",
                "Nutmeg",
                "Gus",
                "Latte",
                "Dancer"
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Spice.jpg'),
        },
        {
            id: 20,
            parents: "Pharrah and Travis",
            breeders: "Cindy Flowers and Dirk Daelmans",
            sire: "CH Bear N Mind's Maritime Traveler, CD",
            dam: "CH Waterford FrontPage",
            dob: "October 26, 2010",
            boys: 4,
            girls: 1,
            puppies: [
                "Atlas",
                "Heffalump",
                "Party",
                "Sirius",
                "Sonar"
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Pharrah.jpg'),
        },
        {
            id: 21,
            parents: "Chilly and Jimmy",
            breeders: "Kathy Hamilton and Cindy Flowers",
            sire: "Select Ch Council Cup's Star of Kodiak Acres RN DD CGC TDI",
            dam: "CH OLD BAY'S HELLFROZOVER TOPSHELF",
            dob: "April 10, 2010",
            boys: 1,
            girls: 0,
            puppies: [
                "Guiness"
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Chilly.jpg'),
        },
        {
            id: 22,
            parents: "Pharrah and Dexter",
            breeders: "Cindy Flowers and Dirk Daelman",
            sire: "CH Allegiance Rock The Boat Old Bay",
            dam: "CH Waterford Frontpage ",
            dob: "June 24, 2010",
            boys: 2,
            girls: 2,
            puppies: [
                "Bridget",
                "Raven",
                "Linus",
                "Tyler"
            ],
            sireimg: require('../../images/litters/Dexter.jpg'),
            damimg: require('../../images/litters/Pharrah.jpg'),
        },
        {
            id: 23,
            parents: "Cosmo and Carson",
            breeders: "Cindy Flowers and Deb Wigal",
            sire: "Muddy Creek's Carson",
            dam: "CH Top Shelf's Cosmopolitan",
            dob: "June 2, 2009",
            boys: 3,
            girls: 2,
            puppies: [
                "Happy",
                "Muddy",
                "Reba",
                "Rudd",
                "Miss Sunny"
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Cosmo.jpg'),
        },
        {
            id: 24,
            parents: "Chilly and Carson",
            breeders: "Kathy Hamilton and Cindy Flowers",
            sire: "Muddy Creek's Carson",
            dam: "CH OLD BAY'S HELLFROZOVER TOPSHELF ",
            dob: "June 9, 2009",
            boys: 2,
            girls: 1,
            puppies: [
                "Lucy",
                "Luke",
                "Tux"
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Chilly.jpg'),
        },
        {
            id: 25,
            parents: "Spice and Bruce",
            breeders: "John and Cindy Flowers",
            sire: "CH Top Shelf's Troubles A Brewin, DD",
            dam: "GCH TOP SHELF SPICED WITH OLD BAY, NJP",
            dob: "December 3, 2008",
            boys: 6,
            girls: 1,
            puppies: [
                "Annie","Cormack","Jayne","Maximus","Mickey","Nanaimo","Sparkle"
            ],
            sireimg: require('../../images/litters/Bruce.jpg'),
            damimg: require('../../images/litters/Spice.jpg'),
        },
        {
            id: 26,
            parents: "Chilly and Christopher",
            breeders: "Kathy Hamilton and Cindy Flowers",
            sire: "BISS CH SUNVALLEY PETITIONS POUCH COVE, ROM",
            dam: "CH OLD BAY'S HELLFROZOVER TOPSHELF ",
            dob: "April 10, 2008",
            boys: 4,
            girls: 1,
            puppies: [
                "Allie","Burnie","Canyon","Potter","Sampson"
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Chilly.jpg'),
        },
        {
            id: 27,
            parents: "Spice and Lincoln",
            breeders: "John and Cindy Flowers",
            sire: "BIS, BISS, GCH SKIPPER'S EMINENCE KING OF HELLULAND",
            dam: "GCH TOP SHELF SPICED WITH OLD BAY, NJP",
            dob: "March 10, 2008",
            boys: 0,
            girls: 1,
            puppies: [
                "Sporty"
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Spice.jpg'),
        },
        {
            id: 28,
            parents: "Party and Rrrocky",
            breeders: "Top Shelf - Deb Wigal, Cindy Flowers and Kathy Hamilton",
            sire: "CH TOP SHELF'S ON THE ROCKS, ROM",
            dam: "CH TOP SHELF'S WILD NIGHT OUT, ROM",
            dob: "September 26, 2005",
            boys: 6,
            girls: 4,
            puppies: [
                "Izzy", "Chilly", "Cosmo", "Jagger", "Ice"
            ],
            sireimg: require('../../images/litters/Rocky.jpg'),
            damimg: require('../../images/litters/Dam.jpg'),
        },
        {
            id: 29,
            breeders: " Cindy Flowers, John Flowers, Nancy Beres and Deb Wigal",
            sire: "",
            dam: "",
            dob: "May 16, 2002",
            boys: 4,
            girls: 1,
            puppies: [
                "Opie - Cindy and John",
                "Rocky - Kathy Hamilton",
                "Simon - Cindy and John",
                "Sid - Deb Wigal",
                "Frankie - Amy Lane",
            ],
            sireimg: require('../../images/litters/sire.jpg'),
            damimg: require('../../images/litters/Daisy.jpg'),
        }
    ],
    awards: [{
        year: 2019,
        specialties: [
        ],
        toptwenty: [
        ],
        rom: [
        ],
        vn: [
        ],
        champions: [
            {
                call: "Kindle",
                title: "CH",
                date: "10-20-2019"
            },
            {
                call: "Gracie",
                title: "GCH",
                date: "01-06-2019"
            }           

        ],
        working: [
        ],
    },
    {
        year: 2018,
        specialties: [
        ],
        toptwenty: [
        ],
        rom: [
        ],
        vn: [
        ],
        champions: [
            {
                call: "Flash",
                title: "GCHS",
                date: "04-07-2018"
            }, 
            {
                call: "Snowball",
                title: "GCH",
                date: "04-07-2018"
            }, 
            {
                call: "Dory",
                title: "GCHS",
                date: "08-18-2018"
            },        

        ],
        working: [
        ],
    },
    {
        year: 2017,
        specialties: [
        ],
        toptwenty: [
        ],
        rom: [
        ],
        vn: [
        ],
        champions: [
            {
                call: "Sailor",
                title: "GCH",
                date: "09-23-2017"
            }, 
          
        ],
        working: [
        ],
    },
    {
        year: 2016,
        specialties: [
        ],
        toptwenty: [
        ],
        rom: [
        ],
        vn: [
        ],
        champions: [
            {
                call: "Rolex",
                title: "GCHB",
                date: "05-21-2016"
            }, 
            {
                call: "Kiss",
                title: "GCHB",
                date: "10-30-2016"
            },           
        ],
        working: [
        ],
    },
    {
        year: 2015,
        specialties: [
        ],
        toptwenty: [
        ],
        rom: [
        ],
        vn: [
        ],
        champions: [
            {
                call: "Sophie",
                title: "GCH",
                date: "07-31-2015"
            },           
        ],
        working: [
        ],
    },
    {
        year: 2014,
        specialties: [
        ],
        toptwenty: [
        ],
        rom: [
        ],
        vn: [
        ],
        champions: [
            {
                call: "Sirius",
                title: "GCH",
                date: "01-17-2014"
            }, 
            {
                call: "Luke",
                title: "GCH",
                date: "10-24-2014"
            }, 
            {
                call: "Emma",
                title: "GCH",
                date: "10-25-2014"
            },           
        ],
        working: [
        ],
    },
    {
        year: 2013,
        specialties: [
        ],
        toptwenty: [
        ],
        rom: [
        ],
        vn: [
        ],
        champions: [
            {
                call: "Allie",
                title: "GCH",
                date: "07-05-2013"
            }, 
            {
                call: "Charm",
                title: "GCH",
                date: "08-02-2013"
            },           
        ],
        working: [
        ],
    },
    {
        year: 2012,
        specialties: [
        ],
        toptwenty: [
        ],
        rom: [
        ],
        vn: [
        ],
        champions: [
            {
                call: "Lucy",
                title: "GCH",
                date: "07-07-2012"
            }, 
            {
                call: "Charm",
                title: "GCH",
                date: "08-02-2013"
            },           
        ],
        working: [
        ],
    },
    {
        year: 2011,
        specialties: [
        ],
        toptwenty: [
        ],
        rom: [
        ],
        vn: [
        ],
        champions: [           
        ],
        working: [
        ],
    },
    {
        year: 2010,
        specialties: [
        ],
        toptwenty: [
        ],
        rom: [
        ],
        vn: [
        ],
        champions: [
            {
                call: "Spice",
                title: "GCH",
                date: "07-17-2010"
            }, 
            {
                call: "Potter",
                title: "GCH",
                date: "11-28-2010"
            },           
        ],
        working: [
        ],
    }]
}
//GCH CH Old Bay's Theodorable Spicy Altatude CD BN RA CGC
//GCH CH Old Bay's Son Of The Sea
//GCH CH Old Bays Voyage To Nitestar BN CGCA TKI
//GCH CH Old Bay's Cool Hand Luke At Belle Harbour
//GCHB CH Emalani Of Old Bay RN CGC
//GCH CH Old Bay's Get My Drift At Powder Ridge
//GCH CH Old Bay's Please Don'T Squeeze The Charm'N
//GCH CH Old Bay's "Potter As In Harry" CD BN RA CGC


const cartReducer = (state = initState, action) => {

    if(action.type === SET_CURRENT_DOG){
        return {
            ...state,
            currentDog : action.id
        }
    }

    if(action.type === SET_CURRENT_LITTER){
        return {
            ...state,
            currentLitter : action.id
        }
    }
   
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item){
            addedItem.quantity += 1 
            return {
                ...state,
                total: state.total + addedItem.price 
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === ADD_TO_COMPARE){
        let addedItemToCompare = state.products.find(item => item.id === action.id)
        
        addedItemToCompare.quantity = 1;
        
        return {
            ...state,
            addedItemsToCompare: [...state.addedItemsToCompare, addedItemToCompare]
        }
    }

    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.price * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.price * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    

    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === REMOVE_ITEM_FROM_COMPARE){
        let new_items = state.addedItemsToCompare.filter(item=> action.id !== item.id)
        
        return {
            ...state,
            addedItemsToCompare: new_items
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_SHIPPING){
        return {
            ...state,
            shipping: state.shipping += 6
        }
    }

    if(action.type === 'SUB_SHIPPING'){
        return {
            ...state,
            shipping: state.shipping -= 6
        }
    }

    if(action.type === RESET_CART){
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }
    
    else {
        return state
    }
}

export const initStore = (initialState = initState) => {
    return createStore(
        cartReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}