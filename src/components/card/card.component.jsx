import React from 'react';
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

import './card.styles.scss';

export const Card = props => {

    let rank_identifier = '';
    if(props.team.change > 0){
        rank_identifier = <FaCaretUp size=".8em" color="rgb(100, 168, 100)" />;
    }else if(props.team.change < 0){
        rank_identifier = <FaCaretDown size=".8em" color="rgb(209, 94, 94)" />;
    }else{
        rank_identifier = '';
    }


    return(
        <tr>
            <td>{ rank_identifier }</td>
            <td className={`rank`}>{ props.team.rank}</td>
            
            <td className="team">
                <img src={props.team.team.icon.url} alt="team-flag"/>
                <span className="name-full">{props.team.team.name}</span>
                <span className="name-short">{props.team.team.abbreviation}</span>
            </td>
            <td className="played">{props.team.played}</td>
            <td className="won">{props.team.win}</td>
            <td className="drawn">{props.team.draw}</td>
            <td className="lost">{props.team.loss}</td>
            <td className="for">{props.team.goals_for}</td>
            <td className="against">{props.team.goals_against}</td>
            <td className="difference">{props.team.goals_diff}</td>
            <td className="points">{props.team.points}</td>
        </tr>
    )
}