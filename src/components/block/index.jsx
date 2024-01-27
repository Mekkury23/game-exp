/* eslint-disable react/prop-types */

import './index.css';

const Block = ({title, teams, color}) => {
    return (
        <div className="block" style={{ backgroundColor: color}}>
            <p className="block__title">
                {title}
            </p>
            <div className="block__teams">
                {teams.map((team, index) => (
                   <p key={index}>
                    {team.name}
                   </p> 
                ))}
            </div>
        </div>
    )
}

export default Block;