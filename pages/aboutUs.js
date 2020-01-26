import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import Link from "next/link";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="About Us" />
                <section className="about-area ptb-60">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h2>About Old Bay Newfoundlands</h2>
                                    <p>Kathy Hamilton bred her first Newfoundland litter in 1988 under the Old Bay prefix.  Her fist Newfs
                                        came from Phyllis and Jamie Welch (Spillway) and Brenda and Rick Santiago (Muddy Creek) .
                                    </p>
                                    
                                    <p>Cindy purchased her first Newf BETTY in 1992 and quickly became enamored with Newfoundlands.  Mentored by members of Colonial
                                        Newfoundland Club, Kathy and Mike Paxton (Bear's Den), Karen and Gene Perry (Olde Mill) and Kathy Hamilton (Old Bay) she quickly jumped into learning about the
                                        breed and was soon participating in working events and volunteering for the club.
                                    </p> 
                                        
                                    <p> Fast forward to 1998, the year John and Cindy brought
                                        two more Newfs into their lives, YOGI from Jean and Steve McAdams (Shadrack) and DAISY from Deb Wigal (Top Shelf). In 2002 Cindy and John 
                                        co-bred a litter with Deb Wigal. Kathy Hamilton helped whelp the litter and in return she was given ROCKY, a great-grandson of a dog she had 
                                        bred in 1993. Almost all current Old Bay Newfs can trace their pedigree back to BACARDI - VN CH Old Bays Bacardi Of Top Shelf CDX, TDD, WRD
                                        owned by Deb Wigal and bred by Kathy Hamilton.  
                                    </p>
                                    
                                    <p>Keeping with the tradition of working with other breeders to help preserve the future of purebred Newfoundlands, Kathy, Cindy and John have 
                                        co-bred litters with Lou Ann Lenner (Sunvalley), Rose Miller (Celtic Cross), Joan Locker-Thuring and Tom Thuring (BluWater),
                                        Don and Julia Sharkey (PowderRidge) and Andrea Jung (Dreamhaven).  
                                    </p>

                                    <p>Old Bay has a long history of breeding health tested dogs.  In 2020 you will find almost 100 Old Bay Newfs in the Orthopedic Foundation
                                        for Animals web site: <span>                                 
                                        <Link href="https://www.ofa.org/" >
                                                <a data-tip="Canine Health Information Center" 
                                                data-place="left"  target="_blank">Orthopedic Foundation for Animals<i className="fas fa-paw"></i></a>
                                        </Link> </span>   
                                    </p>

                                    <p>Old Bay is extremely proud of the achievements of the dogs they own and the owners of dogs they bred or co-bred.  
                                        Here are some statistics:</p>
                                        <p>
                                            <h2>97 - AKC Championship Titles</h2>
                                            75 Champions, 18 Grand Champions, 3 Grand Champion Bronze, 1 Grand Champion Silver
                                        </p>
                                        <p>
                                            <h2>52 - AKC Obedience and Rally Titles</h2>
                                            19 Companion Dogs, 3 Companion Dog Excellant, 1 Utiltiy Dog, 4 Beginner Novice,  12 Rally Novice, 5 Rally Advanced, 
                                            1 Rally Excellant, 4 Trick Dog Novice, 2 Trick Dog Intermediate, 1 Trick Dog Advanced
                                        </p>
                                        <p>
                                        <h2>13 - AKC Agility Titles</h2>
                                            4 Novice Agility Preferred, 3 Novice Jumpers Preferred, 2 Open Agility Prreferred, 2 Open Jumpers Preferred, 1 Agility Excellent Preferred, 1 Agility Jumpers Excellent Preffered
                                        </p>
                                        <p>
                                            <h2>2 - AKC Therapy Dog Titles</h2>
                                            2 Therapy Dogs
                                        </p>
                                        <p>
                                            <h2>21 - AKC Canine Good Citizen Titles</h2>
                                            18 Canine Good Citizen, 3 Canine Good Citizen Advanced
                                        </p>
                                        <p>
                                            <h2>76 - NCA Working Titles/Requalifications</h2>
                                            21 Water Dog, 25 Water Rescue Dog, 1 Water Rescue Dog Excellant, 16 Draft Dog, 2 Draft Dog Excellant, 9 Team Draft Dogs, 2 Team Draft Dog Excellant
                                        </p>
                                        <p>
                                            <h2>23 - NCA Special Awards</h2>
                                            8 Register of Merit, 5 Versitile Newfoundlands, 2 Working Achievements, 8 times in Top Twenty
                                        </p>
                                    

                                    <div className="signature mb-0">
                                        <img src={require("../images/AKCBreederOfMeritBanner.jpg")} alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <img src={require("../images/Kathy3.jpg")} className="about-img1" alt="image" />

                                    <img src={require("../images/CindyAndJohn2.jpg")} className="about-img2" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
