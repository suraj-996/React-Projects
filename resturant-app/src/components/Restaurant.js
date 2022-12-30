import React, { useState } from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import "./styles.css"

const uniqueList=[
    ...new Set(
        Menu.map((e)=>{
            return e.category;
        })
    ),
    "All",
];
const Restaurant = () => {
    const [menuData,setMenuData]=useState(Menu);
    const [menuList,setMenuList]=useState(uniqueList);

    const filterItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }

        const updatedList=Menu.filter((e)=>{
            return e.category===category;
        });

        setMenuData(updatedList);
    }
  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant