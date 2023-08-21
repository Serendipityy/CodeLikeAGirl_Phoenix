// // something to type in location bar, then navigate map to center in that
// import React, { useState } from "react";
// import Input from '@mui/material/Input';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// //import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// //import InboxIcon from '@mui/icons-material/Inbox';
// //import DraftsIcon from '@mui/icons-material/Drafts';


// const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?"
// // const params = {
// //   q: '',
// //   format: '.json',
// //   addressdetails: 'addressdetails' 
// // };



// export default function SearchBox(props) {

//     const {selectPosition, setSelectPosition} = props;
//     const [searchText, setSearchText] = useState("");
//     const [listPlace, setListPlace] = useState([]);

//     return (

//         <div>
//             <div>
//                 <Input
//                     value={searchText}
//                     onChange={(event) => {
//                         setSearchText(event.target.value);
//                     }}
//                 />
//             </div>
//             <div>
//                 <Button variant="contained" color="primary" onClick={() => {
//                     //search
//                     const params = {
//                         q: searchText,
//                         format: 'json',
//                         addressdetails: 1,
//                         polygon_geojson: 1
//                     };
//                     const queryString = new URLSearchParams(params).toString();
//                     const requestOptions = {
//                         method: "GET",
//                         redirect: "follow"
//                     };
//                     fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
//                         .then((response) => response.text())
//                         .then((result) => {
//                             console.log(JSON.parse(result));
//                             setListPlace(JSON.parse(result));
//                         })
//                         .catch((err) => console.log("err: ", err))

//                 }}>
//                     Search
//                 </Button>
//             </div>
//             <List component="nav" aria-label="main mailbox folders">
//           {listPlace.map((item) => {
//             return (
//               <div key={item?.place_id}>
//                 <ListItem
//                   button
//                    onClick={() => {
//                      setSelectPosition(item);
//                    }}
//                 >
//                   <ListItemText primary={item?.display_name} />
//                 </ListItem>
//                 <Divider />
//               </div>
//             );
//           })}
//         </List>
//         </div>


//     );
// }