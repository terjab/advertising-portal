import React, { useState } from 'react';

import style from '../styles/pages/Add.module.scss';

import { Topbar } from '../components/Layout/Topbar/Topbar';
import { NewAd } from '../components/Forms/NewAdd/NewAdd';
import { Specifications } from '../components/Forms/Specifications/Specifications';
import { Button } from '../components/UI/Button/Button';
import { useHistory } from 'react-router-dom';

export const Add = () => {
  const [showSpec, setShowSpec] = useState(false);
  const [ad, setAd] = useState();
  const [showRecap, setShowRecap] = useState(false);
  const [published, setPublished] = useState(false);

  const history = useHistory();

  const handleAddAd = (values) => {
    setAd({
      ...ad,
      ...values,
    })
  }

  const handleShowSpec = () => {
    setShowSpec(!showSpec)
  }

  const handleRecapitulation = () => {
    setShowRecap(true)
  }

  const publish = () => {
    setPublished(true)
    setTimeout(() => {
      history.push(`/`);
    }, 3500);
  }

  return (
    <div>
      <Topbar />
      <div className="container-row">
        {showSpec ? !showRecap && <Specifications doneClicked={handleRecapitulation} ad={ad} addAd={handleAddAd} showSpec={handleShowSpec} /> : !showRecap && <NewAd addAd={handleAddAd} ad={ad} showSpec={handleShowSpec} />}
        {showRecap && ad && ad.specifications &&
          <div>
            <div className="container-row">
              <h3 className="h-mb-2">Rekapitulace inzerátu</h3>
              <div className={style['blue-box']}>
                <h5>Obecné</h5>
                <p>Titulek: {ad.title}</p>
                <p>Cena: {ad.price}</p>
                <p>Kategorie: {ad.category.label}</p>
                <p>Město: {ad.city}</p>
                <p>Stav: {ad.condition.label}</p>
                <p>Popis: {ad.description}</p>
                <p>Typ inzerátu: {ad.type.label}</p>
                <div className={style['img-container']}>
                  {ad.photos.map((img, i) => <React.Fragment key={i}><img className={style.photo} src={img.fileToBase64} alt="photoItem" /></React.Fragment>)}
                </div>
                <h5 className="h-mt-2">Specifikace</h5>
                <div className="h-display-flex h-margin-auto">
                  <div className="col-lg-4 ">
                    <p>Značka: {ad.specifications.brand.label}</p>
                    <p>Barva: {ad.specifications.color.label}</p>
                    <p>Procesor: {ad.specifications.cpu.label}</p>
                    <p>Jádra procesoru: {ad.specifications.cpu_cores.label}</p>
                    <p>Taktovací frekvence: {ad.specifications.cpu_frequency}</p>
                    <p>Velikost Paměti RAM: {ad.specifications.ram_capacity.label}</p>
                    <p>Úhlopříčka: {ad.specifications.diagonal}</p>
                    <p>Značka grafické karty: {ad.specifications.gpu_brand.label}</p>
                    <p>Čip grafické karty: {ad.specifications.gpu_chip.label}</p>
                  </div>
                  <div className="col-lg-4 h-margin-auto">
                    <p>Paměť grafické karty: {ad.specifications.gpu_memory.label}</p>
                    <p>Typ grafické karty: {ad.specifications.gpu_type.label}</p>
                    <p>Typ pevného disku: {ad.specifications.memory_type.label}</p>
                    <p>Kapacita pevného disku: {ad.specifications.memory_capacity.label}</p>
                    <p>Model: {ad.specifications.model.label}</p>
                    <p>Operační systém: {ad.specifications.operating_system.label}</p>
                    <p>Extra funkce: {ad.specifications.extra_functions && ad.specifications.extra_functions.map((fction) => fction.label ? fction.label + ', ' : fction + ', ')}</p>
                  </div>

                </div>
                {/* {
                  Object.keys(ad).map((oneKey, i) => {
                    return (
                      <li key={i}>{ad[oneKey]}</li>
                    )
                  })
                } */}
              </div>
              {published && <span className={style.notify}>Inzerát zveřejněn</span>}
              <div className="h-space-between h-mt-2 ">
                <Button theme="blue-outline" type="button" onClick={() => setShowRecap(false)} className={style.submit}>Back</Button>
                <Button theme="primary" type="submit" onClick={() => publish()} className={style.submit}>Zveřejnit</Button>
              </div>
            </div>
          </div>}
      </div>
    </div>
  )
}