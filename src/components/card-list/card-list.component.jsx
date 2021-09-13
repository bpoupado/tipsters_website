import React from 'react';

import './card-list.styles.scss';

import { Card } from '../card/card.component';

export const CardList = props => (
<div className="container">
  <div className="comp-select"></div>
  <div className="comp-title"><img src={props.tournament.icon.url} className="comp-flag" alt="flag"/>
    <h2 className="comp-name">{ props.tournament.current_season.name}</h2>
  </div>
  <div className="comp-table-container">
  <table className="comp-table">
    <thead>
        <tr className="comp-table-header">
            <th className="rank">#</th>
            <th className="rank"></th>
            <th className="team">Equipa</th>
            <th className="played">P</th>
            <th className="won">W</th>
            <th className="drawn">D</th>
            <th className="lost">L</th>
            <th className="for">+</th>
            <th className="against">-</th>
            <th className="difference">+/-</th>
            <th className="points">P</th>
        </tr>
    </thead>
    <tbody className="comp-table-body">
      {
      
        props.teams[2]['groups'][0].teams.sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank)),
        props.teams[2]['groups'][0].teams.map(team => (
          <Card key={team.id} team={team}/>
        ))

      }
    </tbody>
  </table>
  </div>
</div>
)