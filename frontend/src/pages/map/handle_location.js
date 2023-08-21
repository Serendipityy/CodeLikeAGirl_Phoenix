// some option to handle several false case, but I have not checked
// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   };


//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }

//   navigator.geolocation.getCurrentPosition(success, error, options);

// something to type in location bar, then navigate map to center in that
import React, { useState } from "react";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Divider } from "@mui/material";


const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?"
// const params = {
//   q: '',
//   format: '.json',
//   addressdetails: 'addressdetails' 
// };


function renderRow(props, item) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={item?.display_name} />
      </ListItemButton>
    </ListItem>
  );
}

export default function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  return (
    
      <div>
        <div>
          <Input 
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
           }}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={() => {
            //search
            const params = {
              q: searchText,
              format: 'json',
              addressdetails: 1,
              polygon_geojson: 1 
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOptions = {
              method: "GET",
              redirect: "follow"
            };
            fetch (`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
              .then((response) => response.text())
              .then((result) => {
                console.log(JSON.parse(result)); 
                setListPlace(JSON.parse(result));
              })
              .catch((err) => console.log("err: ", err)) 

          }}>
            Search
          </Button>
        </div>
        <Box
          sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
          component={"nav"}
        >
          {
            listPlace.map((item) => {
              return (
                <div key= {item?.osm_id}>
                  
                  <FixedSizeList
                    height={400}
                    width={360}
                    itemSize={46}
                    itemCount={10}
                    overscanCount={5}
                 >
                  {renderRow}
                </FixedSizeList>
                  <Divider /> 
                </div>
              );
            })
          }

        </Box>
      </div>
    

  );
}