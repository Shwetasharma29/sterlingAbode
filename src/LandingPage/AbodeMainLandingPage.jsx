import React, { useState } from 'react'
import "./abode.css"
import map from "../Assets/map.svg"
import star from "../Assets/star.svg"
import { Carousel } from '3d-react-carousal';
import logoo from "../Assets/logoo.svg"
import left_grey from "../Assets/left_grey.svg"
import right_arr from "../Assets/right_arr.svg"
import left_arr from "../Assets/left_arr.svg"
import right_grey from "../Assets/right_grey.svg"
import mainImage from "../Assets/mainImage.svg"
import mainImage2 from "../Assets/mainImage2.png"
import mainImage3 from "../Assets/mainImage3.png"
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
import img10 from "../Assets/img10.png"
import img11 from "../Assets/img11.png"
import img12 from "../Assets/img12.png"
import facebook from "../Assets/facebook.svg"
import insta from "../Assets/insta.svg"
import t1 from '../Assets/triangle1.png'
import t2 from '../Assets/triangle2.png'
import t3 from '../Assets/triangle3.png'
import floor1 from '../Assets/floor1.svg'
import floor2 from '../Assets/floor2.svg'
import floor3 from '../Assets/floor3.svg'
import floor4 from '../Assets/floor4.svg'
import floor5 from '../Assets/floor4.svg'
import floor6 from '../Assets/floor4.svg'
import floor7 from '../Assets/floor4.svg'
import floor8 from '../Assets/floor4.svg'
// import floor5 from '../Assets/floor5.png'

const AbodeMainLandingPage = () => {
    const [activeTab, setActiveTab] = useState("NearBy")
    let slides = [
        <img style={{
            width: "48vw", height: "74vh"
        }} src={mainImage} alt="1" />,
        <img style={{
            width: "48vw", height: "74vh"
        }} src={mainImage2} alt="2" />,
        <img style={{
            width: "48vw", height: "74vh"
        }} src={mainImage3} alt="5" />];
    const [specification, setSpecification] = useState("livingRoom");
    const [bhkk,setBhkk] = useState(false);
    const [count, setCount] = useState(0)

    const handleNext = () => {
        setCount(count + 1)
    }

    const handlePrev = () => {
        setCount(count - 1)
    }
    
    return (
        <div>
            <div>
                {/* first part */}
                <div>
                    <div className='first_headdd'>
                        {/* navbar */}
                        <div className='top_top'>
                            <div><img src={logoo} alt='logo' /></div>
                            <div className='for_gap'>
                                <span className='first_heading'>OVERVIEW</span>
                                <span className='first_heading'>AMENITIES</span>
                                <span className='first_heading'>GALLERY</span>
                                <span className='first_heading'>FLOOR PLAN</span>
                                <span className='first_heading'>LOCATION</span>
                                <span className='first_heading'>CONTACT</span>
                            </div>
                            <div className='for_gaaap'>
                                <span  class="your-image-class">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className='first_heading'>+918790878787</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '40%', paddingTop: '3%', paddingLeft: '5%' }}>
                                {/* <img src={txt} />*/}
                                <div className='main_bord'>
            <div className='sterling' style={{fontFamily:"Cormorant Garamond"}}>
              STERLING
            </div>
            <div className='sterling' style={{fontFamily:"Cormorant Garamond"}}>ABODE</div>
            <div className='sterling22' style={{fontFamily:"Cormorant Garamond"}}>Redifining luxury</div>
          </div> 
                                <div className='lux' style={{fontFamily: "Lora" }}>Luxury Gated Apartments</div>
                                <div className='livingss' style={{  fontFamily: "Lora" }}>Living spaces in Sainikpuri, <br /> Hyderabad</div>
                                <div className='readdy' style={{ fontFamily: "Lora" }}>Ready to Move-In</div>
                                <div className='download_broch'>Download Brochure</div>
                            </div>
                            <div style={{ width: '65%' }} >
                                {count % 3 === 0  && <img src={t1} style={{ width: '60vw', height: '82vh' }} />}
                                {count % 3 === 1  && <img src={t2} style={{ width: '60vw', height: '82vh' }} />}
                                {count % 3 === 2  && <img src={t3} style={{ width: '60vw', height: '82vh' }} />}
                            </div>
                            <div className="useBtns">
                                <img src={left_arr} onClick={handlePrev} style={{marginRight: '1rem', width: '2.3rem'}}/>
                                <img src={right_arr} onClick={handleNext} style={{width: '2.3rem'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd part */}
                <div className="background-div">
                    <div className='frst_box'>
                        <div className='overview'>Overview</div>
                        <div className='yellow_head'>Building Dreams with Sri Vathsa</div>
                        <div className='learn'>learn more</div>
                    </div>
                    <div className='secondRow'>
                        <div className='second_box'>
                            <div className='firstttt'>52k</div>
                            <div className='scnd'>Sq. ft. Completed</div>
                        </div>
                        <div className='second_box'>
                            <div className='firstttt'>40+</div>
                            <div className='scnd'>Green Spaces</div>
                        </div>
                        <div className='second_box'>
                            <div className='firstttt'>20</div>
                            <div className='scnd'>Years of Experience</div>
                        </div>
                        <div className='second_box'>
                            <div className='firstttt'>15</div>
                            <div className='scnd'>Awards & Recognition</div>
                        </div>
                    </div>
                </div>
                {/* 3rd part */}
                <div className='third_part'>
                    <div className='amen_head' style={{ marginTop: "50px", marginBottom: "18px" }}>Amenities</div>
                    <div className='Modern_spaced'>Modern Spaced Designed for You</div>
                    <div className='ssssss'>
                        <div class="grid-container">
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img1} /></div>
                                <div className='amen_head'>Jogging Track</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img2} /></div>
                                <div className='amen_head'>Swimming Pool</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img3} /></div>
                                <div className='amen_head'>24x7 Security</div>
                            </div>
                            <div class="grid-item" style={{ borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img4} /></div>
                                <div className='amen_head'>Gymnasium</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img5} /></div>
                                <div className='amen_head'>Water Softener Plant </div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img6} /></div>
                                <div className='amen_head'>Yoga/Meditation Area</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img7} /></div>
                                <div className='amen_head'>Senior Citizen Site Out</div>
                            </div>
                            <div class="grid-item" style={{ borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img8} /></div>
                                <div className='amen_head'>Lawn Tennis Court</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37" }}>
                                <div><img src={img9} /></div>
                                <div className='amen_head'>Party Lawn</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37" }}>
                                <div><img src={img10} /></div>
                                <div className='amen_head'>Club House</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37" }}>
                                <div><img src={img11} /></div>
                                <div className='amen_head'>Children’s Play Area</div>
                            </div>
                            <div class="grid-item" >
                                <div><img src={img12} /></div>
                                <div className='amen_head'>Fire Fighting System</div>
                            </div>
                        </div>
                    </div>
                    <div className='download_broch'>Download Brochure</div>
                </div>
                {/* 4th part */}
                <div className='fourth_part'>
                    <div className='comn_hox22'>
                        <div className='yellow_head2'>Specifications</div>
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
                                        <span className='walls'>Floor - Marble</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Walls - Acrylic Emulsion / OBD</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Celling - Acrylic Emulsion / OBD</span>
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
                                        <span className='walls'>Floor - Laminated wooden flooring</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Walls - Acrylic Emulsion / OBD</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Celling - Acrylic Emulsion / OBD</span>
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
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Walls- Tiles up-to 2’ above counter & acrylic emulsion paint in balance area</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Floor - Anti-skid Tiles</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Celling - OBD</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Counter - Granite /Synthetic Stone</span>
                                    </div>
                                    <div className='gapppppguys'>
                                        <span><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></span>
                                        <span className='walls'>Fittings / Fixtures - CP fittings, SS Sink, Exhaust fan</span>
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
                <div style={{ backgroundColor: "#122620", textAlign: "center" }}>
                    <div className='gallery'>Gallery</div>
                    {/* <div> */}
                    <Carousel slides={slides} autoplay={false} interval={1000} style={{height:"79vh"}}/>
                    {/* </div> */}
                    <span style={{ textAlign: "-webkit-center" }}>
                        <div className='learn'>Click to enlarge</div>

                        <div className='download_broch'>Download Brochure</div>
                    </span>
                    <div style={{ color: "#122620", height: "50px" }}></div>
                </div>
                {/* 6th part */}
                <div className='sixth_part'>
                    <div className='comn_hox'>
                        <div className='overview' style={{ paddingTop: "5px" }}>Floor Plan</div>
                        <div className='yellow_head'>Discover Your Perfect Space</div>
                    </div>
                    {!bhkk ? 
                    <div className='comm_bhk'>
                        <div className='bbhk'>2 BHK</div>
                        <div className='hbhk' onClick={()=>{setBhkk(true)}}>3 BHK</div>
                    </div>:
                    <div className='comm_bhk'>
                        <div className='hbhk' onClick={()=>{setBhkk(false)}}>2 BHK</div>
                        <div className='bbhk'>3 BHK</div>
                    </div>}
                    <div>
                    {!bhkk ? 
                        <div className='comn_floor'>
                            <div className='frst_floor'>
                            <div><img className='floor_imagesss' src={floor1}/></div>
                            <div><img className='floor_imagesss' src={floor2}/></div>
                            </div>
                            <div className='scnd_floor'>
                            <div><img className='floor_imagesss' src={floor3}/></div>
                            <div><img className='floor_imagesss' src={floor4}/></div>
                            </div>
                            <div className='third_floor'>
                            <div><img className='floor_imagesss' src={floor3}/></div>
                            <div><img className='floor_imagesss' src={floor4}/></div>
                            </div>
                        </div>:
                        <div className='comn_floor'>
                        <div className='frst_floor'>
                        <div><img className='floor_imagesss' src={floor5}/></div>
                        <div><img className='floor_imagesss' src={floor6}/></div>
                        </div>
                        <div className='scnd_floor'>
                        <div><img className='floor_imagesss' src={floor7}/></div>
                        <div><img className='floor_imagesss' src={floor8}/></div>
                        </div>
                    </div>
                        }
                    </div>
                    <div className='learn'>Click to enlarge</div>
                    <div className='download_broch'>Download Brochure</div>
                </div>
                {/* 7th part */}
                <div className='seventh_part'>
                    <div className='amen_head' style={{ marginTop: "35px", marginBottom: "18px" }}>Connectivity</div>
                    <div className='Modern_spaced'>Convenient Location</div>
                    <div className='loc_div'>
                        <div><img style={{ height: "60vh", width: '35vw' }} src={map} alt='' /></div>
                        <div className='lol'>
                            <div className='head_head'>
                                <div onClick={() => { setActiveTab("NearBy"); }} className={`${activeTab === "NearBy" ? 'underhighlight' : 'highlight'}`}>Near By</div>
                                <div onClick={() => { setActiveTab("Education"); }} className={`${activeTab === "Education" ? 'underhighlight' : 'highlight'}`}>Education</div>
                                <div onClick={() => { setActiveTab("Hospitals"); }} className={`${activeTab === "Hospitals" ? 'underhighlight' : 'highlight'}`}>Hospitals </div>
                                <div onClick={() => { setActiveTab("Malls"); }} className={`${activeTab === "Malls" ? 'underhighlight' : 'highlight'}`}>Malls</div>
                            </div>
                            {activeTab === "NearBy" ? (
                                <div className='frst_cmn'>
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
                                            <div className='numberBold'>1,2km</div>
                                        </div>
                                    </div>
                                </div>
                            ) : activeTab === "Education" ? (
                                <div className='frst_cmn'>
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
                                    <div style={{ gap: "16px", display: "flex" }}>
                                        <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                        <div>
                                            <div className='overview'>Akshara International School, A S Rao Nagar</div>
                                            <div className='numberBold'>4.5 Km</div>
                                        </div>
                                    </div>
                                    <div style={{ gap: "16px", display: "flex" }}>
                                        <div><img style={{ height: "20px", width: "20px" }} alt='' src={star} /></div>
                                        <div>
                                            <div className='overview'>BITS Pilani</div>
                                            <div className='numberBold'>7.8 Km</div>
                                        </div>
                                    </div>
                                </div>
                            ) : activeTab === "Hospitals" ? (
                                <div className='frst_cmn'>
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
                            ) : activeTab === "Malls" ? (
                                <div className='frst_cmn'>
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
                <div className='eight_part'>
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
                                    <div className='bottom'>hello@gmail.com</div>
                                </div>
                            </div>
                            <div>
                                <div></div>
                                <div>
                                    <div className='top'>Phone</div>
                                    <div className='bottom'>+91 5005005000</div>
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
                    <div>
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
                    <div style={{ display: "flex", gap: "32px", marginTop: "8px", height: "40px", alignItems: "center" }}>
                        <span className='seccccc'>Home</span>
                        <span className='seccccc'>Overview</span>
                        <span className='seccccc'>Amenities</span>
                        <span className='seccccc'>Gallery</span>
                        <span className='seccccc'>Contact</span>
                    </div>
                    <div style={{ display: "flex", margin: "10px 0px 10px 0px", gap: "12px" }}>
                        <div><img src={facebook} /></div>
                        <div><img src={insta} /></div>
                    </div>
                    <div style={{ width: "94vw", border: "1px solid #ffffff" }}></div>
                    <div className='seccccc' style={{ marginTop: "16px", marginBottom: "16px" }}>Copyright © 2021 Sterling Abode</div>
                </div>
            </div>
        </div>
    )
}

export default AbodeMainLandingPage