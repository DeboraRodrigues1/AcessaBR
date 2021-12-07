import React from "react";
import './curator.scss';
import curatorPhoto from '../../images/debora.png';

function CuratorItem() {

    return(
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="foto curadora Débora Taveira"/>
            </div>
            <div className="curator__details">
                <div>
                <h3>Débora Taveira</h3>
                <h6>Curadoria</h6>
                </div>
                <p>Desenvolvedora desde 2019, e estudante de Ciencia da Computação, atuando como front end </p>
                
            </div>
        </div>
    )
}

export default CuratorItem;