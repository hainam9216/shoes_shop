import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const {content} = this.props
        return (
            <div>
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Chi tiết sản phẩm</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <b>Mã sản phẩm:</b> {content.id}
                            </div>
                            <div className="modal-body">
                            <b>Tên sản phẩm:</b> {content.name}
                            </div>
                            <div className="modal-body">
                            <b>Hình ảnh:</b> 
                                <img style={{width:300}} src={content.image}/>
                            </div>
                            <div className="modal-body">
                            <b>Giá sản phẩm:</b> {content.price}$
                            </div>
                            <div className="modal-body">
                            <b>Mô tả:</b> {content.description}
                            </div>
                            <div className="modal-body">
                            <b>Số lượng:</b> {content.quantity}
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
