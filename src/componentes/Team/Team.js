import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Team = (props) => {
    const { strTeamBadge, strSport, idTeam, strTeam } = props.team;
    const history = useHistory();
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 text-center my-3'>
            <div style={{ backgroundColor: "#0A1527" }} className="card h-100">
                <Link className='text-decoration-none text-white' to={`/team/${idTeam}`}>
                    <img src={strTeamBadge} className="card-img-top p-4" alt={strTeam} />
                    <div className="card-body">
                        <h2 className="card-title">{strTeam}</h2>
                        <h5 className="card-text">Sports type: {strSport}</h5>
                    </div>
                </Link>
                <button className="btn btn-warning rounded-0" onClick={() => history.push(`/team/${idTeam}`)}> <h5> Explore <FontAwesomeIcon icon={faArrowRight} /> </h5></button>
            </div>
        </div >

    );
};

export default Team;