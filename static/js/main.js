var campaigns = [
    "Orca Whales",
    "Half-busted Boots",
    "The Great British Bake Off",
    "Seagulls",
    "Underpass Graffiti",
    "Waking up in a Hedge with a Hangover",
    "Lefist Infighting",
    "Losing your Trans Partner to Elden Ring for Three Weeks",
    "#3 Trending on Twitter",
    "Gridlock",
    "Goblins",
    "Void Demons(TM)",
    "Two T4T Tops in a Polycule Fighting For Dominance",
    "Being told you \"don't look like a lesbian\"",
    "Existing in a Perpetual State of Dazed & Confused",
    "Using New Neopronouns to gain a Scrabble Advantage",
    "Top Surgery with an Axe",
    "Piracy",
    "K.K Slider",
    "Getting misgendered on Grindr",
    "Pokémon Plushies",
    "Lewd On Main",
    "Telling Smash Players to Shower",
    "Cooking Mama Cookstar Speedrunning",
    "Edibles (but they're Jaffa Cakes)",
    "Drunk Men On the N25",
    "Watching Euphoria at 9am",
    "Believers in More Doors Than Wheels",
    "Believers in More Wheels Than Doors",
    "Fish and Women Against Mermaids",
    "Mermaids Against Fish And Women",
    "Stealing the Moon",
    "Vegans <i>for</i> Climate Change",
    "Burning Down The New Pier",
    "Transgenders against New Steine",
    "Dinosaur Slippers",
    "Partners (with Pressure Washers)",
    "Partners (without Pressure Washers)",
    "Figuring out why <b><i>the fuck</b></i> clubs are inaccessible",
    "Prevention of Shops with \"Rebel\" in their name",
    "Convinced Streaming on Twitch Will Bring About Real Change",
    "19-hours of Twitter Screen Time Daily",
    "Finding the One Club that Doesn't Treat it's Workers like Shit",
    "Horny Bonk"
];


var platforms = [
    "Twitter",
    "Twitter",
    "Twitter",
    "Instagram",
    "Instagram",
    "Instagram",
    "Pinterest",
    "TikTok",
    "TikTok",
    "TikTok"
]

function generate_fstring(campaign) {
    var groups = [
        `${campaign} Road Block`,
        `${campaign} Political Vandalism`,
        `Sit-in for ${campaign}`,
        `Reclaim ${campaign} Brighton`,
        `Brighton Solidarity with ${campaign}`,
        `${campaign} for Rent Strikes`,
        `${campaign} Brighton Collective`,
        `${campaign} Action Brighton`,
        `${campaign} Brighton Anarchists`,
        `Resisting ${campaign} Brighton`,
        `Brighton United for ${campaign}`,
        `Brighton ${campaign}`,
        `Brighton ${campaign} Solidarity`,
        `Anti-${campaign} Brighton`,
        `Smash ${campaign} Brighton`,
        `Brighton ${campaign} Resistance`,
        `Autnomous ${campaign} Group BTN`,
        `${campaign} Pride Brighton`
    ]
    return groups[Math.floor(Math.random() * groups.length)];
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function generate_campaign() {
    var campaign = campaigns[Math.floor(Math.random() * campaigns.length)];
    var fstring = generate_fstring(campaign);
    var followers = Math.floor(Math.random() * 5000);
    var platform = platforms[Math.floor(Math.random() * platforms.length)];
    var platformTxt = `${followers} followers on ${platform}`;
    return `<span class="campaign-text">${fstring}</span><br><br><br><br><span style="padding:5px">${platformTxt}</span>`;
}

function generate() {
    var e = document.getElementById("campaign");
    var angle = Math.round(Math.random() * 10, 2) - 5;
    var angle = angle - 1;
    e.style.display = "";
    // disable rotate
    e.parentElement.style.transform = `rotate(${angle}deg)`;
    e.innerHTML = generate_campaign();
}