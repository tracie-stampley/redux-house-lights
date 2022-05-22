

const Room = ({ lightOn = false, roomName, containerCssClass }) => (
    <div className={containerCssClass}>
        <div className={lightOn ? 'light-on': 'light-off'}>
            {roomName}
        </div>
    </div>
);

export default Room;