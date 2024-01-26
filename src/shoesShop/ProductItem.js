import React, { Component } from 'react'

export default class ProductItem extends Component {
    handleDetailProduct=()=>{
        this.props.setStateModal(this.props.item)
    }
    render() {
        const { item } = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <img src={item.image} className='img-fluid' />
                    </div>
                    <h4 className="card-text">{item.name}</h4>
                    <h5 className="card-text">{item.price}$</h5>
                    {/* Button to Open the Modal */}
                    <button type="button" onClick={this.handleDetailProduct} className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Chi tiết
                    </button>
                    <button className="btn btn-dark">Add to cart 🛒</button>
                </div>
            </div>

        )
    }
}
