import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import maleImg from '../../images/male.png'
import femaleImg from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faFlag, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFutbol } from '@fortawesome/free-regular-svg-icons';

const TeamDetails = () => {
    //loading & destructuring data
    const { idTeam } = useParams();
    const [team, setTeam] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                return data;
            } catch (error) {
                alert(`sorry could not load data for this error : ${error}`)
            }
        }
        fetchData().then(data => setTeam(data.teams[0]));
    }, [idTeam]);

    const { strTeam, strTeamBadge, strGender, strDescriptionEN, strCountry, strSport, strStadiumDescription, strInstagram, strFacebook, strTwitter, strYoutube, intFormedYear, strStadiumThumb } = team;

    //banner style
    const bannerStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(0deg, rgb(206 203 203 / 50%), rgb(247 246 246 / 30%)), url(${strStadiumThumb})`,
        height: '25em',
    };

    //conditional bg
    let bgColor;
    strGender === 'Male' ? bgColor = { backgroundColor: "#0A1527", borderRadius: "1em" } : bgColor = { backgroundColor: "#FC4D57", borderRadius: "1em" }
    return (
        <>
            <div className='container-fluid d-flex align-items-center justify-content-center' style={bannerStyle}>
                <img className='img-fluid' style={{ maxWidth: '300px' }} src={strTeamBadge} alt={strTeam} />
            </div>
            <div className="container-fluid bg-dark">
                <div className='container text-white py-3'>
                    <Link className='text-decoration-none text-warning' to="/home"><h1><FontAwesomeIcon icon={faChevronCircleLeft} size="1x" /> Home</h1></Link>
                    <div className="container my-2 p-3">
                        <div className="row mb-4 p-3" style={bgColor}>
                            <div className="col-md-6">
                                <div className="card-body text-warning">
                                    <h1 className="card-title">{strTeam}</h1>
                                    <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> Founded: {intFormedYear}</h5>
                                    <h5 className="card-title"><FontAwesomeIcon icon={faFlag} size="1x" /> Country: {strCountry}</h5>
                                    <h5 className="card-title"><FontAwesomeIcon icon={faFutbol} size="1x" /> Sport Type: {strSport}</h5>
                                    <h5 className="card-title"><FontAwesomeIcon icon={faMars} size="1x" /> Gender: {strGender}</h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {
                                    strGender === 'Male' ? <img className="img-fluid" src={maleImg} alt={strTeam} /> : <img className="img-fluid" src={femaleImg} alt={strTeam} />
                                }
                            </div>
                        </div>
                        <p className="card-text">{strDescriptionEN}</p>
                        <br />
                        <p className="card-text">Stadium Description : {strStadiumDescription}</p>
                    </div>
                    <div className="d-flex justify-content-center text-decoration-none">
                        <a className='text-primaray m-2' href={`https://${strFacebook}`} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        <a className='text-danger m-2' href={`https://${strYoutube}`} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                        <a className='text-primaray m-2' href={`https://${strTwitter}`} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        <a className='text-warning m-2' href={`https://${strInstagram}`} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetails;
