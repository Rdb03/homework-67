import './DoorLock.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {clear, deleteNumber, enter, enterNumber} from "./doorLockSlice.ts";

const DoorLock = () => {

    const doorLockValue = useSelector((state: RootState) => state.doorLock.value);
    const dispatch = useDispatch();

    const screenClass = doorLockValue === 'ACCESS ALLOWED' ? 'screen screen-allowed' :
        doorLockValue === 'ACCESS DENIED' ? 'screen screen-denied' :
            'screen';

    return (
        <div className="door-lock">
            <p className='logo'>ABLOY</p>
            <div className={screenClass}>
                {doorLockValue}
            </div>
            <button className='clear-btn' onClick={() => dispatch(clear())}>restart</button>
            <div className="keyboard">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '<', '0', 'E'].map((num) => (
                    <button onClick={() => {
                        switch (num) {
                            case '<':
                                dispatch(deleteNumber());
                                break;
                            case 'E':
                                dispatch(enter());
                                break;
                            default:
                                dispatch(enterNumber(num));
                        }
                    }}
                            key={num}
                            className='keyboard-btn'
                    >
                        {num}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DoorLock;