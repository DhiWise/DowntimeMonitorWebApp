import React from "react";
import { useNavigate } from "react-router-dom";

import { Column, Row, Image, Text, Line, Input, Stack, List, Button, CheckBox } from "components";

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
      <Column className="bg-gradient  font-productsans items-start justify-start mx-[auto] lg:pb-[37px] xl:pb-[42px] pb-[48px] 3xl:pb-[57px] lg:pl-[38px] xl:pl-[44px] pl-[50px] 3xl:pl-[60px] lg:pt-[26px] xl:pt-[30px] pt-[34px] 3xl:pt-[40px] w-[100%]">
        <Column className="items-center lg:mr-[38px] xl:mr-[44px] mr-[50px] 3xl:mr-[60px] w-[96%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 items-center justify-start lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[13px] xl:py-[15px] py-[17px] 3xl:py-[20px] rounded-radius24 shadow-bs w-[100%]">
              <Image
                src={"images/logo.jpeg"}
                className="lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] xl:mb-[2px] lg:mb-[2px] mb-[3px] xl:mt-[3px] lg:mt-[3px] mt-[4px] object-contain w-[3%]"
                alt="Group196"
              />
              <Text className="font-bold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-[21px] xl:text-[25px] text-[28.19px] 2xl:text-[28px] 3xl:text-[33px] text-blue_900 tracking-ls1 w-[auto]">
                <span className="text-blue_900 font-productsans font-normal">
                  DhiWise
                </span>
              </Text>
              <Line className="bg-bluegray_100 h-[1px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] rotate-[-90deg] w-[1px]" />
              <Text className="font-bold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-[21px] xl:text-[25px] text-[28.19px] 2xl:text-[28px] 3xl:text-[33px] text-blue_900 tracking-ls1 w-[auto]">
                Dashboard
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="bg-transparent border-0 font-normal p-[0] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 tracking-ls1 w-[100%]"
                WrapClassName="3xl:ml-[34px] 3xl:pb-[15px] 3xl:pl-[9px] 3xl:pr-[26px] 3xl:pt-[16px] bg-white_A700 border border-gray_200 border-solid flex lg:ml-[22px] lg:my-[3px] lg:pl-[6px] lg:pr-[17px] lg:py-[10px] ml-[29px] my-[4px] pb-[13px] pl-[8px] pr-[22px] pt-[14px] rounded-radius12 w-[23%] xl:ml-[25px] xl:my-[3px] xl:pb-[11px] xl:pl-[7px] xl:pr-[19px] xl:pt-[12px]"
                name="Group210"
                placeholder="Search"
                prefix={
                  <Image
                    src={"images/img_search_1.png"}
                    className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                    alt="search 1"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <Image
                      onClick={() => setInputvalue("")}
                      src={"images/close.svg"}
                      className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                      alt="Vector"
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <Stack className="lg:h-[41px] xl:h-[47px] h-[52px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[233px] xl:ml-[266px] ml-[300px] 3xl:ml-[360px] w-[23%]">
                <Image
                  src={"images/img_frame11.png"}
                  className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[33%] my-[auto] object-contain rounded-radius12 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                  alt="Frame11"
                />
                <Row className="absolute items-center justify-start w-[100%]">
                  <Text className="cursor-pointer hover:font-normal font-normal lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 tracking-ls1 w-[auto]">
                    {new Date().toLocaleDateString()}
                  </Text>
                  <Image
                    src={"images/img_ellipse31.png"}
                    className="lg:h-[41px] xl:h-[47px] h-[52px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[60px] xl:ml-[69px] ml-[78px] 3xl:ml-[93px] object-contain rounded-radius50 w-[auto]"
                    alt="Ellipse31"
                  />
                  <Text className="cursor-pointer font-bold hover:font-normal lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 hover:text-gray_500 tracking-ls1 w-[auto]">
                    Ashutosh
                  </Text>
                </Row>
              </Stack>
            </Row>
          </header>
        </Column>
        <Row className="items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] w-[64%]">
          <Line className="bg-gray_300 h-[1.02px] lg:mb-[376px] xl:mb-[430px] mb-[484px] 3xl:mb-[581px] lg:mt-[255px] xl:mt-[291px] mt-[328px] 3xl:mt-[393px] w-[16%]" />
          <Column className="bg-white_A700 border-2 border-gray_200 border-solid items-start justify-start lg:ml-[222px] xl:ml-[254px] ml-[286px] 3xl:ml-[343px] lg:pb-[120px] xl:pb-[137px] pb-[155px] 3xl:pb-[186px] lg:pl-[35px] xl:pl-[40px] pl-[45px] 3xl:pl-[54px] lg:pt-[50px] xl:pt-[57px] pt-[65px] 3xl:pt-[78px] rounded-radius2037 w-[52%]">
            <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
              Top Services
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] w-[80%]"
              orientation="vertical"
            >
              {Object.keys(serviceList.image).map((service)=>{
                return(
              <Row className="items-start justify-start lg:my-[13px] xl:my-[15px] my-[17.55px] 2xl:my-[17px] 3xl:my-[21px] w-[100%]">
               <input type="checkbox" className="lg:my-[20px]"
               onChange={handleChange.bind(null,service)}
                />
                <Image
                  src={serviceList.image[service]}
                  className="lg:h-[55px] xl:h-[63px] h-[70px] 2xl:h-[71px] 3xl:h-[85px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] object-contain w-[22%]"
                  alt="emojioneflagf"
                />
                <Text className="font-normal lg:mb-[30px] xl:mb-[34px] mb-[39px] 3xl:mb-[46px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 tracking-ls1 w-[auto]">
                  {service}
                </Text>
              </Row>
                )
              })}
              
            </List>
            <Button className="bg-gray_700 p-[10px] font-normal lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:ml-[166px] xl:ml-[190px] ml-[214px] 3xl:ml-[256px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]" onClick={handleNavigate}>Add To Watch</Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default Home1Page;
