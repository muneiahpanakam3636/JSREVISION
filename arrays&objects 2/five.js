let users =[{"id":1,"Name":"Hettie","email":"hcantillon0@nba.com","gender":"Female"},
    {"id":2,"Name":"Ansell","email":"aseleway1@pcworld.com","gender":"Male"},
    {"id":3,"Name":"Carly","email":"cdudleston2@marriott.com","gender":"Non-binary"},
    {"id":4,"Name":"Venus","email":"vadne3@cmu.edu","gender":"Female"},
    {"id":5,"Name":"Abelard","email":"asyncke4@noaa.gov","gender":"Male"},
    {"id":6,"Name":"Connie","email":"ctidbury5@dailymotion.com","gender":"Female"},
    {"id":7,"Name":"Walther","email":"wjeratt6@sfgate.com","gender":"Male"},
    {"id":8,"Name":"Luisa","email":"lgentreau7@kickstarter.com","gender":"Female"},
    {"id":9,"Name":"Marco","email":"mtzar8@answers.com","gender":"Male"},
    {"id":10,"Name":"Margarete","email":"mstrathman9@theglobeandmail.com","gender":"Female"},
    {"id":11,"Name":"Matthaeus","email":"mpiketta@who.int","gender":"Male"},
    {"id":12,"Name":"Arie","email":"abouslerb@ycombinator.com","gender":"Male"},
    {"id":13,"Name":"Karlik","email":"kdewburyc@fc2.com","gender":"Male"},
    {"id":14,"Name":"Anderson","email":"amcbeathd@bandcamp.com","gender":"Male"},
    {"id":15,"Name":"Zelma","email":"zbrearleye@artisteer.com","gender":"Female"},
    {"id":16,"Name":"Gabbi","email":"giddonf@tiny.cc","gender":"Female"},
    {"id":17,"Name":"Janot","email":"jcordallg@icio.us","gender":"Agender"},
    {"id":18,"Name":"Tarah","email":"tjordenh@infoseek.co.jp","gender":"Female"},
    {"id":19,"Name":"Koren","email":"kpaishi@spotify.com","gender":"Female"},
    {"id":20,"Name":"Constancia","email":"czellickj@google.de","gender":"Female"}]


    let no_of_male_users=0;
    let no_of_female_users=0;

    for( user of users){
        if(user.gender==="Male"){
            no_of_male_users++
        }
        else
        if(user.gender==="Female"){
            no_of_female_users++
        }
    }

    console.log("no of users ", no_of_male_users);
    console.log("no of users", no_of_female_users);