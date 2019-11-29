import React from 'react';
import { connect } from 'react-redux';
import Counter from '../Component/Counter';

const mapStateToprops = state=>{
    return {
        count: state.countReducer.count
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        inCounter:()=>{dispatch({type:'increase'})},
        deCounter:()=>{dispatch({type: 'decrease' })},
    }
};

const CountApp = connect(mapStateToprops, mapDispatchToProps)(Counter);

export default CountApp;
