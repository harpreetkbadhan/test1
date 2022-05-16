import React, { useContext,useEffect,useState } from 'react';
import dynamic from 'next/dynamic';
import Drawer from 'rc-drawer';

import Category from '@component/category/Category';
import { SidebarContext } from '@context/SidebarContext';
import e from 'cors';

const CategoryDrawer = ({categories}) => {
  const { categoryDrawerOpen, closeCategoryDrawer } =
    useContext(SidebarContext);
    const [data,setData]=useState([]);
  
  
    useEffect(() => {

      //console.log("-00-0-0-0-0-0-0-0-0-0-0-0-0-0-0-")
      console.log(categories)
   
      
      
    }), [];
    
    
  return (
    <Drawer
      open={categoryDrawerOpen}
      onClose={closeCategoryDrawer}
      parent={null}
      level={null}
      placement={'left'}
    >
    {!(categories===undefined)?( <Category categories={categories}/>):(<div>text</div>)}
    
    </Drawer>
  );
};
export default dynamic(() => Promise.resolve(CategoryDrawer), { ssr: false });
