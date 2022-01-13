import React, { useEffect } from 'react'
import Chart from '../../chart/Chart'
import Featuredinfo from '../../featuredInfo/Featuredinfo'
import "./Home.css"
import {userData} from "../../dummyData"
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'
import { getProducts } from '../../../../JS/actions/adminActions'
import { useDispatch } from 'react-redux'

const Home = () => {

const dispatch = useDispatch()

   useEffect(() => {

    dispatch(getProducts())
    
   }, [])

    return (
        <div className='home'>
            <Featuredinfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className='homeWidgets'>
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
