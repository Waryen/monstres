
import React from 'react'
import { Fiche } from '../fiche/fiche.component'
import './fiche-list-style.css'

export const FicheList = props => {
  return <div className = 'fiche-list'>
        {
            props.monstres.map( monstre => (
                <Fiche key = { monstre.id } monstre = { monstre } />
            ))
        }
  </div>
}
