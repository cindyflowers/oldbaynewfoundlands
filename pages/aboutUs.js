import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import Link from "next/link";

class Index extends Component {
    render() {
        let { 
               
            GCHTitles,
            CHTitles,
            GCHBTitles,
            GCHSTitles,
            CDTitles,
            CDXTitles,
            UDTitles,
            AXPTitles,
            AJPTitles,
            NAPTitles,
            NJPTitles,
            OAPTitles,
            OJPTitles,
            DDTitles,
            DDXTitles,
            WDTitles,
            WRDTitles,
            WRDXTitles,
            TDDTitles,
            TDDXTitls,
            VNTitles,
            WATitles,
            ROMTitles,
            THDNTitles,
            RNTitles,
            RATitles,
            RETitles,
            CGCTitles,
            CGCATitles,
            TopTwentyTitles, 
            BNTitles,
            TKNTitles,
            TKITitles,
            TKATitles,
            AllCHTitles = GCHTitles + CHTitles + GCHBTitles + GCHSTitles, 
            ALLOBEDTitles = CDTitles + CDXTitles + UDTitles + RNTitles + RATitles + RETitles + BNTitles + TKNTitles + TKITitles + TKATitles,
            ALLAjilityTitles = NAPTitles + NJPTitles + OAPTitles + OJPTitles + AXPTitles + AJPTitles,
            ALLCGCTitles = CGCATitles + CGCTitles,
            ALLWorkingTitles = WDTitles + WRDXTitles + DDTitles + DDXTitles + TDDTitles + TDDXTitls,
            AllSpecialTitles = ROMTitles + VNTitles + WATitles + TopTwentyTitles    } = this.props;
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
                                            <h2>{AllCHTitles} - AKC Championship Titles</h2>
                                            {CHTitles} Champions, {GCHBTitles} Grand Champions, {GCHBTitles} Grand Champion Bronze, {GCHSTitles} Grand Champion Silver
                                        </p>
                                        <p>
                                            <h2>{ALLOBEDTitles} - AKC Obedience and Rally Titles</h2>
                                            {CDTitles} Companion Dogs, {CDXTitles} Companion Dog Excellant, {UDTitles} Utiltiy Dog, {BNTitles} Beginner Novice,  {RNTitles} Rally Novice, 5 Rally Advanced, 
                                            {RETitles} Rally Excellant, {TKNTitles} Trick Dog Novice, {TKITitles} Trick Dog Intermediate, {TKATitles} Trick Dog Advanced
                                        </p>
                                        <p>
                                        <h2>{ALLAjilityTitles} - AKC Agility Titles</h2>
                                            {NAPTitles} Novice Agility Preferred, {NJPTitles} Novice Jumpers Preferred, {OAPTitles} Open Agility Prreferred, {OJPTitles} Open Jumpers Preferred, {AXPTitles} Agility Excellent Preferred, {AJPTitles} Agility Jumpers Excellent Preffered
                                        </p>
                                        <p>
                                            <h2>{THDNTitles} - AKC Therapy Dog Titles</h2>
                                            {THDNTitles} Therapy Dogs
                                        </p>
                                        <p>
                                            <h2>{ALLCGCTitles} - AKC Canine Good Citizen Titles</h2>
                                            {CGCTitles} Canine Good Citizen, {CGCATitles} Canine Good Citizen Advanced
                                        </p>
                                        <p>
                                            <h2>{ALLWorkingTitles} - NCA Working Titles/Requalifications</h2>
                                            {WDTitles} Water Dog, {WRDTitles} Water Rescue Dog, {WRDXTitles} Water Rescue Dog Excellant, {DDTitles} Draft Dog, {DDXTitles} Draft Dog Excellant, {TDDTitles} Team Draft Dogs, {TDDXTitls} Team Draft Dog Excellant
                                        </p>
                                        <p>
                                            <h2>{AllSpecialTitles} - NCA Special Awards</h2>
                                            {ROMTitles} Register of Merit, {VNTitles} Versitile Newfoundlands, {WATitles} Working Achievements, {TopTwentyTitles} times in Top Twenty
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
const mapStateToProps = (state) => {
    return {
        GCHTitles: state.GCHTitles,
        CHTitles: state.CHTitles,
        GCHBTitles: state.GCHBTitles,
        GCHSTitles: state.GCHSTitles,
        CDTitles: state.CDTitles,
        CDXTitles: state.CDXTitles,
        UDTitles: state.UDTitles,
        AXPTitles: state.AXPTitles,
        AJPTitles: state.AJPTitles,
        NAPTitles: state.NAPTitles,
        NJPTitles: state.NJPTitles,
        OAPTitles: state.OAPTitles,
        OJPTitles: state.OJPTitles,
        DDTitles: state.DDTitles,
        DDXTitles: state.DDXTitles,
        WDTitles: state.WDTitles,
        WRDTitles: state.WRDTitles,
        WRDXTitles: state.WRDXTitles,
        TDDTitles: state.TDDTitles,
        TDDXTitls: state.TDDXTitls,
        VNTitles: state.VNTitles,
        WATitles: state.WATitles,
        ROMTitles: state.ROMTitles,
        THDNTitles: state.THDNTitles,
        RNTitles: state.RNTitles,
        RATitles: state.RATitles,
        RETitles: state.RETitles,
        CGCTitles: state.CGCTitles,
        CGCATitles: state.CGCATitles,
        TopTwentyTitles: state.TopTwentyTitles,
        BNTitles: state.BNTitles,
        TKNTitles: state.TKNTitles,
        TKITitles: state.TKITitles,
        TKATitles: state.TKATitles,
    }
}

export default connect(
    mapStateToProps,
)(Index)
