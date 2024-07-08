import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import {StatsCardProps} from "@/lib/@types";


const StatsCard: React.FC<StatsCardProps> = ({ image, title, description, progressValue, progressColor }) => {
  return (
    <Card className='border-none p-4 rounded-md space-y-5'>
      <CardContent className='p-0 flex gap-2'>
        <Image src={image} alt={title} />
        <div>
          <CardTitle className='text-custom-semiBlack text-xl'>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardContent>
      <div className='rounded-full bg-[#D9D9D9]'>
        <Progress className='h-10 rounded-full' value={progressValue} color={progressColor} />
      </div>
    </Card>
  )
}

export default StatsCard;
