import React from 'react';
import {useParams} from "react-router-dom";

const Post = () => {
    const params = useParams()
    console.log(params)
    return <div>
        <div>Title</div>
        <img />
        <div>Description</div>
    </div>
}

export default Post