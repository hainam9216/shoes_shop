import React, { Component } from 'react'
import data from "./data.json"
import ProductList from './ProductList'
import Modal from './modal'
import LeftNav from './leftNav'

export default class ShoesShop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: data,
            productDetail: data[0],
        }
    }

    setStateModal=(product)=>{
        this.setState({
            productDetail: product
        },console.log(this.state.productDetail))
    }
    render() {
        const {product} = this.state
        return (
            <section className='row'>
                <div className='col-4'>
                    <LeftNav/>
                </div>
            <div className='col-8 border border-5 border-primary'>
                <h1 className='text-center p-2'>Shoes Shop</h1>
                <ProductList productsData={product} setStateModal =  {this.setStateModal} />
                <Modal content={this.state.productDetail}/>
            </div>
            </section>
        )
    }
}
