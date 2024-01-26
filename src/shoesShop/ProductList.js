import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderProduct = () => {
        return this.props.productsData.map((product)=>{
            return(
                <div className='col-md-4' key={product.id}>
                <ProductItem item={product} setStateModal ={this.props.setStateModal}/>
                </div>
            )
        })
    }
    

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
