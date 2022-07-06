import React,{useReducer, useContext, createContext, Dispatch} from "react";

const { kakao } = window as any;

type Distance='near'|'soso'|'far';

type State={
    name: string;
    location: any;
    distance: Distance;
}

type Action=
    |{type: 'Set_name'; name: string}
    |{type: 'Set_Location'; location: any}
    |{type: 'Set_Distance'; distance: Distance}

type mapDispatch=Dispatch<Action>;
   
const stateContext=createContext<State|null>(null);
const dispatchContext=createContext<mapDispatch|null>(null);

function reducer(state: State, action:Action):State{
    switch(action.type){
        case 'Set_name':
            return{
                ...state,
                name: action.name,
            }
        case 'Set_Location':
            return{
                ...state,
                location: action.location,
            }
        case 'Set_Distance':
            return{
                ...state,
                distance: action.distance,
            }
        default:
            return{
                ...state
            }
    }
}

export function contextProvider({children}: {children: React.ReactNode}){
    const [state, dispatch]=useReducer(reducer,{
        name: '집',
        location: new kakao.maps.LatLng(37.566826, 126.9786567),
        distance: 'near'
    });

    return (
        <stateContext.Provider value={state}>
            <dispatchContext.Provider value={dispatch}>
                {children}
            </dispatchContext.Provider>
        </stateContext.Provider>
    )
}

export function useStateContext(){
    const state=useContext(stateContext);
    if(!state) throw new Error('cannot find stateContextProvider');
    return state;
}

export function useDispatchContext(){
    const dispatch=useContext(dispatchContext);
    if(!dispatch) throw new Error('cannot find dispatchContextProvider');
    return dispatch;
}
