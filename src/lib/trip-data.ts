export type StopType =
  | "start"
  | "fuel"
  | "food"
  | "rest"
  | "overnight"
  | "destination"
  | "hotel"
  | "activity"
  | "radio"
  | "pet"
  | "errand";

export interface Stop {
  id: string;
  name: string;
  type: StopType;
  lat: number;
  lng: number;
  mile: number;
  eta: string;
  description: string;
  address?: string;
  tips?: string;
  suggested?: boolean;
}

export interface TripDay {
  day: number;
  date: string;
  label: string;
  from: string;
  to: string;
  totalMiles: number;
  driveTime: string;
  focus: string;
  stops: Stop[];
}

export interface ChecklistItem {
  id: string;
  label: string;
  detail?: string;
}

export interface ChecklistGroup {
  id: string;
  title: string;
  items: ChecklistItem[];
}

export interface Reservation {
  id: string;
  when: string;
  title: string;
  location: string;
  note?: string;
}

export interface RadioRegion {
  id: string;
  area: string;
  klove: string[];
  air1: string[];
  note?: string;
}

export const tripSummary = {
  title: "Vacation Planner",
  subtitle: "Winfield, MO to Springfield, VA",
  dates: "June 13-21, 2026",
  party: "GMC Acadia + 2 dogs",
  homeBase: "Wingate by Wyndham, Springfield, VA",
  route: "Mostly I-64, with I-81 / I-66 into Northern Virginia",
};

export const tripDays: TripDay[] = [
  {
    day: 1,
    date: "Saturday, June 13",
    label: "Drive to WV",
    from: "Winfield, MO",
    to: "Dunbar, WV",
    totalMiles: 527,
    driveTime: "About 7 hr 45 min",
    focus: "Leave around 8:00 AM, keep dog breaks predictable, and get settled at Super 8 in Dunbar.",
    stops: [
      {
        id: "d1-start",
        name: "Leave Winfield",
        type: "start",
        lat: 38.9342,
        lng: -90.7382,
        mile: 0,
        eta: "8:00 AM",
        description: "Start east toward I-64 with the dogs walked, water topped off, and the Acadia packed for quick leash access.",
        address: "Winfield, MO",
      },
      {
        id: "d1-new-baden",
        name: "Love's New Baden, IL",
        type: "fuel",
        lat: 38.534515,
        lng: -89.732292,
        mile: 75,
        eta: "9:15 AM",
        description: "Love's Travel Stop, I-64 exit 27. Good early fuel, restroom, and dog walk reset.",
        address: "8690 Richter School Rd, New Baden, IL 62265",
        tips: "Phone: (618) 588-2257. Keep the dogs on leash before opening doors.",
      },
      {
        id: "d1-mt-vernon",
        name: "Love's Mt Vernon, IL",
        type: "fuel",
        lat: 38.27793,
        lng: -88.903162,
        mile: 130,
        eta: "10:15 AM",
        description: "Love's at I-64 exit 80 / IL-37. Use this as the reliable fuel and snack stop before Indiana.",
        address: "3101 S 10th St, Mt Vernon, IL 62864",
        tips: "Phone: (618) 731-7038.",
      },
      {
        id: "d1-haubstadt",
        name: "Love's Haubstadt, IN",
        type: "pet",
        lat: 38.17337,
        lng: -87.55159,
        mile: 215,
        eta: "11:45 AM",
        description: "Love's on I-64 exit 25B. Good dog walk and lunch decision point near Evansville.",
        address: "901 East 1250 South, Haubstadt, IN 47639",
        tips: "Phone: (812) 768-5838.",
      },
      {
        id: "d1-waddy",
        name: "Love's Waddy, KY",
        type: "fuel",
        lat: 38.152234,
        lng: -85.07025,
        mile: 365,
        eta: "2:15 PM",
        description: "Love's on I-64 exit 43 between Louisville and Lexington. Good fuel and dog break before eastern Kentucky.",
        address: "1940 Waddy Rd, Waddy, KY 40076",
        tips: "Phone: (502) 829-0157.",
      },
      {
        id: "d1-grayson",
        name: "Love's Grayson, KY",
        type: "pet",
        lat: 38.341101,
        lng: -82.941906,
        mile: 505,
        eta: "4:45 PM",
        description: "Last planned Love's before Dunbar. Use it if the dogs need one more walk before hotel check-in.",
        address: "750 N Carol Malone Blvd, Grayson, KY 41143",
        tips: "Phone: (606) 474-6009.",
      },
      {
        id: "d1-super8",
        name: "Super 8 by Wyndham Dunbar",
        type: "overnight",
        lat: 38.3676,
        lng: -81.7397,
        mile: 527,
        eta: "Evening",
        description: "Overnight stop. Follow I-64 E to exit 53 for WV-25 E / 10th St, then take Dunbar Ave to the hotel.",
        address: "911 Dunbar Ave, Dunbar, WV 25064",
        tips: "Confirm the pet room, fee, potty area, and where dogs can enter before unloading everything.",
      },
    ],
  },
  {
    day: 2,
    date: "Sunday, June 14",
    label: "Drive to VA",
    from: "Dunbar, WV",
    to: "Springfield, VA",
    totalMiles: 385,
    driveTime: "About 6-7 hours",
    focus: "Finish the drive to Springfield and get set up for the week at Wingate.",
    stops: [
      {
        id: "d2-start",
        name: "Leave Dunbar",
        type: "start",
        lat: 38.3676,
        lng: -81.7397,
        mile: 0,
        eta: "Morning",
        description: "Walk the dogs before loading, then continue east on I-64 through Charleston and into Virginia.",
        address: "911 Dunbar Ave, Dunbar, WV 25064",
      },
      {
        id: "d2-covington",
        name: "Love's Covington, VA",
        type: "fuel",
        lat: 37.79431,
        lng: -79.884011,
        mile: 160,
        eta: "Late morning",
        description: "Love's on I-64 exit 21. Strong fuel, restroom, and dog walk option after the West Virginia mountain stretch.",
        address: "9104 Winterberry Ave, Covington, VA 24426",
        tips: "Phone: (540) 862-9044.",
      },
      {
        id: "d2-staunton",
        name: "Love's Staunton, VA",
        type: "pet",
        lat: 38.022101,
        lng: -79.142299,
        mile: 210,
        eta: "Early afternoon",
        description: "Love's near I-64 / I-81. Good place to stretch before the final northern Virginia push.",
        address: "3499 Lee Jackson Hwy, Staunton, VA 24401",
        tips: "Phone: (540) 337-1070.",
      },
      {
        id: "d2-toms-brook",
        name: "Love's Toms Brook, VA",
        type: "fuel",
        lat: 38.96563,
        lng: -78.439457,
        mile: 280,
        eta: "Mid afternoon",
        description: "Love's on I-81 exit 291. Last planned Love's before the Northern Virginia traffic zone.",
        address: "1015 Mount Olive Rd, Toms Brook, VA 22660",
        tips: "Phone: (540) 436-8048.",
      },
      {
        id: "d2-wingate",
        name: "Wingate by Wyndham Springfield",
        type: "hotel",
        lat: 38.775,
        lng: -77.175,
        mile: 385,
        eta: "Afternoon / evening",
        description: "Home base for June 14-20. Unload dog gear first, then luggage.",
        address: "6550 Loisdale Ct, Springfield, VA 22150",
        tips: "Confirm the pet policy, relief area, elevator/stair access, and whether dogs can be left in the room.",
      },
    ],
  },
  {
    day: 3,
    date: "Monday, June 15",
    label: "Springfield Base",
    from: "Wingate Springfield",
    to: "Northern Virginia / DC area",
    totalMiles: 0,
    driveTime: "Local plans",
    focus: "First full day: get oriented, keep the dogs on their normal schedule, and avoid overplanning.",
    stops: [
      {
        id: "d3-morning-dogs",
        name: "Morning dog routine",
        type: "pet",
        lat: 38.775,
        lng: -77.175,
        mile: 0,
        eta: "Morning",
        description: "Walk, water, breakfast, and confirm the room setup before leaving for local plans.",
        address: "6550 Loisdale Ct, Springfield, VA 22150",
      },
      {
        id: "d3-local",
        name: "Local day plan",
        type: "activity",
        lat: 38.8895,
        lng: -77.0353,
        mile: 0,
        eta: "Daytime",
        description: "Add your sightseeing, family visit, meal, or errand plan here once the schedule is known.",
        suggested: true,
      },
      {
        id: "d3-evening",
        name: "Evening reset",
        type: "errand",
        lat: 38.775,
        lng: -77.175,
        mile: 0,
        eta: "Evening",
        description: "Refill water, prep dog food for tomorrow, charge phones, and check weather/traffic.",
        suggested: true,
      },
    ],
  },
  {
    day: 4,
    date: "Tuesday, June 16",
    label: "Flexible Day",
    from: "Wingate Springfield",
    to: "Northern Virginia / DC area",
    totalMiles: 0,
    driveTime: "Local plans",
    focus: "Keep one anchor activity and preserve a midday dog check-in.",
    stops: [
      {
        id: "d4-anchor",
        name: "Anchor activity",
        type: "activity",
        lat: 38.8895,
        lng: -77.0353,
        mile: 0,
        eta: "Morning",
        description: "Add the main plan for the day here.",
        suggested: true,
      },
      {
        id: "d4-dog-break",
        name: "Midday dog check",
        type: "pet",
        lat: 38.775,
        lng: -77.175,
        mile: 0,
        eta: "Midday",
        description: "Return to the hotel or arrange coverage so the dogs are not stuck too long.",
      },
      {
        id: "d4-dinner",
        name: "Dinner / supplies",
        type: "food",
        lat: 38.775,
        lng: -77.175,
        mile: 0,
        eta: "Evening",
        description: "Pick up anything needed for the room, dogs, or next day's outing.",
        suggested: true,
      },
    ],
  },
  {
    day: 5,
    date: "Wednesday, June 17",
    label: "Flexible Day",
    from: "Wingate Springfield",
    to: "Northern Virginia / DC area",
    totalMiles: 0,
    driveTime: "Local plans",
    focus: "A flexible middle-of-week day for sightseeing, visiting, or a slower pace.",
    stops: [
      {
        id: "d5-plan",
        name: "Day plan",
        type: "activity",
        lat: 38.8895,
        lng: -77.0353,
        mile: 0,
        eta: "Daytime",
        description: "Add today's specific itinerary when ready.",
        suggested: true,
      },
      {
        id: "d5-dogs",
        name: "Dog care blocks",
        type: "pet",
        lat: 38.775,
        lng: -77.175,
        mile: 0,
        eta: "Morning / midday / evening",
        description: "Keep water, food, medication, and walks on the checklist instead of relying on memory.",
      },
    ],
  },
  {
    day: 6,
    date: "Thursday, June 18",
    label: "Flexible Day",
    from: "Wingate Springfield",
    to: "Northern Virginia / DC area",
    totalMiles: 0,
    driveTime: "Local plans",
    focus: "Protect energy for the return drive by keeping this day realistic.",
    stops: [
      {
        id: "d6-plan",
        name: "Main plan",
        type: "activity",
        lat: 38.8895,
        lng: -77.0353,
        mile: 0,
        eta: "Daytime",
        description: "Add the day's confirmed plan here.",
        suggested: true,
      },
      {
        id: "d6-laundry",
        name: "Laundry and repack",
        type: "errand",
        lat: 38.775,
        lng: -77.175,
        mile: 0,
        eta: "Evening",
        description: "Start separating clean clothes, dirty clothes, dog gear, and drive-day snacks.",
        suggested: true,
      },
    ],
  },
  {
    day: 7,
    date: "Friday, June 19",
    label: "Last VA Day",
    from: "Wingate Springfield",
    to: "Northern Virginia / DC area",
    totalMiles: 0,
    driveTime: "Local plans",
    focus: "Last full day in Springfield. Pack enough tonight to make Saturday departure easy.",
    stops: [
      {
        id: "d7-last-plan",
        name: "Last local plans",
        type: "activity",
        lat: 38.8895,
        lng: -77.0353,
        mile: 0,
        eta: "Daytime",
        description: "Finish any must-do local plans or visits.",
        suggested: true,
      },
      {
        id: "d7-pack",
        name: "Pack for return leg",
        type: "errand",
        lat: 38.775,
        lng: -77.175,
        mile: 0,
        eta: "Evening",
        description: "Stage dog leashes, bowls, food, meds, hotel confirmation, and drive-day clothes.",
      },
    ],
  },
  {
    day: 8,
    date: "Saturday, June 20",
    label: "Drive to KY",
    from: "Springfield, VA",
    to: "Winchester, KY",
    totalMiles: 480,
    driveTime: "About 7-8 hours",
    focus: "Leave Springfield, work back west through the mountains, and overnight at Baymont in Winchester.",
    stops: [
      {
        id: "d8-start",
        name: "Leave Wingate Springfield",
        type: "start",
        lat: 38.775,
        lng: -77.175,
        mile: 0,
        eta: "Morning",
        description: "Walk dogs, load the Acadia, check the room, and leave before traffic builds.",
        address: "6550 Loisdale Ct, Springfield, VA 22150",
      },
      {
        id: "d8-toms-brook",
        name: "Love's Toms Brook, VA",
        type: "pet",
        lat: 38.96563,
        lng: -78.439457,
        mile: 95,
        eta: "Late morning",
        description: "First planned dog walk and restroom stop after leaving Northern Virginia.",
        address: "1015 Mount Olive Rd, Toms Brook, VA 22660",
      },
      {
        id: "d8-staunton",
        name: "Love's Staunton, VA",
        type: "fuel",
        lat: 38.022101,
        lng: -79.142299,
        mile: 165,
        eta: "Midday",
        description: "Fuel and lunch stop before continuing west on I-64.",
        address: "3499 Lee Jackson Hwy, Staunton, VA 24401",
      },
      {
        id: "d8-covington",
        name: "Love's Covington, VA",
        type: "pet",
        lat: 37.79431,
        lng: -79.884011,
        mile: 215,
        eta: "Early afternoon",
        description: "Good dog break before the West Virginia stretch.",
        address: "9104 Winterberry Ave, Covington, VA 24426",
      },
      {
        id: "d8-grayson",
        name: "Love's Grayson, KY",
        type: "fuel",
        lat: 38.341101,
        lng: -82.941906,
        mile: 390,
        eta: "Late afternoon",
        description: "Reliable stop before Lexington / Winchester.",
        address: "750 N Carol Malone Blvd, Grayson, KY 41143",
      },
      {
        id: "d8-baymont",
        name: "Baymont by Wyndham Winchester",
        type: "overnight",
        lat: 38.0018,
        lng: -84.1796,
        mile: 480,
        eta: "Evening",
        description: "Return-leg overnight stop.",
        address: "960 Interstate Dr, Winchester, KY 40391",
        tips: "Confirm the pet room and walk the dogs before unloading the whole car.",
      },
    ],
  },
  {
    day: 9,
    date: "Sunday, June 21",
    label: "Drive Home",
    from: "Winchester, KY",
    to: "Winfield, MO",
    totalMiles: 390,
    driveTime: "About 6 hours",
    focus: "Final push home on I-64. Keep the last day simple.",
    stops: [
      {
        id: "d9-start",
        name: "Leave Baymont Winchester",
        type: "start",
        lat: 38.0018,
        lng: -84.1796,
        mile: 0,
        eta: "Morning",
        description: "Walk dogs, load up, and get back to I-64 west.",
        address: "960 Interstate Dr, Winchester, KY 40391",
      },
      {
        id: "d9-waddy",
        name: "Love's Waddy, KY",
        type: "fuel",
        lat: 38.152234,
        lng: -85.07025,
        mile: 80,
        eta: "Mid morning",
        description: "Fuel and dog break before Louisville / Indiana.",
        address: "1940 Waddy Rd, Waddy, KY 40076",
      },
      {
        id: "d9-leavenworth",
        name: "Love's Leavenworth, IN",
        type: "pet",
        lat: 38.244564,
        lng: -86.357526,
        mile: 170,
        eta: "Late morning",
        description: "Love's on I-64 exit 92 / IN-66. Good midpoint dog walk.",
        address: "6582 S State Road 66, Leavenworth, IN 47137",
      },
      {
        id: "d9-mt-vernon",
        name: "Love's Mt Vernon, IL",
        type: "fuel",
        lat: 38.27793,
        lng: -88.903162,
        mile: 305,
        eta: "Afternoon",
        description: "Last planned Love's before the St. Louis / Winfield home stretch.",
        address: "3101 S 10th St, Mt Vernon, IL 62864",
      },
      {
        id: "d9-home",
        name: "Home",
        type: "destination",
        lat: 38.9342,
        lng: -90.7382,
        mile: 390,
        eta: "Afternoon",
        description: "Unload dogs, meds, food, chargers, and overnight bags first.",
        address: "Winfield, MO",
      },
    ],
  },
];

export const checklistGroups: ChecklistGroup[] = [
  {
    id: "before",
    title: "Before leaving",
    items: [
      { id: "hotel-details", label: "Save hotel confirmations and pet policy details" },
      { id: "car-check", label: "GMC Acadia fuel, tire pressure, fluids, insurance, roadside info" },
      { id: "route-downloads", label: "Download offline maps, hotel confirmations, and station finder links" },
      { id: "meds-docs", label: "Pack IDs, meds, chargers, spare keys, and dog vaccination records" },
    ],
  },
  {
    id: "dogs",
    title: "Two-dog kit",
    items: [
      { id: "dog-food", label: "Food, treats, bowls, measuring scoop, and bottled water" },
      { id: "dog-walk", label: "Leashes, harnesses, poop bags, wipes, towels, and flashlight" },
      { id: "dog-room", label: "Crates or beds, blankets, toys, and a room-cleanup bag" },
      { id: "dog-safety", label: "Never leave dogs in the Acadia during warm stops" },
    ],
  },
  {
    id: "drive",
    title: "Drive day kit",
    items: [
      { id: "snacks", label: "Cooler, water, snacks, napkins, trash bags" },
      { id: "cab", label: "Sunglasses, chargers, radio list, paper route backup" },
      { id: "comfort", label: "Pillows, headphones, entertainment, and extra clothes" },
      { id: "arrival", label: "Arrival bag: toiletries, sleep clothes, dog supplies, tomorrow clothes" },
    ],
  },
  {
    id: "return",
    title: "Coming home",
    items: [
      { id: "laundry", label: "Laundry and wet items separated" },
      { id: "dog-repack", label: "Dog food and meds packed for both return days" },
      { id: "hotel-sweep", label: "Final room sweep: chargers, under beds, bathroom, fridge" },
      { id: "home-unload", label: "Unload dogs, food, laundry, meds, chargers, and documents first" },
    ],
  },
];

export const reservations: Reservation[] = [
  {
    id: "super8",
    when: "Sat Jun 13",
    title: "Super 8 by Wyndham",
    location: "911 Dunbar Ave, Dunbar, WV",
    note: "Overnight on outbound leg. Pet details saved.",
  },
  {
    id: "wingate",
    when: "Sun Jun 14 - Sat Jun 20",
    title: "Wingate by Wyndham",
    location: "6550 Loisdale Ct, Springfield, VA",
    note: "Main stay for the week. Dog rules noted.",
  },
  {
    id: "baymont",
    when: "Sat Jun 20",
    title: "Baymont by Wyndham",
    location: "960 Interstate Dr, Winchester, KY",
    note: "Return-leg overnight. Pet details saved.",
  },
];

export const routeNotes = [
  "Route is mostly I-64. Day 2 and the return use I-81 / I-66 for the Northern Virginia connection.",
  "Plan dog breaks every 2-3 hours, even if fuel is not needed.",
  "Use Love's stops as the default because they are predictable for fuel, restrooms, and dog walks.",
  "Mountain and valley sections may have radio gaps. Keep K-LOVE and Air1 streams ready as backup.",
];

export const radioRegions: RadioRegion[] = [
  {
    id: "mo-il",
    area: "Winfield / St. Louis / southern Illinois",
    klove: ["MO: Columbia 106.5 or 92.1", "IL: Springfield 96.7", "IL: Decatur 99.3"],
    air1: ["IL: Decatur 88.5, 102.3, or 99.3"],
    note: "Air1 has fewer I-64 corridor signals here; stream may be easiest near St. Louis.",
  },
  {
    id: "in-ky",
    area: "Indiana and Kentucky I-64 corridor",
    klove: ["IN: Evansville 94.9, 95.3, or 101.9", "KY: Louisville 95.1 or 100.5", "KY: Lexington 89.9", "KY: Morehead 93.3"],
    air1: ["IN: New Washington 88.3", "KY: Louisville 88.9, 97.9, or 100.5", "KY: Lexington 107.1", "KY: Louisa 92.3"],
  },
  {
    id: "wv",
    area: "Huntington / Charleston / Dunbar, WV",
    klove: ["Huntington 91.9", "Charleston 98.1 or 93.3", "Saint Albans 94.9", "Ripley 90.7"],
    air1: ["Charleston 88.9 or 93.3", "South Charleston 89.3"],
  },
  {
    id: "va-dc",
    area: "Western Virginia, Shenandoah Valley, and DC area",
    klove: ["Harrisonburg / Staunton 102.9", "Winchester 103.3", "Manassas 94.3", "Washington 107.3"],
    air1: ["Roanoke 102.5", "Washington DC / Winchester 92.5", "Washington 97.1"],
    note: "For Springfield, try K-LOVE Washington 107.3 and Air1 Washington 97.1 or 92.5.",
  },
];

export const tollInfo = {
  title: "Road Notes",
  description: "No major planned toll choice like the Florida route. Northern Virginia traffic is the main variable.",
  options: [
    {
      name: "Outbound to Dunbar",
      cost: "Mostly I-64",
      pros: "Simple route with several Love's options",
      cons: "Long first day with dogs",
      details: "Follow I-64 E to WV-25 E / 10th St in Dunbar. Take exit 53 from I-64 E.",
    },
    {
      name: "Dunbar to Springfield",
      cost: "I-64 / I-81 / I-66",
      pros: "Direct mountain-to-Northern-Virginia route",
      cons: "Traffic builds as you approach the DC area",
      details: "Check live traffic before committing to the final approach into Springfield.",
    },
  ],
  note: "Always verify live traffic before Northern Virginia and before hotel arrival.",
};
