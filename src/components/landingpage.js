import React, {Component} from 'react';
import {Grid, Cell} from '../overrides/react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid"> 
                    <Cell col={12}>
                        <img
                            src="https://lh3.googleusercontent.com/9KafbigyKU_dBXaYQYePO78K9yJMhXTiqpz9PZzko_ZF5LJSJ7SsThe_-Sqg4FHjO2INOoK1_gpQDNKFm1XILOoMpmNuDwY6SOHjJtj91a2O9jSoy8p_PSwZ1tBlVcp3sFYCnfy7AtRi422HZD2VYZU2I0Eusr0il5OD-jDPlmBMQieslzmmha85ZuDilr4bzvlIpLVC3ot1TU5gh2FYrQWBx7HH8beAAm9oPLbyYpFhvFHPKIY4YhieqjpaFU352nml3VxwvH5O8JXfr-salStC3uTOHXK3GdcQiEPK0R3bsdF7bBUutXawSQWAfJNhs9oQwlQXQpgGOb88UdT5ip_1RCBbEpYgmGuH7tdwjaqnlUeSh-mRBmbr0dKmX_zk2rRFerYRCrbHD9UoSn_mqcw0cpvh5tF8qOvDclZ_9Tnc2U4fqpnkJyuY5OnPqIt3xEA-wHuzmiHKqOT5LPXHedhIxlKvKNMGE4zeeSGEKnsRtGl_XbIQpEplAyc3GWlfGux7_6NDZObrHqbOITnTTEin-v0xFaxlX1R1zv6joa6NzqL2rzpG6VIL9TwLm8TXpX1oDUNthjWQWCdD2jxml_wEVgTBLxZE3G3obluMtpjW1_9YVpOq--bt3I2HyaS2l_DphNyvxfMxI7uva0fQfJEUZlFRaYnxJtFzN9CCHmE08v38mnq3tw=w729-h772-no"
                            alt="avatar"
                            className="avatar-img"/>

                        <div className="banner-text"> <h1>Systems Analyst | Software Engineer</h1>
                        <hr></hr>
                        <p>HTML/CSS|Bootstrap|Javascript|React|NodeJS|Java|SQL</p>

                            <div className="social-links">
                          
                                {/*LinkedIn*/}  
                                <a href="http://google.com" rel="noopener noreferrer" target="_bank">

                                <i className="fa fa-linkedin-square"  aria-hidden="true"></i>
                                </a>
                                
                                {/*Github*/}  
                                <a href="http://google.com" rel="noopener noreferrer" target="_bank">

                                <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>


                            </div>
                        </div>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;