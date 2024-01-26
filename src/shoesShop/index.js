import React, { Component } from 'react'
import data from "./data.json"

export default class ShoesShop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: data,
            productDetail: data[0],
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
