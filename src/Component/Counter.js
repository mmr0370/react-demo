import React, {Component} from 'react';
import './Counter.scss';
class Counter extends Component {

    render() {
        const { count, inCounter, deCounter } = this.props;

        return (
            <div className="counter-wrap">
                <div className='btn-wrap'>
                    <div className='decrease' onClick={deCounter}> - </div>
                    <div className='increase' onClick={inCounter}> + </div>
                </div>
                <div> 计数器: {count} </div>
            </div>
        )

    }

}

export default Counter;