import React from "react";
import {BrowserRouter} from 'react-router-dom'
import USAMap from "react-usa-map";
import { useState } from "react";
import { STATEINFO } from "./states";
import './App.css';

function TableComponent(props) {
// const crimerate = +((props.crime / props.pop).toFixed(4) * 100).toFixed(3);
return (
  <div>
    <div className="d-inline" id="table__title">
      <h2 className="d-inline" style={{color: "#32AB28"}}>{props.name}</h2>
      <a href={`${props.report_link}`} className="d-inline" style={{color: "#5BDCDE"}}> (Click here for full report)</a>
    </div>
    <hr/>
        <table
                style={{
                  width: "80%",
                  alignContent: "center",
                  justifyContent: "center",
                  marginLeft: 100,
                  textAlign: "center"
               //backgroundColor: #5b6770,
                }}
              >
                <tbody>
                    <tr>
                      <th>Population with Criminal Records</th>
                    </tr>
                    <tr><td>{props.pop}</td></tr>
                    <tr>
                      <th>Eligible for Expungement</th>
                    </tr>
                    <tr><td>{props.crime}</td></tr>
                    <tr>
                      <th>Expungement</th>
                    </tr>
                    <tr><td>{props.exp}</td></tr>
                    <tr>
                      <th>Expungement Gap</th>
                    </tr>
                    <tr><td>{props.expgap}</td></tr>
                    <tr>
                      <th>Years to clear the Gap</th>
                    </tr>
                    <tr>
                      <td>{props.yearsToClear}</td>
                    </tr>

                </tbody>
              </table>
            </div>
          );
        }
                     function Contact() {
                       const [showmap, setShowMap] = useState(false);
                       const [popualtion, setPopulation] = useState();
                       const [expungment, setExpungment] = useState();
                       const [expungmentGap, setExpungmentGap] = useState();
                       const [years, setYears] = useState();
                       const [crime, setCrime] = useState();
                       const [statename, setStateName] = useState();
                       const [reportLink, setReportLink] = useState();
                       const mapHandler = (event) => {
                        //  const state = STATEINFO[Math.floor(Math.random() * STATEINFO.length)];
                        for(var i=0; i<STATEINFO.length;i++){
                          if(event.target.dataset.name === STATEINFO[i].stateName){
                            var state = STATEINFO[i]
                            setPopulation(state.Total_Population);
                            setExpungment(state.Expungement);
                            setExpungmentGap(state.Expungement_Gap)
                            setCrime(state.Totoal_Crimes);
                            setStateName(event.target.dataset.name);
                            setYears(state.Years_to_clear);
                            setReportLink(state.report_link)
                            setShowMap(true);
                            console.log(state.report_link)
                            break;
                          }
                          else{
                            setShowMap(false)
                          }
                        }
                       };
                       const statesCustomConfig = () => {
                         return {
                           WA: {
                             fill: "navy",
//                             clickHandler: (event) =>
//                               console.log("Custom handler for NJ", event.target.dataset),
                           },
                           NY: {
                             fill: "#CC0000",
                           },
                         };
                       };
                       return (
//                         <div align="center">
                        <div>
                           <BrowserRouter>
                           <div className="row">
                             <div className="col-8" id="map__container">
                                <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
                             </div>
                             <div className="col-4" id="report__table">
                                {showmap && <TableComponent pop={popualtion} crime={crime} exp={expungment} expgap={expungmentGap} yearsToClear={years} name={statename} report_link={reportLink}/>}
                             </div>
                           </div>
                           </BrowserRouter>
                         </div>
                       );
                     }
                     export default Contact;
                    
