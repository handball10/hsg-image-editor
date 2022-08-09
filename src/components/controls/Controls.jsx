import classNames from 'classnames';
import { useState } from 'react';
import GameDayControls from '../../templates/gameDay/GameDayControls';
import './controls.scss';

function Controls() {

    const [ isExpanded, setExpanded ] = useState(true);

    const classes = classNames({
        controls: true,
        'is-expanded': isExpanded
    });

    return (
        <div className={classes}>
            <div className="interactor" onClick={() => setExpanded(!isExpanded)}></div>
            <div className="content p-3">
                <GameDayControls />
            </div>
        </div>
    )
}

export default Controls;