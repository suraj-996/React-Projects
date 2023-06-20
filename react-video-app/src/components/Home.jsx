import { Box,Container,Heading,Image,Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransForm:"uppercase",
    p:"4",
    size:'4xl'
}
const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container minH={"100vh"} maxW={"container.xl"} p={"16"}>
            <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"}
            >Services</Heading>
            <Stack h="full" p={"4"} alignItems={"center"} direction={['column','row']}>
                <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40','400']} ></Image>
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]}>At Video Hub, we pride ourselves on delivering cutting-edge web development solutions tailored to meet your unique business requirements. Our experienced team of web developers is passionate about crafting exceptional websites that not only impress visitors but also drive results. Whether you need a simple brochure website or a complex e-commerce platform, we have the expertise to bring your vision to life.</Text>
            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel=()=>{
    return <Carousel autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}>
        <Box w="full" h={"100vh"} >
            <Image src={img1}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch The Future</Heading>
        </Box>
        <Box w="full" h={"100vh"} >
            <Image src={img2}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Future is Gaming</Heading>
        </Box>
        <Box w="full" h={"100vh"} >
            <Image src={img3}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Gaming on console</Heading>
        </Box>
        <Box w="full" h={"100vh"} >
            <Image src={img4}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Night life is cool</Heading>
        </Box>
    </Carousel>
}
export default Home
