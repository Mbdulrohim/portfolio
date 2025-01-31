// src/data/projects.ts

export type ProjectCategory = 'web' | 'blockchain' | 'mobile' | 'devops';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  github?: string;
  demo?: string;
  image?: string ;  // URL to the image stored in the public folder
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'HooBank',
    description: 'A modern and responsive UI design for a bank landing page with all necessary sections and features',
    category: 'web',
    techStack: ['NodeJS', 'React', 'TypeScript', 'Netlify','TailwindCSS' ],
    github: 'https://github.com/mbdulrohim',
    demo: 'https://bank-by-doyex.netlify.app/',
    image: '/bank.png'
  },
  {
    id: 2,
    title: 'Summarize Articles with OpenAI GPT-4',
    description: 'An open-source article summarizer that turns long articles into concise summaries.',
    category: 'web',
    techStack: ['React.js', 'Node.js', 'Express', 'TailwindCSS', 'ChatGPT API'],
    github: 'https://github.com/Mbdulrohim',
    demo: 'https://combotx-article-sumz.netlify.app/',
    image: '/sumz.png'
  },
  {
    id: 3,
    title: 'Criterion Life App',
    description: 'A comprehensive app that helps you manage health, wellness, and lifestyle with ease',
    category: 'mobile',
    techStack: ['Kotlin ', "Material3", 'Jetpack Compose', 'Firebase', "Google Auth"],
    github: 'https://github.com/Mbdulrohim',
    demo: 'https://play.google.com/store/apps/details?id=com.doyextech.thecriterion&hl=en',
    image: '/clapp.png'

  },
  {
    id: 4,
    title: 'Solana BuyBot',
    description: 'A Solana Buyboy that notifies when a set token is bought in telegraam group',
    category: 'blockchain',
    techStack: ['Telegram API', 'Javascript', 'solana web3js', 'AWS', 'Canvas'],
    github: 'https://github.com/mbdulrohim',
    demo: 'https://t.me/@BBirdBuyBot',

  },
  {
    id: 5,
    title: 'Smart Contracts',
    description: 'Smart Contracts deployed on the core blockchain and ethereum (TestNets)',
    category: 'blockchain',
    techStack: ['Solidity', 'Hardhat',"Coredao dev Tools", 'Ethers.js',"Testnet", "EVM"],
    github: 'https://github.com/mbdulrohim',
    demo: 'https://scan.test.btcs.network/address/0x6aDEb2741D0dd6801528B1C9EC8fDc2E4474965B'
  }
];