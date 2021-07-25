import React from 'react';
import ImageGallery from 'react-image-gallery';

import { classes } from '../services/utils';
import { useHistory } from 'react-router-dom';

import style from '../styles/pages/Detail.module.scss';
import "react-image-gallery/styles/scss/image-gallery.scss";

import { Topbar } from '../components/Layout/Topbar/Topbar';
import { HeartIcon } from '../components/UI/Icons/Icons';
import { Button } from '../components/UI/Button/Button';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export const Detail = () => {
  const history = useHistory();

  return (
    <div>
      <Topbar />
      <Button onClick={() => history.goBack()} className="h-ml-3" theme="blue-outline">{`< Zpět`}</Button>
      <div className="container-row">
        <div className={classes([style.container, 'col-lg-8 center-lg h-margin-auto middle-lg'])}>
          <div className={style.gallery}>
            <ImageGallery showPlayButton={false} items={images} />
          </div>
          <div className="h-display-flex h-vertical-center h-mt-2">
            <h3 className="h-mr-05 h-margin-0">Název</h3>
            <HeartIcon className={style.favourite} />
          </div>
          <div className={style.row}>
            <span className={style['row-item']}>Dnes: 12</span>
            <span className={style['row-item']}>Včera: 12</span>
            <span className={style['row-item']}>Týdně: 12</span>
            <span className={style['row-item']}>Měsíčně: 12</span>
          </div>
          <div className={style['info-row']}>
            <div>
              <div className={style.price}>16 000 Kč</div>
              <div className="h-display-flex">
                <span className={style['info-item']}>Karlovy Vary</span>
                <span className={style['info-item']}>16.6.2021</span>
              </div>
            </div>
            <div className="h-display-flex h-vertical-center">
              <div className={classes(["h-mr-1", style['info-item']])}> Autor</div>
              <Button theme="blue-outline">Hodnocení</Button>
              <Button theme="primary">Mám zájem!</Button>
            </div>
          </div>
          <div className={style['info-row']}>
            But don’t totally forget about border-image, perhaps the most obtuse CSS property of all time. You can use it to get gradient borders even on individual sides:
          </div>
          <div className={classes([style['info-row'], style.specifications])}>
            <div>Značka: Lenovo</div>
            <div>Model: ThinkPad</div>
          </div>
        </div>
      </div>
    </div>
  )
}