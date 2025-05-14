import React from 'react';
import Icon from '../Common/Icon';
import Link from 'next/link';
import { Permanent_Marker } from 'next/font/google';

const Permanent_Marker_font = Permanent_Marker({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
});

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div
      className={
        'bg-transparent backdrop-blur-[20px] px-[16px] md:px-[22px] py-[16px] flex flex-col gap-[15px] lg:flex-row items-center lg:justify-between lg:px-[52px]'
      }
    >
      <div className={'h-full text-[20px] ' + Permanent_Marker_font.className}>
        <Link href="/">John Colby</Link>
      </div>

      <div className={'text-[14px] md:text-[16px] lg:text-[18px]'}>© {year} John Colby</div>
      <div className={'flex items-center gap-[15px]'}>
        <a
          href="https://github.com/coder-artisan0719/"
          target="_blank"
          className="flex items-center justify-center text-white"
        >
          <Icon name="github" width={20} height={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/john-w-colby/"
          target="_blank"
          className="flex items-center justify-center text-white"
        >
          <Icon name="linkedin" width={20} height={20} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
