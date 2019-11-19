const INITIAL_STATE = [
    {
        title: `My fair lady.`,
        poster: `This one`,
        id: 123
    },
    {
        title: `Redux`,
        poster: `fantastic`,
        id: 432
    }
]

function movieReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state
    }
}
export default movieReducer
/*/*0a12f622cf73e8bbf38643081189bb9c*/