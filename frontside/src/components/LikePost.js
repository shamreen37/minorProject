import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

const LikePost = ({isLike, handleLike,handleUnLike}) =>{
    return (
        <div>
           {
               isLike 
               ? <FavoriteIcon onClick={handleUnLike} style={{color:'red'}}/>
               : <FavoriteIcon onClick={handleLike} style={{color:'gray'}}/>

           }
        </div>
    )
}

export default LikePost;