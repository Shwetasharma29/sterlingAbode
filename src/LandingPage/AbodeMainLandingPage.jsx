import React, { useState } from 'react'
import "./abode.css"
import map from "../Assets/map.svg"
import star from "../Assets/star.svg"
import { Carousel } from '3d-react-carousal';
import logoo from "../Assets/logoo.svg"
import mainImage from "../Assets/mainImage.svg"
import mainImage2 from "../Assets/mainImage2.png"
import mainImage3 from "../Assets/mainImage3.png"
import img1 from "../Assets/img1.png"
import img2 from "../Assets/img2.png"
import img3 from "../Assets/img3.png"
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

const AbodeMainLandingPage = () => {
    const [activeTab, setActiveTab] = useState("NearBy")
    let slides = [
        <img style={{
            width: "852px", height: "469px"     
        }} src={mainImage} alt="1" />,
        <img style={{
            width: "852px", height: "469px"
        }} src={mainImage2} alt="2" />,
        <img style={{
            width: "852px", height: "469px"
        }} src={mainImage3} alt="5" />];
    return (
        <div>
            <div>
                <div></div>
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
                    <div style={{ marginBottom: "191px" }}>
                        <div class="grid-container">
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img1}/></div>
                                <div className='amen_head'>Jogging Track</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img2}/></div>
                                <div className='amen_head'>Swimming Pool</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img3}/></div>
                                <div className='amen_head'>24x7 Security</div>
                            </div>
                            <div class="grid-item" style={{ borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img4}/></div>
                                <div className='amen_head'>Gymnasium</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img5}/></div>
                                <div className='amen_head'>Water Softener Plant </div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img6}/></div>
                                <div className='amen_head'>Yoga/Meditation Area</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37", borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img7}/></div>
                                <div className='amen_head'>Senior Citizen Site Out</div>
                            </div>
                            <div class="grid-item" style={{ borderBottom: "1px solid #D4AF37" }}>
                                <div><img src={img8}/></div>
                                <div className='amen_head'>Lawn Tennis Court</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37" }}>
                                <div><img src={img9}/></div>
                                <div className='amen_head'>Party Lawn</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37" }}>
                                <div><img src={img10}/></div>
                                <div className='amen_head'>Club House</div>
                            </div>
                            <div class="grid-item" style={{ borderRight: "1px solid #D4AF37" }}>
                                <div><img src={img11}/></div>
                                <div className='amen_head'>Children’s Play Area</div>
                            </div>
                            <div class="grid-item" >
                                <div><img src={img12}/></div>
                                <div className='amen_head'>Fire Fighting System</div>
                            </div>
                        </div>
                    </div>
                    <div className='download_broch'>Download Brochure</div>
                </div>
                {/* 4th part */}
                <div></div>
                {/* 5th part */}
                <div style={{backgroundColor:"#122620",textAlign:"center"}}>
                    <div className='gallery'>Gallery</div>
                    {/* <div> */}
                        <Carousel slides={slides} autoplay={false} interval={1000} />
                        {/* </div> */}
                        <span style={{textAlign:"-webkit-center"}}>
                    <div className='learn'>Click to enlarge</div>

                    <div className='download_broch'>Download Brochure</div>
                    </span>
<div style={{color:"#122620",height:"50px"}}></div>
                </div>
                {/* 6th part */}
                <div className='sixth_part'>
                    <div className='comn_hox'>
                        <div className='overview' style={{ paddingTop: "5px" }}>Floor Plan</div>
                        <div className='yellow_head'>Discover Your Perfect Space</div>
                    </div>
                    <div className='comm_bhk'>
                        <div className='bbhk'>2 BHK</div>
                        <div className='hbhk'>3 BHK</div>
                    </div>
                    <div></div>
                    <div className='learn'>Click to enlarge</div>
                    <div className='download_broch'>Download Brochure</div>
                </div>
                {/* 7th part */}
                <div className='seventh_part'>
                    <div className='amen_head' style={{ marginTop: "35px", marginBottom: "18px" }}>Connectivity</div>
                    <div className='Modern_spaced'>Convenient Location</div>
                    <div className='loc_div'>
                        <div><img style={{ height: "512px" }} src={map} alt='' /></div>
                        <div>
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
                    <div style={{ display: "flex", margin: "10px 0px 10px 0px",gap:"12px" }}>
                        <div><img src={facebook}/></div>
                        <div><img src={insta}/></div>
                    </div>
                    <div style={{ width: "94vw", border: "1px solid #ffffff" }}></div>
                    <div className='seccccc' style={{ marginTop: "16px", marginBottom: "16px" }}>Copyright © 2021 Sterling Abode</div>
                </div>
            </div>
        </div>
    )
}

export default AbodeMainLandingPage