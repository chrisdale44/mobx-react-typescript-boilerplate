import * as React from 'react';
import {loadingSpinner} from '../style';

class LoadingSpinner extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
          <div className={loadingSpinner.skFadingCircle}>
            <div className={`${loadingSpinner.skCircle1} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle2} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle3} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle4} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle5} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle6} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle7} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle8} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle9} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle10} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle11} ${loadingSpinner.skCircle}`}></div>
            <div className={`${loadingSpinner.skCircle12} ${loadingSpinner.skCircle}`}></div>
          </div>
        )
    }
};

export default LoadingSpinner;