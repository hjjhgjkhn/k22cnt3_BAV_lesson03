import React, { Component } from 'react';

class BAV_ClassComp extends Component {
    constructor(props){
        super(props);
        // tạo đối tượng dữ liệu
        this.state = {
            firstName:"Bùi",
            lastName:"Vương",
            userName:"K22cnt3",
        } 
    }

    // arrow function
   Member = (props)=>{
        return(
            <div className='alert alert-success'>
                <h3>Xin chào: {props.fullName} - Bạn đã {this.props.age} tuổi.</h3>
            </div>
        );
    }

    ListMember = ()=>{
        return (
         <>
            <this.Member fullName="Phạm Công Hiếu" age ="20" />
            <this.Member fullName="Nguyễn Phú Nam" age ="22" />
            <this.Member fullName="Bùi Sơn Tùng" age ="21" />
            <this.Member fullName="Bùi Anh Vương" age ="23" />
         </>
        )
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Class Component Demo</h2>
                <hr/>
                <h3> Dữ liệu trong state </h3>
                <h4> Xin chào: {this.state.firstName} {this.state.lastName}</h4>
                <hr/>
                <h3> Dữ liệu từ props </h3>
                <p> Company: {this.props.company}</p>
                <p> Course: {this.props.course}</p>

                <hr/>
                <this.Member fullName="Bùi Anh Vương" age="19" />
                <hr/>
                {/* {this.ListMember} */}
                <this.ListMember />
            </div>
        );
    }
}

export default BAV_ClassComp;