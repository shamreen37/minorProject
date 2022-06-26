import React from "react"
import {useSelector} from "react-redux"
import "./../styles/Home.css"

const Banner = () =>{
    const {auth} = useSelector(state => state)
    return (
        <div className="banner-txt" style={{background: `url(${auth.user.avatar}),rgba(0, 0, 0, 0.455)` ,backgroundBlendMode:"multiply",backgroundRepeat:"no-repeat",width:"100%", height:"250px", backgroundSize:"cover", borderRadius:"10px"}}>
            <div className="banner-inner-div"> 
            <h3 style={{textAlign:'center', transform:'translateY(100px)'}}> Welcome To The Social Network</h3> 
            </div>
        </div>
    )
}

export default Banner;


