import { Button } from 'bootstrap'
import React, { Component } from 'react'

export default class LeftNav extends Component {
    render() {
        return (
            <div className='LeftNav text-left'>
                <div>
                    <div>
                        <button className='btn border-dark text-left' disabled>Home</button>
                    </div>
                    <div>
                        <button className='btn border-dark text-left'>Shop</button>
                    </div>
                </div>
            </div>
        )
    }
}
