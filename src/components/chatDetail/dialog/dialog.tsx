import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IoChevronBackSharp } from 'react-icons/io5';
import { MdOutlineAdd } from 'react-icons/md';
import style from "./dialog.module.css"
import BaseUrl from "../../../axios"
import {NavLink} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import writeRecentChats from "../../../firebaseConfig/recenetChat/storeecentChat"
import {useSelector} from "react-redux"

export default function AddUser() {
  const [open, setOpen] = React.useState(false);
  const [usersArr, setUserArr] = React.useState([]);
  const [noUserFound, setNoUserFOund] = React.useState();
  //@ts-ignore
  const loginUser = useSelector((state)=> state.login)
  const goTo = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  //@ts-ignore
  const handleClose = (username) => {
    setOpen(false);
    //@ts-ignore
    goTo(`/Chats/${username}`);

    writeRecentChats(loginUser.username, username);
  };
  //@ts-ignore
  const checkName = (name, str) => {
    var pattern = str
      .split('')
      //@ts-ignore
      .map((x) => {
        return `(?=.*${x})`;
      })
      .join('');
    var regex = new RegExp(`${pattern}`, 'g');
    return name.match(regex);
  };

  const fetchUser = (e: React.FormEvent) => {
    //@ts-ignore
    const userInput = e.target.value.toLowerCase();

    BaseUrl.get('/api/auth/user/list/').then((response) => {
      let arrayOfUsers = response.data;
      //@ts-ignore
      var str = e.target.value.toLowerCase();
      //@ts-ignore
      var filteredArr = arrayOfUsers.filter((x) => {
        var xSub = x.username.toLowerCase();
        return x.username.toLowerCase().includes(str) || checkName(xSub, str);
      });

      if (filteredArr.length > 0) {
        console.log('my-user-alist', filteredArr);
        //@ts-ignore
        setUserArr(filteredArr);
      } else {
        //@ts-ignore
        setNoUserFOund('no results');
      }
    });
  };

  return (
    <div>
      <Button
        className={style.chatAddBtnCon}
        variant='outlined'
        onClick={handleClickOpen}
      >
        <MdOutlineAdd className={style.chatAddBtn}></MdOutlineAdd>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Chats</DialogTitle>
        <DialogContent sx={{ width: '600px',padding:"20px",boxSizing:" border-box" }}>
          <br></br>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Add User'
            type='email'
            fullWidth
            variant='standard'
            onChange={fetchUser}
          />
        </DialogContent>
        <div style={{ width: '100%', height: '300px', overflowY: 'scroll' }}>
          {usersArr.map((eachUser) => {
            return (
              <div
                //@ts-ignore
                // to={`${eachUser.username}`}
                replace={true}
                style={{
                  width: '100%',
                  height: 'auto',
                  backgroundColor: 'white',
                  boxShadow: '0px 0px 2px grey',
                  padding: '10px',
                  display: 'flex',
                  boxSizing: 'border-box',
                  justifyContent: 'center',
                  textDecoration: 'none',
                }}
                //@ts-ignore
                onClick={() => handleClose(eachUser.username)}
              >
                <p>
                  {
                    //@ts-ignore
                    eachUser.username
                  }
                </p>
              </div>
            );
          })}
        </div>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add User</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
