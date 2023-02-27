import React, { useContext } from "react";
import { MapContext } from "../../pages/part1";
import legendOptions from "../LegendOptions";
import Box from "../Box";
import Flex from "../Flex";
import Text from "../Text";
import ozone from "../../public/images/part1/ozone.svg";
import eastny from "../../public/images/part1/east_ny_chart.svg";
import harlem from "../../public/images/part1/chart_125th_min.svg";
import ImageExtended from "../../components/ImageExtended";

const Legend = () => {
  const { legendIndex } = useContext(MapContext);
  if (!legendIndex || !legendOptions[legendIndex]) return null;
  return (
    <Box
      className="legendBox"
      position="absolute"
      top="25px"
      left="125px"
      zIndex="50"
      border="1px solid #908E8E"
      borderRadius="10px"
      backgroundColor="white"
      padding="20px 20px 20px 20px"
      maxWidth="350px"
      maxHeight="calc(100% - 50px)"
      overflow="scroll"
    >

      <Text as="p" variant="legendTitle" mt="0px"  mb="10px">
        {legendOptions[legendIndex].name}
      </Text>
      <Text as="p" variant="legendSubTitle" mt="0px" mb="10px">
      {legendOptions[legendIndex].description}
      </Text>
      {/* <Text as="p" variant="legendSubTitle" mt="0px" mb="10px">
      {legendOptions[legendIndex].description2}
      </Text> */}
      {legendOptions[legendIndex].stops?.map(({ text, color, outline }, idx) => {
        return (
          <Flex alignItems="center" key={idx} marginTop="3px" mb="10px" >
            <Box
              height="25px"
              width="25px !important"
              backgroundColor={color}
              border={outline}
              marginRight="10px"
              minWidth="25px"
            ></Box>
            <Text 
            as="p" 
            variant="legendText" 
            m="0px"
            flex="50%"
            >
              {text}
            </Text>
          </Flex>
        );
      })}
      <Text as="p" variant="legendText" mt="10px" mb="10px">
      {legendOptions[legendIndex].subdescription}
      </Text>
      { legendOptions[legendIndex].name  === "Ozone Park, 2013 - 2022" && 
        <ImageExtended src={ ozone } width="340px" marginLeft="-15px"></ImageExtended>
      }
      { legendOptions[legendIndex].name  === "East New York (2016)" && 
        <ImageExtended src={ eastny } width="340px" marginLeft="-15px" mb="-20px" ></ImageExtended>
      }
      { legendOptions[legendIndex].name  === "125 St Case Study (2008)" && 
        <ImageExtended src={ harlem } width="340px" marginLeft="-15px" mb="-20px" ></ImageExtended>
      }
      { legendOptions[legendIndex].section  !== "case_study" && 
        <Text as="p" variant="legendSubText" mt="10px" mb="0px" >
        Click anywhere in NYC to zoom into a PUMA
      </Text>
      }
    </Box>
  );
};

export default Legend;
