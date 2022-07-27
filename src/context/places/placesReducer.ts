import { PlacesState } from "./PlacesProvider";

// Defining Action. payLoad => info that it contains action
// payLoad: [ Latitude, Length ]
type  PlacesAction = {type: 'setUserLocation', payLoad: [number, number]};

export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {

  switch (action.type) {
    case 'setUserLocation':
      return {
        ...state,
        isLoading: false,
        userLocation: action.payLoad
      }

    default:
      return state;
  }
}
