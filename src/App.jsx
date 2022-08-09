import './App.scss';
import Controls from './components/controls/Controls';
import Canvas from './features/canvas/Canvas';
import { selectTemplate } from './features/templateSelector/templateSelectorSlice';
import { useDispatch, useSelector } from "react-redux";
import TemplateSelector from './features/templateSelector/TemplateSelector';

function App() {

  const template = useSelector(selectTemplate);

  return (
    <div className="App">
      {
        !template 
          ? <TemplateSelector /> 
          : (
            <>
              <div className="canvas-wrapper">
                <Canvas />
              </div>
              <Controls />
            </>
          ) 
      }
    </div>
  );
}

export default App;
