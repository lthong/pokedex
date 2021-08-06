import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import i18next from 'i18next';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import routerPath from '@/libraries/routerPath';
import {
  earthIcon,
  voiceClosedIcon,
  voiceOpenIcon,
  githubIcon,
} from '@/assets/icons';
import bgm from '@/assets/bg.mp3';
import { homepage } from '../../../package.json';

const NavBar = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const bmgRef = useRef(null);
  const [isBgmOpen, setIsBgmOpen] = useState(false);

  useEffect(() => {
    if (isBgmOpen) {
      bmgRef.current.play();
    } else {
      bmgRef.current.pause();
    }
  }, [isBgmOpen]);

  return (
    <div className='nav-bar'>
      <div className='left-items'>
        <NavLink exact to={routerPath.ROOT} activeClassName='active'>
          {t('common.pokedex')}
        </NavLink>
      </div>
      <div className='right-items'>
        <audio
          className='bgm-audit'
          ref={bmgRef}
          src={bgm}
          muted={!isBgmOpen}
          autoPlay={false}
          loop
          controls
        />
        <div
          className='bgm-switch'
          onClick={() => {
            setIsBgmOpen((preState) => !preState);
          }}
        >
          <div className='voice-icon'>
            {isBgmOpen ? (
              <img src={voiceOpenIcon} alt='voice-open' />
            ) : (
              <img src={voiceClosedIcon} alt='voice-closed' />
            )}
          </div>
          <div className={clsx('bgm-btn', { open: isBgmOpen })}>
            <div className='switch' />
          </div>
        </div>
        <div className='locale-selector'>
          <img className='earth-icon' src={earthIcon} alt='earth-icon' />
          <select
            value={i18next.language}
            onChange={(event) => {
              const locale = event.target.value;
              i18next.changeLanguage(locale);
            }}
          >
            <option value='zh-TW'>{t('common.zh-TW')}</option>
            <option value='en'>{t('common.en')}</option>
          </select>
        </div>
        <img
          className='github-icon'
          src={githubIcon}
          alt='github-icon'
          onClick={() => {
            location.replace(homepage);
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
