import React from 'react';
import LeaderBoardHeader from './leaderboard-header';
import Ranks from './ranks';
import Woman from '@/assets/woman.svg';
import Man from '@/assets/man.svg';
import TopRanking from './top-ranking';
import { SlidersHorizontal } from 'lucide-react';




const LeaderBoardPage: React.FC = () => {
  const users = [
    { rank: 1, stars: 3, image: Woman, time: "4hrs :30min" },
    { rank: 2, stars: 4, image: Man, time: "10hrs :30min" },
    { rank: 3, stars: 2, image: Woman, time: "4hrs :30min" },
  ];
  return (
    <section className='pt-8 pb-10 px-12'>
      <LeaderBoardHeader
        companyName='Atlassian Incoporated'
        teamName='Design Team'
        points={1000}
        totalHours='200hr: 30min' />
      <Ranks users={users} />
      <div className='mt-10 flex justify-between items-center'>
                    <h1 className='font-bold text-slate-600 text-xl'>Today's task</h1>
                    <SlidersHorizontal size={18} color='#D9D9D9' className='cursor-pointer' />
                </div>
      <TopRanking />
    </section>
  )
}

export default LeaderBoardPage;