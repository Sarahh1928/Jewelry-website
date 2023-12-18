import styled from "styled-components"
import {necklaces} from "../data"
import Product from './Product';
const Container={
    padding:"20px",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-between",
}

const Necks = () => {
  return (
    <div style={Container}>
        {necklaces.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </div>
  );
}

export default Necks;