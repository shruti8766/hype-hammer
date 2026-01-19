
import { SportType, PlayerRole, AuctionConfig, AuctionType, Player, Team } from './types';

export const SPORT_DEFAULTS: Record<SportType, Partial<AuctionConfig>> = {
  [SportType.CRICKET]: {
    squadSize: { min: 18, max: 25 },
    totalBudget: 100000000, // 100 Crore
    roles: [
      { id: 'bat', name: 'Batsman' },
      { id: 'bowl', name: 'Bowler' },
      { id: 'ar', name: 'All-Rounder' },
      { id: 'wk', name: 'Wicket-Keeper' }
    ],
    rules: { overseasLimit: 8 }
  },
  [SportType.KABADDI]: {
    squadSize: { min: 15, max: 20 },
    totalBudget: 50000000,
    roles: [
      { id: 'raider', name: 'Raider' },
      { id: 'defender', name: 'Defender' },
      { id: 'ar', name: 'All-Rounder' }
    ]
  },
  [SportType.FOOTBALL]: {
    squadSize: { min: 20, max: 30 },
    totalBudget: 80000000,
    roles: [
      { id: 'fwd', name: 'Forward' },
      { id: 'mid', name: 'Midfielder' },
      { id: 'def', name: 'Defender' },
      { id: 'gk', name: 'Goalkeeper' }
    ]
  },
  [SportType.ESPORTS]: {
    squadSize: { min: 5, max: 8 },
    totalBudget: 1000000,
    roles: [
      { id: 'igl', name: 'IGL' },
      { id: 'fragger', name: 'Entry Fragger' },
      { id: 'support', name: 'Support' },
      { id: 'sniper', name: 'Sniper' }
    ]
  },
  [SportType.VOLLEYBALL]: {
    squadSize: { min: 12, max: 18 },
    totalBudget: 40000000,
    roles: [
      { id: 'setter', name: 'Setter' },
      { id: 'spiker', name: 'Spiker' },
      { id: 'libero', name: 'Libero' },
      { id: 'blocker', name: 'Middle Blocker' }
    ]
  },
  [SportType.HOCKEY]: {
    squadSize: { min: 16, max: 24 },
    totalBudget: 60000000,
    roles: [
      { id: 'forward', name: 'Forward' },
      { id: 'mid', name: 'Midfielder' },
      { id: 'def', name: 'Defender' },
      { id: 'gk', name: 'Goalkeeper' }
    ]
  },
  [SportType.BADMINTON]: {
    squadSize: { min: 8, max: 12 },
    totalBudget: 30000000,
    roles: [
      { id: 'singles', name: 'Singles Player' },
      { id: 'doubles', name: 'Doubles Player' },
      { id: 'mixed', name: 'Mixed Doubles Player' }
    ]
  },
  [SportType.TABLE_TENNIS]: {
    squadSize: { min: 6, max: 10 },
    totalBudget: 20000000,
    roles: [
      { id: 'singles', name: 'Singles Player' },
      { id: 'doubles', name: 'Doubles Player' }
    ]
  },
  [SportType.WRESTLING]: {
    squadSize: { min: 10, max: 16 },
    totalBudget: 35000000,
    roles: [
      { id: 'freestyle', name: 'Freestyle' },
      { id: 'greco', name: 'Greco-Roman' },
      { id: 'welter', name: 'Welterweight' },
      { id: 'heavy', name: 'Heavyweight' }
    ]
  },
  [SportType.CUSTOM]: {
    squadSize: { min: 1, max: 100 },
    totalBudget: 1000000,
    roles: [{ id: 'player', name: 'Player' }]
  }
};

export const INITIAL_CONFIG: AuctionConfig = {
  sport: SportType.CRICKET,
  type: AuctionType.OPEN,
  level: 'Professional',
  squadSize: { min: 18, max: 25 },
  totalBudget: 100000000,
  roles: SPORT_DEFAULTS[SportType.CRICKET].roles || [],
  rules: { overseasLimit: 8 }
};

export const MOCK_TEAMS: Team[] = [
  {
    id: 't1',
    name: 'Mumbai Titans',
    logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200&h=200',
    budget: 100000000,
    remainingBudget: 100000000,
    players: [],
    owner: 'Reliance Sports Group',
    homeCity: 'Mumbai',
    foundationYear: 2008
  },
  {
    id: 't2',
    name: 'Bangalore Royals',
    logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200&h=200',
    budget: 100000000,
    remainingBudget: 100000000,
    players: [],
    owner: 'United Spirits',
    homeCity: 'Bengaluru',
    foundationYear: 2008
  },
  {
    id: 't3',
    name: 'Chennai Super Kings',
    logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200&h=200',
    budget: 100000000,
    remainingBudget: 100000000,
    players: [],
    owner: 'India Cements',
    homeCity: 'Chennai',
    foundationYear: 2008
  },
  {
    id: 't4',
    name: 'Delhi Capitals',
    logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200&h=200',
    budget: 100000000,
    remainingBudget: 100000000,
    players: [],
    owner: 'GMR & JSW',
    homeCity: 'New Delhi',
    foundationYear: 2008
  }
];

export const MOCK_PLAYERS: Player[] = [
  {
    id: 'p1',
    name: 'Virat Kohli',
    roleId: 'bat',
    basePrice: 20000000,
    isOverseas: false,
    status: 'PENDING',
    age: 35,
    nationality: 'Indian',
    bio: 'Modern day legend. Highest century maker in ODIs.',
    stats: '80 Centuries, 13000+ Runs, Avg 58.6',
    imageUrl: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p2',
    name: 'Ben Stokes',
    roleId: 'ar',
    basePrice: 15000000,
    isOverseas: true,
    status: 'PENDING',
    age: 32,
    nationality: 'English',
    bio: 'Premier all-rounder. Match winner in clutch situations.',
    stats: '6000+ Runs, 200+ Wickets, WC Winner',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p3',
    name: 'Rashid Khan',
    roleId: 'bowl',
    basePrice: 12000000,
    isOverseas: true,
    status: 'PENDING',
    age: 25,
    nationality: 'Afghan',
    bio: 'World class leg spinner. T20 specialist.',
    stats: '500+ T20 Wickets, Eco 6.4',
    imageUrl: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p4',
    name: 'Jasprit Bumrah',
    roleId: 'bowl',
    basePrice: 20000000,
    isOverseas: false,
    status: 'PENDING',
    age: 30,
    nationality: 'Indian',
    bio: 'Unique action, deadly yorkers. Best death bowler.',
    stats: '350+ Wickets, Eco 4.5 in ODIs',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'p5',
    name: 'Kylian Mbappé',
    roleId: 'fwd',
    basePrice: 50000000,
    isOverseas: true,
    status: 'PENDING',
    age: 25,
    nationality: 'French',
    bio: 'World Cup winner. Blistering pace and clinical finish.',
    stats: '250+ Career Goals, 3x Ligue 1 POTY',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

// Mock data for multiple sports with matches
export const MOCK_SPORTS_DATA: SportData[] = [
  {
    sportType: SportType.CRICKET,
    matches: [
      {
        id: 'match-cricket-1',
        name: 'IPL 2024 - MI vs CSK',
        createdAt: new Date('2024-01-15'),
        config: { ...SPORT_DEFAULTS[SportType.CRICKET], auctionType: 'ASCENDING' },
        players: [
          { id: 'cricket1-p1', name: 'Rohit Sharma', roleId: 'bat', basePrice: 15000000, isOverseas: false, status: 'UNSOLD' },
          { id: 'cricket1-p2', name: 'Virat Kohli', roleId: 'bat', basePrice: 17000000, isOverseas: false, status: 'UNSOLD' },
          { id: 'cricket1-p3', name: 'David Warner', roleId: 'bat', basePrice: 12500000, isOverseas: true, status: 'UNSOLD' },
          { id: 'cricket1-p4', name: 'Jasprit Bumrah', roleId: 'bowl', basePrice: 9000000, isOverseas: false, status: 'UNSOLD' },
          { id: 'cricket1-p5', name: 'Pat Cummins', roleId: 'bowl', basePrice: 8500000, isOverseas: true, status: 'UNSOLD' }
        ],
        teams: [
          { id: 'cricket1-t1', name: 'Mumbai Indians', budget: 100000000, owner: 'Mukesh Ambani', homeCity: 'Mumbai', foundationYear: 2008, players: [], remainingBudget: 100000000 },
          { id: 'cricket1-t2', name: 'Chennai Super Kings', budget: 95000000, owner: 'N. Srinivasan', homeCity: 'Chennai', foundationYear: 2008, players: [], remainingBudget: 95000000 }
        ],
        history: [],
        status: 'SETUP'
      },
      {
        id: 'match-cricket-2',
        name: 'India vs Australia Test',
        createdAt: new Date('2024-02-01'),
        config: { ...SPORT_DEFAULTS[SportType.CRICKET], auctionType: 'ASCENDING' },
        players: [
          { id: 'cricket2-p1', name: 'Steve Smith', roleId: 'bat', basePrice: 12000000, isOverseas: true, status: 'UNSOLD' },
          { id: 'cricket2-p2', name: 'Travis Head', roleId: 'bat', basePrice: 10000000, isOverseas: true, status: 'UNSOLD' },
          { id: 'cricket2-p3', name: 'Josh Hazlewood', roleId: 'bowl', basePrice: 8000000, isOverseas: true, status: 'UNSOLD' }
        ],
        teams: [
          { id: 'cricket2-t1', name: 'India National', budget: 150000000, owner: 'BCCI', homeCity: 'Delhi', foundationYear: 1932, players: [], remainingBudget: 150000000 },
          { id: 'cricket2-t2', name: 'Australia National', budget: 150000000, owner: 'Cricket Australia', homeCity: 'Melbourne', foundationYear: 1877, players: [], remainingBudget: 150000000 }
        ],
        history: [],
        status: 'SETUP'
      }
    ]
  },
  {
    sportType: SportType.FOOTBALL,
    matches: [
      {
        id: 'match-football-1',
        name: 'Premier League - Manchester Derby',
        createdAt: new Date('2024-01-20'),
        config: { ...SPORT_DEFAULTS[SportType.FOOTBALL], auctionType: 'ASCENDING' },
        players: [
          { id: 'football1-p1', name: 'Erling Haaland', roleId: 'fwd', basePrice: 20000000, isOverseas: true, status: 'UNSOLD' },
          { id: 'football1-p2', name: 'Bruno Fernandes', roleId: 'mid', basePrice: 16000000, isOverseas: true, status: 'UNSOLD' },
          { id: 'football1-p3', name: 'David De Gea', roleId: 'gk', basePrice: 12000000, isOverseas: true, status: 'UNSOLD' },
          { id: 'football1-p4', name: 'Phil Foden', roleId: 'mid', basePrice: 15000000, isOverseas: true, status: 'UNSOLD' }
        ],
        teams: [
          { id: 'football1-t1', name: 'Manchester City', budget: 200000000, owner: 'City Football Group', homeCity: 'Manchester', foundationYear: 1880, players: [], remainingBudget: 200000000 },
          { id: 'football1-t2', name: 'Manchester United', budget: 180000000, owner: 'Glazer Family', homeCity: 'Manchester', foundationYear: 1878, players: [], remainingBudget: 180000000 }
        ],
        history: [],
        status: 'SETUP'
      },
      {
        id: 'match-football-2',
        name: 'La Liga - El Clásico',
        createdAt: new Date('2024-02-05'),
        config: { ...SPORT_DEFAULTS[SportType.FOOTBALL], auctionType: 'ASCENDING' },
        players: [
          { id: 'football2-p1', name: 'Kylian Mbappé', roleId: 'fwd', basePrice: 22000000, isOverseas: true, status: 'UNSOLD' },
          { id: 'football2-p2', name: 'Vinicius Jr', roleId: 'fwd', basePrice: 18000000, isOverseas: true, status: 'UNSOLD' },
          { id: 'football2-p3', name: 'Rodri', roleId: 'mid', basePrice: 17000000, isOverseas: true, status: 'UNSOLD' }
        ],
        teams: [
          { id: 'football2-t1', name: 'FC Barcelona', budget: 180000000, owner: 'FC Barcelona', homeCity: 'Barcelona', foundationYear: 1899, players: [], remainingBudget: 180000000 },
          { id: 'football2-t2', name: 'Real Madrid', budget: 200000000, owner: 'Florentino Pérez', homeCity: 'Madrid', foundationYear: 1902, players: [], remainingBudget: 200000000 }
        ],
        history: [],
        status: 'SETUP'
      }
    ]
  },
  {
    sportType: SportType.BASKETBALL,
    matches: [
      {
        id: 'match-basketball-1',
        name: 'NBA Finals - Lakers vs Celtics',
        createdAt: new Date('2024-01-25'),
        config: { ...SPORT_DEFAULTS[SportType.BASKETBALL], auctionType: 'ASCENDING' },
        players: [
          { id: 'basketball1-p1', name: 'LeBron James', roleId: 'forward', basePrice: 15000000, isOverseas: false, status: 'UNSOLD' },
          { id: 'basketball1-p2', name: 'Stephen Curry', roleId: 'guard', basePrice: 16000000, isOverseas: false, status: 'UNSOLD' },
          { id: 'basketball1-p3', name: 'Luka Doncic', roleId: 'guard', basePrice: 14000000, isOverseas: true, status: 'UNSOLD' }
        ],
        teams: [
          { id: 'basketball1-t1', name: 'Los Angeles Lakers', budget: 150000000, owner: 'Jeanie Buss', homeCity: 'Los Angeles', foundationYear: 1947, players: [], remainingBudget: 150000000 },
          { id: 'basketball1-t2', name: 'Boston Celtics', budget: 150000000, owner: 'Wyc Grousbeck', homeCity: 'Boston', foundationYear: 1946, players: [], remainingBudget: 150000000 }
        ],
        history: [],
        status: 'SETUP'
      }
    ]
  },
  {
    sportType: SportType.KABADDI,
    matches: [
      {
        id: 'match-kabaddi-1',
        name: 'PKL 2024 - UP vs Bengal',
        createdAt: new Date('2024-01-18'),
        config: { ...SPORT_DEFAULTS[SportType.KABADDI], auctionType: 'ASCENDING' },
        players: [
          { id: 'kabaddi1-p1', name: 'Rahul Chaudhari', roleId: 'raider', basePrice: 2000000, isOverseas: false, status: 'UNSOLD' },
          { id: 'kabaddi1-p2', name: 'Pardeep Narwal', roleId: 'raider', basePrice: 2200000, isOverseas: false, status: 'UNSOLD' },
          { id: 'kabaddi1-p3', name: 'Pawan Sehrawat', roleId: 'raider', basePrice: 2100000, isOverseas: false, status: 'UNSOLD' }
        ],
        teams: [
          { id: 'kabaddi1-t1', name: 'Uttar Pradesh Yoddhas', budget: 40000000, owner: 'GMR Group', homeCity: 'Uttar Pradesh', foundationYear: 2014, players: [], remainingBudget: 40000000 },
          { id: 'kabaddi1-t2', name: 'Bengaluru Bulls', budget: 38000000, owner: 'GMR Group', homeCity: 'Bengaluru', foundationYear: 2014, players: [], remainingBudget: 38000000 }
        ],
        history: [],
        status: 'SETUP'
      }
    ]
  },
  {
    sportType: SportType.VOLLEYBALL,
    matches: [
      {
        id: 'match-volleyball-1',
        name: 'Premier Volleyball League - Men',
        createdAt: new Date('2024-01-22'),
        config: { ...SPORT_DEFAULTS[SportType.VOLLEYBALL], auctionType: 'ASCENDING' },
        players: [
          { id: 'volleyball1-p1', name: 'Nagendra Kumar', roleId: 'setter', basePrice: 800000, isOverseas: false, status: 'UNSOLD' },
          { id: 'volleyball1-p2', name: 'Ganapatrao Desai', roleId: 'setter', basePrice: 900000, isOverseas: false, status: 'UNSOLD' },
          { id: 'volleyball1-p3', name: 'Parvez Khan', roleId: 'spiker', basePrice: 1000000, isOverseas: false, status: 'UNSOLD' }
        ],
        teams: [
          { id: 'volleyball1-t1', name: 'Calicut Heroes', budget: 20000000, owner: 'Sportstar', homeCity: 'Calicut', foundationYear: 2021, players: [], remainingBudget: 20000000 },
          { id: 'volleyball1-t2', name: 'Chennai Spartans', budget: 20000000, owner: 'Sportstar', homeCity: 'Chennai', foundationYear: 2021, players: [], remainingBudget: 20000000 }
        ],
        history: [],
        status: 'SETUP'
      }
    ]
  },
  {
    sportType: SportType.HOCKEY,
    matches: [
      {
        id: 'match-hockey-1',
        name: 'Indian Hockey League 2024',
        createdAt: new Date('2024-01-19'),
        config: { ...SPORT_DEFAULTS[SportType.HOCKEY], auctionType: 'ASCENDING' },
        players: [
          { id: 'hockey1-p1', name: 'Manpreet Singh', roleId: 'midfielder', basePrice: 1500000, isOverseas: false, status: 'UNSOLD' },
          { id: 'hockey1-p2', name: 'Vinay Kumar', roleId: 'midfielder', basePrice: 1200000, isOverseas: false, status: 'UNSOLD' },
          { id: 'hockey1-p3', name: 'PR Sreejesh', roleId: 'defender', basePrice: 1800000, isOverseas: false, status: 'UNSOLD' }
        ],
        teams: [
          { id: 'hockey1-t1', name: 'Delhi Capitals', budget: 30000000, owner: 'GMR', homeCity: 'Delhi', foundationYear: 2022, players: [], remainingBudget: 30000000 },
          { id: 'hockey1-t2', name: 'Bangalore Strikers', budget: 30000000, owner: 'Reliance', homeCity: 'Bangalore', foundationYear: 2022, players: [], remainingBudget: 30000000 }
        ],
        history: [],
        status: 'SETUP'
      }
    ]
  }
];
