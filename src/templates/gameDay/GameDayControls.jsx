import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACKGROUNDS } from "../../constants/images";
import { selectData, setData } from "../../features/canvas/canvasSlice";
import classNames from 'classnames';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';

import './gameDayControls.scss';
import { LOCATIONS, TEAM_CLASSES, TEAM_LOGO_MAP } from "../../constants/inputValues";

const initialData = {
    start: null,
    end: null,
    background: null,
    games: [],
    hasPresenter: false,
    presenter: {}
};

const fieldNames = [
    'inputTeam',
    'inputStart',
    'inputLocation',
    'inputGuestTeam'
];

const initalFormInput = fieldNames.reduce((acc, field) => ({ ...acc, [field]: undefined }), {});

function GameDayControls(props) {

    const data = useSelector(selectData);
    const dispatch = useDispatch();

    const [ configuration, setConfiguration ] = useState(initialData);
    const [ inputValues, setInputValue ] = useState(initalFormInput);


    const [ isModalVisible, setModalVisibility ] = useState(false);

    const formRef = useRef(null);

    const modalClasses = classNames({
        'modal': true,
        'is-active': isModalVisible
    });

    const customStyles = {
        overlay: {
            background: 'rgba(10,10,10,.86)',
            zIndex: 100
        }
    };

    function updateConfiguration(configuration) {
        console.log(configuration);
        setConfiguration(configuration);

        dispatch(setData(configuration));
    }

    function changeBackground(background) {
        updateConfiguration({
            ...configuration,
            background
        });
    }

    function changeStartDate(startDate) {
        updateConfiguration({
            ...configuration,
            start: startDate
        });
    }

    function changeEndDate(endDate) {
        updateConfiguration({
            ...configuration,
            end: endDate
        });
    }

    function handleModalInputValueChange(event) {
        const { name, value } = event.target;
        console.log(value);
        setInputValue({
            ...inputValues,
            [ name ]: value
        });
    }

    function resetModalForm() {
        setInputValue(initalFormInput);
    }

    function addGameEntry() {
        const {
            inputTeam,
            inputStart,
            inputLocation,
            inputGuestTeam
        } = inputValues;

        const payload = {
            id: uuidv4(),
            logo: TEAM_LOGO_MAP[TEAM_CLASSES[inputTeam]],
            teamClass: TEAM_CLASSES[inputTeam],
            date: new Date(inputStart),
            location: inputLocation,
            guest: inputGuestTeam
        };

        updateConfiguration({
            ...configuration,
            games: [
                ...configuration.games,
                payload
            ]
        });

        resetModalForm();
    }

    function deleteGame(gameId) {
        updateConfiguration({
            ...configuration,
            games: configuration.games.filter(({ id }) => id !== gameId )
        });
    }

    return (
        <>
        <div className="game-day-controls">
            <div className="backgrounds mb-2">
                <h3>Hintergrund</h3>
                <div className="control-list">
                    {
                        BACKGROUNDS.map(background => (
                            <div className={classNames('background-item', { 'is-active': background === data.background })} key={background}>
                                <img src={background} onClick={() => changeBackground(background)}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="dates mb-3">
                <h3>Datum</h3>
                <div className="columns is-mobile">
                    <div className="column">
                        <div className="field">
                            <label className="label">Start</label>
                            <div className="control">
                                <input type="date" className="input" value={data.start} onChange={event => changeStartDate(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Ende</label>
                            <div className="control">
                                <input type="date" className="input" value={data.end} onChange={event => changeEndDate(event.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="game-entries mb-2">
                <h3 className="is-flex is-flex-direction-row is-justify-content-space-between">Spiele <button className="button add" onClick={() => setModalVisibility(true)}>+</button></h3>
                <div className="item-list">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Begegnung</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.games && [...data.games ].sort((a, b) => a.date - b.date).map(game => (
                                    <tr key={`table-${game.id}`}>
                                        <td>
                                            {`${game.teamClass} - ${game.guest}`}
                                        </td>
                                        <td>
                                            <button className="button delete" onClick={() => deleteGame(game.id)}>-</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Modal
            isOpen={isModalVisible}
            onRequestClose={() => setModalVisibility(false)}
            contentLabel="Modal"
            className={modalClasses}
            style={customStyles}
        >
            <div className="modal-card is-medium">
                <header className="modal-card-head">
                    <p className="modal-card-title">Spiel hinzufügen</p>
                    <button className="delete" onClick={() => setModalVisibility(false) && resetModalForm() }></button>
                </header>
                <section className="modal-card-body">
                    <form>
                        <div className="columns">
                            <div className="field">
                                <label className="label">Team</label>
                                <div className="control">
                                    <select className="select" defaultValue={''} name="inputTeam" value={inputValues.inputTeam} onChange={handleModalInputValueChange}>
                                        <option value="" >Auswählen</option>
                                        {
                                            Object.entries(TEAM_CLASSES).map(([ key, value ]) => (
                                                <option value={key} key={key}>{value}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Anpfiff</label>
                                <div className="control">
                                    <input className="input" type="datetime-local" name="inputStart" value={inputValues.inputStart} onChange={handleModalInputValueChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Halle</label>
                                <div className="control">
                                    <select className="select" defaultValue={''} name="inputLocation" value={inputValues.inputLocation} onChange={handleModalInputValueChange}>
                                    <option value="">Auswählen</option>
                                    {
                                        LOCATIONS.map(location => (
                                            <option value={location} key={`input-option-${location}`}>{location}</option>
                                        ))
                                    }
                                    </select>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Gegner</label>
                                <div className="control">
                                    <input className="input" type="text" maxLength={100} name="inputGuestTeam" value={inputValues.inputGuestTeam} onChange={handleModalInputValueChange} />
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <a className="button is-primary" onClick={() => setModalVisibility(false) && resetModalForm() }>Abbrechen</a>
                    <a className="button is-success" onClick={() => {
                        addGameEntry();
                        setModalVisibility(false);
                    }}>Hinzufügen</a>
                </footer>
            </div>
        </Modal>
        </>
    )
}

export default GameDayControls;