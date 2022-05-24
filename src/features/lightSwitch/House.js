import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Room from './Room';
import LightSwitch from './LightSwitch';
import {
    toggleBedroomLight,
    selectBedroomLightOn
} from './lightSwitchSlice';

const House = () => {
    const bedroomLightOn = useSelector(selectBedroomLightOn);

    return (
        <div className='house'>
            <div className='title'>Our House</div>
            <LightSwitch on={false} containerCssClass='master-switch'/>
            <Room lightOn={false} roomName='Kitchen' containerCssClass='room-1'/>
            <Room lightOn={false} roomName='Living Room' containerCssClass='room-2'/>
            <Room lightOn={bedroomLightOn} roomName='Bedroom' containerCssClass='room-3'/>
            <LightSwitch on={false} containerCssClass='room-1-switch' />
            <LightSwitch on={false} containerCssClass='room-2-switch' />
            <LightSwitch on={bedroomLightOn} containerCssClass='room-3-switch' handleToggle={(e) => dispatch(toggleBedroomLight(e.target.checked))}/>
        </div>
    )
}

export default House;