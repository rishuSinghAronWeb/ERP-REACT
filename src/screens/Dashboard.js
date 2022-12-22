import React from 'react'
import {TfiBriefcase} from 'react-icons/tfi'
import {BsArrowUp} from 'react-icons/bs'
import {SiWebmoney} from 'react-icons/si'
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import {
//   loginRequest
} from "../store/actions";


function Dashboard(props){
    const data2 = [
        ['Weeks', 'Loss', 'Profit'],
        ['Week-1', 10, 20],
        ['Week-2', 6, 24],
        ['Week-3', 9, 30],
        ['Week-4', 23, 10],
    ];
    const options2 = {
        seriesType: 'bars',
        series: {
            2: { type: 'line', color: 'DE1010' },
            0: { color: '#333333' },
            1: { color: '#ff6d00' },
        },
        bar: { groupWidth: '45%' },
        legend: { position: 'none' },
        backgroundColor: 'none',
        responsive: true,
    }

    return(
        <div className=''>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                <div className='p-6 rounded-2xl shadow-md bg-white flex items-center justify-between gap-5 w-full '>
                    <div>
                        <p className='text-3xl font-bold mb-1'>352</p>
                        <p className='text-base font-semibold capitalize text-black/70'>Invoice sent</p>
                    </div>
                    <span className='w-20 h-20 rounded-full bg-lime-200 flex items-center justify-center text-4xl'><TfiBriefcase /></span>
                </div>
                <div className='p-6 rounded-2xl shadow-md bg-white flex items-center justify-between gap-5 w-full '>
                    <div>
                        <p className='text-3xl font-bold mb-1'>$37k</p>
                        <p className='text-base font-semibold capitalize text-black/70'>Credited</p>
                    </div>
                    <span className='w-20 h-20 rounded-full bg-indigo-200 flex items-center justify-center text-4xl'><SiWebmoney /></span>
                </div>
                <div className='p-6 rounded-2xl shadow-md bg-white flex items-center justify-between gap-5 w-full '>
                    <div>
                        <p className='text-3xl font-bold mb-1'>352</p>
                        <p className='text-base font-semibold capitalize text-black/70'>Invoice sent</p>
                    </div>
                    <span className='w-20 h-20 rounded-full bg-lime-200 flex items-center justify-center text-4xl'><TfiBriefcase /></span>
                </div>
                <div className='p-6 rounded-2xl shadow-md bg-white flex items-center justify-between gap-5 w-full '>
                    <div>
                        <p className='text-3xl font-bold mb-1'>352</p>
                        <p className='text-base font-semibold capitalize text-black/70'>Invoice sent</p>
                    </div>
                    <span className='w-20 h-20 rounded-full bg-lime-200 flex items-center justify-center text-4xl'><TfiBriefcase /></span>
                </div>
            </div>

            <div className='my-10 grid sm:grid-cols-2 gap-5'>
                <div className='bg-white shadow-md rounded-2xl'>
                    <div className='grid sm:flex items-start gap-5 justify-between px-10 pt-10 text-3xl'>
                        <p className='capitalize font-semibold'>Month sale</p>
                        <p className='font-bold flex items-end'>$89,99  <span className='text-green-500 flex text-base ml-3 mr-1'><BsArrowUp /></span> <span className='text-base bg-green-200 p-1 px-2 rounded italic'>4.89%</span></p>
                    </div>
                <Chart
                    chartType="ColumnChart"
                    data={data2}
                    width="100%"
                    height="400px"
                    options={options2}
                    legendToggle
                />
                </div>
                <div className='relative bg-white rounded-2xl shadow-md flex flex-wrap justify-center items-center p-10'>
                    <div className='w-full mb-10'><span className='text-6xl font-bold text-primary'>450</span> <p className='font-medium tracking-6px uppercase'>Invoice</p></div>
                    <img src='images/invoice-vector.png' className='max-w-full sm:max-w-370px' />
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = ({ Home }) => ({
    login: Home.login,
    error: Home.error,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    // notificationLists: () => dispatch(notificationLists()),
  });
  export default connect(mapStateToProps, mapDispatchToProps)((Dashboard));