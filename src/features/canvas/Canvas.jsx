import { BACKGROUNDS } from '../../constants/images';
import GameDay from '../../templates/gameDay/GameDay';

import { useDispatch, useSelector } from "react-redux";

import domtoimage from 'dom-to-image';

import './canvas.scss';
import { useRef } from 'react';
import { resetData, selectData } from './canvasSlice';
import { resetTemplate } from '../templateSelector/templateSelectorSlice';

const TARGET_GRAPHIC_SIZE = 800;

function Canvas(props) {

    const data = useSelector(selectData);
    const dispatch = useDispatch();

    const drawerStyle = {
        // 'backgroundImage': `url(${backgroundImage})`
    };

    const templateProps = {
        data,
        styles: drawerStyle
    };

    const drawerRef = useRef(null);

    async function toImage() {
        // @todo add more sophisticated scaling
        const dataUrl = await domtoimage.toPng(document.querySelector('.canvas'), {
            quality: 1,
            height: 800,
            width: 800,
            style: {
                transform: 'none'
            }
        });

        const link = document.createElement('a');
        link.download = 'spieltag.png';
        link.href = dataUrl;
        link.click();
        // window.open(dataUrl);
    }

    const scaleFactor = window.innerWidth / TARGET_GRAPHIC_SIZE;
    const scaledSize = TARGET_GRAPHIC_SIZE * scaleFactor;
    const translatedPrePosition = scaledSize + (TARGET_GRAPHIC_SIZE - ( 2 * scaledSize ));
    const translatedFinalPosition = (translatedPrePosition + (translatedPrePosition - scaledSize) / 2);

    const canvasTransformStyle = {
        transform: `scale(${scaleFactor}) translateX(-${translatedFinalPosition + 3}px) translateY(-${translatedFinalPosition + 2}px)`
    }

    function resetTemplateData() {
        dispatch(resetTemplate());
        dispatch(resetData());
    }

    return (
        <>
        {/* <div className="column"></div> */}
        <div className="toolbar">
            <button className="create" onClick={() => toImage()}>Grafik erstellen 🪄</button>
            <button className="create" onClick={resetTemplateData}>Neu</button>
        </div>
        <div className="canvas" style={canvasTransformStyle}>
            <div className="drawer" ref={drawerRef}>
                <GameDay {...templateProps}/>
            </div>
        </div>
        {/* <div className="column"></div> */}

        </>
        
    )
}

export default Canvas;