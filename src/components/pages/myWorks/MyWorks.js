import './myWorks.css'

import img_1 from '../../../images/1.jpeg'
import img_2 from '../../../images/2.jpeg'
import img_3 from '../../../images/3.jpeg'
import img_4 from '../../../images/4.jpeg'
import img_5 from '../../../images/5.jpeg'
import img_6 from '../../../images/6.jpeg'

const MyWorks = () => {
    return(
        <>
            <section id="myWorks">
                <div className="myWorks__container">
                    <div className="myWorks__header">
                        <h2><span>My </span>Works</h2>
                        <span>The new common language will be more simple and regular than.</span>
                    </div>
                    <div className="myWorks__title">
                        <div className="myWorks__title-item">
                            <div className="myWorks__svg">
                                <i className="fas fa-file-powerpoint"></i>
                            </div>
                            <span className="active">All</span>
                        </div>
                        <div className="myWorks__title-item">
                            <div className="myWorks__svg">
                                <i className="far fa-window-restore"></i>
                            </div>
                            <span>Web</span>
                        </div>
                        <div className="myWorks__title-item">
                            <div className="myWorks__svg">
                                <i className="fas fa-mobile"></i>
                            </div>
                            <span>App</span>
                        </div>
                        <div className="myWorks__title-item">
                            <div className="myWorks__svg">
                                <i className="fas fa-camera"></i>
                            </div>
                            <span>Graphic</span>
                        </div>
                    </div>
                    <div className="myWorks__image">
                        <div className="myWorks__image-item">
                            <img src={img_1} alt="knife image"/>
                            <i className="fa fa-arrows-alt"></i>
                        </div>
                        <div className="myWorks__image-item">
                            <img src={img_2} alt="bottle image"/>
                            <i className="fa fa-arrows-alt"></i>
                        </div>
                        <div className="myWorks__image-item">
                            <img src={img_3} alt="bottle image"/>
                            <i className="fa fa-arrows-alt"></i>
                        </div>
                        <div className="myWorks__image-item">
                            <img src={img_4} alt="bug image"/>
                            <i className="fa fa-arrows-alt"></i>
                        </div>
                        <div className="myWorks__image-item">
                            <img src={img_5} alt="watch image"/>
                            <i className="fa fa-arrows-alt"></i>
                        </div>
                        <div className="myWorks__image-item">
                            <img src={img_6} alt="lexon image"/>
                            <i className="fa fa-arrows-alt"></i>
                        </div>
                    </div>
                    <div className="myWorks__info">
                        <div className="myWorks__info-svg">
                            <i className="fas fa-quote-right"></i>
                        </div>
                        <p>The new common language will be more simple and regular than. It will be more Occidental in fact. The new common language will be more simple and regular than. It will be more Occidental in fact.</p>
                        <h2>- Mr.Jonathon Doe</h2>
                        <span>Founder of web_bean</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyWorks;