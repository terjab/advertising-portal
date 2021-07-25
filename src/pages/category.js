import React from 'react';

import style from '../styles/pages/Category.module.scss';

import { Topbar } from '../components/Layout/Topbar/Topbar';
import { Sidebar } from '../components/Layout/Sidebar/Sidebar';
import { Ad } from '../components/Ad/Ad';
// import { Badge } from '../components/UI/Badge/Badge';

export const Category = (searchValue) => {
  // const onSearch = () => {
  //   const data = data.filter(designer => (designer.name.toLowerCase()).includes(searchValue.toLowerCase()))
  // }

  return (
    <div>
      <Topbar />
      <div className="h-display-flex">
        <Sidebar />
        <div className={style.main}>
          <h3 className="h-mb-2">Notebooky</h3>
          {/* <Badge>Filer</Badge> */}
          <div className="container-row">
            <div className="col-lg-3 h-pl-0">
              <Ad category="notebooky" id="1" title="Name" img="https://picsum.photos/260/200" price="20000">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur</Ad>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}