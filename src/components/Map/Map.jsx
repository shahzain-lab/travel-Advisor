import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react'
import React from 'react';
import useStyles from './style'

function Map() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)')
    const coordinate = { let: 0, lng: 0 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
             bootstrapURLKeys= {{key: 'AIzaSyDbYqGyO2jC_zrLLr2EeYTNxlC9Sd9BEpM'}}
             defaultCenter={coordinate}
             center={coordinate}
             defaultZoom={14}
             margin={[50, 50, 50, 50]}
            //  option= {''}
            //  onChange={''}
            //  onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
