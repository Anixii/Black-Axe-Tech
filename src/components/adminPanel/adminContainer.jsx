import React from "react" 
import { connect } from "react-redux" 
import { getBookTC } from "../../redux/bookingReducer"
import AdminPanel from "./adminPanel" 
import { Spin } from "antd" 
import s from './admin.module.css'
class adminContainer extends React.Component{ 
    componentDidMount(){ 
        this.props.getBookTC()   
    }  
    render(){ 
        if(this.props.isFetch){ 
           return <div className={s.spinner}><Spin className={s.spin}/></div>
        }
        return( 
            <AdminPanel booking={this.props.booking}/>
        )
    }
}  

const mapStateToProps = state =>{ 
    return{ 
        booking: state.bookingReducer.booking, 
        isFetch: state.bookingReducer.isFetch
    }
}
export default connect(mapStateToProps, {getBookTC})(adminContainer)