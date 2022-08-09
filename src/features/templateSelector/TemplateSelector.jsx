import { useDispatch } from 'react-redux';

import TEMPLATES from '../../templates/templates';
import { selectTemplate, setTemplate } from './templateSelectorSlice';

import './templateSelector.scss';

function TemplateSelector() {

    const dispatch = useDispatch();

    return (
        <div className="template-selector p-2">
            <h3 className="is-size-3">Template auswählen</h3>
            <div className="template-list">
                {
                    TEMPLATES.map(template => (
                        <div className="template-item" key={template.id} onClick={() => dispatch(setTemplate(template.id))}>
                            <div className="thumbnail">
                                <img src={template.thumbnail} />
                            </div>
                            <div className="label">
                                <span>{template.label}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TemplateSelector;