import React, { useEffect, useState } from 'react';


const Video = () => {
    
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cid = 'UC0rOyY_ecWcXMtus0_fhXlQ';
    const apiKey = 'AIzaSyBMjNnbm48c5KUeNSO2pDvgcB_VRUt_5Ss';

    const maxResults = 3; 

    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${cid}&part=snippet,id&order=date&maxResults=${maxResults}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setVideoData(data.items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchVideoData();
  }, []);

  if (loading) {
    return <div>Loading videos...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Video</p>
        </div>
        <div className="flex items-center justify-center">
          {videoData.map((video, index) => (
            <div key={video.id.videoId}>
              <iframe
                title={`vid${index + 1}`}
                width="325"
                height="240"
                src={`https://www.youtube.com/embed/${video.id.videoId}?controls=0&autoplay=1`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
