import React from "react";
import { useNavigate } from "react-router-dom";

import { Column, Row, Img, Text, Line, Stack, List, Button } from "components";

const Home1Page = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const serviceList = require("../../constants/services");

  var state = {};

  
  Object.keys(serviceList.url).map((key)=>{
    state[key] = false;
  });

  const navigate = useNavigate();

  function handleChange(k){
    state[k] = !state[k];
  }

  function handleNavigate(){
    navigate("/dashboardselling", { state });
  }
  return (
    <>
      <Column className="bg-gradient  font-salsa mx-[auto] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] w-[100%]">
        <Column className="items-center mx-[auto] w-[98%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 items-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius24 shadow-bs w-[100%]">
              <Img
                src="images/logo.jpeg"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[3%]"
                alt="Group196"
              />
              <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-blue_900 tracking-ls1 w-[auto]">
                DhiWise
              </Text>
              <Line className="bg-bluegray_100 lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[1px]" />
              <Text className="font-normal lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] not-italic lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-blue_900 tracking-ls1 w-[auto]">
                Dashboard
              </Text>
              <Stack className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[493px] xl:ml-[564px] 2xl:ml-[635px] 3xl:ml-[762px] w-[22%]">
                <Img
                  src="images/img_frame11.png"
                  className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[35%] my-[auto] rounded-radius12 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                  alt="Frame11"
                />
                <Row className="absolute items-center w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 tracking-ls1 w-[auto]">
                    19 Jul, 2022
                  </Text>
                  <Img
                    src="images/img_ellipse31.png"
                    className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] rounded-radius50 lg:w-[40px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[62px]"
                    alt="Ellipse31"
                  />
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Ashutosh
                  </Text>
                </Row>
              </Stack>
            </Row>
          </header>
        </Column>
        <Row className="lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[64%]">
          <Line className="bg-gray_300 h-[1.02px] lg:mt-[255px] xl:mt-[291px] 2xl:mt-[328px] 3xl:mt-[393px] w-[16%]" />
          <Column className="bg-white_A700 border-2 border-gray_200 border-solid justify-center lg:ml-[222px] xl:ml-[254px] 2xl:ml-[286px] 3xl:ml-[343px] lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] rounded-radius2037 w-[52%]">
            <Text className="font-normal lg:mr-[206px] xl:mr-[235px] 2xl:mr-[265px] 3xl:mr-[318px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
              Top Services
            </Text>
            <Column className="lg:mb-[17px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] w-[89%]">
              
            <List
              className="gap-[0] min-h-[auto] w-[80%]"
              orientation="vertical"
            >
              {Object.keys(serviceList.image).map((service)=>{
                return(
              <Row className="items-start justify-start lg:my-[13px] xl:my-[15px] my-[17.55px] 2xl:my-[17px] 3xl:my-[21px] w-[100%]">
               <input type="checkbox" className="lg:my-[20px]"
               onChange={handleChange.bind(null,service)}
                />
                <Img
                  src={serviceList.image[service]}
                  className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] object-contain w-[22%]"
                  alt=""
                />
                <Text className="font-normal lg:mb-[30px] xl:mb-[34px] mb-[39px] 3xl:mb-[46px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 tracking-ls1 w-[auto]">
                  {service}
                </Text>
              </Row>
                )
              })}
              
            </List>
            <Button className="font-medium font-roboto xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[98px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[61%]" onClick={handleNavigate}>
                Add To Watch
              </Button>
            </Column>
          </Column>
        </Row>
      </Column>

      <footer className="text-center">
        Made with ❤️ using DhiWise
        </footer>
    </>
  );
};

export default Home1Page;
