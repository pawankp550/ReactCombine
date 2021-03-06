import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHeroById, removeHeroById } from '../../actions/heroesActions';
import SelectedHeroList from './SelectedHeroes';
import HeroesList from './HeroesList';
import TotalPower from './totalPower';

class Heroes extends Component{

onHeroSelect(id){
       this.props.getHeroById(id);
}

onHeroRemoved(id){
       this.props.removeHeroById(id);
}

    render(){
        return(
            <div className="App">
                <h1>SuperSquad</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <h3>Characters</h3>
                        <HeroesList heroesList = {this.props.heroesList}  onSelect = {(id) => {this.onHeroSelect(id)}}/>
                    </div>
                    <div className="col-lg-4">
                        <h3>Your Squad</h3>
                        <SelectedHeroList selected= {this.props.selectedHero} onRemove = {(id) => {this.onHeroRemoved(id)}}/>
                    </div>
                    <div className="col-lg-4">
                        <h3>Overall Stats</h3>
                        <TotalPower selectedList = {this.props.selectedHero}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return {
           heroesList: state.heroesList,
           selectedHero: state.selectedHero
    }
}

export default connect(mapStateToProps, {getHeroById, removeHeroById})(Heroes);