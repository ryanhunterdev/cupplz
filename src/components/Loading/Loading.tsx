import s from './Loading.module.sass'

import { ClipLoader } from 'react-spinners'

function Loading() {

    return (
        <div className={s.Loading}>
            <ClipLoader color="#FCF6EC" size={150} />
        </div>
    )
}

export default Loading
