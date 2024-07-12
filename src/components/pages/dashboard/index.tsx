import React from 'react';
import Header from './header';
import ProductivitySection from './productivity-section';
import StatsCard from './stats-card';
import { statsCardsData, tasksData } from '@/data/data';
import { SlidersHorizontal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import TodaysTask from './todays-task';



const PageDashboard: React.FC = () => {
    return (
        <section className='pt-8 pb-10 px-12'>
            <Header
                name="Esther"
                isInWorkroom={false}
                teamName="Design Team"
                companyName="Atlassian Incorporated"
            />
            <div className='mt-10'>
                <p className='text-custom-semiBlack font-semibold text-right'>Streaks <span className='text-custom-yellow'>5 days</span></p>
                <ProductivitySection />
                <h1 className='mt-10 font-bold text-slate-600 text-xl'>Weekly Stats</h1>
                <div className='grid grid-cols-2 mt-2 gap-x-10 gap-y-5'>
                    {statsCardsData.map((stat, index) => (
                        <StatsCard
                            key={index}
                            image={stat.image}
                            title={stat.title}
                            description={stat.description}
                            progressValue={stat.progressValue}
                            progressColor={stat.progressColor} />
                    ))}
                </div>

                <div className='mt-10 flex justify-between items-center'>
                    <h1 className='font-bold text-slate-600 text-xl'>Today's task</h1>
                    <SlidersHorizontal size={18} color='#D9D9D9' className='cursor-pointer' />
                </div>
                <Card className='mt-5 p-4 border-none max-h-60 overflow-y-auto'>
                    {tasksData.map((task, index) => (
                        <TodaysTask key={index} task={task} />
                    ))}
                </Card>
            </div>
        </section>
    )
}

export default PageDashboard;