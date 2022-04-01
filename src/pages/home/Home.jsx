import React from 'react';
import './home.css';
import  Feature from '../../components/featuredinfo/Feature.jsx';
import Chart from '../../components/chart/Chart.jsx';

import {userData} from '../../dummydata';
import WidgetLg from '../../components/widgetLG/WidgetLG.jsx';
import WidgetSm from '../../components/widgetSm/WidgetSm.jsx';
const Home=()=>{
    return(
        <>
        <div className = "home">
            <Feature/>
            <Chart data={userData} title="User Analytics" grid datakey="ActiveUser"/>
            <div className="homewidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>

        </div>
        </>
    )


}
export default Home ; 