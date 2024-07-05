// file path: components/Sidebar.tsx

import React from 'react';
import profile from "@/assets/profileImage.svg";
import pinterest from "@/assets/pinterest.svg";
import dribble from "@/assets/dribbble.svg";
import google from "@/assets/google.svg";
import logo from "@/assets/logo.svg";
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/lib/data';
import { SidebarItem, SidebarProps } from '@/lib/@types';

const imageLinks = [
  { src: pinterest, width: 22, height: 22, alt: 'pinterest', url: "#" },
  { src: dribble, width: 22, height: 22, alt: 'dribble', url: "#" },
  { src: google, width: 22, height: 22, alt: 'google', url: "#" },
];

const Sidebar: React.FC<SidebarProps> = ({ name, email, online }) => {
  return (
    <section className='border-r-[1px] border-slate-300 py-8 px-6 md:px-4 sm:px-2'>
      <div className='flex justify-center mb-20'>
        <Image src={logo} width={100} height={100} alt='Huddle.io/logo' priority />
      </div>
      <nav className='bg-custom-purple relative text-white mt-10 p-2 text-center rounded-lg shadow-3d'>
        <figure className='mx-auto absolute -top-12 left-1/2 transform -translate-x-1/2 rounded-full h-[100px] w-[100px]'>
          <Image src={profile} alt='Huddle.io user/profile' layout='fill' objectFit='cover' priority />
        </figure>
        <div className='flex mt-16 gap-2 justify-center'>
          {online ? (
            <>
              <span className="inline-block mb-3 rounded-full h-2 w-2 bg-custom-green"></span>
              <span className='text-xs'>Online</span>
            </>
          ) : (
            <>
              <span className="inline-block mb-3 rounded-full h-2 w-2 bg-slate-300"></span>
              <span className='text-xs'>Offline</span>
            </>
          )}
        </div>
        <h1 className='username font-bold text-lg tracking-widest'>{name}</h1>
        <p className='userEmail text-xs'>{email}</p>

        <div className='grid place-content-center'>
          <ul className='space-y-10 my-10'>
            {sidebarLinks.map((item: SidebarItem, index: number) => (
              <Link key={index} href={item.href} className='flex items-center gap-3'>
                <item.icon />
                <li>{item.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      <div className='mt-10 grid place-content-center'>
        <div>
          <p className='text-slate-400 text-sm'>Frequently used tools</p>
          <div className='flex gap-2 mt-2'>
            {imageLinks.map((image, index) => (
              <Link key={index} href={image.url} target='_blank'>
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  priority
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
