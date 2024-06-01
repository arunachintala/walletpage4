
import React, { useState } from 'react';
import './Page1.css';
import RadioButton from '../RadioButtonGroup/RadioButton'
import group from '../Pages/Vector (1).svg'

function Page1() {
    const [amount, setAmount] = useState('Enter amount');

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '50%' }}>
            <div style={{ marginTop: '42px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '100%' }}>
                <p style={{
                    color: '#4C7A34',
                    fontWeight: 600,
                    fontSize: '32px',
                    lineHeight: '48px',
                    marginLeft: '5%'
                }}>
                    220$
                </p>
                <p style={{
                    color: '#5F5A6B',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '27px',
                    marginLeft: '5%'
                }}>
                    Available Balance
                </p>


                <p style={{
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '27px',
                    color: '#121114',
                    marginTop: '42px',
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>
                    Add money to wallet
                </p>
                <p style={{
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '30px',
                    gap: '4px',
                    color: '#5F5A6B',
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>
                    Enter amount
                </p>
                <div style={{
                    display: 'flex', flexDirection: 'row',
                }}>
                    <input
                        style={{
                            backgroundColor: 'white',
                            color: '#D9D9D9',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '21px',
                            width: '40%',
                            height: '40px',
                            borderRadius: '6px',
                            border: '1px solid #D2D1D6',
                            paddingLeft: '10px',


                        }}
                        type="text"
                        value={amount}
                        placeholder='Enter amount'
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                    <p style={{ marginLeft: '10px', color: '#B6B2BD', fontWeight: '500', fontSize: '14px', lineHeight: '21px', marginTop: '10px' }}>$</p>
                </div>

                <div style={{
                    border: '1px solid #D9D9D9',
                    borderRadius: '6px',
                    width: '100%',
                    height: '139px',
                    display: 'flex', flexDirection: 'column',
                    paddingLeft: '18px',
                    marginTop: '24px',

                }}>
                    <p style={{
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#121114',
                        marginTop: '18px',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                        Transfer mode
                    </p>
                    <hr style={{
                        border: '1px solid #D9D9D9',
                        width: '95%',

                    }} />
                    <RadioButton />
                </div>
                <div style={{

                    height: '278px',
                    width: '40%px',
                    marginTop: '24px',
                    border: '1px solid #D9D9D9',
                    borderRadius: '6px',
                    paddingTop: '12%',
                }}>
                    <img src={group} alt='nologo'></img>
                    <p style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '18px', lineHeight: '26.64px', color: '#121114' }}>Wallet recharge failed</p>
                    <p style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '12px', lineHeight: '20.52px', color: '#121114', textAlign: 'center' }}>Wallet recharge for amount XX  $ was unsuccessful. Please try again after sometime.</p>
                </div>
                <p style={{
                    fontWeight: 400,
                    lineHeight: '18px',
                    fontSize: '12px',
                    fontFamily: 'Poppins',
                    marginTop: '14px',
                    marginBottom: '14px',
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}>
                    Powered by Stripe
                </p>
                <button style={{
                    color: '#FFFFFF',
                    width: '240px',
                    height: '40px',
                    borderRadius: '6px',
                    padding: '10px',
                    gap: '10px',
                    fontFamily: 'Poppins',
                    background: '#D54029',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px',
                    border: '1px solid white',

                }}>
                    Pay
                </button>

            </div>
            <div style={{ paddingLeft: '30px', paddingTop: '114px' }}><hr style={{
                height: '633px',
                border: '1px solid #D9D9D9',
                width: '1px',
            }} />

            </div>
        </div>

    )
}

export default Page1;