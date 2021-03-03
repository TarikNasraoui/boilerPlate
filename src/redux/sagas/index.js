import { all } from 'redux-saga/effects'

import  asyncDataSaga  from './postSaga'

function* rootSaga() {
    yield all([
        asyncDataSaga(),
    ])
}

export default rootSaga