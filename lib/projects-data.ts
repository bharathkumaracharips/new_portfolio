export interface Project {
  id: string;
  title: string;
  date: string;
  category: string;
  mediaSrc: string;
  mediaType: 'image' | 'video';
  bgImageSrc: string;
  posterSrc?: string;
  description: string;
  technologies: string[];
  features: string[];
}

export const blockchainProjects: Project[] = [
  {
    id: 'defi-platform',
    title: 'DeFi Platform',
    date: '2024',
    category: 'blockchain',
    mediaSrc: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=1080&fit=crop',
    description: 'A decentralized finance platform built on Ethereum with smart contracts for lending, borrowing, and yield farming.',
    technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Hardhat'],
    features: ['Smart Contract Development', 'Token Staking', 'Liquidity Pools', 'Governance System'],
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    date: '2024',
    category: 'blockchain',
    mediaSrc: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1920&h=1080&fit=crop',
    description: 'A full-featured NFT marketplace with minting, trading, and auction capabilities.',
    technologies: ['Solidity', 'IPFS', 'Next.js', 'Ethers.js', 'Polygon'],
    features: ['NFT Minting', 'Auction System', 'Royalty Management', 'Wallet Integration'],
  },
  {
    id: 'dao-governance',
    title: 'DAO Governance',
    date: '2023',
    category: 'blockchain',
    mediaSrc: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1920&h=1080&fit=crop',
    description: 'Decentralized autonomous organization with on-chain voting and proposal management.',
    technologies: ['Solidity', 'OpenZeppelin', 'TypeScript', 'Snapshot', 'Aragon'],
    features: ['Proposal Creation', 'Voting Mechanism', 'Treasury Management', 'Token Distribution'],
  },
];

export const backendProjects: Project[] = [
  {
    id: 'api-gateway',
    title: 'API Gateway',
    date: '2024',
    category: 'backend',
    mediaSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop',
    description: 'High-performance API gateway handling millions of requests with rate limiting and authentication.',
    technologies: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'Docker'],
    features: ['Rate Limiting', 'JWT Authentication', 'Request Caching', 'Load Balancing'],
  },
  {
    id: 'microservices',
    title: 'Microservices Architecture',
    date: '2024',
    category: 'backend',
    mediaSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&h=1080&fit=crop',
    description: 'Scalable microservices architecture with event-driven communication and service mesh.',
    technologies: ['Go', 'Kubernetes', 'RabbitMQ', 'gRPC', 'Istio'],
    features: ['Service Discovery', 'Event Sourcing', 'Circuit Breaker', 'Distributed Tracing'],
  },
  {
    id: 'database-optimization',
    title: 'Database Optimization',
    date: '2023',
    category: 'backend',
    mediaSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
    description: 'Database performance optimization reducing query time by 80% through indexing and caching strategies.',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'TimescaleDB'],
    features: ['Query Optimization', 'Index Strategy', 'Caching Layer', 'Replication Setup'],
  },
];

export const classesProjects: Project[] = [
  {
    id: 'blockchain-fundamentals',
    title: 'Blockchain Fundamentals',
    date: '2024',
    category: 'classes',
    mediaSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop',
    description: 'Comprehensive course covering blockchain technology, consensus mechanisms, and cryptocurrency fundamentals.',
    technologies: ['Bitcoin', 'Ethereum', 'Cryptography', 'Consensus Algorithms', 'Smart Contracts'],
    features: ['Live Sessions', 'Hands-on Labs', 'Project Work', 'Certificate of Completion'],
  },
  {
    id: 'web3-development',
    title: 'Web3 Development',
    date: '2024',
    category: 'classes',
    mediaSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop',
    description: 'Learn to build decentralized applications with modern Web3 tools and frameworks.',
    technologies: ['React', 'Web3.js', 'Ethers.js', 'MetaMask', 'IPFS'],
    features: ['Build Real dApps', 'Wallet Integration', 'Smart Contract Interaction', 'Career Guidance'],
  },
  {
    id: 'cs-algorithms',
    title: 'CS Algorithms & Data Structures',
    date: '2024',
    category: 'classes',
    mediaSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop',
    description: 'Master essential algorithms and data structures for technical interviews and software development.',
    technologies: ['Python', 'JavaScript', 'Big O Notation', 'Problem Solving', 'System Design'],
    features: ['Interview Prep', 'Coding Challenges', 'One-on-One Mentoring', 'LeetCode Practice'],
  },
];

export const freelanceProjects: Project[] = [
  {
    id: 'custom-dapp',
    title: 'Custom DApp Development',
    date: '2024',
    category: 'freelance',
    mediaSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop',
    description: 'End-to-end decentralized application development with custom smart contracts and modern frontend.',
    technologies: ['Solidity', 'React', 'Next.js', 'Web3', 'Tailwind CSS'],
    features: ['Smart Contract Audit', 'Frontend Development', 'Testing & Deployment', 'Documentation'],
  },
  {
    id: 'api-development',
    title: 'API Development & Integration',
    date: '2024',
    category: 'freelance',
    mediaSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop',
    description: 'RESTful and GraphQL API development with authentication, rate limiting, and comprehensive documentation.',
    technologies: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'Redis'],
    features: ['API Design', 'Security Implementation', 'Performance Optimization', 'API Documentation'],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    date: '2024',
    category: 'freelance',
    mediaSrc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=720&fit=crop',
    mediaType: 'image',
    bgImageSrc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop',
    description: 'Strategic technical consulting for blockchain integration, architecture design, and technology selection.',
    technologies: ['Architecture Design', 'Code Review', 'Best Practices', 'Technology Stack', 'Scalability'],
    features: ['Architecture Review', 'Technology Recommendations', 'Team Training', 'Project Planning'],
  },
];

export const getAllProjects = (): Project[] => {
  return [...blockchainProjects, ...backendProjects, ...classesProjects, ...freelanceProjects];
};

export const getProjectById = (id: string): Project | undefined => {
  return getAllProjects().find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return getAllProjects().filter(project => project.category === category);
};
