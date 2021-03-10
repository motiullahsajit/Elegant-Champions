import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Team = (props) => {
    const { strTeamBadge, strAlternate, strSport, idTeam } = props.team
    const history = useHistory();
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 text-center my-3'>
            <Link className='text-decoration-none' to={`/team/${idTeam}`}>
                <div style={{backgroundColor:"#0E0A2A"}} className="card h-100 text-white">
                    <img src={strTeamBadge} className="card-img-top p-4" alt={strAlternate} />
                    <div className="card-body">
                        <h2 className="card-title fs-1">{strAlternate}</h2>
                        <h5 className="card-text">Sports type: {strSport}</h5>
                        <button className="btn btn-primary" onClick={() => history.push(`/team/${idTeam}`)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </Link>
        </div >

    );
};

export default Team;