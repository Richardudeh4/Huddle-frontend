import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Frame1 from '@/assets/frame1.svg';
import Frame2 from '@/assets/frame2.svg';
import Frame3 from '@/assets/frame3.svg';
import { Clock4, Star } from 'lucide-react';

type User = {
    rank: number;
    stars: number;
    image: StaticImageData;
    time: string;
};

type RanksProps = {
    users: User[];
};

const Ranks: React.FC<RanksProps> = ({ users }) => {
    const getBackgroundImage = (rank: number): StaticImageData => {
        switch (rank) {
            case 1:
                return Frame1;
            case 2:
                return Frame2;
            case 3:
                return Frame3;
            default:
                return Frame1;
        }
    };


    return (
        <section className="grid grid-cols-3 mt-24 items-center justify-between gap-14">
            {users.map((user, i) => (
                <div
                    key={i}
                    className={`${i === 1 ? 'h-[250px]' : 'h-[220px]'} rounded-lg relative`}
                    style={{
                        backgroundImage: `url(${getBackgroundImage(user.rank).src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Image
                        src={user.image}
                        alt={`rank${user.rank}`}
                        width={120}
                        height={120}
                        className='object-cover object-center rounded-full border-2 border-white absolute -top-14 left-1/2 -translate-x-1/2'
                    />
                    <div className='mt-24'>
                        <p className='text-white text-xs text-center'>Average work quality</p>
                        <div className='mx-auto flex items-center justify-center gap-1 mt-1'>
                            {Array.from({ length: 5 }).map((_, j) => (
                                <Star
                                    key={j}
                                    size={18}
                                    color={j < user.stars ? "#EEAE05" : "#FFFFFF"}
                                    fill={j < user.stars ? "#EEAE05" : "#FFFFFF"}
                                />
                            ))}
                        </div>
                        <p className='text-white text-xs text-center pt-5'>Total hours today</p>
                        <div className='flex items-center justify-center font-bold text-white gap-1 mt-1'><Clock4 size={18} /> <h1 className='tracking-wide'>{user.time}</h1></div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Ranks;
