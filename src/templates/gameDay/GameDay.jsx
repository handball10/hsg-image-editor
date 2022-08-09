import { LOGOS } from '../../constants/images';
import { useDispatch, useSelector } from "react-redux";
import {
    LOCATIONS, TEAM_CLASSES
} from '../../constants/inputValues';

import './gameDay.scss';
import { selectData } from '../../features/canvas/canvasSlice';

function GameDay(props) {

    const data = useSelector(selectData);
    

    const logo = LOGOS[0];

    // const data = [
    //     {
    //         logo: LOGOS[0],
    //         home: 'HSG',
    //         guest: 'TSV Heuchelheim',
    //         date: new Date(),
    //         location: LOCATIONS[1],
    //         teamClass: TEAM_CLASSES[0],
    //         id: Math.random()
    //     },
    //     {
    //         logo: LOGOS[0],
    //         home: 'HSG',
    //         guest: 'TSV Budenheim',
    //         date: new Date(),
    //         location: LOCATIONS[0],
    //         teamClass: TEAM_CLASSES[7],
    //         id: Math.random() 
    //     },
    //     {
    //         logo: LOGOS[1],
    //         home: 'HSG',
    //         guest: 'TSV Sandhausen',
    //         date: new Date(),
    //         location: LOCATIONS[0],
    //         teamClass: TEAM_CLASSES[10],
    //         id: Math.random() 
    //     },
    //     {
    //         logo: LOGOS[2],
    //         home: 'HSG',
    //         guest: 'HSG Wettenberg',
    //         date: new Date(),
    //         location: LOCATIONS[1],
    //         teamClass: TEAM_CLASSES[8],
    //         id: Math.random() 
    //     },
    //     {
    //         logo: LOGOS[2],
    //         home: 'HSG',
    //         guest: 'HSG Wettenberg',
    //         date: new Date(),
    //         location: LOCATIONS[1],
    //         teamClass: TEAM_CLASSES[8],
    //         id: Math.random() 
    //     }
    // ];

    const formatter = new Intl.DateTimeFormat('de-DE',  { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
    const headlineFormatter = new Intl.DateTimeFormat('de-DE',  { month: 'long', day: '2-digit' });

    return (
        <div className="wrapper">
            
            <div className="background" style={{ backgroundImage: `url(${data.background})` }}></div>
            <div className="header">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="title">
                    <p>Heimspiele</p>
                    <small>
                    {
                        data.start && headlineFormatter.format(new Date(data.start))
                    }
                    {
                        data.end && (` - ${headlineFormatter.format(new Date(data.end))}`)
                    }
                    </small>
                </div>
            </div>
            <div className="data-container">
                {
                    data.games?.length > 0 && [...data.games ].sort((a, b) => a.date - b.date).map(
                        item => (
                            <div className="row" key={item.id}>
                                <div className="home">
                                    <div className="logo">
                                        <img src={item.logo} alt="Logo" />
                                    </div>
                                    <div className="gameClass">
                                        {item.teamClass}
                                    </div>
                                </div>
                                <div className="details">
                                    <p className="date"><b>{formatter.format(item.date)}</b></p>
                                    <p className="location">{item.location}</p>
                                </div>
                                <div className="guest">
                                    <p>{item.guest}</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
            <div className="footer-container">
                <div className="ticket-link">hsg-dm.de/tickets/</div>
                {/* <div className="presenter">
                    <p>Spieltagspresenter</p>
                    <img src="/assets/sponsors/auto-weller.svg" />
                </div> */}
            </div>
        </div>   
    )
}

export default GameDay;