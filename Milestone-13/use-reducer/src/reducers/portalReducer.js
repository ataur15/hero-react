export const portalReducer = (state, action) => {
    switch (action.type) {
        case 'add_patient':
            console.log(action);
            const adding = {
                name: action.name,
                id: action.name + 1
            }
            const newPatients = [...state.patients, adding];
            return {
                ...state,
                patients: newPatients
            }
            break;

        default:
            return state;
            break;
    }
}