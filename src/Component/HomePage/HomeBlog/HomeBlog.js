import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Doctor1 from '../../../Resources/images/Ellipse 1.png';
import Doctor2 from '../../../Resources/images/Ellipse 3.png';
import './HomeBlog.css'

const HomeBlog = () => {
    return (
        <>
            <section className="container">
                <div className="homeBlog_main_aria">
                    <h5 className='main_title'>OUR BLOG</h5>
                    <h1>From Our Blog News</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="homeBlog_categories1">
                                <h5>Tajuuddin Tarek</h5>
                                <p>15 Nov 2020</p>
                                <h4>Check at least a doctor in a year of year teeth</h4>
                                <ArrowRightAltIcon className='homeBlog_icon'/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="homeBlog_categories">
                                <div className="homeBlog_sub_categories">
                                    <img src={Doctor1} alt="Doctor"/>
                                    <div>
                                        <h5>Dr. Caudi</h5>
                                        <p>15 Nov 2020</p>
                                    </div>
                                </div>
                                <h4>2 times of brush in a day can keep your healthy</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, facere.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 homeBlog_categories_center">
                            <div className="homeBlog_categories">
                                <div className="homeBlog_sub_categories">
                                    <img src={Doctor2} alt="Doctor"/>
                                    <div>
                                        <h5>Dr. Hinary</h5>
                                        <p>15 Nov 2020</p>
                                    </div>
                                </div>
                                <h4>The tooth cancer is taking a challenge</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, facere.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeBlog;