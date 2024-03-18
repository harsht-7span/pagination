const indiaCities = {
  Andhra_Pradesh: ["Hyderabad", "Visakhapatnam", "Vijayawada"],
  Arunachal_Pradesh: ["Itanagar", "Naharlagun", "Pasighat"],
  Assam: ["Guwahati", "Silchar", "Dibrugarh"],
  Bihar: ["Patna", "Gaya", "Bhagalpur"],
  Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur"],
  Goa: ["Panaji", "Vasco da Gama", "Margao"],
  Gujarat: ["Ahmedabad", "Jamnagar", "Surat", "Vadodara"],
  Haryana: ["Faridabad", "Gurgaon", "Panipat"],
  Himachal_Pradesh: ["Shimla", "Kullu", "Manali"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
  Karnataka: ["Bangalore", "Mysore", "Hubli"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  Madhya_Pradesh: ["Bhopal", "Indore", "Jabalpur"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Manipur: ["Imphal", "Thoubal", "Bishnupur"],
  Meghalaya: ["Shillong", "Tura", "Jowai"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
  Punjab: ["Ludhiana", "Amritsar", "Jalandhar"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
  Sikkim: ["Gangtok", "Namchi", "Mangan"],
  Tamil_Nadu: ["Chennai", "Coimbatore", "Madurai"],
  Telangana: ["Hyderabad", "Warangal", "Karimnagar"],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar"],
  Uttar_Pradesh: ["Lucknow", "Kanpur", "Agra"],
  Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh"],
  West_Bengal: ["Kolkata", "Howrah", "Durgapur"],
};

const australiaCities = {
  New_South_Wales: ["Sydney", "Newcastle", "Wollongong"],
  Victoria: ["Melbourne", "Geelong", "Ballarat"],
  Queensland: ["Brisbane", "Gold Coast", "Cairns"],
  South_Australia: ["Adelaide", "Mount Gambier", "Whyalla"],
  Western_Australia: ["Perth", "Fremantle", "Geraldton"],
  Tasmania: ["Hobart", "Launceston", "Devonport"],
  Northern_Territory: ["Darwin", "Alice Springs", "Palmerston"],
  Australian_Capital_Territory: ["Canberra"],
};

const usaCities = {
  Alabama: ["Birmingham", "Montgomery", "Mobile"],
  Alaska: ["Anchorage", "Fairbanks", "Juneau"],
  Arizona: ["Phoenix", "Tucson", "Mesa"],
  Arkansas: ["Little Rock", "Fort Smith", "Fayetteville"],
  California: ["Los Angeles", "San Francisco", "San Diego"],
  Colorado: ["Denver", "Colorado Springs", "Aurora"],
  Connecticut: ["Bridgeport", "New Haven", "Hartford"],
  Delaware: ["Wilmington", "Dover", "Newark"],
  Florida: ["Miami", "Orlando", "Tampa"],
  Georgia: ["Atlanta", "Savannah", "Augusta"],
  Hawaii: ["Honolulu", "Hilo", "Kailua"],
  Idaho: ["Boise", "Nampa", "Meridian"],
  Illinois: ["Chicago", "Aurora", "Rockford"],
  Indiana: ["Indianapolis", "Fort Wayne", "Evansville"],
  Iowa: ["Des Moines", "Cedar Rapids", "Davenport"],
  Kansas: ["Wichita", "Overland Park", "Kansas City"],
  Kentucky: ["Louisville", "Lexington", "Bowling Green"],
  Louisiana: ["New Orleans", "Baton Rouge", "Shreveport"],
  Maine: ["Portland", "Lewiston", "Bangor"],
  Maryland: ["Baltimore", "Columbia", "Annapolis"],
  Massachusetts: ["Boston", "Worcester", "Springfield"],
  Michigan: ["Detroit", "Grand Rapids", "Warren"],
  Minnesota: ["Minneapolis", "Saint Paul", "Rochester"],
  Mississippi: ["Jackson", "Gulfport", "Biloxi"],
  Missouri: ["Kansas City", "Saint Louis", "Springfield"],
  Montana: ["Billings", "Missoula", "Great Falls"],
  Nebraska: ["Omaha", "Lincoln", "Bellevue"],
  Nevada: ["Las Vegas", "Reno", "Henderson"],
  "New Hampshire": ["Manchester", "Nashua", "Concord"],
  "New Jersey": ["Newark", "Jersey City", "Paterson"],
  "New Mexico": ["Albuquerque", "Las Cruces", "Rio Rancho"],
  "New York": ["New York City", "Buffalo", "Rochester"],
  "North Carolina": ["Charlotte", "Raleigh", "Greensboro"],
  "North Dakota": ["Fargo", "Bismarck", "Grand Forks"],
  Ohio: ["Columbus", "Cleveland", "Cincinnati"],
  Oklahoma: ["Oklahoma City", "Tulsa", "Norman"],
  Oregon: ["Portland", "Salem", "Eugene"],
  Pennsylvania: ["Philadelphia", "Pittsburgh", "Allentown"],
  "Rhode Island": ["Providence", "Warwick", "Cranston"],
  "South Carolina": ["Columbia", "Charleston", "Greenville"],
  "South Dakota": ["Sioux Falls", "Rapid City", "Aberdeen"],
  Tennessee: ["Nashville", "Memphis", "Knoxville"],
  Texas: ["Houston", "Dallas", "Austin"],
  Utah: ["Salt Lake City", "West Valley City", "Provo"],
  Vermont: ["Burlington", "Essex", "South Burlington"],
  Virginia: ["Virginia Beach", "Norfolk", "Richmond"],
  Washington: ["Seattle", "Spokane", "Tacoma"],
  "West Virginia": ["Charleston", "Huntington", "Morgantown"],
  Wisconsin: ["Milwaukee", "Madison", "Green Bay"],
  Wyoming: ["Cheyenne", "Casper", "Laramie"],
};

const ukCities = {
  England: ["London", "Manchester", "Birmingham"],
  Scotland: ["Glasgow", "Edinburgh", "Aberdeen"],
  Wales: ["Cardiff", "Swansea", "Newport"],
  Northern_Ireland: ["Belfast", "Derry", "Lisburn"],
};

const russiaCities = {
  Moscow_Oblast: ["Moscow", "Zelenograd", "Krasnogorsk"],
  Saint_Petersburg: ["Saint Petersburg", "Kolpino", "Pushkin"],
  Novosibirsk_Oblast: ["Novosibirsk", "Berds", "Iskitim"],
  Sverdlovsk_Oblast: ["Yekaterinburg", "Nizhny Tagil", "Kamensk-Uralsky"],
  Nizhny_Novgorod_Oblast: ["Nizhny Novgorod", "Dzerzhinsk", "Arzamas"],
  Rostov_Oblast: ["Rostov-on-Don", "Taganrog", "Shakhty"],
  Chelyabinsk_Oblast: ["Chelyabinsk", "Magnitogorsk", "Zlatoust"],
  Samara_Oblast: ["Samara", "Tolyatti", "Syzran"],
  Omsk_Oblast: ["Omsk", "Tara", "Isilkul"],
  Tyumen_Oblast: ["Tyumen", "Yalutorovsk", "Tobolsk"],
  Bashkortostan_Republic: ["Ufa", "Sterlitamak", "Salavat"],
  Tatarstan_Republic: ["Kazan", "Naberezhnye Chelny", "Almetyevsk"],
  Sverdlovsk_Oblast: ["Yekaterinburg", "Nizhny Tagil", "Kamensk-Uralsky"],
  Krasnoyarsk_Krai: ["Krasnoyarsk", "Norilsk", "Achinsk"],
  Perm_Krai: ["Perm", "Berezniki", "Solikamsk"],
  Voronezh_Oblast: ["Voronezh", "Rossosh", "Anna"],
  Volgograd_Oblast: ["Volgograd", "Volzhsky", "Kamyshin"],
  Krasnodar_Krai: ["Krasnodar", "Sochi", "Novorossiysk"],
  Ulyanovsk_Oblast: ["Ulyanovsk", "Dimitrovgrad", "Sengiley"],
};

export { indiaCities, ukCities, australiaCities, usaCities, russiaCities };
