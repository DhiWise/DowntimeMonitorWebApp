import React from "react";
import { useNavigate } from "react-router-dom";
import { postBAasAItLazrUlP2GZvhmDlSV } from "service/api";
import { Column, Row, Image, Text, Line, Input, Stack, Button } from "components";

import { useLocation } from "react-router";
import { getStatus } from "../../service/api";

const DashboardSellingPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    //callApi();
  }, []);

  function callApi(service) {
    const req = {data:{service}};
    postBAasAItLazrUlP2GZvhmDlSV(req)
      .then((res) => {
        setapiData(res);

      })
      .catch((err) => {
        console.error(err);
      });
  }

  const [inputvalue, setInputvalue] = React.useState("");
  const location = useLocation();
  const serviceList = require("../../constants/services");
  const [statusResp, setstatusResp] = React.useState({});

  const navigate = useNavigate();

  React.useEffect(() => {
    Object.keys(location.state).forEach(async (element) => {
      if (location.state[element]) {
        let res = await getStatus({ url: serviceList.url[element] });
        setstatusResp(prevState => {
          return {
            ...prevState,
            [element]: res
          }
        })
      }
    });
  }, [])

  function errorStatus(service)
  {
    callApi(service);
    return (<Row><div className="bg-red_A700 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">can not get status</Text></Row>);
  }  

  function checkStatus(service) {
    if(service && statusResp[service])
    {
    switch(service){
      case 'Figma':
        if(statusResp[service].status && statusResp[service].status.description)
        {
          return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">{statusResp[service].status.description}</Text></Row>)
        }
        else{
          return errorStatus(service);
        }
        case 'Discord':
        if(statusResp[service].status && statusResp[service].status.description)
        {
          return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">{statusResp[service].status.description}</Text></Row>)
        }
        else{
          return errorStatus(service);
        }
        case 'Postman':
        if(statusResp[service].status && statusResp[service].status.description)
        {
          return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">{statusResp[service].status.description}</Text></Row>)
        }
        else{
          return errorStatus(service);
         }
        case 'Slack':
        if(statusResp[service].status)
        {
          return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">{statusResp[service].status}</Text></Row>)
        }
        else{
          return errorStatus(service);
        }
        case 'Amazon':
        if(!statusResp[service].length)
        {
          return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">ok</Text></Row>)
        }
        else{
          return errorStatus(service);
        }
        case 'ClickUp':
        if(statusResp[service] && statusResp[service].includes("100% Online - All systems operational"))
        {
          return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">All Systems Operational</Text></Row>)
        }
        else{
          return errorStatus(service);
        }
        case 'Keka':
        if(statusResp[service]  && statusResp[service].includes("All services are online"))
        {
          return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">All services are online</Text></Row>)
        }
        else{
          return errorStatus(service);
        }
        case 'Canny':
        if(statusResp[service].status && statusResp[service].status.description)
        {
          return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">{statusResp[service].status.description}</Text></Row>)
        }
        else{
          return errorStatus(service);
        }
        case 'HubSpot':
          if(statusResp[service].status && statusResp[service].status.description)
          {
            return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">{statusResp[service].status.description}</Text></Row>)
          }
          else{
            return errorStatus(service);
          }
          case 'HotJar':
            if(statusResp[service].status && statusResp[service].status.description)
            {
              return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">{statusResp[service].status.description}</Text></Row>)
            }
            else{
          return errorStatus(service);
            }
            case 'MixPanel':
              if(statusResp[service].status && statusResp[service].status.description)
              {
                return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">{statusResp[service].status.description}</Text></Row>)
              }
              else{
          return errorStatus(service);
              }
              case 'HoppScotch':
                if(statusResp[service] && statusResp[service].includes("All services are online"))
        {
                  return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">All services are online</Text></Row>)
                }
                else{
          return errorStatus(service);
                }
                case 'Vercel':
                  if(statusResp[service].status && statusResp[service].status.description)
                  {
                    return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">{statusResp[service].status.description}</Text></Row>)
                  }
                  else{
                    return errorStatus(service);
                  }
                  case 'GitHub':
                    if(statusResp[service].status && statusResp[service].status.description)
                    {
                      return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">{statusResp[service].status.description}</Text></Row>)
                    }
                    else{
                      return errorStatus(service);
                    }
                    case 'GitLab':
                      if(statusResp[service] && statusResp[service].includes("All Systems Operational"))
                      {
                        return (<Row><div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div><Text className="mt-[15px] ml-[15px]">All Systems Operational</Text></Row>)
                      }
                    else{
                      return errorStatus(service);
                    }
        default:
          return errorStatus(service);
        }
  }
}

  return (
    <>
      <Column className="bg-gradient  font-productsans items-center justify-start mx-[auto] lg:pb-[217px] xl:pb-[248px] pb-[279px] 3xl:pb-[334px] lg:pt-[26px] xl:pt-[30px] pt-[34px] 3xl:pt-[40px] lg:px-[38px] xl:px-[44px] px-[50px] 3xl:px-[60px] w-[100%]">
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
                  src={"images/img_search_1_1.png"}
                  className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                  alt="search 1"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <Image
                    onClick={() => setInputvalue("")}
                    src={"images/close1.svg"}
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
                src={"images/img_frame11_1.png"}
                className="absolute lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[33%] my-[auto] object-contain rounded-radius12 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                alt="Frame11"
              />
              <Row className="absolute items-center justify-start w-[100%]">
                <Text className="cursor-pointer hover:font-normal font-normal lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_500 tracking-ls1 w-[auto]">
                  {new Date().toLocaleDateString()}
                </Text>
                <Image
                  src={"images/img_ellipse31_1.png"}
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
        <Column className="bg-white_A700 border-2 border-gray_200 border-solid items-start justify-start lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] lg:pb-[59px] xl:pb-[67px] pb-[76px] 3xl:pb-[91px] lg:pt-[36px] xl:pt-[41px] pt-[47px] 3xl:pt-[56px] rounded-radius2037 w-[99%]">
          <Column className="items-center lg:mr-[28px] xl:mr-[32px] mr-[37px] 3xl:mr-[44px] lg:pl-[33px] xl:pl-[38px] pl-[43px] 3xl:pl-[51px] w-[97%]">
            <Column className="items-start justify-start w-[100%]">
              <Text className="font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                Service List
              </Text>
              <Row className="items-center justify-start lg:mt-[58px] xl:mt-[66px] mt-[75px] 3xl:mt-[90px] w-[86%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 tracking-ls1 w-[auto]">
                  Service
                </Text>
                <Text className="font-normal lg:ml-[352px] xl:ml-[402px] ml-[453px] 3xl:ml-[543px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 tracking-ls1 w-[auto]">
                </Text>
                <Text className="font-normal lg:ml-[158px] xl:ml-[181px] ml-[204px] 3xl:ml-[244px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 tracking-ls1 w-[auto]">
                Status
                </Text>
                <Text className="font-normal lg:ml-[177px] xl:ml-[202px] ml-[228px] 3xl:ml-[273px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-gray_700 tracking-ls1 w-[auto]">
                Detail
                </Text>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] w-[100%]" />

              {Object.keys(location.state).map((service) => {
                if (location.state[service]) {
                  return (
                    <Row className="items-center justify-start lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[90%]">
                      <Image
                        src={serviceList.image[service]}
                        className="lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] object-contain lg:w-[48px] xl:w-[55px] w-[62px] 3xl:w-[74px]"
                        alt="image7"
                      />
                      <Text className="font-normal content-end lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        {service}
                      </Text>
                      <Text className="font-normal content-end lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:ml-[189px] xl:ml-[217px] ml-[244px] 3xl:ml-[292px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      </Text>
                      
                        {checkStatus(service)}
                        <a href={serviceList.redirectUrl[service]} className="bg-gray_700 p-[10px] font-normal lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:ml-[166px] xl:ml-[190px] ml-[214px] 3xl:ml-[256px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        View Detail
                      </a>
                      {/* {
                  return(
                <div className="bg-green_A400 lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[168px] xl:ml-[192px] ml-[216px] 3xl:ml-[259px] lg:my-[17px] xl:my-[20px] my-[23px] 3xl:my-[27px] rounded-radius784 lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"></div>
                <Text className="font-normal lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                  All services are online
                </Text> */}
                    </Row>

                  )
                }
              })}
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DashboardSellingPage;
