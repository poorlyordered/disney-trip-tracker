export interface Stop {
  id: string
  name: string
  type: "start" | "fuel" | "food" | "rest" | "overnight" | "toll-decision" | "destination" | "park" | "dining" | "attraction" | "event"
  lat: number
  lng: number
  mile: number
  eta: string
  description: string
  address?: string
  tips?: string
  checked?: boolean
  suggested?: boolean
}

export interface TripDay {
  day: number
  date: string
  label: string
  from: string
  to: string
  totalMiles: number
  driveTime: string
  stops: Stop[]
}

export const tripDays: TripDay[] = [
  {
    day: 1,
    date: "Saturday, April 4",
    label: "Day 1",
    from: "Winfield, MO",
    to: "McDonough, GA",
    totalMiles: 590,
    driveTime: "~9 hours",
    stops: [
      {
        id: "d1-start",
        name: "Winfield, MO",
        type: "start",
        lat: 38.9342,
        lng: -90.7382,
        mile: 0,
        eta: "Early Morning",
        description: "Departure point. Hit I-64 East toward St. Louis.",
        tips: "Top off fuel and check tire pressure before leaving."
      },
      {
        id: "d1-stl",
        name: "St. Louis, MO (I-64 through)",
        type: "rest",
        lat: 38.6270,
        lng: -90.1994,
        mile: 45,
        eta: "~45 min",
        description: "Pass through St. Louis on I-64. Stay on I-64 East across the river into Illinois.",
        tips: "Weekend traffic should be light. Follow signs for I-64 E / US-40 E."
      },
      {
        id: "d1-mtvernon",
        name: "Mt. Vernon, IL",
        type: "fuel",
        lat: 38.3172,
        lng: -88.9031,
        mile: 130,
        eta: "~2 hours",
        description: "Major truck stop cluster at I-64/I-57 interchange. Love's, Pilot/Flying J, and TA all nearby.",
        address: "I-64 & I-57 junction, Mt. Vernon, IL",
        tips: "Good first fuel stop. Grab coffee and stretch. RV-friendly lanes at Love's."
      },
      {
        id: "d1-marion",
        name: "Marion, IL",
        type: "fuel",
        lat: 37.7306,
        lng: -88.9331,
        mile: 200,
        eta: "~3 hours",
        description: "Last major truck stop cluster before Kentucky. Multiple options at I-57/I-24 split.",
        address: "I-57 & I-24 junction, Marion, IL",
        tips: "Good lunch stop. Fill up here \u2014 next big cluster isn't until Paducah."
      },
      {
        id: "d1-paducah",
        name: "Paducah, KY",
        type: "fuel",
        lat: 37.0834,
        lng: -88.6001,
        mile: 270,
        eta: "~4 hours",
        description: "Love's and Pilot/Flying J in the Paducah area. Good RV-friendly stops.",
        address: "I-24, Paducah, KY",
        tips: "Halfway point for Day 1. Stretch and fuel up."
      },
      {
        id: "d1-nashville",
        name: "Nashville, TN area",
        type: "fuel",
        lat: 36.1627,
        lng: -86.7816,
        mile: 420,
        eta: "~6.5 hours",
        description: "Multiple Love's and Flying J around I-24/I-40 interchange. Lots of food options.",
        address: "I-24 corridor, Nashville, TN",
        tips: "If you left early, traffic should be manageable. Don't get routed onto I-440 \u2014 stay on I-24."
      },
      {
        id: "d1-monteagle",
        name: "Monteagle, TN",
        type: "rest",
        lat: 35.2384,
        lng: -85.8394,
        mile: 480,
        eta: "~7.5 hours",
        description: "Fuel up BEFORE the mountain descent. Steep 6% grade, 4-mile downhill ahead.",
        tips: "GEAR DOWN for the descent. Do not ride your brakes. There is a runaway truck ramp. Take it slow and steady."
      },
      {
        id: "d1-chattanooga",
        name: "Chattanooga, TN",
        type: "fuel",
        lat: 35.0456,
        lng: -85.3097,
        mile: 520,
        eta: "~8 hours",
        description: "Love's and Pilot/Flying J near I-24/I-75 junction. Last fuel before Atlanta stretch.",
        address: "I-24 & I-75 junction, Chattanooga, TN",
        tips: "You're past Monteagle \u2014 nice work. Straight shot on I-75 South from here."
      },
      {
        id: "d1-mcdonough",
        name: "Best Western, McDonough, GA",
        type: "overnight",
        lat: 33.4473,
        lng: -84.1469,
        mile: 590,
        eta: "~9 hours",
        description: "Overnight stop. Best Western right off I-75. Confirm RV parking when you check in.",
        address: "McDonough, GA (I-75 exits 216-218)",
        tips: "Call ahead about RV parking. If the lot is tight, Love's/Pilot nearby can work for overnight RV parking."
      }
    ]
  },
  {
    day: 2,
    date: "Sunday, April 5",
    label: "Day 2",
    from: "McDonough, GA",
    to: "Fort Wilderness, Disney World",
    totalMiles: 475,
    driveTime: "~7.5 hours",
    stops: [
      {
        id: "d2-start",
        name: "McDonough, GA",
        type: "start",
        lat: 33.4473,
        lng: -84.1469,
        mile: 0,
        eta: "Early Morning",
        description: "Depart south on I-75. You're already past Atlanta \u2014 smooth sailing.",
        tips: "Fuel up before leaving McDonough if needed."
      },
      {
        id: "d2-cordele",
        name: "Cordele / Tifton, GA",
        type: "fuel",
        lat: 31.9686,
        lng: -83.7788,
        mile: 165,
        eta: "~2.5 hours",
        description: "Love's and Pilot/Flying J in the Cordele-Tifton corridor on I-75.",
        address: "I-75, Cordele/Tifton, GA",
        tips: "Good breakfast/fuel stop. Watermelon capital of the world (Cordele)."
      },
      {
        id: "d2-valdosta",
        name: "Valdosta, GA",
        type: "fuel",
        lat: 30.8327,
        lng: -83.2785,
        mile: 230,
        eta: "~3.5 hours",
        description: "Last major Georgia stop. Love's and multiple truck stops.",
        address: "I-75, Valdosta, GA",
        tips: "Last cheap fuel before Florida. Fill up here."
      },
      {
        id: "d2-lakecity",
        name: "Lake City, FL",
        type: "fuel",
        lat: 30.1897,
        lng: -82.6393,
        mile: 280,
        eta: "~4.5 hours",
        description: "First Florida fuel cluster. Welcome to Florida! Pilot/Flying J and others.",
        address: "I-75, Lake City, FL",
        tips: "Florida Welcome Center just past the border has free OJ and clean restrooms."
      },
      {
        id: "d2-wildwood",
        name: "Wildwood, FL \u2014 TOLL DECISION",
        type: "toll-decision",
        lat: 28.7653,
        lng: -82.0261,
        mile: 390,
        eta: "~6 hours",
        description: "Decision point: Take Florida's Turnpike (tolls, less traffic) or stay on I-75 to I-4 (free, more congested).",
        address: "I-75 Exit 329, Wildwood, FL",
        tips: "RECOMMENDED: Take the Turnpike. ~$10-15 in tolls but way less stress in an RV. Toll-by-plate works (they mail the bill). The I-4 alternative through Orlando is construction-heavy and stressful in an RV."
      },
      {
        id: "d2-fortwilderness",
        name: "Fort Wilderness Resort & Campground",
        type: "destination",
        lat: 28.4089,
        lng: -81.5639,
        mile: 475,
        eta: "~7.5 hours",
        description: "You made it! Disney's Fort Wilderness. Check-in is 3 PM but arrive early to use amenities.",
        address: "4510 Fort Wilderness Trail, Orlando, FL 32836",
        tips: "Full hookups at most sites. Boat launch to Magic Kingdom. Stock up groceries at Publix in Celebration before arriving \u2014 Disney prices are steep."
      }
    ]
  },
  {
    day: 3,
    date: "Monday, April 6",
    label: "Disney Day 1",
    from: "Fort Wilderness",
    to: "Fort Wilderness",
    totalMiles: 0,
    driveTime: "Park day",
    stops: [
      {
        id: "d3-morning",
        name: "Magic Kingdom - Rope Drop",
        type: "park",
        lat: 28.4177,
        lng: -81.5812,
        mile: 0,
        eta: "8-9 AM",
        description: "Take the boat from Fort Wilderness to Magic Kingdom. Arrive early for rope drop \u2014 shortest lines of the day.",
        address: "Magic Kingdom, Walt Disney World, Orlando, FL",
        tips: "The Fort Wilderness boat dock is a 5-10 min walk from most campsites. Boat ride is ~10 min. Much better than the bus.",
        suggested: true
      },
      {
        id: "d3-mk-fantasyland",
        name: "Fantasyland & Tomorrowland",
        type: "attraction",
        lat: 28.4197,
        lng: -81.5793,
        mile: 0,
        eta: "Morning",
        description: "Hit the big rides while lines are short: Seven Dwarfs Mine Train, Space Mountain, Big Thunder Mountain Railroad, Pirates of the Caribbean.",
        tips: "Seven Dwarfs Mine Train has the longest wait \u2014 do it first at rope drop or use Lightning Lane.",
        suggested: true
      },
      {
        id: "d3-flower-garden",
        name: "EPCOT Flower & Garden Festival",
        type: "event",
        lat: 28.3747,
        lng: -81.5494,
        mile: 0,
        eta: "All day at EPCOT",
        description: "The EPCOT International Flower & Garden Festival runs Mar 4 - Jun 1. Over 60 Disney topiaries, 20+ food booths with garden-fresh flavors, and the Garden Rocks Concert Series (free with EPCOT admission). You'll see this when you head to EPCOT for dinner!",
        tips: "Festival food booths are scattered throughout World Showcase. Try them after your Coral Reef dinner. Concerts at America Gardens Theatre at 5:30, 6:45 & 8 PM."
      },
      {
        id: "d3-mk-lunch",
        name: "Lunch break",
        type: "food",
        lat: 28.4177,
        lng: -81.5812,
        mile: 0,
        eta: "~12 PM",
        description: "Pecos Bill Tall Tale Inn (Frontierland) or Columbia Harbour House (Liberty Square) are solid quick-service options.",
        tips: "Or boat back to Fort Wilderness for lunch at Trail's End Restaurant \u2014 buffet, good value, and a break from the crowds.",
        suggested: true
      },
      {
        id: "d3-mk-afternoon",
        name: "Adventureland & Liberty Square",
        type: "attraction",
        lat: 28.4185,
        lng: -81.5835,
        mile: 0,
        eta: "Afternoon",
        description: "Jungle Cruise, Haunted Mansion. Consider a break back at camp during the hottest part of the afternoon (2-4 PM) and return for evening.",
        suggested: true
      },
      {
        id: "d3-coral-reef",
        name: "Coral Reef Restaurant",
        type: "dining",
        lat: 28.3747,
        lng: -81.5494,
        mile: 0,
        eta: "4:20 PM",
        description: "Dinner reservation at Coral Reef Restaurant in EPCOT. Seafood dining next to the aquarium in The Seas pavilion.",
        address: "Coral Reef Restaurant, EPCOT, Walt Disney World",
        tips: "This is in EPCOT, not Magic Kingdom. Take the monorail (MK \u2192 TTC \u2192 EPCOT) or bus. Allow 30-45 min travel time. Arrive by 3:30-3:45 PM."
      },
      {
        id: "d3-epcot-evening",
        name: "EPCOT World Showcase + Festival Booths",
        type: "attraction",
        lat: 28.3689,
        lng: -81.5517,
        mile: 0,
        eta: "Evening",
        description: "After dinner, explore World Showcase and hit the Flower & Garden Festival food booths. Don't miss Frozen Ever After (Norway) or Remy's Ratatouille Adventure (France).",
        tips: "World Showcase is best in the evening. Catch the Garden Rocks concert at 8 PM, then stay for Luminous: The Symphony of Us fireworks at 9:30 PM.",
        suggested: true
      }
    ]
  },
  {
    day: 4,
    date: "Tuesday, April 7",
    label: "Disney Day 2",
    from: "Fort Wilderness",
    to: "Fort Wilderness",
    totalMiles: 0,
    driveTime: "Park day",
    stops: [
      {
        id: "d4-morning",
        name: "Animal Kingdom - Rope Drop",
        type: "park",
        lat: 28.3553,
        lng: -81.5901,
        mile: 0,
        eta: "8-9 AM",
        description: "Bus from Fort Wilderness to Animal Kingdom. Best experienced early \u2014 animals are most active in the morning and it's cooler.",
        address: "Animal Kingdom, Walt Disney World, Orlando, FL",
        tips: "This park is doable in roughly half a day. Rope drop is critical for Pandora.",
        suggested: true
      },
      {
        id: "d4-ak-pandora",
        name: "Pandora \u2014 The World of Avatar",
        type: "attraction",
        lat: 28.3558,
        lng: -81.5924,
        mile: 0,
        eta: "Morning",
        description: "Flight of Passage (the best simulator at Disney) and Na'vi River Journey. The whole land is stunning.",
        tips: "Flight of Passage at rope drop \u2014 wait times hit 2+ hours later in the day.",
        suggested: true
      },
      {
        id: "d4-ak-safari",
        name: "Kilimanjaro Safaris & Expedition Everest",
        type: "attraction",
        lat: 28.3592,
        lng: -81.5921,
        mile: 0,
        eta: "Late Morning",
        description: "Safari ride through a real savanna with live animals. Expedition Everest is a great roller coaster. Dinosaur is fun too.",
        tips: "Safari is best in the morning when animals are active and it's cooler.",
        suggested: true
      },
      {
        id: "d4-ak-lunch",
        name: "Lunch at Flame Tree Barbecue",
        type: "food",
        lat: 28.3570,
        lng: -81.5895,
        mile: 0,
        eta: "~12 PM",
        description: "Best quick-service BBQ on Disney property. Great waterfront seating area.",
        tips: "The seating area behind the counter is gorgeous and usually less crowded.",
        suggested: true
      },
      {
        id: "d4-pool",
        name: "Fort Wilderness Pool & Relaxation",
        type: "rest",
        lat: 28.4089,
        lng: -81.5639,
        mile: 0,
        eta: "Afternoon",
        description: "Head back to camp for pool time, Tri-Circle-D Ranch (horses), archery, bike rentals, golf cart rental, or just relax at the campsite.",
        tips: "Fort Wilderness has tons of activities \u2014 don't feel like you need to be in a park every minute.",
        suggested: true
      },
      {
        id: "d4-campfire",
        name: "Chip 'n' Dale Campfire Singalong",
        type: "event",
        lat: 28.4075,
        lng: -81.5635,
        mile: 0,
        eta: "~8 PM",
        description: "Free nightly event at Fort Wilderness. Roast marshmallows, singalong with Chip and Dale, followed by an outdoor Disney movie.",
        tips: "Bring your own marshmallows or buy the s'mores kit at the trading post. Great for winding down before tomorrow's Hollywood Studios day.",
        suggested: true
      }
    ]
  },
  {
    day: 5,
    date: "Wednesday, April 8",
    label: "Disney Day 3",
    from: "Fort Wilderness",
    to: "Fort Wilderness",
    totalMiles: 0,
    driveTime: "Park day",
    stops: [
      {
        id: "d5-smugglers",
        name: "Millennium Falcon: Smugglers Run",
        type: "attraction",
        lat: 28.3536,
        lng: -81.5607,
        mile: 0,
        eta: "Morning - starting here",
        description: "Pilot the Millennium Falcon. Six-person crew (2 pilots, 2 gunners, 2 engineers). Pilot is the best seat \u2014 ask for it if you can.",
        address: "Star Wars: Galaxy's Edge, Hollywood Studios",
        tips: "You're already here! Great launch point for the day.",
        suggested: true
      },
      {
        id: "d5-rotr",
        name: "Rise of the Resistance",
        type: "attraction",
        lat: 28.3540,
        lng: -81.5613,
        mile: 0,
        eta: "Late Morning",
        description: "The best ride at Disney World. Period. Multi-stage trackless dark ride through a Star Destroyer. Don't miss this.",
        tips: "Longest line of the day \u2014 grab a Lightning Lane / Single Rider if the standby is 90+ min. Do this BEFORE leaving Galaxy's Edge.",
        suggested: true
      },
      {
        id: "d5-toystory",
        name: "Toy Story Land",
        type: "attraction",
        lat: 28.3553,
        lng: -81.5595,
        mile: 0,
        eta: "Late Morning",
        description: "Slinky Dog Dash, Toy Story Mania, Alien Swirling Saucers. Walk over from Galaxy's Edge.",
        tips: "Slinky Dog Dash is the headliner here \u2014 family coaster, great views.",
        suggested: true
      },
      {
        id: "d5-runaway-railway",
        name: "Mickey & Minnie's Runaway Railway",
        type: "attraction",
        lat: 28.3578,
        lng: -81.5589,
        mile: 0,
        eta: "Late Morning",
        description: "Trackless dark ride based on Mickey Mouse cartoon shorts. Charming, clever, and a must-do.",
        tips: "Located in the old Great Movie Ride building on Hollywood Boulevard.",
        suggested: true
      },
      {
        id: "d5-sunset",
        name: "Tower of Terror & Rock 'n' Roller Coaster",
        type: "attraction",
        lat: 28.3548,
        lng: -81.5570,
        mile: 0,
        eta: "Late Morning / Midday",
        description: "Sunset Boulevard thrill rides. Tower of Terror is a classic 13-story drop. Rock 'n' Roller Coaster launches you to 60 mph in 2.8 seconds.",
        tips: "Knock these out NOW \u2014 once you have the lightsaber after 3 PM you won't want to ride coasters with the case.",
        suggested: true
      },
      {
        id: "d5-lunch",
        name: "Lunch at Docking Bay 7",
        type: "food",
        lat: 28.3536,
        lng: -81.5607,
        mile: 0,
        eta: "~12:30 PM",
        description: "Star Wars themed quick service in Galaxy's Edge. Fried Endorian Tip-Yip (chicken) and the Felucian Garden Spread are highlights. Puts you right where you need to be for Savi's.",
        tips: "Best quick-service food on Disney property. Order via the app to skip the line.",
        suggested: true
      },
      {
        id: "d5-galaxys-edge-explore",
        name: "Wander Black Spire Outpost",
        type: "attraction",
        lat: 28.3536,
        lng: -81.5607,
        mile: 0,
        eta: "~1:45 PM",
        description: "Explore Galaxy's Edge details: Dok-Ondar's Den of Antiquities (right next to Savi's), the marketplace, photo ops with the Falcon. Grab blue or green milk if you haven't.",
        tips: "Dok-Ondar's is incredible \u2014 don't skip it. Animatronic Ithorian collector behind the counter.",
        suggested: true
      },
      {
        id: "d5-savis",
        name: "Savi's Workshop \u2014 Build a Lightsaber",
        type: "dining",
        lat: 28.3538,
        lng: -81.5610,
        mile: 0,
        eta: "2:45 PM",
        description: "Reservation at Savi's Workshop \u2014 Handbuilt Lightsabers. Build your own custom lightsaber in a ~20 min ceremony. One builder + 1 guest goes inside; others wait outside.",
        address: "Savi's Workshop, Galaxy's Edge, Hollywood Studios",
        tips: "ARRIVE 15 MIN EARLY (2:30 PM). Check in at the front. Lightsaber comes in a carrying case \u2014 you can bring it into Oga's after. Skip thrill rides for the rest of the day with the case."
      },
      {
        id: "d5-post-savis",
        name: "Photos & easy time with the lightsaber",
        type: "rest",
        lat: 28.3536,
        lng: -81.5607,
        mile: 0,
        eta: "~3:15 PM",
        description: "Free time after the build. Photos around Galaxy's Edge with your new saber (Millennium Falcon backdrop is iconic), maybe build a droid at Droid Depot if you want.",
        tips: "Avoid coasters with the lightsaber case. Start drifting toward Oga's around 4:25.",
        suggested: true
      },
      {
        id: "d5-ogas",
        name: "Oga's Cantina",
        type: "dining",
        lat: 28.3536,
        lng: -81.5607,
        mile: 0,
        eta: "4:45 PM",
        description: "Reservation at Oga's Cantina in Galaxy's Edge. Themed cocktails and small bites in a Star Wars bar with the DJ droid R-3X spinning tracks.",
        address: "Oga's Cantina, Hollywood Studios, Walt Disney World",
        tips: "Already inside Galaxy's Edge \u2014 just walk over. ~45 min experience. Try the Fuzzy Tauntaun (the foam numbs your lips!) or Yub Nub. You can bring the lightsaber case in."
      },
      {
        id: "d5-hs-evening",
        name: "Hollywood Studios evening",
        type: "attraction",
        lat: 28.3575,
        lng: -81.5583,
        mile: 0,
        eta: "~5:30 PM",
        description: "Anything you missed: Star Tours is a low-wait Star Wars classic. Galaxy's Edge after dark is gorgeous with all the lighting.",
        tips: "Low-key options work best with the lightsaber: shows, walking, photos.",
        suggested: true
      },
      {
        id: "d5-fantasmic",
        name: "Fantasmic!",
        type: "event",
        lat: 28.3575,
        lng: -81.5583,
        mile: 0,
        eta: "8:30 PM",
        description: "Nighttime spectacular featuring water, fire, projections, and Disney characters. One of the best shows at Disney World.",
        address: "Hollywood Hills Amphitheater, Hollywood Studios",
        tips: "Arrive 30-45 min early for good seats. The amphitheater is huge but fills up."
      }
    ]
  },
  {
    day: 6,
    date: "Thursday, April 9",
    label: "Disney Day 4",
    from: "Fort Wilderness",
    to: "Fort Wilderness",
    totalMiles: 0,
    driveTime: "Last full day",
    stops: [
      {
        id: "d6-boat",
        name: "Boat to Magic Kingdom \u2014 Rope Drop",
        type: "park",
        lat: 28.4177,
        lng: -81.5812,
        mile: 0,
        eta: "8:00 AM",
        description: "Boat from Fort Wilderness to Magic Kingdom. Be at the dock by ~7:15 AM to clear tapstiles by 8.",
        address: "Magic Kingdom, Walt Disney World, Orlando, FL",
        tips: "Boat ride is ~10 min and much better than the bus. Last full park day \u2014 make it count.",
        suggested: true
      },
      {
        id: "d6-tron",
        name: "Tron Lightcycle / Run",
        type: "attraction",
        lat: 28.4192,
        lng: -81.5778,
        mile: 0,
        eta: "Rope Drop",
        description: "High-speed motorcycle-style coaster in Tomorrowland. Uses a virtual queue (free) or Lightning Lane (paid).",
        tips: "Open the My Disney Experience app at 7:00 AM SHARP to grab a virtual queue boarding group. They go in seconds.",
        suggested: true
      },
      {
        id: "d6-buzz",
        name: "Buzz Lightyear's Space Ranger Spin",
        type: "attraction",
        lat: 28.4189,
        lng: -81.5780,
        mile: 0,
        eta: "Morning",
        description: "Day TWO of the reopened ride with all-new handheld blasters, reactive targets, and a new practice scene. Lines should still be reasonable today.",
        tips: "Aim for the orange Z targets \u2014 they're worth the most points. The new blasters have always-on lasers.",
        suggested: true
      },
      {
        id: "d6-big-thunder",
        name: "Big Thunder Mountain Railroad",
        type: "attraction",
        lat: 28.4198,
        lng: -81.5847,
        mile: 0,
        eta: "Morning",
        description: "Frontierland mining-train coaster. Wildest ride in the wilderness. Smooth and re-rideable.",
        tips: "Back row gives the best airtime.",
        suggested: true
      },
      {
        id: "d6-tianas",
        name: "Tiana's Bayou Adventure",
        type: "attraction",
        lat: 28.4192,
        lng: -81.5848,
        mile: 0,
        eta: "Late Morning",
        description: "The reimagined Splash Mountain log flume, set after Princess and the Frog. Big drop, great soundtrack.",
        tips: "You will get wet. Hit it before the line balloons \u2014 waits climb fast on warm days.",
        suggested: true
      },
      {
        id: "d6-walkons",
        name: "Walk-on classics",
        type: "attraction",
        lat: 28.4185,
        lng: -81.5810,
        mile: 0,
        eta: "Late Morning",
        description: "Fill the gaps with low-wait gems: PeopleMover, Carousel of Progress, Country Bear Jamboree, Tiki Room, Mickey's PhilharMagic.",
        tips: "PeopleMover is a great way to scout Tomorrowland and rest your feet. Carousel of Progress is air-conditioned and has seats \u2014 perfect mid-morning recovery.",
        suggested: true
      },
      {
        id: "d6-boat-back",
        name: "Boat back to Fort Wilderness",
        type: "rest",
        lat: 28.4089,
        lng: -81.5639,
        mile: 0,
        eta: "12:30 PM",
        description: "Catch the boat from MK back to Fort Wilderness for lunch and a midday break.",
        tips: "Hold onto your park ticket and re-entry stamp \u2014 you're coming back tonight.",
        suggested: true
      },
      {
        id: "d6-trails-end",
        name: "Lunch at Trail's End",
        type: "dining",
        lat: 28.4097,
        lng: -81.5635,
        mile: 0,
        eta: "1:00 PM",
        description: "Buffet at Pioneer Hall, Fort Wilderness. Good value, AC, no crowds. Comfort food before the evening push.",
        address: "Pioneer Hall, Fort Wilderness Resort & Campground",
        tips: "Walk-up usually fine for lunch. Or grab quick eats back at the RV if you'd rather save the cash.",
        suggested: true
      },
      {
        id: "d6-camp-break",
        name: "Camp downtime",
        type: "rest",
        lat: 28.4089,
        lng: -81.5639,
        mile: 0,
        eta: "2:30 PM",
        description: "Pool, nap, golf cart cruise, start packing loose ends for Friday's drive.",
        tips: "Dump tanks now to skip the morning rush tomorrow. Top off fresh water if needed. Lay out drive-day clothes and snacks.",
        suggested: true
      },
      {
        id: "d6-back-to-mk",
        name: "Boat back to Magic Kingdom",
        type: "park",
        lat: 28.4177,
        lng: -81.5812,
        mile: 0,
        eta: "5:00 PM",
        description: "Refreshed for the evening. Last visit to MK on this trip.",
        tips: "Evening at MK has a different magic \u2014 cooler, beautifully lit, and shorter waits on a few rides.",
        suggested: true
      },
      {
        id: "d6-mk-evening",
        name: "Evening in Magic Kingdom",
        type: "attraction",
        lat: 28.4185,
        lng: -81.5810,
        mile: 0,
        eta: "5:30 - 8:00 PM",
        description: "Re-ride favorites and hit anything you missed: Haunted Mansion at dusk is the best, Pirates, Peter Pan, it's a small world, Jungle Cruise at night.",
        tips: "Snack stops: Dole Whip at Aloha Isle, Mickey pretzel, popcorn. Save room for fireworks viewing.",
        suggested: true
      },
      {
        id: "d6-fireworks-spot",
        name: "Stake out fireworks spot on Main Street",
        type: "rest",
        lat: 28.4180,
        lng: -81.5810,
        mile: 0,
        eta: "8:00 PM",
        description: "Find your spot 60-90 min before showtime for prime castle view, or 30 min for an OK spot further back.",
        tips: "Best spots: front of castle (full projections), or hub grass left/right of castle. Hit the bathroom BEFORE you camp out \u2014 you won't want to lose your spot.",
        suggested: true
      },
      {
        id: "d6-happily",
        name: "Happily Ever After fireworks",
        type: "event",
        lat: 28.4177,
        lng: -81.5812,
        mile: 0,
        eta: "9:00 PM",
        description: "Magic Kingdom's fireworks spectacular. ~18 min of castle projections + perimeter fireworks. Confirm exact showtime in the My Disney Experience app the morning of.",
        address: "Cinderella Castle, Magic Kingdom",
        tips: "If you're tired or boat lines look brutal after, plan B is to watch from the Fort Wilderness beach \u2014 free, relaxed, and you can pre-pack the RV."
      },
      {
        id: "d6-packup",
        name: "Boat back & final pack-up",
        type: "rest",
        lat: 28.4089,
        lng: -81.5639,
        mile: 0,
        eta: "After fireworks",
        description: "Boat lines back to Fort Wilderness will be long right after the show. Either bolt immediately or stay 30+ min for One More Disney Day on Main Street to let the crowd thin.",
        tips: "Back at camp: final pack-up, dump tanks if not done, fuel notes for tomorrow. Set out early Friday \u2014 long drive day to Murfreesboro."
      }
    ]
  },
  {
    day: 7,
    date: "Friday, April 10",
    label: "Return Day 1",
    from: "Fort Wilderness, Disney World",
    to: "Murfreesboro, TN",
    totalMiles: 640,
    driveTime: "~9.5 hours",
    stops: [
      {
        id: "d7-start",
        name: "Fort Wilderness, Disney World",
        type: "start",
        lat: 28.4089,
        lng: -81.5639,
        mile: 0,
        eta: "Early Morning",
        description: "Head out! Take FL Turnpike North or I-4 West to I-75 North.",
        tips: "Top off fuel and dump tanks before leaving. Turnpike North to I-75 is the easier exit from Orlando."
      },
      {
        id: "d7-wildwood",
        name: "Wildwood, FL \u2014 TOLL DECISION",
        type: "toll-decision",
        lat: 28.7653,
        lng: -82.0261,
        mile: 85,
        eta: "~1.5 hours",
        description: "If you took the Turnpike: merge onto I-75 North here. If you took I-4: you're already on I-75.",
        tips: "Same toll situation as the way down. Turnpike is easier to navigate out of Orlando."
      },
      {
        id: "d7-lakecity",
        name: "Lake City, FL",
        type: "fuel",
        lat: 30.1897,
        lng: -82.6393,
        mile: 195,
        eta: "~3 hours",
        description: "Major fuel cluster on I-75. Pilot/Flying J and others.",
        address: "I-75, Lake City, FL",
        tips: "Good first fuel stop heading north."
      },
      {
        id: "d7-valdosta",
        name: "Valdosta, GA",
        type: "fuel",
        lat: 30.8327,
        lng: -83.2785,
        mile: 245,
        eta: "~4 hours",
        description: "First Georgia stop. Love's and multiple truck stops.",
        address: "I-75, Valdosta, GA",
        tips: "Fuel is cheaper in Georgia than Florida. Good lunch stop."
      },
      {
        id: "d7-cordele",
        name: "Cordele / Tifton, GA",
        type: "fuel",
        lat: 31.9686,
        lng: -83.7788,
        mile: 310,
        eta: "~5 hours",
        description: "Love's and Pilot/Flying J on I-75.",
        address: "I-75, Cordele/Tifton, GA",
        tips: "Top off if below half tank \u2014 long stretch to Atlanta area."
      },
      {
        id: "d7-atlanta",
        name: "Atlanta bypass (I-285)",
        type: "rest",
        lat: 33.7490,
        lng: -84.3880,
        mile: 460,
        eta: "~7 hours",
        description: "Take I-75 North through Atlanta or I-285 West bypass. Heading north, you MUST pass through the Atlanta area.",
        tips: "Try to hit Atlanta between 10 AM\u20132 PM or after 7 PM to avoid the worst traffic. I-285 West bypass can help avoid downtown."
      },
      {
        id: "d7-chattanooga",
        name: "Chattanooga, TN",
        type: "fuel",
        lat: 35.0456,
        lng: -85.3097,
        mile: 540,
        eta: "~8.5 hours",
        description: "I-75 to I-24 West junction. Love's and Pilot/Flying J nearby.",
        address: "I-75 & I-24 junction, Chattanooga, TN",
        tips: "Merge onto I-24 West toward Nashville. Monteagle Mountain is ahead \u2014 this time you're climbing, which is easier than descending."
      },
      {
        id: "d7-murfreesboro",
        name: "Best Western, Murfreesboro, TN",
        type: "overnight",
        lat: 35.8456,
        lng: -86.3903,
        mile: 640,
        eta: "~9.5 hours",
        description: "Overnight stop. Best Western right off I-24. Just 30 min southeast of Nashville.",
        address: "Murfreesboro, TN (I-24)",
        tips: "Call ahead about RV parking. Murfreesboro has plenty of restaurants and a Walmart nearby."
      }
    ]
  },
  {
    day: 8,
    date: "Saturday, April 11",
    label: "Return Day 2",
    from: "Murfreesboro, TN",
    to: "Winfield, MO",
    totalMiles: 425,
    driveTime: "~7 hours",
    stops: [
      {
        id: "d8-start",
        name: "Murfreesboro, TN",
        type: "start",
        lat: 35.8456,
        lng: -86.3903,
        mile: 0,
        eta: "Morning",
        description: "Head west on I-24 toward Paducah, then I-57 North to I-64 West.",
        tips: "Short day \u2014 only ~7 hours to home. No rush."
      },
      {
        id: "d8-paducah",
        name: "Paducah, KY",
        type: "fuel",
        lat: 37.0834,
        lng: -88.6001,
        mile: 175,
        eta: "~2.5 hours",
        description: "Love's and Pilot/Flying J in the Paducah area. I-24 to I-57 North transition.",
        address: "I-24, Paducah, KY",
        tips: "Good breakfast/fuel stop. Merge onto I-57 North here."
      },
      {
        id: "d8-marion",
        name: "Marion, IL",
        type: "fuel",
        lat: 37.7306,
        lng: -88.9331,
        mile: 225,
        eta: "~3.5 hours",
        description: "I-57/I-24 junction area. Multiple truck stops.",
        address: "I-57 & I-24 junction, Marion, IL",
        tips: "Good lunch stop. Transition from I-57 to I-64 West at Mt. Vernon."
      },
      {
        id: "d8-mtvernon",
        name: "Mt. Vernon, IL",
        type: "fuel",
        lat: 38.3172,
        lng: -88.9031,
        mile: 295,
        eta: "~5 hours",
        description: "I-64/I-57 interchange. Love's, Pilot/Flying J, and TA.",
        address: "I-64 & I-57 junction, Mt. Vernon, IL",
        tips: "Merge onto I-64 West. Last major fuel stop before St. Louis. Fill up here."
      },
      {
        id: "d8-stl",
        name: "St. Louis, MO (I-64 through)",
        type: "rest",
        lat: 38.6270,
        lng: -90.1994,
        mile: 380,
        eta: "~6 hours",
        description: "Pass through St. Louis on I-64 West. Almost home!",
        tips: "Friday afternoon traffic may be heavier through STL. Stay patient."
      },
      {
        id: "d8-home",
        name: "Winfield, MO",
        type: "destination",
        lat: 38.9342,
        lng: -90.7382,
        mile: 425,
        eta: "~7 hours",
        description: "Home sweet home! Trip complete.",
        tips: "Welcome back! Don't forget to dump tanks if you didn't already."
      }
    ]
  }
]

export const tollInfo = {
  title: "Toll Road Info",
  description: "Your route is almost entirely toll-free. The only toll decision is near Orlando.",
  options: [
    {
      name: "Florida's Turnpike (Recommended)",
      cost: "~$10-15 for RV",
      pros: "Less traffic, easier driving, fewer lane changes in an RV",
      cons: "Toll cost",
      details: "Exit I-75 at Wildwood (Exit 329). Toll-by-plate works \u2014 they photograph your plate and mail the bill. Or grab a SunPass at any Florida gas station or Publix."
    },
    {
      name: "I-75 to I-4 (Free)",
      cost: "Free",
      pros: "No tolls",
      cons: "I-4 through Orlando is heavily congested with ongoing construction. Stressful in an RV.",
      details: "Stay on I-75 South to I-4 East into Orlando. Expect stop-and-go traffic, narrow lanes, and aggressive drivers."
    }
  ],
  note: "Several Orlando-area expressways (417, 429, 528) are also toll roads. Your GPS may route you onto one near Disney. All accept toll-by-plate."
}

export const emergencyInfo = {
  roadside: "Call 911 for emergencies. For roadside assistance, check your RV insurance or Good Sam.",
  hospitals: "Major hospitals available in Nashville, Chattanooga, Atlanta, and all Florida cities along I-75.",
}
