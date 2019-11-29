import React, {Component} from 'react';
import { Route, Router } from 'react-router';
import { RouterProvider } from 'react-router5';
import CountApp from './Container/CountApp'

export default class Router extends Component {

    render() {
      return(
          <RouterProvider path="about" component={CountApp} />
      )
    }

}

