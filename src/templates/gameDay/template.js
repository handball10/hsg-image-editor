import GameDay from "./GameDay";
import GameDayControls from "./GameDayControls";
import { v4 as uuidv4 } from 'uuid';
import { templatePathFactory } from "../../constants/images";

export default {
    id: uuidv4(),
    template: GameDay,
    controls: GameDayControls,
    thumbnail: templatePathFactory('heimspiele.jpg'),
    label: 'Heimspiele'
};