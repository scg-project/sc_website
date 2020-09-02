/// source code
import React, { Component } from 'react';

import pic0 from './favicon.png';
import pic1 from './cfa-logo-color.png';
import pic2 from './scuLeavey.png';
import pic3 from './SCU Law Logo.png';
import pic4 from './scucenterforjustice.PNG';
import pic5 from './clean slate.PNG';
import pic6 from './scuhtl.PNG';
import pic7 from './scueng.PNG';
import pic8 from './Epic Lab.png';
import pic9 from './Frugal_Blk_BriteRed-Stack-4-360x92.png';
class Home extends Component {
    render() {
        return (
            <div>

                <p /><ul>
                    <li><a href="about.html">About</a></li>
                    <li><a href="methodology.html">Methodology</a></li>
                    <li><a href="tools.html">Tools &amp; Resources</a></li>
                    <li><a href="team.html">Project Team</a></li>
                    <li><a href="press.html">Press</a></li>
                    <li><a href="partners.html">Partners</a></li>
                    <a href="public/index.html"><img className="logo" src={pic0} /></a>
                </ul>
                <h3 className="title-info" text-align="center">Our Partners</h3>
                <div className="col"  >
                    <div className="row" >

                        <div className="hvrbox">
                            <img src={pic1} width={250} height={250} alt="Image" />
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">We are a network of people making government work for the people, by the people, in the digital age.</div>
                            </div>
                        </div>

                        
                        <div className="hvrbox">
                            <img src={pic2} width={250} height={250} alt="Image" />
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text"> LSB provide rigorous study and high impact experiential learning.</div>

                            </div>
                         </div>
                        <div className="hvrbox">
                            <img src={pic3} width={250} height={250} alt="Image" />
                             <div class="hvrbox-layer_top">
                                    <div class="hvrbox-text">Dedicated to educating lawyers who lead with a commitment to excellence, ethics, and social justice.</div>
                                    </div>
                        </div>
                        <div className="hvrbox">
                                    <img src={pic4} width={250} height={250} alt="Image" />
                                    <div class="hvrbox-layer_top">
                                    <div class="hvrbox-text">Provides students with a legal education that instills a commitment to social justice, public Interest & service</div>
                                    </div>
                        </div>
                        <div className="hvrbox">
                                        <img src={pic5} width={250} height={250} alt="Image" />
                                        <div class="hvrbox-layer_top">
                                    <div class="text">The Clean Slate Initiative is a national bipartisan coalition advancing policies to automatically clear all eligible criminal records across the United States.</div>
                                    </div>
                        </div>
                        <div className="hvrbox">
                                            <img src={pic6} width={250} height={250} alt="Image" />
                                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">The mission is to be a nationally recognized program that educates and trains lawyers property and technology issues.</div>
                                    </div>
                        </div>
                        <div className="hvrbox">
                         <img src={pic7} width={250} height={250} alt="Image" />
                         <div class="hvrbox-layer_top">
                         <div class="text">Our mission is to fuel engineering students' intellectual curiosity in support of building a more just, humane, and sustainable world.</div>
                         </div>
                        </div>
                        <div className="hvrbox">
                            <img src={pic8} width={250} height={250} alt="Image" />
                            <div class="hvrbox-layer_top">
                            <div class="hverbx-text">EPIC Laboratory is one of the leaders in supporting Humanitarian Technology research at Santa Clara University. </div>
                             </div>
                        </div>
                        <div className="hvrbox">
                          <img src={pic9} width={250} height={250} alt="Image" />
                           <div class="hvrbox-layer_top">
                           <div class="hvrbox-text">FIH mission is to engage students and faculty in technological and humanitarian projects.</div>
                           </div>
                        </div>
                    </div>
                </div>
                <p />
            </div>
        );
    }
}
export default Home;
