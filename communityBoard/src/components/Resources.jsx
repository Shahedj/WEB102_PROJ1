import React from "react";
import courseEra from './courseEra.png';  // Import the image
import Udemy from './Udemy.png';  // Import the image
import pluralSight from './pluralsight.png';
import codePath from './codepath.png';
import codeCademy from './codecademy.png';
import dataCamp from './datacamp.png';
import futureLearn from './futurelearn.png';
import khanAcademy from './khanacademy.png';
import skillShare from './skillshare.png';
import udacityImg from './udacity.png';



const Resources = () => {

    const CourseEra = () => {
        // Navigate to the website when the button is clicked
        window.location.href = 'https://www.coursera.org/courseraplus/?utm_medium=sem&utm_source=gg&utm_campaign=B2C_NAMER__coursera_FTCOF_courseraplus_country-US-country-CA&campaignid=9777751587&adgroupid=100171642259&device=c&keyword=coursera%20%2B&matchtype=b&network=g&devicemodel=&adposition=&creativeid=442114125114&hide_mobile_promo&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T9BH2asQTZVotnFzAj8_XFo_NGU8tG2tJGQ9aSfUJq8_JWjMUwxkQEaAiDLEALw_wcB';
    };

    const udemy = () => {
        window.location.href = 'https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.US_dev&utm_term=_._ag_137319648178_._ad_634190764968_._de_c_._dm__._pl__._ti_aud-1748515510702:kwd-296956216253_._li_9032520_._pd__._&utm_term=_._pd__._kw_udemy_._&matchtype=b&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T9mmMlBsTNJ2aQEpZgwwtQXDMSqrrYxM4tjVtiFfmocR5BluqO5LLoaArkeEALw_wcB';
    };

    const codepath = () => {
        window.location.href = 'https://www.codepath.org';
    };

    const pluralsight = () => {
        window.location.href = 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjgp7akrMeEAxWRN9QBHUuPCcIYABAAGgJvYQ&ae=2&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T_tjGFIh_N8MoiLpfXQpjXf1mrbcK3jOb8DF2SywDWu4AJylEaWH6UaAhNZEALw_wcB&ohost=www.google.com&cid=CAESV-D2nnx7b6AJpeS9fK33B8p9sIG1MkqZ6KhDRyluWw2pl8s767vo2PQVilzZyfDBo9jP3MmdhkTg3ksaBRD3hYGMxqx1JwjGSyDSSFwYTDdxpHyahN_MVw&sig=AOD64_3w0EWn6__uF_FZhjW8lWkxXpvPzg&q&adurl&ved=2ahUKEwiZvbCkrMeEAxWk4MkDHZb2BJ4Q0Qx6BAgFEAE&nis=2&dct=1';
    };

    const khanacademy = () => {
        window.location.href = 'https://www.khanacademy.org';
    };

    const futurelearn = () => {
        window.location.href = 'https://www.futurelearn.com';
    };

    const datacamp = () => {
        window.location.href = 'https://www.datacamp.com/?utm_source=google&utm_medium=paid_search&utm_campaignid=1565610606&utm_adgroupid=144928624250&utm_device=c&utm_keyword=datacamp&utm_matchtype=e&utm_network=g&utm_adpostion=&utm_creative=660509907558&utm_targetid=aud-517318241987:kwd-297372810188&utm_loc_interest_ms=&utm_loc_physical_ms=9032520&utm_content=brd~pure~pure&utm_campaign=220808_1-sea~brd~branded_2-b2c_3-us_4-rtw_5-na_6-na_7-le_8-pdsh-go_9-na_10-na_11-na&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T9I6QrXf2yCuPhewTpS6LwQZD_gsIM7ecAphETEnFYXVuEKY3ZcUPsaAuAFEALw_wcB';
    };

    const codecademy = () => {
        window.location.href = 'https://www.codecademy.com';
    };

    const skillshare = () => {
        window.location.href = 'https://www.skillshare.com/en/';
    };

    const udacity = () => {
        window.location.href = 'https://www.udacity.com/catalog/all/any-price/any-school/any-skill/any-difficulty/any-duration/any-type/most-popular/page-1?promo=year_end&coupon=FEB40&utm_source=gsem_brand&utm_source=gsem_brand&utm_medium=ads_r&utm_medium=ads_r&utm_campaign=747168232_c_individuals&utm_campaign=747168232_c_individuals&utm_term=126315200811&utm_term=126315200811&utm_keyword=udacity_e&utm_keyword=udacity_e&gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T8E7y2f1OD-va76xjqFfBcXaIcHha38LqS35TRIz7Oliu14MgzVRHcaAjsyEALw_wcB';
    };

    return (

        <div>

            <div className="card">
                <img src={courseEra} alt="coursera" className="coursera" /> {/* Use the imported image */}
                <h2> Coursera</h2>

                <button onClick={CourseEra}>View website</button>

            </div>


            <div className="card">
                <img src={Udemy} alt="udemy" className="udemy" /> {/* Use the imported image */}
                <h2> Udemy</h2>

                <button onClick={udemy}>View website</button>

            </div>

            <div className="card">
                <img src={codePath} alt="codepath" className="codepath" /> {/* Use the imported image */}
                <h2> CodePath</h2>

                <button onClick={codepath}>View website</button>

            </div>

            <div className="card">
                <img src={pluralSight} alt="pluralsight " className="pluralsight " /> {/* Use the imported image */}
                <h2> pluralsight</h2>

                <button onClick={pluralsight}>View website</button>

            </div>

            <div className="card">
                <img src={codeCademy} alt="codecademy" className="codecademy" /> {/* Use the imported image */}
                <h2> codeCademy</h2>

                <button onClick={codecademy}>View website</button>

            </div>

            <div className="card">
                <img src={dataCamp} alt="datacamp" className="datacamp" /> {/* Use the imported image */}
                <h2> dataCamp</h2>

                <button onClick={datacamp}>View website</button>

            </div>

            <div className="card">
                <img src={futureLearn} alt="futurelearn" className="futurelearn" /> {/* Use the imported image */}
                <h2> futureLearn</h2>

                <button onClick={futurelearn}>View website</button>

            </div>

            <div className="card">
                <img src={khanAcademy} alt="khanacademy" className="khanacademy" /> {/* Use the imported image */}
                <h2> khanAcademy</h2>

                <button onClick={khanacademy}>View website</button>

            </div>

            <div className="card">
                <img src={skillShare} alt="skillshare" className="skillshare" /> {/* Use the imported image */}
                <h2> skillShare</h2>

                <button onClick={skillshare}>View website</button>

            </div>

            <div className="card">
                <img src={udacityImg} alt="udacity" className="udacity" /> {/* Use the imported image */}
                <h2> Udacity</h2>

                <button onClick={udacity}>View website</button>

            </div>

        </div>

    )

}

export default Resources;