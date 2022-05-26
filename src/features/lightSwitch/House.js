import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Room from './Room';
import LightSwitch from './LightSwitch';
import {
    toggleMasterSwitch,
    toggleKitchenLight,
    toggleLivingRoomLight,
    toggleBedroomLight,
    selectMasterSwitchOn,
    selectKitchenLightOn,
    selectLivingRoomLightOn,
    selectBedroomLightOn
} from './lightSwitchSlice';


const House = () => {
    const masterSwitchOn = useSelector(selectMasterSwitchOn);
    const kitchenLightOn = useSelector(selectKitchenLightOn);
    const livingRoomLightOn = useSelector(selectLivingRoomLightOn);
    const bedroomLightOn = useSelector(selectBedroomLightOn);

    const dispatch = useDispatch();

    const today = new Date().toDateString();


    return (
        <div className='house'>
            <div className='title'>Our House</div>
            <LightSwitch on={masterSwitchOn} containerCssClass='master-switch' handleToggle={(e) => dispatch(toggleMasterSwitch(e.target.checked))}/>
            <Room lightOn={kitchenLightOn} roomName='Kitchen' containerCssClass='room-1'/>
            <Room lightOn={livingRoomLightOn} roomName='Living Room' containerCssClass='room-2'/>
            <Room lightOn={bedroomLightOn} roomName='Bedroom' containerCssClass='room-3'/>
            <LightSwitch on={kitchenLightOn} containerCssClass='room-1-switch' handleToggle={(e) => dispatch(toggleKitchenLight(e.target.checked))}/>
            <LightSwitch on={livingRoomLightOn} containerCssClass='room-2-switch' handleToggle={(e) => dispatch(toggleLivingRoomLight(e.target.checked))}/>
            <LightSwitch on={bedroomLightOn} containerCssClass='room-3-switch' handleToggle={(e) => dispatch(toggleBedroomLight(e.target.checked))}/>
            {weatherData !== undefined && <div>
                <div>{today}</div>
                <div>{`High Temp: ${weatherData.dataseries[0].temp2m.max} C`}</div>
            </div>}
        </div>
    )
}

export default House;