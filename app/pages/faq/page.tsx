'use client';

import React, { useState } from 'react';
import FAQ from "@/app/components/faq/FAQ";

const FAQs = () => {
    const [faqs, setFaqs] = useState([
        { 
        question: 'How do I Register for a Trek?', 
        answer: (
        <>
        <b style={{ fontFamily: 'Poppins, sans-serif' }}>Our registration process is entirely an online process. You'll be able to complete it in a few simple steps:</b><br></br>
        ● Head to the upcoming treks page and choose a trek.<br/>
        ● Click on View Dates/Register and select a date of your choice. Then click on register.<br/>
        ● Go through the eligibility criteria and terms and conditions. (Don’t ignore this step) <br/>
        ● Fill out the form that appears with all the details. <br/>
        ● Make the payment online.<br/>
        </>
        )
    },
    { 
        question: 'Can I Register for waitlists on Multiple Treks at once?', 
        answer: (
        <>
        <b style={{ fontFamily: 'Poppins, sans-serif' }}>
        You can register for waitlist slots on more than one trek or group. 
        However, the dates for which you are registering mustn't overlap. 
        Our system will not allow you to register if the dates overlap.</b><br></br>
        </>
        )
    },
    { 
        question: 'What all is Included is in trek fees?', 
        answer: (
            <>
            <b style={{ fontFamily: 'Poppins, sans-serif' }}>Each trek is unique and may include different things in the trek fee. You can find out exactly what's included in the "What's Included" section on the relevant trek page.<br/><br></br>
            Generally speaking, your trek fee includes all costs while on the trek, including:</b><br></br>
            ● Accommodation (e.g. tents and/or lodges) <br/>
            ● All meals (simple, nutritious and vegetarian)<br/>
            ● Expert trek leaders and support team<br/>
            ● Trekking and safety equipment<br/>
            ● All permits and camping charges<br/><br/>
            <b>Your fee usually does not include expenses incurred while getting to and from the base camp or your equipment, such as your backpack, shoes or clothing.</b>
            </>
            )
    },
    { 
        question: 'What all is not Included is in trek fees?', 
        answer: (
            <>
            <b style={{ fontFamily: 'Poppins, sans-serif' }}>
            Your fee usually does not include: </b><br/><br/>
            ● Expenses incurred while getting to and from the base camp like food, transport and accomodation.<br/>
            ● Your equipment, such as your backpack, shoes or clothing.<br/>
            </>
            )
    },
    {
        question: 'My Transaction Failed, What should I do?',
        answer: (
            <>
                <b style={{ fontFamily: 'Poppins, sans-serif' }}>
                    If your transaction has failed, please contact us by mailing us at{' '}
                    <a className="hover:text-red-500" href="mailto:hikehaven13@gmail.com" style={{ color: 'black', textDecoration: 'underline' }}>
                        hikehaven13@gmail.com
                    </a>.
                    We will review the transaction and guide you through the next steps in the next 24 hours.
                </b>
                <br/><br/>
            </>
        )
    }
    
    ]);

    return (
        <div className="mt-[150px]">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: '30px' }}>
                <div>
                    <h2 style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '40px', color: 'black', fontWeight: 'bold' }}>
                        Joining for a Trek with HikeHaven?
                    </h2>
                    <h3 style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '24px', color: 'black', fontStyle: 'italic' }}>
                        If you have doubts or trouble registering for a trek, use this section to troubleshoot your problems.
                    </h3>
                    <hr style={{ border: '3px solid #ccc' }} />
                </div>
                <div>
                    <h2 style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '40px', color: 'black', fontWeight: 'bold' }}>
                    Find information for your trek
                    </h2>
                    <h3 style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '24px', color: 'black', fontStyle: 'italic' }}>
                    One stop to find all the answers before going on your trek & start New Adventures.
                    </h3>
                    <hr style={{ border: '3px solid #ccc' }} />
                </div>
            </div>
            {faqs.map((faq, index) => (
                <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}

export default FAQs;
