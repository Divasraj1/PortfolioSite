
const loadVideo = iframe => {
    const cid = 'UC0rOyY_ecWcXMtus0_fhXlQ';
    const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`);
    const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

    fetch(reqURL)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        const videoNumber = iframe.getAttribute('vnum');
        const link = result.items[videoNumber].link;
        const id = link.substring(link.indexOf('=')+1);
        iframe.setAttribute('src',`https://youtube.com/embed/${id}?controls=0&autoplay=1`)

    })
    .catch(error => console.log(error))

}

const iframes = document.getElementsByClassName('latestVideoEmbed');
for(let i=0,len = iframes.length;i<len;i++){
    loadVideo(iframes[i])
}

const Video = () => {
    return (
        <div className="bg-black ">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Video</p>
                </div>
                <div className=" flex items-center justify-center">
                    <div>
                        <iframe className="latestVideoEmbed m-2" title="vid1" vnum="0" width="325" height="240" allowFullScreen></iframe>
                    </div>
                    <div>
                        <iframe className="latestVideoEmbed m-2" title="vid2" vnum="1"  width="325" height="240" allowFullScreen></iframe>
                    </div>
                    <div>
                        <iframe className="latestVideoEmbed m-2" title="vid3" vnum="2"  width="325" height="240" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Video;