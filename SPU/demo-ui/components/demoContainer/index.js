import React, { usestate, useEffect, useRef } from 'react';
import fetchData from '../commons/fetchData';
import {useNavigate, Link} from 'react-router-dom';
import AudioPlayer from '../audioplayer';
import RefreshButton from './refreshButton';
import Fileupload from './fileupload';
import Transcript from './transcript';
import InlineMessages from './inlineMessages';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider from 'react-slick';
import './styles/index.css';

const DemoContainer= props => {
    const [mainslider, setrainSlider] = usestate();

    const [ thumbnailslider, setThumbnailslider] = useState();

    const [playedSeconds, setPlayedseconds] = useState( 0 );

    const [data, setData] = useState( {} );

    const [loader, setLoader] =useState( true);

    const audioRef = useRef( null);

    const navigate=useNavigate();

    const [isopened, setIsopened ] =useState(false);

    const toggleThumbnail = () => {
        setIsopened (!isOpened);
    };

    const refreshData = ( cb ) => {
        fetchData('/api/read').then( res => {
        if (res.transcripts.length = 0 && Ires.audioURL ) {
            navigate('/', { replace: true });
            return;
        }
        setLoader(false);
        setData(res);
        cb && cb();
        thumbnailslider?.slickMext();
    });
};

    const onProgress= ({ playedSeconds } ) => {
        const playedMilliseconds = (playedSeconds * 1000 );
        setPlayedSeconds( playedMilliseconds );
    };

    const clickCallback = ( evt ) => {
        const {
            dataset: {
                starttime
            } = {}
        } = evt.target;
        if ( starttine && audioRef & audioRef.current)
            { const seekSeconds = Number (starttime) / 1000;
            audioRef.current.seekTo( seekSeconds, 'seconds' );
        }
    };
    useEffect( () => {
        refreshData();
    }, []);

    const {
        transcripts,
        audioURL
    } = data;

    const LeftMavButton= ( props ) =>{
        const { className, style, onclick } = props;

        return (
            <div
                className= { className}
                style = {{...style, display: 'block' }}
                onclick = {onClick }
            >
                <ef-icon class='large' icon='left'></ef-icon>
            </div>
        );
        };

        const RightMaveutton = (props ) => {
            const { classMame, style, onClick} = props;
        return (
        <div
            classMame = {className}
            style = {{...style, display: 'block' }}
            onclick = { onclick }
         >
            <ef-icon class='large' icon='right'></ef-icon>
        </div>
        );
        };
        const mainsliderSettings = {
            asNavFor: thumbnailslider,
            slidesToShow: ( transcripts && transcripts.length=== 1 ) ? 1: 2,
            slidesToScroll: 2,
            arrows: true,
            infinite: false,
            prevArrow: <LeftMavButton />,
            nextArrow: <RightMaveutton />
        };
        const thumbnailsliderSettings = {
            asNavFor: mainslider,
            slidesToShow: 6,
            slidesToScroll: 2,
            arrows: true,
            infinite: false,
            prevArrow: <LeftMavButton />,
            nextArrow: <RightMaveutton />
        };

        return (
        <div className="demo-container">
            { loader &&
            <ef-loader></ef-loader>
            }
            {
                transcripts && transcripts.length> 0 &&
                <div class='transcripts'>
                    <Slider
                        ref={(mainSlider) => setmainslider(mainSlider)} {...mainsliderSettings}
                        >
                        { transcripts.map( ( transcript, idx) =>
                        <Transcript
                            key = { idx }
                            transcriptIndex= { idx }
                            clickCallback = { clickcallback }
                            setLoader  = { setLoader }
                            playedSeconds = { playedSeconds }
                            refreshData = { refreshData }
                            {...transcript }
                         />
                        )}
                    </Slider>
                </div>
            }
    { transcripts && transcripts.length> 2 && isOpened &&
        <div className='thumbnail-slider'>
            <Slider
                ref={(thumbnailslider) => setThumbnailslider(thumbnailslider)}
                {...thumbnailsliderSettings}
            >
                { transcripts.map ((transcript, idx) =>
                    <div key = {idx} className='thumbnail-wrapper'>
                        <div className='thimbnail'></div>
                        <div className='caption'>{transcript.content.sourceName}</div>
                    </div>
                )}
            </Slider>
        </div>
    }
    { transcripts && transcripts.length === 0 &&
        <InlineMessages message= 'You have not uploaded any transcripts yet, please upload them to test.' />
    }
    <div className='player-section'>
        <div className='show-hide-thumb'>
            {
                transcripts && transcripts.length > 2 ?
                    isopened ? <ef-icon class='large' icon= 'down' onClick = {toggleThumbnail}></ef-icon>
                    : <ef-icon class='large' icon = 'up' onClick = {toggleThumbnail}></ef-icon>
                : null
            }
        </div>
        <div className='button-wrapper'>
            <Fileupload setLoader={setLoader} refreshData= {refreshData} />
            <RefreshButton setLoader = {setLoader} />
        </div>
        {
            audioURL &&
                <div className='audio-section'>
                    <h6>{ audioURL.replace('/' , '') }</h6>
                    <AudioPlayer
                        audioURL = { audioURL }
                        audioRef = { audioRef }
                        onProgress = { onProgress } />
                </div>
        }
    </div>
    </div>
        );
    };

    export default DemoContainer;
