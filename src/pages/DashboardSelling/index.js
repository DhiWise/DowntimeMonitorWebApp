import React from "react";
import { useNavigate } from "react-router-dom";
import { postBAasAItLazrUlP2GZvhmDlSV } from "service/api";
import { Column, Row, Img, Text, Line, Stack, Button } from "components";
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
      <Column className="bg-gradient  font-salsa items-center mx-[auto] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] w-[100%]">
        <header className="w-[98%]">
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
                src="images/img_frame11_1.png"
                className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[0] left-[35%] my-[auto] rounded-radius12 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                alt="Frame11"
              />
              <Row className="absolute items-center w-[100%]">
                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 tracking-ls1 w-[auto]">
                  19 Jul, 2022
                </Text>
                <Img
                  src="images/img_ellipse31_1.png"
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
        <Column className="bg-white_A700 border-2 border-gray_200 border-solid lg:mb-[190px] xl:mb-[217px] 2xl:mb-[245px] 3xl:mb-[294px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:pr-[28px] xl:pr-[32px] 2xl:pr-[37px] 3xl:pr-[44px] lg:py-[28px] xl:py-[32px] 2xl:py-[37px] 3xl:py-[44px] rounded-radius2037 w-[97%]">
          <Column className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[97%]">
            <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
              Service List
              <br />
            </Text>
            <Row className="items-center lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[65%]">
              <Text className="font-normal mb-[0] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 tracking-ls1 w-[400px]">
                Service Name
              </Text>
              <Text className="font-normal lg:ml-[529px] xl:ml-[605px] 2xl:ml-[681px] 3xl:ml-[817px] mt-[0] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 tracking-ls1 w-[100px]">
                Status
              </Text>
            </Row>
            <Line className="bg-gray_201 h-[1px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
            {Object.keys(location.state).map((service) => {
                if (location.state[service]) {
                  return (
                    <Row className="items-center justify-start lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[1500px]">
                      <Img
                        src={serviceList.image[service]}
                        className="lg:h-[49px] xl:h-[56px] h-[62px] 2xl:h-[63px] 3xl:h-[75px] object-contain lg:w-[48px] xl:w-[55px] w-[62px] 3xl:w-[74px]"
                        alt="image7"
                      />
                      <Text className="font-normal content-end lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[100px]">
                        {service}
                      </Text>
                      <Text className="font-normal content-end lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:ml-[189px] xl:ml-[217px] ml-[244px] 3xl:ml-[292px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      </Text>
                        {checkStatus(service)}
                        <a href={serviceList.redirectUrl[service]} className="bg-gray_700 p-[10px] font-normal lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:ml-[166px] xl:ml-[190px] ml-[214px] 3xl:ml-[256px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[400px]">
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

      <footer className="text-center">
        Made with ❤️ using DhiWise
        </footer>
    </>
  );
};

export default DashboardSellingPage;
