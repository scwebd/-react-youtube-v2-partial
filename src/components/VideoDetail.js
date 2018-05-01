import React, { Fragment } from 'react';

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) {
        return <div>Loading...</div>
    }

    const videoId = selectedVideo.id.videoId; // 56bta6y
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        
        <Fragment>
            {/* A JSX comment */}
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
            </div>
            <h2>Video Title Goes Here</h2>
            <p>Video Description Goes Here</p>
        </Fragment>
    )
}

export default VideoDetail;