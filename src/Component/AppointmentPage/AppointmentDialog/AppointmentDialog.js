import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './AppointmentDialog.css'

const AppointmentDialog = (props) => {
    const setOpen = props.SetDialog;
    const open = props.openDialog;
    const AppInfo = props.AppInformation;
    const [Report, SetReport] = useState(null);

    const Value = props.SendDate;
    const ValueYear = Value.getFullYear();
    const ValueMonth = Value.getMonth();
    let ValueDate = Value.getDate();

    let ConfirmValueDate;
    if (ValueDate === 1 || ValueDate === 2 || ValueDate === 3 || ValueDate === 4 || ValueDate === 5 || ValueDate === 6 || ValueDate === 7 || ValueDate === 8 || ValueDate === 9) {
        ConfirmValueDate = "0" + ValueDate;
    } else {
        ConfirmValueDate = ValueDate;
    }
    const DefaultValue = `${ValueYear}-${ValueMonth + 1}-${ConfirmValueDate}`;

    const DisabledDate = new Date();
    const Year = DisabledDate.getFullYear();
    const Month = DisabledDate.getMonth();
    let CurrentDate = DisabledDate.getDate();
    let ConfirmCurrentDate;
    if (CurrentDate === 1 || CurrentDate === 2 || CurrentDate === 3 || CurrentDate === 4 || CurrentDate === 5 || CurrentDate === 6 || CurrentDate === 7 || CurrentDate === 8 || CurrentDate === 9) {
        ConfirmCurrentDate = "0" + CurrentDate;
    } else {
        ConfirmCurrentDate = CurrentDate;
    }
    const DisabledPast = `${Year}-${Month + 1}-${ConfirmCurrentDate}`;

    const handleClose = () => {
      setOpen(false);
    };

    const HandleSubmitForm = (e) => {
        const Time = document.getElementById('time').value;
        const Name = document.getElementById('name').value;
        const Phone = document.getElementById('phone').value;
        const Email = document.getElementById('email').value;
        const AppDate = document.getElementById('date').value;

        const AppInformation = {
            time: Time,
            name: Name,
            phone: Phone,
            email: Email,
            date: AppDate
        };

        fetch("https://taj-doctors-portal.herokuapp.com/appointment", {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(AppInformation)
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById('submitReport').innerText = "Your appointment has been successfully submitted.";
            SetReport({color:"green"})
        })
        .catch(err => {
            document.getElementById('submitReport').innerText = 'Submission failed. Please try again.';
            SetReport({color:"red"})
        })
        e.target.reset();
        e.preventDefault();
    }
    return (
        <>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{AppInfo.title}</DialogTitle>
                    <DialogContent>
                        <form onSubmit={HandleSubmitForm}>
                            <TextField className='appointment_textField' id="time" value={AppInfo.time} variant="outlined" fullWidth disabled/>
                            <TextField className='appointment_textField' id="name" label="Your Name" variant="outlined" type='text' fullWidth required/>
                            <TextField className='appointment_textField' id="phone" label="Phone Number" variant="outlined" type='phone' fullWidth required/>
                            <TextField className='appointment_textField' id="email" label="Email" variant="outlined" type='email' fullWidth required/>
                            <TextField className='appointment_textField' id="date" variant="outlined" type='date' defaultValue={DefaultValue} InputProps={{inputProps: { min: DisabledPast} }} fullWidth required/>
                            <p id="submitReport" style={Report}></p>
                            <div className="d-flex justify-content-between">
                                <button onClick={handleClose} className="appointment_textFiled_cancel_btn">Cancel</button>
                                <input type='submit' value='Submit' className="appointment_textFiled_send_btn" />
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default AppointmentDialog;