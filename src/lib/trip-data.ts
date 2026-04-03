export interface Stop {
  id: string
  name: string
  type: "start" | "fuel" | "food" | "rest" | "overnight" | "toll-decision" | "destination"
  lat: number
  lng: number
  mile: number
  eta: string
  description: string
  address?: string
  tips?: string
  checked?: boolean
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
    date: "Thursday, April 10",
    label: "Return Day 1",
    from: "Fort Wilderness, Disney World",
    to: "Murfreesboro, TN",
    totalMiles: 640,
    driveTime: "~9.5 hours",
    stops: [
      {
        id: "d3-start",
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
        id: "d3-wildwood",
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
        id: "d3-lakecity",
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
        id: "d3-valdosta",
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
        id: "d3-cordele",
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
        id: "d3-atlanta",
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
        id: "d3-chattanooga",
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
        id: "d3-murfreesboro",
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
    day: 4,
    date: "Friday, April 11",
    label: "Return Day 2",
    from: "Murfreesboro, TN",
    to: "Winfield, MO",
    totalMiles: 425,
    driveTime: "~7 hours",
    stops: [
      {
        id: "d4-start",
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
        id: "d4-paducah",
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
        id: "d4-marion",
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
        id: "d4-mtvernon",
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
        id: "d4-stl",
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
        id: "d4-home",
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
