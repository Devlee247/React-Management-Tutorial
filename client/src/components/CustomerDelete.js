import React from 'react';

class CustomerDelete extends React.Component {
    
    deleteCustomer(id) {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh(); // app.js에서 받아온 method. 이를통해 삭제가 이루어진 후 DB의 상태를 Refresh한다.
    }
    
    render() {
        return(
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }
}

export default CustomerDelete;