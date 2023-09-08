import React, { useState, useEffect } from "react";
import LaptopProduct from "./LaptopProduct";
import PhoneProduct from "./PhoneProduct";
import { ProductsWrapper } from "./style";
import TabletProduct from "./TabletProduct";
// import { getListProduct } from "./../../../services";
// import Loading from './../../../Components/Common/Loading';
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectListProduct } from "./../selectors";
import { getListProductHome } from "./../actions";
import Loading from "../../../Components/Common/Loading";

const Products = () => {
  // const [listProduct, setListProduct] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const listProduct = [
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro3.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro3.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro3.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro3.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro3.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro3.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro3.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  //     {
  //         id: uuidv4(),
  //         image: '/assets/images/pro2.jpg',
  //         title: 'Iphone 13 ProMax 512GB',
  //         cost: '11.990.000đ',
  //         info: 'Apple A15 Bionic 6.1inch',
  //         memory: '64GB 128GB',
  //         buy: 'Mua ngay',
  //         addcart: 'Giỏ hàng'
  //     },
  // ]
  // useEffect(() => {
  //   const initData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await getListProduct(`http://localhost:5001/home`);
  //       const { data, status } = response;
  //       // console.log("res", response);
  //       console.log(data)
  //       if (status === 200) {
  //         setIsLoading(false);
  //         setListProduct(data.products);
  //       } else {
  //         setIsLoading(false);
  //       }
  //     } catch (error) {
  //       setIsLoading(false);
  //     }
  //   };
  //   initData();
  // }, []);
  // if (isLoading) return <Loading />
  useEffect(() => {
    // dispatch action get list country trong component didmount
    dispatch(getListProductHome(listProduct));
    console.log("Prodcut===", listProduct);
  }, []);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const listProduct = useSelector(selectListProduct);
  console.log("ListProductHome", listProduct);
  if (isLoading) return <Loading />;
  if (listProduct.length) return <h1>empty....</h1>;
  return (
    <ProductsWrapper>
      <PhoneProduct listProduct={listProduct}></PhoneProduct>
      <LaptopProduct listProduct={listProduct}></LaptopProduct>
      <TabletProduct listProduct={listProduct}></TabletProduct>
    </ProductsWrapper>
  );
};

export default Products;
