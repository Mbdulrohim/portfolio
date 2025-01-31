import { IconType } from 'react-icons';
import { 
    SiJavascript, 
    SiTypescript, 
    SiSolidity, 
    SiNextdotjs, 
    SiReact, 
    SiNodedotjs, 
    SiTailwindcss, 
    SiKotlin, 
    SiPostgresql, 
    SiFirebase, 
    SiExpress, 
    SiPrisma, 
    
  } from 'react-icons/si';
  
export interface Skill {
  name: string;
  //@typescript-eslint/no-explicit-any
  icon: IconType;
  level: number;
}

export const skills: Skill[] = [
    { name: 'JavaScript', icon: SiJavascript, level: 95 },
    { name: 'TypeScript', icon: SiTypescript, level: 90 },
    { name: 'Solidity', icon: SiSolidity, level: 85 },
    { name: 'Next.js', icon: SiNextdotjs, level: 90 },
    { name: 'React', icon: SiReact, level: 92 },
    { name: 'Node.js', icon: SiNodedotjs, level: 88 },
    { name: 'Express.js', icon: SiExpress, level: 87 },
    { name: 'TailwindCSS', icon: SiTailwindcss, level: 94 },
    { name: 'Kotlin', icon: SiKotlin, level: 85 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 87 },
    // { name: 'MongoDB', icon: SiMongodb, level: 83 },
    { name: 'Firebase', icon: SiFirebase, level: 83 },
    // { name: 'Web3.js', icon: SiWeb3dotjs, level: 86 },
    // { name: 'Hardhat', icon: SiHardhat, level: 84 },
    { name: 'Prisma', icon: SiPrisma, level: 82 },
    // { name: 'Redux', icon: SiRedux, level: 85 },
    // { name: 'Figma', icon: SiFigma, level: 80 },
      ];
      
