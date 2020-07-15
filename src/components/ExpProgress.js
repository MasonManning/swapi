import React, { useContext } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Context } from '../UserContext'

function ExpProgress() {
    const context = useContext(Context)
    return (
        <div>
                <ProgressBar now={context.getPerNextLvl()} label={`${context.getPerNextLvl()}%`} />
        </div>
    )
}
export default ExpProgress