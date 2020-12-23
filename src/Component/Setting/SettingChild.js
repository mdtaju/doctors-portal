import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import firebaseConfig from '../../FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import './SettingChild.css';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} 

const SettingChild = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    const [progress, setProgress] = useState(0);
    const [UserHere, loading, error] = useAuthState(firebase.auth());
    const [UserInfo, setUserInfo] = useState(UserHere && {
        name: UserHere.displayName,
        email: UserHere.email,
        password: null
    });

    const HandleImage = e => {
        const file = document.getElementById("userImage").files;
        if (file.length > 0) {
            const fileReader = new FileReader();
 
            fileReader.onload = function (event) {
                document.getElementById("previewImage").setAttribute("src", event.target.result);
            };
 
            fileReader.readAsDataURL(file[0]);
        }

        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };

    const ConfirmImageHandle = () => {
        const storage = firebase.storage()
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                document.getElementById('setting_user_image').innerText = error.message;
                document.getElementById('setting_user_image').style.color = 'red';
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(URL => {
                    setUrl(URL);
                    firebase.auth().currentUser.updateProfile({
                        photoURL: URL
                    }).then(function() {
                        document.getElementById('setting_user_image').innerText = 'Successfully uploaded your Image';
                        document.getElementById('setting_user_image').style.color = 'green';
                    })
                    .catch(function(error) {
                        document.getElementById('setting_user_image').innerText = error.message;
                        document.getElementById('setting_user_image').style.color = 'red';
                    });
                    
                });
            }
        );
    }

    const HandleUserInfo = (e) => {
        const GetUser = {
            ...UserInfo
        }
        GetUser[e.target.name] = e.target.value;
        setUserInfo(GetUser);
    }

    const settingInputsSubmit = (e) => {
        
        firebase.auth().currentUser.updateEmail(UserInfo.email).then(function() {
            firebase.auth().currentUser.updateProfile({
                displayName: UserInfo.name
            }).then(function() {
                if (UserInfo.password !== null) {
                    firebase.auth().currentUser.updatePassword(UserInfo.password).then(function() {
                        document.getElementById('setting_update_profile_message').innerText = 'Successfully update your profile';
                        document.getElementById('setting_update_profile_message').style.color = 'green'
                    }).catch(function(error) {
                        document.getElementById('setting_update_profile_message').innerText = error.message;
                        document.getElementById('setting_update_profile_message').style.color = 'red'
                    });
                }
                document.getElementById('setting_update_profile_message').innerText = 'Successfully update your profile';
                document.getElementById('setting_update_profile_message').style.color = 'green'
            }).catch(function(error) {
                document.getElementById('setting_update_profile_message').innerText = error.message;
                document.getElementById('setting_update_profile_message').style.color = 'red'
            })
        }).catch(function(error) {
        document.getElementById('setting_update_profile_message').innerText = error.message;
        document.getElementById('setting_update_profile_message').style.color = 'red'
        });
        
        e.preventDefault()
    }
    const UserPhoto = UserHere && UserHere.photoURL;
    const UserPhotoURL = url && url;
    return (
        <>
            {
                loading === undefined || loading === true ? 
                <p style={{color:'green', textAlign:'center'}}>Data is loading. Please wait...</p> : 
                <>
                    <div className="setting_Image_main_aria">
                        <div className="user_image">
                            <img id='previewImage' src={ UserPhotoURL || UserPhoto || "https://via.placeholder.com/600/92c952"} alt="User_image"/>
                        </div>
                        <div className='setting_user_image_progress'>
                            <div  className='image_progress'>
                                <progress value={progress} max="100" min='5'/>
                            </div>
                            <p id='setting_user_image'></p>
                        </div>
                        <div className='image_input_main_aria'>
                            <input type="file" name="userImage" id="userImage" onChange={HandleImage} className='setting_user_image' accept='image/*'/>
                            <label htmlFor="userImage" className='label_user_image'>
                                <AddPhotoAlternateIcon />&nbsp;Choose a Photo
                            </label>
                            <button onClick={ConfirmImageHandle} className='setting_image_confirm'>Click to Confirm</button>
                        </div>
                    </div>
                    <div className="setting_input_main_container">
                        <form onSubmit={settingInputsSubmit}>
                            <div className="setting_input_main_aria">
                                <div className="setting_input">
                                    <label htmlFor="setting_user_name">Reset your Name</label>
                                    <input type="text" id='setting_user_name' className="setting_user_info_input" onBlur={HandleUserInfo} name='name' placeholder={UserHere && UserHere.displayName}/>
                                </div>
                                <p>Your name may appear around Doctors-Portal where you contribute or are mentioned. You can remove it at any time.</p>
                            </div>
                            <div className="setting_input_main_aria">
                                <div className="setting_input">
                                    <label htmlFor="setting_user_email">Reset Email</label>
                                    <input type="email" id='setting_user_email' className="setting_user_info_input" onBlur={HandleUserInfo} name='email' placeholder={UserHere && UserHere.email}/>
                                </div>
                                <p>You can change your email address if you want. In the future, we may send messages to your email address.</p>
                            </div>
                            <div className="setting_input_main_aria">
                                <div className="setting_input">
                                    <label htmlFor="setting_user_password">Reset Password</label>
                                    <input type="password" id='setting_user_password' className="setting_user_info_input" onBlur={HandleUserInfo} name='password' placeholder='******'/>
                                </div>
                                <p>You can change your password address if you want. The password will be minimum 6 character.</p>
                            </div>
                            <div className="setting_input_main_aria">
                                <div className="setting_input">
                                    <label htmlFor="setting_user_uid">UID</label>
                                    <input type="text" id='setting_user_uid' className="setting_user_info_input" value={UserHere && UserHere.uid} disabled/>
                                </div>
                                <p>This is your unique UID. You can't change it.</p>
                            </div>
                            <p id='setting_update_profile_message'></p>
                            <input type="submit" className='setting_update_btn' value="Update Profile"/>
                        </form>
                    </div>
                </>
            }
            {
                error !== undefined && <p style={{color:'red', textAlign:'center'}}>{error.message}</p>
            }
        </>
    );
    
};

export default SettingChild;