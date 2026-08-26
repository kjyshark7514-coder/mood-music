const S = (title, artist) => ({ title, artist });

const musicData = {
  "행복": {
    KPOP: [S("Butter","BTS"), S("Permission to Dance","BTS"), S("Super Shy","NewJeans"), S("How Sweet","NewJeans"), S("After LIKE","IVE"),
      S("ELEVEN","IVE"), S("Dolphin","OH MY GIRL"), S("Dun Dun Dance","OH MY GIRL"), S("Red Flavor","Red Velvet"), S("Power Up","Red Velvet"),
      S("Weekend","TAEYEON"), S("Lilac","IU"), S("Blueming","IU"), S("Celebrity","IU"), S("Love Lee","AKMU"), S("200%","AKMU"),
      S("Very Nice","SEVENTEEN"), S("Left & Right","SEVENTEEN"), S("Fighting","BSS"), S("Rollin'","Brave Girls"), S("CHEER UP","TWICE"),
      S("TT","TWICE"), S("Dance The Night Away","TWICE"), S("ASAP","STAYC"), S("Teddy Bear","STAYC"), S("SNEAKERS","ITZY"), S("Bubble","STAYC"),
      S("Love Me Like This","NMIXX"), S("Hello Future","NCT DREAM"), S("Candy","NCT DREAM")],

    POP: [S("Sunday Morning","Maroon 5"), S("Sugar","Maroon 5"), S("Walking On Sunshine","Katrina & The Waves"),
      S("Good Time","Owl City & Carly Rae Jepsen"), S("Happy","Pharrell Williams"), S("Shake It Off","Taylor Swift"), S("22","Taylor Swift"),
      S("Call Me Maybe","Carly Rae Jepsen"), S("I Really Like You","Carly Rae Jepsen"), S("Firework","Katy Perry"),
      S("Can't Stop the Feeling!","Justin Timberlake"), S("What Makes You Beautiful","One Direction"), S("Best Song Ever","One Direction"),
      S("Good as Hell","Lizzo"), S("On Top of the World","Imagine Dragons"), S("Best Day Of My Life","American Authors"),
      S("Pocketful of Sunshine","Natasha Bedingfield"), S("Unwritten","Natasha Bedingfield"), S("Put Your Records On","Corinne Bailey Rae"),
      S("I'm Yours","Jason Mraz"), S("Better Together","Jack Johnson"), S("Sunday Best","Surfaces"), S("Classic","MKTO"),
      S("Good Life","OneRepublic"), S("Beautiful Soul","Jesse McCartney"), S("Roar","Katy Perry"), S("Happy Together","The Turtles"),
      S("Hey, Soul Sister","Train"), S("Rude","MAGIC!"), S("Shotgun","George Ezra")],

    INDIE: [S("Dandelion","OOHYO"), S("Comes And Goes","HYUKOH"), S("Wi Ing Wi Ing","HYUKOH"), S("Phonecert","10CM"), S("Gradation","10CM"),
      S("peach eyes","wave to earth"), S("sunny days","wave to earth"), S("Hollywood","The Black Skirts"), S("Lisztomania","Phoenix"),
      S("A-Punk","Vampire Weekend")]
  },

  "사랑": {
    KPOP: [S("Love wins all","IU"), S("Attention","NewJeans"), S("OMG","NewJeans"), S("LOVE DIVE","IVE"), S("Either Way","IVE"),
      S("Polaroid Love","ENHYPEN"), S("Fever","ENHYPEN"), S("Love Me Again","V"), S("Seven","Jung Kook"), S("Still With You","Jung Kook"),
      S("Boy With Luv","BTS"), S("DNA","BTS"), S("Love Scenario","iKON"), S("Me After You","Paul Kim"), S("Every day, Every Moment","Paul Kim"),
      S("Friday","IU"), S("Heart","IU"), S("Some","Soyou & Junggigo"), S("Love 119","RIIZE"), S("plot twist","TWS"), S("Magnetic","ILLIT"),
      S("Cherish (My Love)","ILLIT"), S("Cupid","FIFTY FIFTY"), S("Love, Maybe","MeloMance"), S("난 네가 아니었으면 아마 사랑 같은 건","경제환"),
      S("너의 모든 순간","Sung Si Kyung"), S("오디너리 러브","경제환"), S("사랑은 영화처럼","경제환"), S("우연만은 아니었을 거야","경제환"),
      S("오늘 이 밤이 끝나기 전에","경제환")],

    POP: [S("Perfect","Ed Sheeran"), S("Thinking Out Loud","Ed Sheeran"), S("Love Story","Taylor Swift"), S("Lover","Taylor Swift"),
      S("Enchanted","Taylor Swift"), S("Adore You","Harry Styles"), S("Just the Way You Are","Bruno Mars"),
      S("Versace on the Floor","Bruno Mars"), S("A Thousand Years","Christina Perri"), S("All of Me","John Legend"),
      S("Say You Won't Let Go","James Arthur"), S("I Like Me Better","Lauv"), S("Dandelions","Ruth B."), S("Kiss Me","Sixpence None the Richer"),
      S("Lucky","Jason Mraz & Colbie Caillat"), S("Just Give Me a Reason","P!nk"), S("Rewrite the Stars","Zac Efron & Zendaya"),
      S("Love Me Like You Do","Ellie Goulding"), S("Die With A Smile","Lady Gaga & Bruno Mars"), S("I Wanna Be Yours","Arctic Monkeys"),
      S("Until I Found You","Stephen Sanchez"), S("Can't Help Falling in Love","Elvis Presley"), S("Lover Boy","Phum Viphurit"),
      S("Get You","Daniel Caesar feat. Kali Uchis"), S("Glue Song","beabadoobee"), S("From The Start","Laufey"), S("Valentine","Laufey"),
      S("Those Eyes","New West"), S("Line Without a Hook","Ricky Montgomery"), S("I GUESS I'M IN LOVE","Clinton Kane"),
      S("City of Stars","Ryan Gosling & Emma Stone")],

    INDIE: [S("bad","wave to earth"), S("EVERYTHING","The Black Skirts"), S("Gradation","10CM"), S("for lovers who hesitate","JANNABI"),
      S("lovememore.","dosii"), S("gold","offonoff"), S("Show Me How","Men I Trust"), S("Glue Song","beabadoobee"),
      S("Lover Boy","Phum Viphurit"), S("From The Start","Laufey"), S("알고있지만","Night Off")]
  },

  "슬픔": {
    KPOP: [S("Beautiful Goodbye","CHEN"), S("Untitled, 2014","G-DRAGON"), S("LOSER","BIGBANG"), S("Blue","BIGBANG"), S("Missing You","2NE1"),
      S("IF YOU","BIGBANG"), S("Eyes, Nose, Lips","TAEYANG"), S("You Were Beautiful","DAY6"), S("Congratulations","DAY6"),
      S("I Need Somebody","DAY6"), S("Fine","TAEYEON"), S("Lonely","2NE1"), S("한숨","LEE HI"), S("잊어버리지마","Crush"),
      S("사랑했지만","Kim Kwang Seok"), S("To My Youth","BOL4"), S("사랑했나봐","YB"), S("벌써 일년","Brown Eyes"), S("기억을 걷는 시간","NELL"),
      S("I Loved You","DAY6"), S("How can I love the heartbreak, you're the one I love","AKMU"), S("Four Seasons","TAEYEON"),
      S("영원할 것 같던 (Feat. Kid Wine)","경제환"), S("니가 돌아올 희망은 없다는 걸 알아","경제환"), S("마지막으로","경제환"),
      S("너에게 나는 아무것도 아닐 것 같아","경제환"), S("Goodbye!","경제환"), S("마지막화","경제환"), S("사랑한단 말 다른 사람에게로","경제환"),
      S("이렇게 시간은 또 가겠지만","경제환"), S("안개","정훈희")],

    POP: [S("Let Her Go","Passenger"), S("drivers license","Olivia Rodrigo"), S("Someone You Loved","Lewis Capaldi"),
      S("when the party's over","Billie Eilish"), S("Another Love","Tom Odell"), S("The Night We Met","Lord Huron"),
      S("Lovely","Billie Eilish & Khalid"), S("Happier Than Ever","Billie Eilish"), S("All I Want","Kodaline"),
      S("Before You Go","Lewis Capaldi"), S("Bruises","Lewis Capaldi"), S("Arcade","Duncan Laurence"),
      S("Dancing With Your Ghost","Sasha Alex Sloan"), S("This Town","Niall Horan"), S("Let Me Down Slowly","Alec Benjamin"),
      S("When I Was Your Man","Bruno Mars"), S("Talking to the Moon","Bruno Mars"), S("The Scientist","Coldplay"), S("Falling","Harry Styles"),
      S("Sign of the Times","Harry Styles"), S("traitor","Olivia Rodrigo"), S("deja vu","Olivia Rodrigo"), S("Someone Like You","Adele"),
      S("Easy On Me","Adele"), S("All Too Well","Taylor Swift"), S("exile","Taylor Swift feat. Bon Iver"), S("Liability","Lorde"),
      S("Skinny Love","Birdy"), S("Say Something","A Great Big World & Christina Aguilera"), S("The One That Got Away","Katy Perry")],

    INDIE: [S("백색왜성","NELL"), S("알고있지만","Night Off"), S("봄날은 간다","자우림"), S("기다린 만큼, 더","The Black Skirts"),
      S("Gondry","HYUKOH"), S("love.","wave to earth"), S("Dry Flower","SURL"), S("Space Song","Beach House"),
      S("Apocalypse","Cigarettes After Sex"), S("Moon Song","Phoebe Bridgers")]
  },

  "화남": {
    KPOP: [S("God's Menu","Stray Kids"), S("MANIAC","Stray Kids"), S("Thunderous","Stray Kids"), S("Back Door","Stray Kids"),
      S("MIROH","Stray Kids"), S("Guerrilla","ATEEZ"), S("WONDERLAND","ATEEZ"), S("HALAZIA","ATEEZ"), S("BANG BANG BANG","BIGBANG"),
      S("FANTASTIC BABY","BIGBANG"), S("MIC Drop","BTS"), S("Not Today","BTS"), S("ON","BTS"), S("Black Mamba","aespa"),
      S("Next Level","aespa"), S("Savage","aespa"), S("Drama","aespa"), S("Spicy","aespa"), S("TOMBOY","(G)I-DLE"),
      S("Nxde","(G)I-DLE"), S("Super Lady","(G)I-DLE"), S("ANTIFRAGILE","LE SSERAFIM"), S("UNFORGIVEN","LE SSERAFIM"),
      S("Eve, Psyche & The Bluebeard's wife","LE SSERAFIM"), S("Kick It","NCT 127"), S("Cherry Bomb","NCT 127"),
      S("CRAZY","LE SSERAFIM"), S("Baddie","IVE"), S("Girls","aespa"), S("WOKE UP","XG")],

    POP: [S("Believer","Imagine Dragons"), S("Natural","Imagine Dragons"), S("Thunder","Imagine Dragons"), S("Warriors","Imagine Dragons"),
      S("Radioactive","Imagine Dragons"), S("Centuries","Fall Out Boy"), S("The Phoenix","Fall Out Boy"), S("Immortals","Fall Out Boy"),
      S("My Songs Know What You Did in the Dark (Light Em Up)","Fall Out Boy"), S("Animals","Maroon 5"),
      S("Look What You Made Me Do","Taylor Swift"), S("Bad Blood","Taylor Swift"), S("Therefore I Am","Billie Eilish"),
      S("you should see me in a crown","Billie Eilish"), S("bad guy","Billie Eilish"), S("HUMBLE.","Kendrick Lamar"),
      S("Lose Yourself","Eminem"), S("Till I Collapse","Eminem"), S("Numb","Linkin Park"), S("In the End","Linkin Park"),
      S("What I've Done","Linkin Park"), S("Smells Like Teen Spirit","Nirvana"), S("Break Stuff","Limp Bizkit"), S("Misery Business","Paramore"),
      S("Monster","Skillet"), S("Animal I Have Become","Three Days Grace"), S("I Hate Everything About You","Three Days Grace"),
      S("Bring Me to Life","Evanescence"), S("The Pretender","Foo Fighters"), S("Killing In The Name","Rage Against the Machine")],

    INDIE: [S("일탈","자우림"), S("Stay","NELL"), S("The Wave","SE SO NEON"), S("NO PAIN","Silica Gel"), S("Violet","The Volunteers"),
      S("Do I Wanna Know?","Arctic Monkeys"), S("Reptilia","The Strokes"), S("Seven Nation Army","The White Stripes"),
      S("Take Me Out","Franz Ferdinand"), S("Song 2","Blur")]
  },

  "피곤": {
    KPOP: [S("Ditto","NewJeans"), S("Through the Night","IU"), S("11:11","TAEYEON"), S("Palette","IU"), S("strawberry moon","IU"),
      S("Instagram","DEAN"), S("D (Half Moon)","DEAN"), S("Galaxy","BOL4"), S("Only","LEE HI"), S("Fairy of Shampoo","TXT"),
      S("Nap of a star","TXT"), S("20cm","TXT"), S("Magic Island","TXT"), S("Coffee","BTS"), S("Butterfly","BTS"), S("Serendipity","Jimin"),
      S("Love Again","Baekhyun"), S("UN Village","Baekhyun"), S("Handle It","TWICE"), S("Automatic","Red Velvet"),
      S("One of These Nights","Red Velvet"), S("Rain","TAEYEON"), S("Restless","BIBI"), S("WA-R-R","Colde"), S("bath","offonoff"),
      S("lovememore.","dosii"), S("seasons","wave to earth"), S("peach eyes","wave to earth"), S("Peaches","KAI"), S("Daydream","Dreamcatcher")],

    POP: [S("golden hour","JVKE"), S("comethru","Jeremy Zucker"), S("Heather","Conan Gray"), S("People Watching","Conan Gray"),
      S("Memories","Conan Gray"), S("Sunkissed","khai dreams"), S("Paris in the Rain","Lauv"), S("Mean It","Lauv"),
      S("From The Dining Table","Harry Styles"), S("Sweet Creature","Harry Styles"), S("Photograph","Ed Sheeran"), S("Location Unknown","HONNE"),
      S("Day 1 ◑","HONNE"), S("Warm On A Cold Night","HONNE"), S("La La Lost You","NIKI"), S("lowkey","NIKI"), S("Moon River","Frank Ocean"),
      S("Pink + White","Frank Ocean"), S("Slow Dancing in the Dark","Joji"), S("Sanctuary","Joji"), S("Die For You","The Weeknd"),
      S("Out of Time","The Weeknd"), S("Moon Song","Phoebe Bridgers"), S("Like Real People Do","Hozier"),
      S("Mystery of Love","Sufjan Stevens"), S("Bloom","The Paper Kites"), S("Heartbeats","José González"), S("Anchor","Novo Amor"),
      S("Cherry Wine","Hozier"), S("Show Me How","Men I Trust")],

    INDIE: [S("seasons","wave to earth"), S("peach eyes","wave to earth"), S("bath","offonoff"), S("lovememore.","dosii"), S("Pizza","OOHYO"),
      S("Show Me How","Men I Trust"), S("Nothing's Gonna Hurt You Baby","Cigarettes After Sex"), S("Space Song","Beach House"),
      S("Bloom","The Paper Kites"), S("Anchor","Novo Amor")]
  },

  "위로": {
    KPOP: [S("밤편지","IU"), S("Love Poem","IU"), S("Eight","IU"), S("Dear Name","IU"), S("My Sea","IU"), S("Breathe","LEE HI"),
      S("HOLO","LEE HI"), S("그대라는 시","TAEYEON"), S("Still Life","BIGBANG"), S("Zombie","DAY6"), S("Beautiful","Crush"),
      S("Home","SEVENTEEN"), S("Hug","SEVENTEEN"), S("Magic Shop","BTS"), S("Answer: Love Myself","BTS"), S("Life Goes On","BTS"),
      S("Spring Day","BTS"), S("My Youth","NCT DREAM"), S("Rainbow","NCT DREAM"), S("That's okay","D.O."), S("걱정에서 어른까지","경제환"),
      S("그럴 때가 오겠지","경제환"), S("가끔 안부는 들려주길","ALEPH & 경제환"), S("Time of Our Life","DAY6"), S("End of a day","JONGHYUN"),
      S("00:00 (Zero O'Clock)","BTS"), S("Epiphany","Jin"), S("everythingoes","RM"), S("It's Okay","BTOB"), S("Dear Me","TAEYEON")],

    POP: [S("Fix You","Coldplay"), S("Yellow","Coldplay"), S("Count on Me","Bruno Mars"), S("Lean on Me","Bill Withers"),
      S("You Say","Lauren Daigle"), S("Rise Up","Andra Day"), S("A Million Dreams","P!nk"), S("Castle on the Hill","Ed Sheeran"),
      S("Vienna","Billy Joel"), S("The Climb","Miley Cyrus"), S("Fight Song","Rachel Platten"), S("Scars to Your Beautiful","Alessia Cara"),
      S("Brave","Sara Bareilles"), S("Try","P!nk"), S("Keep Holding On","Avril Lavigne"), S("Somewhere Only We Know","Keane"),
      S("Home","Michael Bublé"), S("Rainbow","Kacey Musgraves"), S("Beautiful","Christina Aguilera"), S("You Raise Me Up","Josh Groban"),
      S("Hero","Mariah Carey"), S("Stand by Me","Ben E. King"), S("What a Wonderful World","Louis Armstrong"),
      S("Here Comes the Sun","The Beatles"), S("Let It Be","The Beatles"), S("Bridge Over Troubled Water","Simon & Garfunkel"),
      S("You've Got a Friend","Carole King"), S("Landslide","Fleetwood Mac"), S("I Won't Give Up","Jason Mraz"),
      S("Better Days","OneRepublic")],

    INDIE: [S("Youth","OOHYO"), S("for lovers who hesitate","JANNABI"), S("TOMBOY","HYUKOH"), S("seasons","wave to earth"),
      S("EVERYTHING","The Black Skirts"), S("Show Me How","Men I Trust"), S("Bloom","The Paper Kites"), S("Anchor","Novo Amor"),
      S("Holocene","Bon Iver"), S("Mystery of Love","Sufjan Stevens")]
  },

  "신남": {
    KPOP: [S("APT.","ROSÉ & Bruno Mars"), S("Dynamite","BTS"), S("Fire","BTS"), S("Hype Boy","NewJeans"), S("I AM","IVE"),
      S("Queencard","(G)I-DLE"), S("EASY","LE SSERAFIM"), S("HOT","SEVENTEEN"), S("Energetic","Wanna One"), S("Supernova","aespa"),
      S("Whiplash","aespa"), S("BBoom BBoom","MOMOLAND"), S("DDU-DU DDU-DU","BLACKPINK"), S("Kill This Love","BLACKPINK"),
      S("Pink Venom","BLACKPINK"), S("How You Like That","BLACKPINK"), S("LALISA","LISA"), S("MONEY","LISA"), S("MIROTIC","TVXQ!"),
      S("Growl","EXO"), S("Love Shot","EXO"), S("Ring Ding Dong","SHINee"), S("Lucifer","SHINee"), S("Sorry, Sorry","SUPER JUNIOR"),
      S("Gee","Girls' Generation"), S("Genie","Girls' Generation"), S("STEP","KARA"), S("Mister","KARA"), S("Up & Down","EXID"),
      S("Gashina","SUNMI")],

    POP: [S("Uptown Funk","Mark Ronson feat. Bruno Mars"), S("Don't Start Now","Dua Lipa"), S("Levitating","Dua Lipa"),
      S("Blinding Lights","The Weeknd"), S("24K Magic","Bruno Mars"), S("Treasure","Bruno Mars"), S("Locked Out of Heaven","Bruno Mars"),
      S("Shut Up and Dance","WALK THE MOON"), S("Wake Me Up","Avicii"), S("The Nights","Avicii"), S("Levels","Avicii"),
      S("Rather Be","Clean Bandit feat. Jess Glynne"), S("Dance Monkey","Tones and I"), S("Watermelon Sugar","Harry Styles"),
      S("Don't Stop Me Now","Queen"), S("Dancing Queen","ABBA"), S("Mamma Mia","ABBA"), S("I Gotta Feeling","The Black Eyed Peas"),
      S("Party Rock Anthem","LMFAO"), S("Timber","Pitbull feat. Kesha"), S("Cake By The Ocean","DNCE"),
      S("We Found Love","Rihanna feat. Calvin Harris"), S("Titanium","David Guetta feat. Sia"), S("One Kiss","Calvin Harris & Dua Lipa"),
      S("Don't You Worry Child","Swedish House Mafia feat. John Martin"), S("Feel So Close","Calvin Harris"), S("TiK ToK","Kesha"),
      S("Raise Your Glass","P!nk"), S("Starships","Nicki Minaj"), S("Dynamite","Taio Cruz")],

    INDIE: [S("Comes And Goes","HYUKOH"), S("Phonecert","10CM"), S("peach eyes","wave to earth"), S("Midnight Train","SE SO NEON"),
      S("NO PAIN","Silica Gel"), S("Hollywood","The Black Skirts"), S("Last Nite","The Strokes"), S("Lisztomania","Phoenix"),
      S("What You Know","Two Door Cinema Club"), S("A-Punk","Vampire Weekend")]
  },

  "SHARK": {
    KPOP: [S("Wave","ATEEZ"), S("Ocean View","Rothy"), S("Island","WINNER"), S("Summer 127","NCT 127"), S("Why So Lonely","Wonder Girls"),
      S("Beach Again","SSAK3"), S("Travel","BOL4"), S("Surf","ITZY"), S("View","SHINee"), S("Our Summer","TXT"), S("Blue Hour","TXT"),
      S("Pool","WOODZ"), S("Swimming","JEON SOMI"), S("Island","Yerin Baek"), S("Popo (How deep is our love?)","Yerin Baek"),
      S("Square (2017)","Yerin Baek"), S("Night Drive","Red Velvet"), S("Ghosting","TXT"), S("Opening Sequence","TXT"),
      S("Farewell, Neverland","TXT"), S("Virtual Angel","ARTMS"), S("Icarus","ARTMS"), S("Running Through The Night","Seori"),
      S("So Beautiful","DPR IAN"), S("No Blueberries","DPR IAN"), S("dayfly","DEAN feat. Sulli & Rad Museum"),
      S("외딴 별과 위성","경제환"), S("인터넷 속 너의 Blue","경제환"), S("Dandelion","OOHYO"), S("비 lI!l","경제환")],

    POP: [S("Ocean Eyes","Billie Eilish"), S("Ocean","Martin Garrix feat. Khalid"), S("Waves","Dean Lewis"), S("Ocean Drive","Duke Dumont"),
      S("A Drop In The Ocean","Ron Pope"), S("Island In The Sun","Weezer"), S("Walking On A Dream","Empire of the Sun"),
      S("Malibu","Miley Cyrus"), S("Summertime Sadness","Lana Del Rey"), S("Riptide","Vance Joy"),
      S("The Ocean","Mike Perry feat. Shy Martin"), S("Sunset Lover","Petit Biscuit"), S("Firestone","Kygo feat. Conrad Sewell"),
      S("Stole the Show","Kygo feat. Parson James"), S("Island","The xx"), S("Feels Like Summer","Childish Gambino"),
      S("Every Summertime","NIKI"), S("Midnight City","M83"), S("After Dark","Mr.Kitty"), S("Space Song","Beach House"),
      S("Myth","Beach House"), S("Apocalypse","Cigarettes After Sex"), S("Sunsetz","Cigarettes After Sex"),
      S("Heavenly","Cigarettes After Sex"), S("No One Noticed","The Marías"), S("Only in My Dreams","The Marías"),
      S("Intro","The xx"), S("West Coast","Lana Del Rey"), S("Innerbloom","RÜFÜS DU SOL"), S("Sunroof","Nicky Youre & dazy")],

    INDIE: [S("bad","wave to earth"), S("seasons","wave to earth"), S("peach eyes","wave to earth"), S("백색왜성","NELL"),
      S("알고있지만","Night Off"), S("EVERYTHING","The Black Skirts"), S("Show Me How","Men I Trust"), S("Space Song","Beach House"),
      S("Apocalypse","Cigarettes After Sex"), S("Intro","The xx")]
  }
};
