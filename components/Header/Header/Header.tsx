'use client';

import { JSX, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { type ActiveMenuItem, type NavMenuItem } from '@/components/types/Menu/Menu';
import NavBarLink from '@/components/Header/NavBarLink';
import NavLink from '@/components/Header/NavLink';

import styles from './Header.module.css';

interface HeaderProps extends ActiveMenuItem {
  navMenuItems: NavMenuItem[];
}

function Header(props: Readonly<HeaderProps>): JSX.Element {
  const [isOn, setIsOn] = useState(false);
  const { activeMenu, navMenuItems } = props;

  return (
    <>
      <header className={cn('fixed z-10 w-full dark:bg-gray-900', styles.background)}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={cn('flex h-14 items-center justify-between sm:h-16', styles.margin)}>
            <div className="flex items-center">
              <div className="shrink-0 bg-secondary dark:bg-black px-4">
                <Link href="/" className="text-white" tabIndex={-1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="216.7501" height="32"><path fill="currentColor" stroke="currentColor" d="M3376.5 391.5h55V496l3 15 6.5 6.5 17 4 56 1 1-1h13l10-2q7.2-1.8 10.5-7.5l3-10 1-28 1-1v-81.5h54V482l-1 1v25l-1 1-1 19q-3.3 16.7-14.5 25.5l-14 8-25 5h-15l-1 1h-84l-1-1-23-1-16-3q-14-4-22.5-13.5l-8-15-2-19-1-1zm255 0H3818l.5.5v40.5H3686l-.5.5v31.5H3811l1.5 1.5v38l-1.5 1.5h-125l-.5.5v59.5h-54zM352.5.5H697l.5.5v71.5H447l-.5.5v43.5H684l1.5 1.5v65l-1.5 1.5H447l-.5.5v47.5H699l.5.5v73.5h-347zm375 0h95V150l1 1v30l1 1 1 19 4 11 5.5 6.5 16 8 10 2h8l1 1 31 1 1 1h51l1-1h26l1-1 20-1 12-3 13.5-8.5 7-14v-5l2-7v-12l1-1v-23l1-1V.5h95V161l-1 1-1 48-1 1-1 24-2 11q-7 27-26.5 41.5l-19 11-20 6-17 2-1 1-21 1-1 1h-19l-1 1-83 1-1-1-73-1-1-1-28-2-18-4h-5l-13-4-13-6-17.5-14.5q-9.4-10.6-14-26l-4-21-1-18-1-1v-42l-1-1zm447 0H1519l.5.5v71.5H1269l-.5.5v43.5H1506l1.5 1.5v65l-1.5 1.5h-237l-.5.5v47.5H1521l.5.5v73.5h-347zm377 0H1800l1 1h63l1 1h15q30.1 5.4 45.5 25.5l8 15 4 18 1 19 1 1v32l-1 1-1 26-4 15q-5.1 12.9-15.5 20.5l-15 8-19.5 4.5 22.5 4.5q12.7 4.8 20.5 14.5 6 8 8 20l2 79.5H1843l-.5-.5v-26l-1-1-1-26-4-11-6.5-7.5-6-3-11-1-1-1h-31l-1-1h-133.5v78h-95zm95 77v75h147l1-1h28l10-3 5-4 5-10 1-18 1-1-2-20-5-11-12-6h-11l-1-1zm298-77h95.5l1.5 1.5 73 202 10.5 25.5h16l1.5-1.5 68-223 2.5-4.5h113l1.5 1.5 70 227.5h17.5l1.5-1.5 83-227.5H2600l.5 1.5-121 304.5H2333l-.5-1.5L2270 83.5l-61.5 223H2061l-.5-2.5-116-300zm672.5 0h344l.5.5v71.5H2711l-1.5 1.5v42l.5.5h238.5v68H2710l-.5.5v47.5H2962l1.5 1.5v72l-.5.5h-347.5V2Zm375.5 0h100v110h214V.5h100V306l-.5.5h-99.5v-111h-214v111h-100zm446.5 0h247l1 1h63l1 1h16q29.3 5.2 44.5 24.5l8 14 4 16 1 15 1 1 1 31-1 1v24l-1 1v8l-2 10q-4.6 17.9-17.5 27.5-14.1 9.9-35.5 12.5l12.5 1.5 13 4q9.8 4.3 16.5 11.5l7 12 3 14v11l1 1v63.5h-94V265l-1-1v-9l-3-11-6.5-8.5-11-5q-6.2 1.8-8-1h-32l-1-1h-132.5v78h-96V2Zm94.5 77v75h147l1-1h27q1-2 6-1l6-3 5-5 3-6 2-9v-25l-2-9-3-6-7-7-6-2h-12l-1-1zM1729 388.5l71 1 1 1 23 1q20.6 3.4 30.5 17.5l5 11 3 15v8l1 1v68l-1 1v8l-3 16q-3.7 11.8-12.5 18.5l-13 7-13 3-27 1-1 1h-101l-1-1-27-1-10-2q-15.3-4.2-23.5-15.5l-4-7-4-16-1-28-1-1v-37l1-1v-18l1-1v-8l2-9q3.4-13.1 12.5-20.5l12-7 12-3 23-1 1-1h43zm-23.5 46-1 1-14 1-9 4-5 11-1 21-1 1v21l1 1v8l3 9q4 5 11 7l10 2h14l1 1h57l1-1h15l9-2 6-3 4-5 3-11v-39l-1-1-1-11-3-6-6-6-17-3zm1048.5-46h47l1 1 33 1 20 5q8.3 3.2 13.5 9.5l6 12 2 10v19.5H2825l-1.5-1.5-1-10-3.5-3.5-7-2-59-1-1 1-25 1-5.5 4.5-2 8q.9 6.6 5.5 9.5l10 2h9l1 1 76 2 1 1 22 1 18 5q7.8 3.3 12.5 9.5l5 9 3 12v31l-4 17-8 12.5-10.5 6-9 3-12 1-1 1h-15l-1 1h-91l-1-1h-14l-1-1-19-2q-16.2-3.8-24.5-15.5l-5-15-1-25.5h52.5l.5.5v7q.9 6.6 5.5 9.5l5 2h9l1 1h76l9-2 4.5-3.5 2-6v-6l-2-6-2.5-2.5-6-2h-13l-1-1-53-1-1-1h-23l-1-1-24-1-10-2-11-5-7.5-7.5q-5.1-6.9-7-17 1.3-4.7-1-6v-25l4-17q4.2-10.3 12.5-16.5l13-6 11-2 45-1zm-1765 2 82.5.5-101 85 3.5 4.5 106.5 84.5-81.5.5-80-67h-29.5v67h-54V392l.5-.5h53.5v63H919Zm-980.5 1H107l.5 1.5 51 109.5q2.7 1.1 2-1.5l51-109.5h98v174h-53V493l1-1v-56.5H249l-.5 1.5-66 128.5H138l-2.5-2.5L70 435.5h-8l-.5.5v97l1 1v31.5H9l-.5-.5Zm403.5 0h83l2.5 2.5 88 165 2 6.5H527l-.5-1.5-15.5-28.5H395l-1.5 1.5-14 28.5-62-.5zm37.5 40q-20 31-35 66h78l-33-64-1-2zm147-40H771l1 1h13q16.4 3.1 24.5 14.5l6 14 2 29-1 1v16l-2 10q-3.2 9.3-10.5 14.5l-8 4-9.5 2.5 12.5 2.5 9.5 6 4 6.5 2 7 1 45.5h-54V540l-2-10-5.5-6.5-6-2h-97.5v44h-54zm54 43v43h90l1-1h12l4-2 2-2 3-8v-17l-3-7-2-3-6-2h-19l-1-1zm425-43H1289l.5.5v43.5h-78V564l-1.5 1.5h-55.5V437l-1.5-1.5h-77.5zm293 0H1544l1 1 15 1 14 4q10.1 4.4 16.5 12.5l7 12 4 16v8l1 1v59l-1 1-1 14-3 11q-3.7 12.3-12.5 19.5l-9 6-12 4-11 2h-8l-1 1h-30l-1 1h-144.5zm54 43v86h98l1-1 13-1 7-3 4-5 4-18v-27l-1-1v-8l-6-15-7-4-9-2zm463-43h94.5l2.5 2.5 90.5 126.5q5.4.6 5.5-.5v-28l-1-1v-99.5h54.5l.5.5v173.5H2038l-.5-1.5-92-128.5h-5.5l-.5.5v83l1 1v45.5H1886l-.5-.5zm348.5 0h84l.5 1.5 92 172.5H2350l-1.5-1.5-13-26-2.5-2.5h-115l-2.5 2.5-14.5 27.5h-60l-.5-1.5zm37.5 40-35 66h78l-33-64-1-2zm146-40h54V475l1 1v22q2.8 1.8 1 8l4 8.5 9.5 5 11 1 1 1 56 1 1-1 19-1 7-2 6.5-5.5 3-6 1-14 1-1V391.5h55V477l-1 1v28l-1 1-1 20q-3.2 16.3-13.5 25.5l-15 9-25 5h-15l-1 1h-84l-1-1-23-1-16-3q-15-4-23.5-14.5l-7-14-2-10v-7l-1-1v-26l-1-1zm471 0H3103l.5.5v43.5H3026l-1.5 1.5v128.5H2969l-1.5-1.5V435.5h-79zm304 0h84.5l1.5 1.5 91 172.5H3309l-1.5-1.5-14-28.5H3177l-1.5 1.5-13 26-2.5 2.5h-60l-.5-1.5zm38 40-35 66h78l-32-63-2-3zM1.5.5H330l1.5 1.5v70.5H97l-.5.5v57.5H319l.5.5v69.5H97l-.5.5v105.5h-95z" transform="matrix(.056652 0 0 .056338 -.0566 0)" /></svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="inline-flex items-center justify-center space-x-6 bg-secondary px-4 py-1 dark:bg-black">
                {navMenuItems.map(item => {
                  return (
                    <NavBarLink key={`main-menu-${item.activeMenuName}`} href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu}>
                      {item.children}
                    </NavBarLink>
                  );
                })}
              </div>
            </div>
            <div className="flex bg-secondary md:hidden -mr-4 sm:mr-1 dark:bg-black">
              <button
                className="inline-flex items-center justify-center rounded-full p-2 text-white transition-all duration-300 ease-in-out hover:bg-blue-600 hover:opacity-75 dark:text-white/87 dark:hover:bg-blue-400"
                onClick={() => setIsOn(true)}
              >
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div
        aria-hidden="true"
        className={cn('fixed inset-0 z-10 transition-opacity', { hidden: !isOn })}
        onClick={() => setIsOn(false)}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (event.key === 'Enter' || event.key === 'Escape') {
            setIsOn(false);
          }
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      <aside className={cn('fixed top-0 left-0 z-30 h-full w-64 transform overflow-auto bg-gray-100 shadow-xl transition-all duration-300 ease-in-out dark:bg-gray-900', { 'translate-x-0': isOn }, { '-translate-x-full': !isOn })}>
        <span className="flex w-full items-center p-4">
          <Link href="/" className='text-gray-200' tabIndex={-1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="216.7501" height="32"><path fill="currentColor" stroke="currentColor" d="M3376.5 391.5h55V496l3 15 6.5 6.5 17 4 56 1 1-1h13l10-2q7.2-1.8 10.5-7.5l3-10 1-28 1-1v-81.5h54V482l-1 1v25l-1 1-1 19q-3.3 16.7-14.5 25.5l-14 8-25 5h-15l-1 1h-84l-1-1-23-1-16-3q-14-4-22.5-13.5l-8-15-2-19-1-1zm255 0H3818l.5.5v40.5H3686l-.5.5v31.5H3811l1.5 1.5v38l-1.5 1.5h-125l-.5.5v59.5h-54zM352.5.5H697l.5.5v71.5H447l-.5.5v43.5H684l1.5 1.5v65l-1.5 1.5H447l-.5.5v47.5H699l.5.5v73.5h-347zm375 0h95V150l1 1v30l1 1 1 19 4 11 5.5 6.5 16 8 10 2h8l1 1 31 1 1 1h51l1-1h26l1-1 20-1 12-3 13.5-8.5 7-14v-5l2-7v-12l1-1v-23l1-1V.5h95V161l-1 1-1 48-1 1-1 24-2 11q-7 27-26.5 41.5l-19 11-20 6-17 2-1 1-21 1-1 1h-19l-1 1-83 1-1-1-73-1-1-1-28-2-18-4h-5l-13-4-13-6-17.5-14.5q-9.4-10.6-14-26l-4-21-1-18-1-1v-42l-1-1zm447 0H1519l.5.5v71.5H1269l-.5.5v43.5H1506l1.5 1.5v65l-1.5 1.5h-237l-.5.5v47.5H1521l.5.5v73.5h-347zm377 0H1800l1 1h63l1 1h15q30.1 5.4 45.5 25.5l8 15 4 18 1 19 1 1v32l-1 1-1 26-4 15q-5.1 12.9-15.5 20.5l-15 8-19.5 4.5 22.5 4.5q12.7 4.8 20.5 14.5 6 8 8 20l2 79.5H1843l-.5-.5v-26l-1-1-1-26-4-11-6.5-7.5-6-3-11-1-1-1h-31l-1-1h-133.5v78h-95zm95 77v75h147l1-1h28l10-3 5-4 5-10 1-18 1-1-2-20-5-11-12-6h-11l-1-1zm298-77h95.5l1.5 1.5 73 202 10.5 25.5h16l1.5-1.5 68-223 2.5-4.5h113l1.5 1.5 70 227.5h17.5l1.5-1.5 83-227.5H2600l.5 1.5-121 304.5H2333l-.5-1.5L2270 83.5l-61.5 223H2061l-.5-2.5-116-300zm672.5 0h344l.5.5v71.5H2711l-1.5 1.5v42l.5.5h238.5v68H2710l-.5.5v47.5H2962l1.5 1.5v72l-.5.5h-347.5V2Zm375.5 0h100v110h214V.5h100V306l-.5.5h-99.5v-111h-214v111h-100zm446.5 0h247l1 1h63l1 1h16q29.3 5.2 44.5 24.5l8 14 4 16 1 15 1 1 1 31-1 1v24l-1 1v8l-2 10q-4.6 17.9-17.5 27.5-14.1 9.9-35.5 12.5l12.5 1.5 13 4q9.8 4.3 16.5 11.5l7 12 3 14v11l1 1v63.5h-94V265l-1-1v-9l-3-11-6.5-8.5-11-5q-6.2 1.8-8-1h-32l-1-1h-132.5v78h-96V2Zm94.5 77v75h147l1-1h27q1-2 6-1l6-3 5-5 3-6 2-9v-25l-2-9-3-6-7-7-6-2h-12l-1-1zM1729 388.5l71 1 1 1 23 1q20.6 3.4 30.5 17.5l5 11 3 15v8l1 1v68l-1 1v8l-3 16q-3.7 11.8-12.5 18.5l-13 7-13 3-27 1-1 1h-101l-1-1-27-1-10-2q-15.3-4.2-23.5-15.5l-4-7-4-16-1-28-1-1v-37l1-1v-18l1-1v-8l2-9q3.4-13.1 12.5-20.5l12-7 12-3 23-1 1-1h43zm-23.5 46-1 1-14 1-9 4-5 11-1 21-1 1v21l1 1v8l3 9q4 5 11 7l10 2h14l1 1h57l1-1h15l9-2 6-3 4-5 3-11v-39l-1-1-1-11-3-6-6-6-17-3zm1048.5-46h47l1 1 33 1 20 5q8.3 3.2 13.5 9.5l6 12 2 10v19.5H2825l-1.5-1.5-1-10-3.5-3.5-7-2-59-1-1 1-25 1-5.5 4.5-2 8q.9 6.6 5.5 9.5l10 2h9l1 1 76 2 1 1 22 1 18 5q7.8 3.3 12.5 9.5l5 9 3 12v31l-4 17-8 12.5-10.5 6-9 3-12 1-1 1h-15l-1 1h-91l-1-1h-14l-1-1-19-2q-16.2-3.8-24.5-15.5l-5-15-1-25.5h52.5l.5.5v7q.9 6.6 5.5 9.5l5 2h9l1 1h76l9-2 4.5-3.5 2-6v-6l-2-6-2.5-2.5-6-2h-13l-1-1-53-1-1-1h-23l-1-1-24-1-10-2-11-5-7.5-7.5q-5.1-6.9-7-17 1.3-4.7-1-6v-25l4-17q4.2-10.3 12.5-16.5l13-6 11-2 45-1zm-1765 2 82.5.5-101 85 3.5 4.5 106.5 84.5-81.5.5-80-67h-29.5v67h-54V392l.5-.5h53.5v63H919Zm-980.5 1H107l.5 1.5 51 109.5q2.7 1.1 2-1.5l51-109.5h98v174h-53V493l1-1v-56.5H249l-.5 1.5-66 128.5H138l-2.5-2.5L70 435.5h-8l-.5.5v97l1 1v31.5H9l-.5-.5Zm403.5 0h83l2.5 2.5 88 165 2 6.5H527l-.5-1.5-15.5-28.5H395l-1.5 1.5-14 28.5-62-.5zm37.5 40q-20 31-35 66h78l-33-64-1-2zm147-40H771l1 1h13q16.4 3.1 24.5 14.5l6 14 2 29-1 1v16l-2 10q-3.2 9.3-10.5 14.5l-8 4-9.5 2.5 12.5 2.5 9.5 6 4 6.5 2 7 1 45.5h-54V540l-2-10-5.5-6.5-6-2h-97.5v44h-54zm54 43v43h90l1-1h12l4-2 2-2 3-8v-17l-3-7-2-3-6-2h-19l-1-1zm425-43H1289l.5.5v43.5h-78V564l-1.5 1.5h-55.5V437l-1.5-1.5h-77.5zm293 0H1544l1 1 15 1 14 4q10.1 4.4 16.5 12.5l7 12 4 16v8l1 1v59l-1 1-1 14-3 11q-3.7 12.3-12.5 19.5l-9 6-12 4-11 2h-8l-1 1h-30l-1 1h-144.5zm54 43v86h98l1-1 13-1 7-3 4-5 4-18v-27l-1-1v-8l-6-15-7-4-9-2zm463-43h94.5l2.5 2.5 90.5 126.5q5.4.6 5.5-.5v-28l-1-1v-99.5h54.5l.5.5v173.5H2038l-.5-1.5-92-128.5h-5.5l-.5.5v83l1 1v45.5H1886l-.5-.5zm348.5 0h84l.5 1.5 92 172.5H2350l-1.5-1.5-13-26-2.5-2.5h-115l-2.5 2.5-14.5 27.5h-60l-.5-1.5zm37.5 40-35 66h78l-33-64-1-2zm146-40h54V475l1 1v22q2.8 1.8 1 8l4 8.5 9.5 5 11 1 1 1 56 1 1-1 19-1 7-2 6.5-5.5 3-6 1-14 1-1V391.5h55V477l-1 1v28l-1 1-1 20q-3.2 16.3-13.5 25.5l-15 9-25 5h-15l-1 1h-84l-1-1-23-1-16-3q-15-4-23.5-14.5l-7-14-2-10v-7l-1-1v-26l-1-1zm471 0H3103l.5.5v43.5H3026l-1.5 1.5v128.5H2969l-1.5-1.5V435.5h-79zm304 0h84.5l1.5 1.5 91 172.5H3309l-1.5-1.5-14-28.5H3177l-1.5 1.5-13 26-2.5 2.5h-60l-.5-1.5zm38 40-35 66h78l-32-63-2-3zM1.5.5H330l1.5 1.5v70.5H97l-.5.5v57.5H319l.5.5v69.5H97l-.5.5v105.5h-95z" transform="matrix(.056652 0 0 .056338 -.0566 0)" /></svg>
          </Link>
        </span>
        {navMenuItems.map(item => {
          return (
            <span key={`mobile-menu-${item.activeMenuName}`} className="mb-1 flex px-2">
              <NavLink href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu}>
                {item.children}
              </NavLink>
            </span>
          );
        })}
      </aside>
    </>
  );
}
export default Header;
