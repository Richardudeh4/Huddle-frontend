import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import profileImage from '@/assets/profileImage.svg';
import { Globe } from 'lucide-react';

interface HeaderProps {
  name: string;
  isInWorkroom: boolean;
  teamName: string;
  companyName: string;
}

const Header: React.FC<HeaderProps> = ({ name, isInWorkroom, teamName, companyName }) => {
  return (
    <header>
      <Card className={`border-0 p-0 bg-custom-whitesmoke flex flex-col md:flex-row items-end ${!isInWorkroom ? 'justify-between' : 'justify-start'} shadow-none`}>
        <CardHeader className='p-0'>
          <p className={`text-md text-custom-semiBlack ${isInWorkroom ? 'font-bold' : 'font-semibold'}`}>
            {!isInWorkroom ? formatDate() : companyName}
          </p>
          {!isInWorkroom ? (
            <h1 className='text-3xl text-custom-semiBlack'>Welcome,<span className='font-semibold'> {name}</span></h1>
          ) : (
            <h1 className='text-3xl text-custom-semiBlack font-semibold'>{teamName}</h1>
          )}
        </CardHeader>
        <CardContent className='flex gap-4 p-0'>
          {!isInWorkroom ? (
            <>
              <div className='flex flex-col p-0 items-end text-custom-semiBlack'>
                <div className='flex'>
                  {[1, 2, 3].map((_, index) => (
                    <Avatar key={index} className='w-8 h-8'>
                      <AvatarImage src={profileImage.src} alt="profile" />
                      <AvatarFallback>EH</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className='text-xs'>Your team mates are waiting for you</p>
              </div>
              <Button className='bg-custom-yellow text-xl shadow-md'>
                <span className='mr-2.5'><Globe size={10} /></span>
                Join workroom
              </Button>
            </>
          ) : (
            <p className='text-sm font-semibold text-custom-semiBlack'>{formatDate()}</p>
          )}
        </CardContent>
      </Card>
    </header>
  );
}

export default Header;
