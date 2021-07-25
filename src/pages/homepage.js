import React from 'react';

import { classes } from '../services/utils';

import style from '../styles/pages/Homepage.module.scss';

import { Topbar } from '../components/Layout/Topbar/Topbar';
import { Box } from '../components/UI/Box/Box';
import { LaptopIcon } from '../components/UI/Icons/Icons';
import { Ad } from '../components/Ad/Ad';

export const Homepage = () => {
  return (
    <div >
      <Topbar />
      <div className="container justify-content-lg-center h-display-flex">
        <div className={classes([style['box-container'], 'me-4'])}>
          <Box width="4rem" icon={<LaptopIcon />}>Notebooky</Box>
        </div>
        <div className={style['box-container']}>
          <Box disabled>Mobily</Box>
        </div>
      </div>
      <div className="container-row h-mt-4">
        <h3 className="justify-content-lg-center h-display-flex h-mb-2">Nejnovější inzeráty</h3>
        <div className="col-lg-3">
          <Ad category="notebooky" id="1" title="Name" img="https://picsum.photos/260/200" price="20000">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</Ad>
        </div>
        <div className="col-lg-3">
          <Ad category="notebooky" id="2" title="Name" img="https://picsum.photos/260/200" price="20000">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</Ad>
        </div>
        <div className="col-lg-3">
          <Ad category="notebooky" id="3" title="Name" img="https://picsum.photos/260/200" price="20000">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</Ad>
        </div>
        <div className="col-lg-3">
          <Ad category="notebooky" id="4" title="Name" img="https://picsum.photos/260/200" price="20000">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</Ad>
        </div>
      </div>
    </div>
  )
}