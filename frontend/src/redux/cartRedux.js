import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify"
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    decreasecart:(state,action)=>{
         const itemIndex = state.products.findIndex(
           (product)=>product._id === action.payload._id
         );
         if(state.products[itemIndex].quantity>1){
           state.products[itemIndex].quantity-=1;
           toast.info("decreae product quantity",{
             position:"bottom-left",
           });
           }
           else if(state.products[itemIndex].quantity ===1){
             const nextitems = state.products.filter(
               (product)=>product._id !== action.payload._id
             );
             state.products= nextitems;
             toast.error("product remove from cart",{
               position:"bottom-left",
             });
           }
           localStorage.setItem("products" , JSON.stringify(state.products));
    },
    increasecart:(state,action)=>{
      const itemIndex = state.products.findIndex(
        (product)=>product._id === action.payload._id
      );
      if(state.products[itemIndex].quantity>0){
        state.products[itemIndex].quantity+=1;
        toast.info("increase product quantity",{
          position:"bottom-left",
        });
        }
        else if(state.products[itemIndex].quantity >=0){
          const nextitems = state.products.filter(
            (product)=>product._id !== action.payload._id
          );
          state.products= nextitems;
          toast.error("product remove from cart",{
            position:"bottom-left",
          });
        }
        localStorage.setItem("products" , JSON.stringify(state.products));
 },
    removeproduct:(state,action)=>{
      state.products.map((products)=>{
        if(products._id === action.payload._id  ){
          const nextcartItem= state.products.filter(
            (products)=>products._id !==action.payload._id)
            state.products = nextcartItem;
            toast.error("product remove from cart",{
              position:"bottom-left"
            })
        }
        localStorage.setItem("products",JSON.stringify(state.products));
        return state;
      }) ;
     },
         getTotal:(state,action)=>{
           let {total,quantity} = state.products.reduce(
             (Total , product)=>{
               const {price , quantity} = product;
               const itemTotal = price*quantity;
               Total.total +=itemTotal;
               Total.quantity +=quantity;
               return Total; 
             },
             {
               total:0,
               quantity:0,
             }
           );
           total = parseFloat(total.toFixed(2));
           state.quantity = quantity;
           state.total = total;
         },
         clearCart:(state,action)=>{
           state.products= [];
           localStorage.setItem("products",JSON.stringify(state.products));
           toast.error("cart clear",{position :"bottom-left"});
         }     
  },
});

export const { addProduct ,decreasecart,getTotal, clearCart,  increasecart, removeproduct} = cartSlice.actions;
export default cartSlice.reducer;