import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './featue.css';
const Feature=()=>{
    return(
        <>
        <div className="featured">
            <div className="featuredItem">
                <span className="featuretitle">Revenue</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">
                        $3000
                    </span>
                    <span className="featuredMoneyrate">


                        -11.54<ArrowDownwardIcon  className="featuredIcon negative"/>

                    </span>
                </div>
                <span className="featuredSub">Comapred to last month</span>


            </div>
            <div className="featuredItem">
                <span className="featuretitle">Sales</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">
                        $2,225
                    </span>
                    <span className="featuredMoneyrate">


                        2.4<ArrowUpwardIcon className="featuredIcon"/>

                    </span>
                </div>
                <span className="featuredSub">Comapred to last month</span>


            </div>
            <div className="featuredItem">
                <span className="featuretitle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">
                        $2,00
                    </span>
                    <span className="featuredMoneyrate">


                        3<ArrowDownwardIcon className="featuredIcon negative"/>

                    </span>
                </div>
                


            </div>

        </div>
        </>
    )
}
export default Feature;