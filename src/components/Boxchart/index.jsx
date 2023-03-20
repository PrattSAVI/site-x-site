
import Box from "../Box";
import Flex from "../Flex";
import Text from "../Text";
import legendOptions from "../LegendOptions";
import barchart from "../../public/images/part1/size_far_barchart.svg";
import ImageExtended from "../../components/ImageExtended";

const BoxChart = () => {
    return (

      <Box
      className="legendBox"
      position="absolute"
      top="0"
      left="0"
      width="75%"
      height="100%"
      zIndex="1002"
      overflow="scroll"
      backgroundColor="#FDFCF6"
    >
      <ImageExtended 
        src={barchart} 
        position="relative"
        width="calc(100% - 60px) !important"
        ml="60px"
        className="barchart_img"
      ></ImageExtended>
    </Box>
    );
  };


export default BoxChart;