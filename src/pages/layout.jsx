import { HStack, Box, Button, Input, Stack, InputGroup, InputLeftElement, InputLeftAddon } from "@chakra-ui/react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
    const [searchText, setsearchText] = useState('')
  return (
   
    <Box p="2">
{/*         
        <input type='text' onChange={(e) => setsearchText(e.target.value)}/>
        
        <Button as={Link} to={`search?${searchText}`} >Search</Button> */}
         
         <Stack>
            <InputGroup width='20%' left="40" top='35'>
            <InputLeftAddon as={Link} to={`search?${searchText}`} >Search</InputLeftAddon>
            <Input type='text' onChange={(e) => setsearchText(e.target.value)} />
            
                
            </InputGroup>
         </Stack>

      <HStack 
        justify="left">
        <NavLink to="/">
          {({ isActive }) => (
            <Box
              p="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "red.500" : "blue.500"}
            >
              Home
            </Box>
          )}
        </NavLink>
      </HStack>
      <Outlet />
    </Box>
  );
}
