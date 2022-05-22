import './LightSwitch.css'

const LightSwitch = ({ on=false, containerCssClass, handleToggle }) => (
    <div className={containerCssClass}>
        <label className='switch'>
            <input className='switch-input' type='checkbox' checked={on} onChange={handleToggle} />
            <span className='switch-label' data-on='On' data-off='Off' />
            <span className='switch-handle' />
        </label>
    </div>
)

export default LightSwitch;