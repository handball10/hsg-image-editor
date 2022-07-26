import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import timeReducer from '../features/time/timeSlice';
// import goalReducer from '../features/goal/goalSlice';
// import penaltiesReducer from '../features/penalties/penaltySlice';
// import emptyGoalReducer from '../features/emptyGoal/emptyGoalSlice';
// import teamInfoReducer from '../features/teamInfo/teamInfoSlice';
// import gameEventReducer from '../features/gameEvent/gameEventSlice';
// import timeoutReducer from '../features/timeout/timeoutSlice';
// import logReducer from '../features/commandLog/commandLogSlice';
// import gameSettingsReducer from '../features/gameSettings/gameSettingsSlice';
// import advertisingReducer from '../features/advertising/advertisingSlice';
import canvasDataReducer from '../features/canvas/canvasSlice';
import templateSelectorReducer from '../features/templateSelector/templateSelectorSlice';

export const store = configureStore({
  reducer: {
    canvasData: canvasDataReducer,
    templateData: templateSelectorReducer,

    // counter: counterReducer,
    // time: timeReducer,
    // goals: goalReducer,
    // penalties: penaltiesReducer,
    // emptyGoal: emptyGoalReducer,
    // teams: teamInfoReducer,
    // events: gameEventReducer,
    // timeout: timeoutReducer,
    // logs: logReducer,
    // gameSettings: gameSettingsReducer,
    // advertising: advertisingReducer
  },
});
