import React, {Component, Dispatch, PropsWithChildren, useContext} from 'react';
import NavBar from './Navbar/Navbar';
import axios from 'axios';
import {Redirect} from 'react-router-dom';



class Wrapper extends Component{
render(){

        return (
            <>
                <NavBar />
                    <div>
                        <div>
                            <main>
                                {this.props.children}
                            </main>
                        </div>
                    </div>
            </>
        );
    }
}

export default Wrapper;