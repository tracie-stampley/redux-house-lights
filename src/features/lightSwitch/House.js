import React from 'react';
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

    return (
        <div className='house'>
            <div className='title'>Our House</div>
            <LightSwitch on={masterSwitchOn} containerCssClass='master-switch' handleToggle={() => dispatch(toggleMasterSwitch())}/>
            <Room lightOn={kitchenLightOn} roomName='Kitchen' containerCssClass='room-1'/>
            <Room lightOn={livingRoomLightOn} roomName='Living Room' containerCssClass='room-2'/>
            <Room lightOn={bedroomLightOn} roomName='Bedroom' containerCssClass='room-3'/>
            <LightSwitch on={kitchenLightOn} containerCssClass='room-1-switch' handleToggle={() => dispatch(toggleKitchenLight())}/>
            <LightSwitch on={livingRoomLightOn} containerCssClass='room-2-switch' handleToggle={() => dispatch(toggleLivingRoomLight())}/>
            <LightSwitch on={bedroomLightOn} containerCssClass='room-3-switch' handleToggle={() => dispatch(toggleBedroomLight())}/>
        </div>
    )
}

export default House;