// Notification.js
import React from 'react';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';

// const Notification = () => {
//     const dispatch = useDispatch();
//     const notification = useSelector(state => state.ui.notification);
//     console.log(notification);
//     const handleClose = () => {
//         dispatch(uiActions.showNotification({ open: false }));
//     };

//     return (
//         <div>
//             {notification.open && (
//                 <Alert onClose={handleClose} severity={notification.type}>
//                     {notification.message}
//                 </Alert>
//             )}
//         </div>
//     );
// };
const Notification = () => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification);
    console.log(notification); // Log the notification state here

    const handleClose = () => {
        dispatch(uiActions.showNotification({ open: true }));
    };

    return (
        <div>
            {notification.open && (
                <Alert onClose={handleClose} severity={notification.type}>
                    {notification.message}
                </Alert>
            )}
        </div>
    );
};


export default Notification;
