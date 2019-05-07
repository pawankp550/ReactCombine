import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHeroById } from '../../actions/heroesActions';
import SelectedHeroList from './SelectedHeroes';
import HeroesList from './HeroesList';

class Heroes extends Component{

onHeroSelect(id){
       this.props.getHeroById(id);
}


    render(){
        return(
            <>
            <h1>SuperSquad</h1>
            <div className="row">
                <div className="col-lg-4">
                    <HeroesList heroesList = {this.props.heroesList}  onSelect = {(id) => {this.onHeroSelect(id)}}/>
                </div>
                <div className="col-lg-4">
                    <SelectedHeroList selected= {this.props.selectedHero}/>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps= (state) => {
    return {
           heroesList: state.heroesList,
           selectedHero: state.selectedHero
    }
}

export default connect(mapStateToProps, {getHeroById})(Heroes);