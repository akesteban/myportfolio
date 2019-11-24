import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid"> 
                    <Cell col={12}>
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;