import React, { useEffect, useRef, useState } from 'react'
import "./abode.css"
import map2 from "../Assets/map2.png"
import yoga from "../Assets/yoga.svg"
import map3 from "../Assets/map3.png"
import map4 from "../Assets/map4.png"
import water from "../Assets/water plant.svg"
import tennis from "../Assets/tennis.svg"
import Whatsapp from "../Assets/Whatsapp.svg"
import swimming from "../Assets/swimming pool.svg"
import seniorCitizen from "../Assets/senior citizen.svg"
import partylawn from "../Assets/party lawn.svg"
import sprinkler from "../Assets/sprinkler.svg"
import map5 from "../Assets/map5.png"
import star from "../Assets/star.svg"
// import { Carousel } from '3d-react-carousal';
import jogging from "../Assets/Jogging.svg"
import Carousel from 'react-spring-3d-carousel';
import logoo from "../Assets/logoo.svg"
import logo1440 from "../Assets/logo1440.svg"
import newLogo from "../Assets/newLogo.png"
import left_grey from "../Assets/left_grey.svg"
import tick from "../Assets/tick.png"
import right_arr from "../Assets/right_arr.svg"
import Vector from "../Assets/Vector.svg"
import left_arr from "../Assets/left_arr.svg"
import Frame from "../Assets/Frame.png"
import right_grey from "../Assets/right_grey.svg"
import clubhouse from "../Assets/club house.svg"
import gym from "../Assets/gym.svg"
import camera from "../Assets/camera.svg"
import mainImage from "../Assets/mainImage.jpeg"
import mainImage2 from "../Assets/mainImage2.png"
import mainImage3 from "../Assets/mainImage3.jpeg"
import img1 from "../Assets/img1.png"
import img2 from "../Assets/img2.png"
import img3 from "../Assets/img3.png"
import changeImage1 from "../Assets/changeImage1.png"
import changeImage2 from "../Assets/changeImage2.png"
import changeImage3 from "../Assets/changeImage3.png"
import txt from "../Assets/txt.png"
import img4 from "../Assets/img4.png"
import img5 from "../Assets/img5.png"
import img6 from "../Assets/img6.png"
import img7 from "../Assets/img7.png"
import img8 from "../Assets/img8.png"
import img9 from "../Assets/img9.png"
import playgroung from "../Assets/playgroung.svg"
import img10 from "../Assets/img10.png"
import img11 from "../Assets/img11.png"
import img12 from "../Assets/img12.png"
import facebook from "../Assets/facebook.svg"
import insta from "../Assets/insta.svg"
import t1 from '../Assets/triangle1.png'
import t2 from '../Assets/triangle2.png'
import t3 from '../Assets/triangle3.png'
import floor1 from '../Assets/floor1.svg'
import newFloor1 from '../Assets/newFloor1.png'
import newFloor2 from '../Assets/newFloor2.png'
import bhk1 from '../Assets/bhk1.jpg'
import bhk2 from '../Assets/bhk2.jpg'
import bhk3 from '../Assets/bhk3.jpg'
import bhk31 from '../Assets/bhk31.jpg'
import bhk32 from '../Assets/bhk32.jpg'
import bhk33 from '../Assets/bhk33.jpg'
import bhk34 from '../Assets/bhk34.jpg'
import bhk36 from '../Assets/bhk36.jpg'
import bhk37 from '../Assets/bhk37.jpg'
import bhk38 from '../Assets/bhk38.jpg'
import bhk39 from '../Assets/bhk39.jpg'
import bhk35 from '../Assets/bhk35.jpg'
import bhk4 from '../Assets/bhk4.jpg'
import bhk5 from '../Assets/bhk5.jpg'
import bhk6 from '../Assets/bhk6.jpg'
import bhk7 from '../Assets/bhk7.jpg'
import bhk8 from '../Assets/bhk8.jpg'
import bhk9 from '../Assets/bhk9.jpg'
import bhk10 from '../Assets/bhk10.jpg'
import floor2 from '../Assets/floor2.svg'
import floor3 from '../Assets/floor3.svg'
import floor4 from '../Assets/floor4.svg'
import floor5 from '../Assets/floor4.svg'
import floor6 from '../Assets/floor4.svg'
import floor7 from '../Assets/floor4.svg'
import floor8 from '../Assets/floor4.svg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Modal } from 'react-bootstrap';

const AbodeMainLandingPage = () => {
    const [activeTab, setActiveTab] = useState("NearBy")
    const [classS, setClassS] = useState(['preactive', 'active', 'proactive'])
    const [bhkk, setBhkk] = useState()

    const imageUris = [mainImage, mainImage2, mainImage3]
    const [bhkUris, setBhkUris] = useState([newFloor1, newFloor2, bhk2, bhk1, bhk3, bhk4, bhk5, bhk6, bhk7, bhk8, bhk9, bhk10, bhk3])
    const [bhkTexts, setBhkTexts] = useState(['1176 sq.ft.', '1207 sq.ft.', '1225 sq.ft.', '1234 sq.ft.', '1235 sq.ft.', '1239 sq.ft.', '1244 sq.ft.', '1255 sq.ft', '1256 sq.ft.', '1267 sq.ft.', '1268 sq.ft.', '1273 sq.ft.', '1279 sq.ft.', '1283 sq.ft.'])

    const slides = [
        {
            key: 1,
            content: <img
                src={mainImage} alt="1" />
        },
        {
            key: 2,
            content: <img
                src={mainImage2} alt="2" />
        },
        {
            key: 3,
            content: <img
                src={mainImage3} alt="5" />
        },

    ];

    const getChildern = () => {
        const children = document.getElementsByClassName("css-1qzevvg")
        children[0].childNodes[0].src = left_arr
        children[0].childNodes[0].id = "blahblah"
        children[0].childNodes[1].src = right_arr
        children[0].childNodes[1].id = "blahblah1"
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showModall, setShowModal] = useState(false);
    const [showModall2, setShowModal2] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleCloseModal2 = () => setShowModal2(false);

    useEffect(() => {
        getChildern()
    }, [])

    const [specification, setSpecification] = useState("livingRoom");

    const [count, setCount] = useState(0)

    const handleNext = () => {
        setCount(count + 1)
    }

    const handlePrev = () => {
        setCount(count - 1)
    }
    const [index, setIndex] = useState(0);

    // const handleDownload = async () => {
    //     if (name && phone && email) {
    //         try {
    //             const url = 'http://localhost:3000/brochure.pdf'
    //             fetch(url).then(response => response.blob()).then(blob => {
    //                 const file = window.URL.createObjectURL(new Blob([blob]))
    //                 const filename = url.split("brochure.pdf")

    //             })
    //         } catch (error) {
    //             console.error('Error downloading PDF:', error);
    //             alert('An error occurred while downloading the PDF.');
    //         }
    //     } else {
    //         alert('Please fill all fields before downloading.');
    //     }
    // };

    const handleDownload = async () => {
        if (email && isValidEmail) { // Include isValidEmail in the condition
            try {
                // const response = await fetch("https://idesign-quotation.s3.ap-south-1.amazonaws.com/NO_COMPANYNAME/Sterling%20Abode%20Brochure.pdf");
                const response = await fetch(`${window.location.href}/brochure.pdf`);
                const blob = await response.blob();
    
                const url = window.URL.createObjectURL(new Blob([blob]));
    
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'brochure.pdf');
                document.body.appendChild(link);
    
                link.click();
    
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
    
                setShowModal(false);
                setShowModal2(true);
            } catch (error) {
                console.error('Error downloading PDF:', error);
                alert('An error occurred while downloading the PDF.');
            }
        } else {
            alert('Please fill all fields and provide a valid email address before downloading.');
        }
    };
    

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(index + 1);
        }, 4000);

        return () => clearTimeout(timer);
    }, [index]);

    const overviewRef = useRef(null);
    const amenitiesRef = useRef(null);
    const galleryRef = useRef(null);
    const floorPlanRef = useRef(null);
    const locationRef = useRef(null);
    const contactRef = useRef(null);
    const scrollToOverview = () => {
        overviewRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAmenities = () => {
        amenitiesRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToGallery = () => {
        galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToFloorPlan = () => {
        floorPlanRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToLocation = () => {
        locationRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => (prevCount + 1) % 3);
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    // for gallery slidesssssssssssssssssss
    const [enlarge, setEnlarge] = useState(false)
    const [enlargedSlideIndex, setEnlargedSlideIndex] = useState(0)
    const enlragedSlideRef = useRef(null)
    const [enlargedTop, setEnlargedTop] = useState(0)

    // for bhkkk
    const [enlargeBHK, setEnlargeBHK] = useState(false)
    const [enlargedBHKIndex, setEnlargedBHKIndex] = useState(0)
    const bhkRef = useRef(null)
    const [bhkTop, setBhkTop] = useState(0)

    const handleClickOutside = (event) => {
        if (enlragedSlideRef.current && !enlragedSlideRef.current.contains(event.target)) {
            //   setShowPopup(false);
            setEnlarge(false)
            setEnlargedSlideIndex(0)
            if (document.getElementById("body")) {
                document.getElementById("body").style.overflowY = "scroll"
            }
            if (document.getElementById("lalala")) {
                document.getElementById("lalala").style.filter = ""
                document.getElementById("lalala").style.transform = ""
            }
        }

        if (bhkRef.current && !bhkRef.current.contains(event.target)) {
            //   setShowPopup(false);
            setEnlargeBHK(false)
            setEnlargedBHKIndex(0)
            if (document.getElementById("body")) {
                document.getElementById("body").style.overflowY = "scroll"
            }
            if (document.getElementById("lalala")) {
                document.getElementById("lalala").style.filter = ""
                document.getElementById("lalala").style.transform = ""
            }
        }
    };
    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;

        // Remove any non-numeric characters from the input
        const numericValue = inputValue.replace(/\D/g, '');

        // Update the phone state with the numeric value
        setPhone(numericValue);
    };
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (e) => {
        const enteredEmail = e.target.value;
        setEmail(enteredEmail);
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(enteredEmail));
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            {enlarge && <div className="enlargedSlide" ref={enlragedSlideRef} style={{ top: enlargedTop + (window.innerHeight / 95) }}>
                <img src={imageUris[enlargedSlideIndex]} alt="" />
                <div className="bottomBar">
                    <span>{enlargedSlideIndex + 1} / {imageUris.length}</span>
                    <div className="controlBtns">
                        <img src={left_arr} style={{ marginRight: '1rem', width: '2.3rem' }} onClick={() => {
                            if (enlargedSlideIndex > 0) {
                                setEnlargedSlideIndex(enlargedSlideIndex - 1)
                            }
                        }} />
                        <img src={right_arr} style={{ width: '2.3rem' }} onClick={() => {
                            if (enlargedSlideIndex < imageUris.length - 1) {
                                setEnlargedSlideIndex(enlargedSlideIndex + 1)
                            }
                        }} />
                    </div>
                </div>
            </div>}
            {enlargeBHK && <div className="enlargedSlide" ref={bhkRef} style={{ top: bhkTop + 61 }}>
                <img src={bhkUris[enlargedBHKIndex]} alt="" />
                <div className="bottomBar">
                    <span>{enlargedBHKIndex + 1} / {bhkUris.length}</span>
                    <span>{bhkTexts[enlargedBHKIndex]}</span>
                    <div className="controlBtns">
                        <img src={left_arr} style={{ marginRight: '1rem', width: '2.3rem' }} onClick={() => {
                            if (enlargedBHKIndex > 0) {
                                setEnlargedBHKIndex(enlargedBHKIndex - 1)
                            }
                        }} />
                        <img src={right_arr} style={{ width: '2.3rem' }} onClick={() => {
                            if (enlargedBHKIndex < bhkUris.length - 1) {
                                setEnlargedBHKIndex(enlargedBHKIndex + 1)
                            }
                        }} />
                    </div>
                </div>
            </div>}
            <div id="lalala" style={{ overflowX: "hidden" }}>
                {/* first part */}
                <div>
                    <div className='first_headdd' >
                        {/* navbar */}
                        <div className='top_top'>
                            <div className='frst_logoo'>
                                <img src={logoo} alt='logo' className='fullscreen' />
                                <img src={logo1440} className='mid1440' />
                            </div>
                            <div className='for_gap'>
                                <span className='first_heading' style={{ cursor: "pointer" }} onClick={scrollToOverview}>OVERVIEW</span>
                                <span className='first_heading' style={{ cursor: "pointer" }} onClick={scrollToAmenities}>AMENITIES</span>
                                <span className='first_heading' style={{ cursor: "pointer" }} onClick={scrollToGallery}>GALLERY</span>
                                <span className='first_heading' style={{ cursor: "pointer" }} onClick={scrollToFloorPlan}>FLOOR PLAN</span>
                                <span className='first_heading' style={{ cursor: "pointer" }} onClick={scrollToLocation}>LOCATION</span>
                                <span className='first_heading' style={{ cursor: "pointer" }} onClick={scrollToContact}>CONTACT</span>
                            </div>
                            <div className='iconss_mmm'>
                                <div className='for_gaaap'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className='first_heading' onClick={() => {
                                        window.open('https://web.whatsapp.com/send?phone=+919100008979')
                                    }}>+919100008979</span>
                                </div>
                                <div className='vectimm'
                                    onClick={() => { setShow(true); }}
                                >
                                    <img src={Vector} />
                                </div>
                            </div>
                        </div>
                        <div ref={overviewRef} className='okokok' >
                            <div className='firstesttt_left'>
                                <div className='main_bord'>
                                    <div className='sterlinggg' style={{ fontFamily: "Cormorant Garamond" }}>
                                        STERLING
                                    </div>
                                    <div className='sterlinggg' style={{ fontFamily: "Cormorant Garamond" }}>ABODE</div>
                                    <div className='lux' style={{ fontFamily: "Cormorant Garamond" }}>Redifining luxury</div>
                                </div>
                                <div className='lux' style={{ fontFamily: "Lora" }}>Luxury Gated Apartments</div>
                                <div className='livingss' style={{ fontFamily: "Lora" }}>Living spaces in Sainikpuri, <br /> Hyderabad</div>
                                <div className='ready' style={{ fontFamily: "Lora" }}>Ready to Move-In</div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className='download_broch' onClick={() => { setShowModal(true); }}>Download Brochure</div>
                                    <div className='whatIcon'><img src={Whatsapp} /></div>
                                </div>

                            </div>
                            <div className='image_sabse_main' style={{ width: '60%', position: 'relative', zIndex: 1 }} >
                                <div className='image-slider'>

                                    {count % 3 === 0 && <img src={t1} className='t1_imgg' />}
                                    {count % 3 === 1 && <img src={t2} className='t1_imgg' />}
                                    {count % 3 === 2 && <img src={t3} className='t1_imgg' />}
                                </div>
                            </div>
                            {count % 3 === 0 && <span className='imageText' style={{ fontFamily: "Lora" }}>12600 sq.ft. Club House</span>}
                            {count % 3 === 1 && <span className='imageText' style={{ fontFamily: "Lora" }}>World Class Amenities</span>}
                            {count % 3 === 2 && <span className='imageText' style={{ fontFamily: "Lora" }}>Modern 2&3 BHK Apartments</span>}
                            <div className="useBtns">
                                <img src={left_arr} onClick={handlePrev} style={{ marginRight: '1rem', width: '2.3rem' }} />
                                <img src={right_arr} onClick={handleNext} style={{ width: '2.3rem' }} />
                            </div>
                        </div>
                    </div>
                </div>``
                {/* 2nd part */}
                <div className="background-div">
                    <div className='frst_box'>
                        <div className='overview'>Overview</div>
                        <div className='yellow_head' style={{ fontFamily: "lora" }}>Building Dreams with Sterling Abode</div>
                        <div className='meth_head'>Explore a world of spacious living and contemporary design with our meticulously crafted 2 - 3 BHK premium Flats & apartments in Hyderabad. Experience the security and serenity of gated community apartments at Sterling Abode.</div>
                        {/* <div className='learn'>learn more</div> */}
                    </div>
                    <div className='secondRow'>
                        <div className='secondRow2'>
                            <div className='second_box'>
                                <div className='firstttt'>12k+</div>
                                <div className='scnd'>Sq. ft. Club House</div>
                            </div>
                            <div className='second_box'>
                                <div className='firstttt'>30+</div>
                                <div className='scnd'>Amenities</div>
                            </div>
                        </div>
                        <div className='secondRow2'>
                            <div className='second_box'>
                                <div className='firstttt'>5<span style={{ fontSize: "50px" }}>Lakh+</span></div>
                                <div className='scnd'>Sq. ft. Area</div>
                            </div>
                            <div className='second_box'>
                                <div className='firstttt'>220</div>
                                <div className='scnd'>Units</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd part */}
                <div ref={amenitiesRef} className='third_part'>
                    <div className='amen_head' style={{ marginTop: "50px", marginBottom: "18px" }}>Amenities</div>
                    <div className='Modern_spaced'>Modern Spaces Tailored for You</div>
                    <div className="coke_head">Our apartments offer not just a home but a heaven where your peace of mind is a top priority.</div>
                    <div className='ssssss'>
                        <div class="grid-container">
                            <div class="grid-item grid_1">
                                <div><img className='gridd_hai_guys' src={jogging} /></div>
                                <div className='amen_head'>Jogging Track</div>
                            </div>
                            <div class="grid-item grid_2">
                                <div><img className='gridd_hai_guys' src={swimming} /></div>
                                <div className='amen_head'>Swimming Pool</div>
                            </div>
                            <div class="grid-item grid_3">
                                <div><img className='gridd_hai_guys' src={camera} /></div>
                                <div className='amen_head'>24x7 Security</div>
                            </div>
                            <div class="grid-item grid_4" >
                                <div><img className='gridd_hai_guys' src={gym} /></div>
                                <div className='amen_head'>Gymnasium</div>
                            </div>
                            <div class="grid-item grid_5" >
                                <div><img className='gridd_hai_guys' src={water} /></div>
                                <div className='amen_head'>Water Softener Plant </div>
                            </div>
                            <div class="grid-item grid_6" >
                                <div><img className='gridd_hai_guys' src={yoga} /></div>
                                <div className='amen_head'>Yoga/Meditation Area</div>
                            </div>
                            <div class="grid-item grid_7">
                                <div><img className='gridd_hai_guys' src={seniorCitizen} /></div>
                                <div className='amen_head'>Senior Citizen Site Out</div>
                            </div>
                            <div class="grid-item grid_8">
                                <div><img className='gridd_hai_guys' src={tennis} /></div>
                                <div className='amen_head'>Lawn Tennis Court</div>
                            </div>
                            <div class="grid-item grid_9">
                                <div><img className='gridd_hai_guys' src={partylawn} /></div>
                                <div className='amen_head'>Party Lawn</div>
                            </div>
                            <div class="grid-item grid_10">
                                <div><img className='gridd_hai_guys' src={clubhouse} /></div>
                                <div className='amen_head'>Club House</div>
                            </div>
                            <div class="grid-item grid_11" >
                                <div><img className='gridd_hai_guys' src={playgroung} /></div>
                                <div className='amen_head'>Children’s Play Area</div>
                            </div>
                            <div class="grid-item grid_12" >
                                <div><img className='gridd_hai_guys' src={sprinkler} /></div>
                                <div className='amen_head'>Fire Fighting System</div>
                            </div>
                        </div>
                    </div>
                    <div className='amen_head' style={{ marginBottom: "13px" }}>and so much more...</div>
                    <div className='download_broch' onClick={() => { setShowModal(true); }}>Download Brochure</div>
                </div>
                {/* 4th part */}
                <div className='fourth_part'>
                    <div className='comn_hox22'>
                        <div className='yellow_head2' style={{ fontFamily: "lora" }}>Specifications</div>
                    </div>
                    {/* bydefault */}
                    {specification == "livingRoom" &&
                        <div className='overALL_Img'>
                            <div><img className='immm1' src={changeImage1} /></div>
                            <div>
                                <div>
                                    <div className='third_frst'>Living/Dining Room</div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Floor - Double charged vitrified tiles</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Walls - Acrylic Emulsion</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Main Door - Teak wood frame & teak veneered shutter</span>
                                    </div>
                                </div>
                                <div className='gapagain'>
                                    <div><img src={left_grey} /></div>
                                    <div className='walls' s>1/3</div>
                                    <div onClick={() => { setSpecification("Bedroom") }}><img src={right_arr} /></div>
                                </div>
                            </div>
                        </div>}
                    {/* thenNext */}
                    {specification == "Bedroom" &&
                        <div className='overALL_Img'>
                            <div><img className='immm1' src={changeImage2} /></div>
                            <div>
                                <div>
                                    <div className='third_frst'>Bedroom</div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Floor - Double charged vitrified tiles</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Walls - Acrylic Emulsion</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Windows - Glass window system with mosquito mesh</span>
                                    </div>
                                </div>
                                <div className='gapagain2'>
                                    <div onClick={() => { setSpecification("livingRoom") }}><img src={left_arr} /></div>
                                    <div className='walls' s>2/3</div>
                                    <div onClick={() => { setSpecification("Kitchen") }}><img src={right_arr} /></div>
                                </div>
                            </div>
                        </div>}
                    {/* againNext */}
                    {specification == "Kitchen" &&
                        <div className='overALL_Img'>
                            <div><img className='immm1' src={changeImage3} /></div>
                            <div>
                                <div>
                                    <div className='third_frst'>Kitchen</div>
                                    {/* <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Walls- Tiles up-to 2’ above counter & acrylic emulsion paint in balance area</span>
                                    </div> */}
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Walls- Acrylic Emulsion </span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Floor - Double charged vitrified tiles</span>
                                    </div>
                                    {/* <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Counter - Granite /Synthetic Stone</span>
                                    </div> */}
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Fittings - Individual tap for cooing, washing and other purpose. Provision for Dish Washer in utility area.</span>
                                    </div>
                                </div>
                                <div className='gapagain3'>
                                    <div onClick={() => { setSpecification("Bedroom") }}><img src={left_arr} /></div>
                                    <div className='walls' s>3/3</div>
                                    <div><img src={right_grey} /></div>
                                </div>
                            </div>
                        </div>}
                </div>
                {/* 5th part */}
                <div ref={galleryRef} style={{ backgroundColor: "#122620", textAlign: "center", display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div className='gallery' style={{ fontFamily: "lora" }}>Gallery</div>
                    {/* <div> */}
                    <Carousel
                        slides={slides}
                        goToSlide={index}
                        showNavigation={true}
                        enableSwipe={true} />
                    {/* </div> */}
                    <span style={{ textAlign: "-webkit-center" }} className='enlargee'>
                        <div className='learn' onClick={() => {
                            setEnlarge(true)
                            setEnlargedTop(window.scrollY)
                            document.getElementById("body").style.overflow = "hidden"
                            document.getElementById("lalala").style.filter = "brightness(0.5) blur(4px) drop-shadow(black 0px 0px 18px)"
                            document.getElementById("lalala").style.transform = "scale(1.02)"
                        }}>Click to enlarge</div>
                        <div className='download_broch' onClick={() => { setShowModal(true); }}>Download Brochure</div>
                    </span>
                    <div className='newclass' ></div>
                </div>
                {/* 6th part */}
                <div ref={floorPlanRef} className='sixth_part'>
                    <div className='comn_hox'>
                        <div className='overview' style={{ paddingTop: "5px" }}>Floor Plan</div>
                        <div className='yellow_head' style={{ fontFamily: "lora" }}>Discover Your Perfect Space</div>
                    </div>
                    {!bhkk ?
                        <div className='comm_bhk'>
                            <div className='bbhk'>2 BHK</div>
                            <div className='hbhk' onClick={() => {
                                setBhkk(true)
                                setBhkUris([bhk32, bhk31, bhk33, bhk34, bhk35, bhk36, bhk37, bhk38, bhk39])
                                setBhkTexts(['1545 sq.ft.', '1583 sq.ft.', '1586 sq.ft.', '1607 sq.ft.', '1608 sq.ft.', '1675 sq.ft.', '1680 sq.ft', '1694 sq.ft.', '1697 sq.ft.'])
                                if (document.getElementById("idgoeshere")) {
                                    document.getElementById("idgoeshere").scrollLeft = 0
                                }
                                if (document.getElementById("idgoesheree")) {
                                    document.getElementById("idgoesheree").scrollLeft = 0
                                }
                            }}>3 BHK</div>
                        </div> :
                        <div className='comm_bhk'>
                            <div className='hbhk' onClick={() => {
                                setBhkk(false)
                                setBhkUris([newFloor1, newFloor2, bhk2, bhk1, bhk3, bhk4, bhk5, bhk6, bhk7, bhk8, bhk9, bhk10, bhk3])
                                setBhkTexts(['1176 sq.ft.', '1207 sq.ft.', '1225 sq.ft.', '1234 sq.ft.', '1235 sq.ft.', '1239 sq.ft.', '1244 sq.ft.', '1255 sq.ft', '1256 sq.ft.', '1267 sq.ft.', '1268 sq.ft.', '1273 sq.ft.', '1279 sq.ft.', '1283 sq.ft.'])
                                if (document.getElementById("idgoeshere")) {
                                    document.getElementById("idgoeshere").scrollLeft = 0
                                }
                                if (document.getElementById("idgoesheree")) {
                                    document.getElementById("idgoesheree").scrollLeft = 0
                                }
                            }}>2 BHK</div>
                            <div className='bbhk'>3 BHK</div>
                        </div>}
                    <div className='holeefuk'>
                        {!bhkk ?
                            <div className='comn_floor' id="idgoeshere">
                                {/* mediaaquery */}
                                {/* <div className='top_two'>
                                    <div className='frst_floor'>
                                        <div className='frst_frst'>
                                            <div><img className='floor_imagesss' src={floor1} /></div>
                                            <div><img className='floor_imagesss' src={floor2} /></div>
                                        </div>
                                        <div className='numberBold2'>1176 sq.ft.</div>
                                    </div>
                                    <div className='scnd_floor'>
                                        <div className='frst_frst'>
                                            <div><img className='floor_imagesss' src={floor3} /></div>
                                            <div><img className='floor_imagesss' src={floor4} /></div>
                                        </div>
                                        <div className='numberBold2'>1226 sq.ft.</div>

                                    </div>
                                </div>
                                <div className='third_floor'>
                                    <div className='frst_frst'>
                                        <div><img className='floor_imagesss' src={floor3} /></div>
                                        <div><img className='floor_imagesss' src={floor4} /></div>
                                    </div>
                                    <div className='numberBold2'>1176 sq.ft.</div>
                                </div> */}
                                <img src={left_arr} className='leftArrow' onClick={() => {
                                    if (document.getElementById("idgoeshere")) {
                                        document.getElementById("idgoeshere").scrollLeft = document.getElementById("idgoeshere").scrollLeft - 450
                                    }
                                }} />

                                <div className="curr_image">
                                    <img src={newFloor1} alt="" />
                                    <span>1176 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={newFloor2} alt="" />
                                    <span>1207 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={newFloor1} alt="" />
                                    <span>1225 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk1} alt="" />
                                    <span>1234 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk2} alt="" />
                                    <span>1235 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk3} alt="" />
                                    <span>1239 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk4} alt="" />
                                    <span>1244 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk5} alt="" />
                                    <span>1255 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk6} alt="" />
                                    <span>1256 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk7} alt="" />
                                    <span>1267 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk8} alt="" />
                                    <span>1268 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk9} alt="" />
                                    <span>1273 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk10} alt="" />
                                    <span>1279 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk3} alt="" />
                                    <span>1283 sq.ft.</span>
                                </div>
                                <img src={right_arr} style={{ width: '2.3rem' }} className='rightArrow' onClick={() => {
                                    if (document.getElementById("idgoeshere")) {
                                        document.getElementById("idgoeshere").scrollLeft = document.getElementById("idgoeshere").scrollLeft + 450
                                    }
                                }} />
                            </div> :
                            <div className='comn_floor2' id="idgoesheree">
                                {/* <div className='frst_floor'>
                                <div className='frst_frst'>
                                    <div><img className='floor_imagesss' src={floor5} /></div>
                                    <div><img className='floor_imagesss' src={floor6} /></div>
                                </div>
                                <div className='numberBold2'>1545 sq.ft.</div>
                            </div>
                            <div className='scnd_floor'>
                                <div className='frst_frst'>
                                    <div><img className='floor_imagesss' src={floor7} /></div>
                                    <div><img className='floor_imagesss' src={floor8} /></div>
                                </div>
                                <div className='numberBold2'>1697 sq.ft.</div>
                            </div> */}
                                <img src={left_arr} style={{ marginRight: '1rem', width: '2.3rem' }} className='leftArrow' onClick={() => {
                                    if (document.getElementById("idgoesheree")) {
                                        document.getElementById("idgoesheree").scrollLeft = document.getElementById("idgoesheree").scrollLeft - 450
                                    }
                                }} />

                                <div className="curr_image">
                                    <img src={bhk31} alt="" />
                                    <span>1545 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk32} alt="" />
                                    <span>1583 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk33} alt="" />
                                    <span>1586 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk34} alt="" />
                                    <span>1607 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk35} alt="" />
                                    <span>1608 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk36} alt="" />
                                    <span>1675 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk37} alt="" />
                                    <span>1680 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk38} alt="" />
                                    <span>1694 sq.ft.</span>
                                </div>
                                <div className="curr_image">
                                    <img src={bhk39} alt="" />
                                    <span>1697 sq.ft.</span>
                                </div>
                                <img src={right_arr} style={{ width: '2.3rem' }} className='rightArrow' onClick={() => {
                                    if (document.getElementById("idgoesheree")) {
                                        document.getElementById("idgoesheree").scrollLeft = document.getElementById("idgoesheree").scrollLeft + 450
                                    }
                                }} />
                            </div>
                        }
                    </div>
                    <div className='learn' onClick={() => {
                        setEnlargeBHK(true)
                        setBhkTop(window.scrollY)
                        document.getElementById("body").style.overflow = "hidden"
                        document.getElementById("lalala").style.filter = "brightness(0.5) blur(4px) drop-shadow(black 0px 0px 18px)"
                        document.getElementById("lalala").style.transform = "scale(1.02)"
                    }}>Click to enlarge</div>
                    <div className='download_broch' onClick={() => { setShowModal(true); }}>Download Brochure</div>
                </div>
                {/* 7th part */}
                <div ref={locationRef} className='seventh_part'>
                    <div className='amen_head' style={{ marginTop: "35px", marginBottom: "18px" }}>Connectivity</div>
                    <div className='Modern_spaced'>Convenient Location</div>
                    <div className='loc_div'>
                        <div><img className='map_img' src={activeTab == "NearBy" ? map2 : activeTab == "Education" ? map3 : activeTab == "Hospitals" ? map4 : activeTab == "Malls" ? map5 : ""} alt='' /></div>
                        <div className='lol'>
                            <div className='head_head'>
                                <div onClick={() => { setActiveTab("NearBy"); }} className={`${activeTab === "NearBy" ? 'underhighlight' : 'highlight'}`}>
                                    <div>Near By</div>
                                    {activeTab === "NearBy" && <div style={{ width: "65px", height: "1.5px", backgroundColor: "#d6ad60" }}></div>}
                                </div>
                                <div onClick={() => { setActiveTab("Education"); }} className={`${activeTab === "Education" ? 'underhighlight' : 'highlight'}`}>
                                    <div>Education</div>
                                    {activeTab === "Education" && <div style={{ width: "82px", height: "1.5px", backgroundColor: "#d6ad60" }}></div>}
                                </div>
                                <div onClick={() => { setActiveTab("Hospitals"); }} className={`${activeTab === "Hospitals" ? 'underhighlight' : 'highlight'}`}>
                                    <div>Hospitals</div>
                                    {activeTab === "Hospitals" && <div style={{ width: "74px", height: "1.5px", backgroundColor: "#d6ad60" }}></div>}
                                </div>
                                <div onClick={() => { setActiveTab("Malls"); }} className={`${activeTab === "Malls" ? 'underhighlight' : 'highlight'}`}>
                                    <div>Malls</div>
                                    {activeTab === "Malls" && <div style={{ width: "46px", height: "1.5px", backgroundColor: "#d6ad60" }}></div>}
                                </div>
                            </div>
                            {activeTab === "NearBy" ? (
                                <div className='frst_cmn'>
                                    <div className='convi_css'>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Garuda Badminton Academy</div>
                                                <div className='numberBold'>400m</div>
                                            </div>
                                        </div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Kowkoor Dargah</div>
                                                <div className='numberBold'>600m</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='convi_css'>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Kapra Lake</div>
                                                <div className='numberBold'>900m</div>
                                            </div>
                                        </div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Indus Universal School</div>
                                                <div className='numberBold'>200km</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : activeTab === "Education" ? (
                                <div className='frst_cmn'>
                                    <div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Indus Universal School</div>
                                                <div className='numberBold'>1.2 Km</div>
                                            </div>
                                        </div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>HOLY ZION HIGH SCHOOL</div>
                                                <div className='numberBold'>1.6 km</div>
                                            </div>
                                        </div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>St.Joseph's Missionary School</div>
                                                <div className='numberBold'>1.8 km</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Akshara International School, A S Rao Nagar</div>
                                                <div className='numberBold'>4.5 Km</div>
                                            </div>
                                        </div>
                                        {/* <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>BITS Pilani</div>
                                                <div className='numberBold'>7.8 Km</div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            ) : activeTab === "Hospitals" ? (
                                <div className='frst_cmn'>
                                    <div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Meenakshi Mother and Child Hospital</div>
                                                <div className='numberBold'>1.6 Km</div>
                                            </div>
                                        </div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Vanaja Diabetic & Multi-Specialty Hospital, A S Rao Nagar</div>
                                                <div className='numberBold'>4 km</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Thatha Hospital</div>
                                                <div className='numberBold'>1.8 km</div>
                                            </div>
                                        </div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Prasad Hospitals</div>
                                                <div className='numberBold'>4.5 Km</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ) : activeTab === "Malls" ? (
                                <div className='frst_cmn'>
                                    <div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Gayathri Reddy Traditional Designer Studio</div>
                                                <div className='numberBold'>2.7 Km</div>
                                            </div>
                                        </div>
                                        <div style={{ gap: "16px", display: "flex" }}>
                                            <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                            <div>
                                                <div className='overview'>Anutex Shopping Mall LLP</div>
                                                <div className='numberBold'>2.7 km</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ gap: "16px", display: "flex" }}>
                                        <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                        <div>
                                            <div className='overview'>Reliance Digital</div>
                                            <div className='numberBold'>3.6 km</div>
                                        </div>
                                    </div>

                                </div>
                            ) : null}

                        </div>
                    </div>
                </div>
                {/* 8th part */}
                <div ref={contactRef} className='eight_part'>
                    {/* left part......... */}
                    <div className='left_head'>
                        <div className='contact'>
                            <div className='contact_us'>Contact us</div>
                            <div className='call_back'>Get a Call Back</div>
                        </div>
                        <div className='contact_scnd'>
                            <div>
                                <div></div>
                                <div>
                                    <div className='top'>Email</div>
                                    <div className='bottom'>contact@srivathsahomes.com</div>
                                </div>
                            </div>
                            <div>
                                <div></div>
                                <div>
                                    <div className='top'>Phone</div>
                                    <div className='bottom'>+91 9100008979</div>
                                </div>
                            </div>
                            <div>
                                <div></div>
                                <div>
                                    <div className='top'>Office</div>
                                    <div className='bottom'>Sainikpuri-Yapral, Hyderabad</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right part........ */}
                    <div className='formmmmsssssrr'>
                        <div className='formm'>
                            <div className='enquire'>Enquire Now</div>
                            <div><input className='formRow' placeholder='Name' /></div>
                            <div><input className='formRow' placeholder='Phone' /></div>
                            <div><input className='formRow' placeholder='Email' /></div>
                            <div className='submit_btn'>Submit</div>
                        </div>
                    </div>
                </div>
                {/* 9th part */}
                <div className='ninth_part'>
                    <div><img style={{ height: "100px", width: "152px", marginTop: "12px", marginBottom: "16px" }} src={logoo} alt='' /></div>
                    <div className='seccccc'>A Premium Gated Community of Luxury Apartments</div>
                    <div className='footer_heads'>
                        <span className='seccccc' onClick={scrollToOverview}>Overview</span>
                        <span className='seccccc' onClick={scrollToAmenities}>Amenities</span>
                        <span className='seccccc' onClick={scrollToGallery}>Gallery</span>
                        <span className='seccccc' onClick={scrollToFloorPlan} style={{ textWrap: "nowrap" }}>Floor Plan</span>
                        <span className='seccccc' onClick={scrollToLocation}>Location</span>
                        <span className='seccccc' onClick={scrollToContact}>Contact</span>
                    </div>
                    <div style={{ display: "flex", margin: "10px 0px 10px 0px", gap: "12px" }}>
                        <div><img src={facebook} /></div>
                        <div><img src={insta} /></div>
                    </div>
                    <div style={{ width: "94vw", border: "1px solid #ffffff" }}></div>
                    <div className='seccccc' style={{ marginTop: "16px", marginBottom: "16px" }}>Copyright © 2024 Sterling Abode</div>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement='start' >
                <Offcanvas.Body>
                    <div>
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}><img src={newLogo} alt='logo' /></div>
                        <div>
                            <div className='sidebar_topic' style={{ cursor: "pointer" }} onClick={() => { scrollToOverview(); handleClose(); }}>Overview</div>
                            <div className='sidebar_topic' style={{ cursor: "pointer" }} onClick={() => { scrollToAmenities(); handleClose(); }}>Amenities</div>
                            <div className='sidebar_topic' style={{ cursor: "pointer" }} onClick={() => { scrollToGallery(); handleClose(); }}>Gallery</div>
                            <div className='sidebar_topic' style={{ cursor: "pointer" }} onClick={() => { scrollToFloorPlan(); handleClose(); }}>Floor Plan</div>
                            <div className='sidebar_topic' style={{ cursor: "pointer" }} onClick={() => { scrollToLocation(); handleClose(); }}>Location</div>
                            <div className='sidebar_topic' style={{ cursor: "pointer" }} onClick={() => { scrollToContact(); handleClose(); }}>Contact</div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Modal show={showModall} dialogClassName='newclasssesss' onHide={handleCloseModal} aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Body style={{ padding: "32px", height: "361px" }}>
                    <div className='modal_border'>
                        <div className='cross_icon' onClick={() => { setShowModal(false); }}><img src={Frame} /></div>
                        <div>
                            <div className='brochhh' style={{ fontFamily: "lora" }} onClick={() => { setShowModal(true); }}>Download Brochure</div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <div><input className='formRow' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /></div>
                                <div><input className='formRow' placeholder='Phone' value={phone} onChange={(e) => {  handlePhoneChange(e); }}  /></div>
                                <div>  <input
                            className='formRow'
                            placeholder='Email'
                            value={email}
                            onChange={handleEmailChange}
                        /></div>
                         {/* {!isValidEmail && (
                            <p style={{ color: 'red' }}>Please enter a valid email address</p>
                        )} */}
                            </div>
                            <div className='submit_btn' onClick={handleDownload}>Submit</div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* successfullll modal */}
            <Modal show={showModall2} dialogClassName='newclasssesss2' onHide={handleCloseModal2} aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Body style={{ padding: "32px", height: "325px" }}>
                    {/* <div className='modal_border'> */}
                    <div className='comn'>
                        <div className='cross_icon2' onClick={() => { setShowModal2(false); }}><img src={Frame} /></div>
                        <div><img src={tick} /></div>
                        <div className='down'>Brochure Download Successful!</div>
                        <div className='thnkyou'>Thank you! You can also find the brochure in your inbox</div>
                    </div>
                    {/* </div> */}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AbodeMainLandingPage 