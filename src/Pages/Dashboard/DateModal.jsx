import React from 'react';
import { DayPicker } from 'react-day-picker';

const DateModal = ({ selected, setSelected }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="date-modal" className="modal-toggle" />
            <label htmlFor="date-modal" className="modal cursor-pointer">
                <label className="modal-box relative w-max" htmlFor="">
                    <DayPicker
                        mode='single'
                        onSelect={setSelected}
                        selected={selected}
                    />
                </label>
            </label>
        </div>
    );
};

export default DateModal;