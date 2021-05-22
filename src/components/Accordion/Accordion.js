import React from 'react';
import './Accordion.css';
import faqData from "../../json/faqs.json";
import AccordionData from "./AccordionData";
import { Form } from "..";

function Accordion() {
    return (
        <div className="accordion">
           <div className="accordion__wrapper">
                <h1 className="accordion__title">Frequenly Asked Question</h1>
                <div className="accordion__content">
                    {faqData.map((item) => (
                        <div className="accordion__item" key={item.id}>
                            <AccordionData item={item} />
                        </div>
                    ))}
                </div>
           </div>
           <Form /> 
        </div>
    )
}

export default Accordion
