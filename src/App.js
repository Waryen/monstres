import React/*, { Component }*/ from 'react';
import {FicheList} from './components/fiche-list/fiche-list.component';
import {ZoneRecherche} from "./components/zoneRecherche/zone-recherche.component" ;
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monstres: [],
      champsRecherche: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monstres: users }))
  }

  gererChangement = (e) => {
    this.setState({ champsRecherche: e.target.value })
  }

  render() {
    const { monstres, champsRecherche } = this.state
      const monstresFiltre = monstres.filter(monstre => 
        monstre.name.toLowerCase().includes(champsRecherche.toLowerCase())
    )

    return (
      <div className = 'App'>
        <h1>Monstres carrousel</h1>
        <h2>Ca va les nuls ?</h2>
        <ZoneRecherche
          placeholder="Chercher monstres"
          gererChangement = {this.gererChangement}
        />
        <FicheList monstres = { monstresFiltre }/>
      </div>
    )
  }
}



export default App;
