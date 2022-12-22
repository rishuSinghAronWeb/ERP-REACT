import { all, fork } from "redux-saga/effects"

import HomeSaga from "./home/saga"

export default function* rootSaga() {
    yield all([
        fork(HomeSaga)
    ])
}
