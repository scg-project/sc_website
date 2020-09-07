import React from "react";
import USAMap from "react-usa-map";
import { useState } from "react";
import { STATEINFO } from "./states";
import './App.css';

function TableComponent(props) {
// const crimerate = +((props.crime / props.pop).toFixed(4) * 100).toFixed(3);
return (
  <div>
    <h2>{props.name}</h2>
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
                <tr>
                  <th>Population with Criminal Records</th>
                  <th>Eligible for Expungement</th>
                  <th>Expungement</th>
                  <th>Expungement Gap</th>
                  <th>Years to clear the Gap</th>
        
                </tr>
                <tr>
                  <td>{props.pop}</td>
                  <td>{props.crime}</td>
                  <td>{props.exp}</td>
                  <td>{props.expgap}</td>
                  <td>{props.yearsToClear}</td>
                </tr>
              </table>
            </div>
          );
        }
                     function Contact() {
                       const BASE_URL = "https://docs.google.com/document/d/11cmMQL2Dep01NQ_mtHsekvkHwxIHYQ2kxsSgtTXoNoI/edit"
                       const [showmap, setShowMap] = useState(false);
                       const [popualtion, setPopulation] = useState();
                       const [expungment, setExpungment] = useState();
                       const [expungmentGap, setExpungmentGap] = useState();
                       const [years, setYears] = useState();
                       const [crime, setCrime] = useState();
                       const [statename, setStateName] = useState();
                       const mapHandler = (event) => {
                        //  const state = STATEINFO[Math.floor(Math.random() * STATEINFO.length)];
                        for(var i=0; i<STATEINFO.length;i++){
                          if(event.target.dataset.name == STATEINFO[i].stateName){
                            var state = STATEINFO[i]
                            setPopulation(state.Total_Population);
                            setExpungment(state.Expungement);
                            setExpungmentGap(state.Expungement_Gap)
                            setCrime(state.Totoal_Crimes);
                            setStateName(event.target.dataset.name);
                            setYears(state.Years_to_clear);
                            setShowMap(true);
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
                         <div align="center">
                           <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
                           {showmap && <a href={BASE_URL}>Link to criminal records report!</a>}
                           {showmap && <TableComponent pop={popualtion} crime={crime} exp={expungment} expgap={expungmentGap} yearsToClear={years} name={statename} />}
                         </div>
                       );
                     }
                     export default Contact;
                    
