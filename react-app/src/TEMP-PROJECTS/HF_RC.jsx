import React, { useState } from 'react';
import logo from "./logo_vector 1.svg";
import chartBar from "./chart-bar-24-outlined.svg";
import playIcon from "./player-play-24-outlined.svg";
import databaseIcon from "./database-24-outlined.svg";
import passwordIcon from "./password-24-outlined.svg";
import calibrationIcon from "./creditcard-checked-24-outlined.svg";
import trash from "./trash-24-outlined.svg";
import plus from "./plus-24-outlined.svg";
import './HF_RC.css'

export default function HF_RC() {
    const toggleNames = [
        {
            id : 1,
            name : 'Experiment Sheet',
            icon : chartBar
        },
        {
            id : 2,
            name : 'Run Experiment',
            icon : playIcon
        },
        {
            id : 3,
            name : 'BITE',
            icon : databaseIcon
        },
        {
            id : 4,
            name : 'IP Configuration',
            icon : passwordIcon
        },
        {
            id : 5,
            name : 'Calibration',
            icon : calibrationIcon
        }
    ];

    const modeNames = [
        {
            id : 1,
            name : 'DBS'
        },
        {
            id : 2,
            name : 'Pulse-to-pulse steering'
        },
        {
            id : 3,
            name : 'Interferometry'
        },
        {
            id : 4,
            name : 'Meteor'
        },
        {
            id : 5,
            name : 'Aperiodic'
        },
    ]

    const detailNames1 = [
        {
            id : 1,
            name : 'Baud Length',
            units : 'us'
        },
        {
            id : 2,
            name : 'Pulse Width',
            units : 'us'
        },
        {
            id : 3,
            name : 'IPP',
            units : 'us'
        },
        {
            id : 4,
            name : 'IPP On Time',
            units : 'us'
        },
        {
            id : 5,
            name : 'No. of Range Bins'
        }
    ]

    const detailNames2 = [
        {
            id : 1,
            name : 'NCI'
        },
        {
            id : 2,
            name : 'NFFT'
        },
        {
            id : 3,
            name : 'NICI'
        },
        {
            id : 4,
            name : 'No. of cycles'
        },
    ]

    const Atten = [
        {
            id : 1,
            name : 'Exciter'
        },
        {
            id : 2,
            name : 'Rx backend unit'
        }
    ]

    const Flag = [
        {
            id : 1,
            name : 'Continuous'
        },
        {
            id : 2,
            name : 'Uncoded'
        },
        {
            id : 3,
            name : 'Coded'
        },
    ]

    const Word = [
        {
            id : 1,
            name : 'Code Length (bits)'
        },
        {
            id : 2,
            name : 'Code A'
        },
        {
            id : 3,
            name : 'Code B'
        },
    ]

    const beam = [
        {
            id : 1,
            name : 'West',
            color : '#5E3A4F'
        },
        {
            id : 2,
            name : 'West',
            color : '#5E3A4F'
        },
        {
            id : 3,
            name : 'Zenith',
            color : '#3C3362'
        },
        {
            id : 4,
            name : 'East',
            color : '#3B595F'
        },
        {
            id : 5,
            name : 'East',
            color : '#3B595F'
        },
    ]

    const [activeId, setActiveId] = useState(1);
    const [activeModeId, setActiveModeId] = useState(1);
    const [activeFlagId, setActiveFlagId] = useState(1);

    return (
        <div className='Main'>

            {/* Section - 1 */}
            <div className="sec-1">
                <div className="logo"><img src={logo} alt="logo" /></div>
                <div className="toggles">
                    {toggleNames.map((item) => (
                        <div key={item} className='toggle_Name'
                            onClick={() => setActiveId(item.id)}
                            style={{
                                        background:
                                            activeId === item.id ? 'linear-gradient(90deg, #323548 60%, #60519B, #60519B)' : '#e5e7eb',
                                            color: activeId === item.id ? '#fff' : '#000'
                }}>
                            <img 
                            className={activeId === item.id ? "active-icon" : ""}
                            src={item.icon} alt="toggleName icon" />{item.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Section - 2 */}
            <div className="sec-2">
                <div className="Opera">
                    <p>Operational Parameters</p>
                    <div className="part-1">
                        {/* Modes */}
                        <div className="Modes">
                            <span>Mode</span>
                            <div className="modeNames">
                                {modeNames.map((item) => (
                                                            <div key={item} className='mode_Names'
                                                                onClick={() => setActiveModeId(item.id)}
                                                                style={{
                                                                            background: activeModeId === item.id ? '#323548' : '',
                                                                            color: activeModeId === item.id ? '#fff' : '#000' }}>
                                                            {item.name}
                                                            </div>
                                                            ))}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="Details">
                            <span>Details</span>
                            <div className="detailNames">
                                <div className="detail_Names_1">
                                    {detailNames1.map(item => (
                                        <div key={item.id}>
                                            <label htmlFor={item.name}>{item.name}</label>
                                            <input type='number' />
                                        </div>
                                    ))}
                                </div>
                                <div className="detail_Names_2">
                                    {detailNames2.map(item => (
                                        <div key={item.id}>
                                            <label htmlFor={item.name}>{item.name}</label>
                                            <input type='number' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="part-2">
                        <div className="Attenuation">
                            <span>Attenuation</span>
                            <div className="attenuation_Names">
                                {Atten.map(item => (
                                    <div key={item.id} className="atten_Name">
                                        <label htmlFor={item.name}>{item.name}</label>
                                        <input type='number'/>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="Flag">
                            <span>Code Flag</span>
                            <div className="flagNames">
                                {Flag.map((item) => (
                                                            <div key={item} className='flag_Names'
                                                                onClick={() => setActiveFlagId(item.id)}
                                                                style={{
                                                                            background: activeFlagId === item.id ? '#323548' : '',
                                                                            color: activeFlagId === item.id ? '#fff' : '#000' }}>
                                                            {item.name}
                                                            </div>
                                                            ))}
                            </div>
                        </div>

                        <div className = "Word">
                            <span>Code Word</span>
                            <div className="attenuation_Names">
                                {Word.map(item => (
                                    <div key={item.id} className="atten_Name">
                                        <label htmlFor={item.name}>{item.name}</label>
                                        <input type='number'/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Beam">
                    <span>Beam Selection</span>
                    <div className='BeamPanel'>
                        <div className="colorsPanel">
                            {
                                beam.map(item => (
                                <div>
                                    <div className='color' style={{
                                        backgroundColor : item.color,
                                        color : 'white'
                                    }}>{item.name}</div>

                                    <div className='bin'>
                                        <img src={trash} alt="trash icon" />
                                    </div>
                                </div>
                                ))
                            }
                        </div>

                        <div className="addPanel">
                            <div className="west">
                                <span>West</span>
                                <img src={plus} alt="plus" />
                            </div>
                            <div className="zenith">
                                <span>Zenith</span>
                                <img src={plus} alt="plus" />
                            </div>
                            <div className="east">
                                <span>East</span>
                                <img src={plus} alt="plus" />
                            </div>
                        </div>

                        <div className="extra"></div>
                    </div>
                </div>
            </div>

            {/* Section - 3 */}
            <div className="sec-3"></div>
        </div>  
    );
}